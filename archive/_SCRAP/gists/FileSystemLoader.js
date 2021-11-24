import nunjucks from "nunjucks";
import gaze from "gaze";
import lib from "nunjucks/src/lib";
import fs from "fs";
import path from "path";
import _ from "lodash";

// Node <0.7.1 compatibility
const existsSync = fs.existsSync || path.existsSync;

export default nunjucks.Loader.extend({
  init(searchPaths, options) {
    this.options = _.extend(
      {
        fileExtension: "njs",
        noWatch: false,
      },
      options
    );

    this.pathsToNames = {};

    if (searchPaths) {
      searchPaths = lib.isArray(searchPaths) ? searchPaths : [searchPaths];
      // For windows, convert to forward slashes
      this.searchPaths = searchPaths.map(path.normalize);
    } else {
      this.searchPaths = ["."];
    }

    if (!this.options.noWatch) {
      const patterns = _.map(
        this.searchPaths,
        p => {
          return `${p}**/*.${this.options.fileExtension}`;
        }
      );
      gaze(
        patterns,
        (err, watcher) => {
          watcher.on(
            "changed",
            filepath => {
              if (this.pathsToNames.hasOwnProperty(filepath)) {
                this.emit("update", this.pathsToNames[filepath]);
              }
            }
          );
        }
      );
    }
  },

  getSource(name) {
    let nameWithExtension = name;
    if (this.options.fileExtension && !/\.[^\/\\]+$/.test(nameWithExtension)) {
      nameWithExtension += `.${this.options.fileExtension}`;
    }
    let fullpath = null;
    const paths = this.searchPaths;

    for (let i = 0; i < paths.length; i++) {
      const p = path.resolve(paths[i], nameWithExtension);

      if (existsSync(p)) {
        fullpath = p;
        break;
      }
    }

    if (!fullpath) {
      return null;
    }

    this.pathsToNames[fullpath] = name;

    return {
      src: fs.readFileSync(fullpath, "utf-8"),
      path: fullpath,
    };
  },
});
