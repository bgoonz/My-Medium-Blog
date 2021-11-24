(() => {
  const startTime = +new Date();

  const FileSystem = require("fs");
  const Path = require("path");
  const _ = require("underscore");
  const UglifyJS = require("uglify-js");
  const UglifyCSS = require("uglifycss");
  const Less = require("less");
  const Set = require("./Set");

  let debug = false;
  const bundleFile = "./bundle.json";

  process.argv.slice(2).forEach(arg => {
    switch (arg) {
      case "-d":
      case "--debug":
        debug = true;
        break;
      default:
        console.warn(`ignoring unrecognized argument '${arg}'`);
        break;
    }
  });

  function comparePaths(a, b) {
    if (a === b) return 0;
    if (!isLocalPath(a) || !isLocalPath(b)) return 0;
    const p1 = a.split(/[\/\\]+/);
    const p2 = b.split(/[\/\\]+/);
    if (p1.length !== p2.length) {
      return p1.length > p2.length ? -1 : 1;
    }
    const main = /(^|[/\\])(main|index)\.\w+$/;
    if (main.test(a)) {
      if (!main.test(b)) {
        return 1;
      }
    } else if (main.test(b)) {
      return -1;
    }
    return a < b ? -1 : 1;
  }

  function readdirRecursiveSync(baseDir) {
    let results = [];
    const list = FileSystem.readdirSync(baseDir);
    list.forEach(filename => {
      const file = Path.join(baseDir, filename);
      const stat = FileSystem.statSync(file);
      if (stat && stat.isDirectory())
        results = results.concat(readdirRecursiveSync(file));
      else results.push(file);
    });
    return results;
  }

  function isLocalPath(path) {
    return !/^(\w+:)?\/\//.test(path);
  }

  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };

  const staticDir = "./static";
  const staticFiles = new Set(readdirRecursiveSync(staticDir));
  let bundle;

  if (FileSystem.existsSync(bundleFile)) {
    bundle = require(bundleFile);
  } else {
    bundle = {
      scripts: [],
      stylesheets: [],
      ignore: [],
    };
  }

  // remove files that have been deleted/renamed
  ["stylesheets", "scripts"].forEach(i => {
    bundle[i] = bundle[i].filter(f => {
      return !isLocalPath(f) || FileSystem.existsSync(f);
    });
  });

  // remove 'min' files if uncompressed version exists
  staticFiles.each(f => {
    const m = /^(.*)\.min(\.\w+)$/.exec(f);
    if (m !== null && staticFiles.contains(m[1] + m[2])) {
      staticFiles.remove(f);
    }
  });

  // skip files that have already been added
  ["stylesheets", "scripts"].forEach(i => {
    bundle[i].forEach((f, j) => {
      if (isLocalPath(f)) {
        staticFiles.remove(Path.relative(__dirname, f));
      }
    });
  });

  // skip any files that are to be ignored
  bundle.ignore.forEach(patt => {
    const re = new RegExp(patt);
    staticFiles.each(f => {
      if (re.test(f)) {
        staticFiles.remove(f);
      }
    });
  });

  const sortedFiles = staticFiles.toArray().sort(comparePaths);

  sortedFiles.forEach(f => {
    let i = 0;
    if (/\.(js|ts|coffee)$/.test(f)) {
      while (
        i < bundle.scripts.length &&
        comparePaths(f, bundle.scripts[i]) > 0
      )
        ++i;
      bundle.scripts.insert(i, f);
    } else if (/\.(css|less|sass|scss)$/.test(f)) {
      while (
        i < bundle.stylesheets.length &&
        comparePaths(f, bundle.stylesheets[i]) > 0
      )
        ++i;
      bundle.stylesheets.insert(i, f);
    }
  });

  FileSystem.writeFileSync(bundleFile, JSON.stringify(bundle, null, 4));

  const bundleJsFile = Path.join("public", "bundle.js");

  const scriptBundle = UglifyJS.minify(bundle.scripts.filter(isLocalPath), {
    fromString: false,
    mangle: !debug,
    outSourceMap: bundleJsFile,
    output: {
      beautify: debug,
    },
  });

  FileSystem.writeFile(bundleJsFile, scriptBundle.code);
  FileSystem.writeFile(`${bundleJsFile}.map`, scriptBundle.map);

  const cssSources = [];

  bundle.stylesheets.forEach(filename => {
    if (isLocalPath(filename)) {
      const fileContents = FileSystem.readFileSync(filename, {
        encoding: "utf8",
      });
      if (/\.css$/.test(filename)) {
        cssSources.push(fileContents);
      } else if (/\.less$/.test(filename)) {
        const parser = new Less.Parser({
          paths: [staticDir],
          filename: filename,
        });
        parser.parse(fileContents, (e, tree) => {
          cssSources.push(tree.toCSS());
        });
      }
    }
  });

  const bundleCssFile = Path.join("public", "bundle.css");
  const cssCode = UglifyCSS.processString(cssSources.join(""));

  FileSystem.writeFile(bundleCssFile, cssCode);

  const elapsed = +new Date() - startTime;
  console.info(`done (${elapsed} ms)`);
})();
