Understanding NPM
=================

npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency…

------------------------------------------------------------------------

### Understanding NPM

#### npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ZKmH9MuKyXQcMaK4.gif" class="graf-image" /></figure>It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.

Run `npm help` to get a list of available commands.

### Important

npm is configured to use npm, Inc.’s public registry at <a href="https://registry.npmjs.org/" class="markup--anchor markup--p-anchor">https://registry.npmjs.org</a> by default. Use of the npm public registry is subject to terms of use available at <a href="https://www.npmjs.com/policies/terms" class="markup--anchor markup--p-anchor">https://www.npmjs.com/policies/terms</a>.

You can configure npm to use any compatible registry you like, and even run your own registry. Use of someone else’s registry may be governed by their terms of use.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*9m5wxJihiRIRLy0c.gif" class="graf-image" /></figure>### Introduction

You probably got npm because you want to install stuff.

Use `npm install blerg` to install the latest version of "blerg". Check out `npm install` for more info. It can do a lot of stuff.

Use the `npm search` command to show everything that's available. Use `npm ls` to show everything you've installed.

### Dependencies

If a package references to another package with a git URL, npm depends on a preinstalled git.

If one of the packages npm tries to install is a native node module and requires compiling of C++ Code, npm will use <a href="https://github.com/nodejs/node-gyp" class="markup--anchor markup--p-anchor">node-gyp</a> for that task. For a Unix system, <a href="https://github.com/nodejs/node-gyp" class="markup--anchor markup--p-anchor">node-gyp</a> needs Python, make and a buildchain like GCC. On Windows, Python and Microsoft Visual Studio C++ are needed. For more information visit <a href="https://github.com/nodejs/node-gyp" class="markup--anchor markup--p-anchor">the node-gyp repository</a> and the <a href="https://github.com/nodejs/node-gyp/wiki" class="markup--anchor markup--p-anchor">node-gyp Wiki</a>.

### Directories

See `folders` to learn about where npm puts stuff.

In particular, npm has two modes of operation:

-   <span id="e073">global mode: npm installs packages into the install prefix at `prefix/lib/node_modules` and bins are installed in `prefix/bin`.</span>
-   <span id="20a4">local mode: npm installs packages into the current project directory, which defaults to the current working directory. Packages are installed to `./node_modules`, and bins are installed to `./node_modules/.bin`.</span>

Local mode is the default. Use `-g` or `--global` on any command to operate in global mode instead.

### Developer Usage

If you’re using npm to develop and publish your code, check out the following help topics:

-   <span id="0211">json: Make a package.json file. See `package.json`.</span>
-   <span id="4edd">link: For linking your current working code into Node’s path, so that you don’t have to reinstall every time you make a change. Use `npm link` to do this.</span>
-   <span id="b6f6">install: It’s a good idea to install things if you don’t need the symbolic link. Especially, installing other peoples code from the registry is done via `npm install`</span>
-   <span id="f15a">adduser: Create an account or log in. Credentials are stored in the user config file.</span>
-   <span id="e374">publish: Use the `npm publish` command to upload your code to the registry.</span>

#### Configuration

npm is extremely configurable. It reads its configuration options from 5 places.

-   <span id="600e">Command line switches: Set a config with `--key val`. All keys take a value, even if they are booleans (the config parser doesn't know what the options are at the time of parsing). If no value is provided, then the option is set to boolean `true`.</span>
-   <span id="8b92">Environment Variables: Set any config by prefixing the name in an environment variable with `npm_config_`. For example, `export npm_config_key=val`.</span>
-   <span id="5960">User Configs: The file at $HOME/.npmrc is an ini-formatted list of configs. If present, it is parsed. If the `userconfig` option is set in the cli or env, then that will be used instead.</span>
-   <span id="dc52">Global Configs: The file found at ../etc/npmrc (from the node executable, by default this resolves to /usr/local/etc/npmrc) will be parsed if it is found. If the `globalconfig` option is set in the cli, env, or user config, then that file is parsed instead.</span>
-   <span id="55ff">Defaults: npm’s default configuration options are defined in lib/utils/config-defs.js. These must not be changed.</span>

### Synopsis

    npm audit [--json|--parseable|--audit-level=(low|moderate|high|critical)]
    npm audit fix [--force|--package-lock-only|--dry-run]

    common options: [--production] [--only=(dev|prod)]

### Examples

Scan your project for vulnerabilities and automatically install any compatible updates to vulnerable dependencies:

    $ npm audit fix

Run `audit fix` without modifying `node_modules`, but still updating the pkglock:

    $ npm audit fix --package-lock-only

Skip updating `devDependencies`:

    $ npm audit fix --only=prod

Have `audit fix` install semver-major updates to toplevel dependencies, not just semver-compatible ones:

    $ npm audit fix --force

Do a dry run to get an idea of what `audit fix` will do, and also output install information in JSON format:

    $ npm audit fix --dry-run --json

Scan your project for vulnerabilities and just show the details, without fixing anything:

    $ npm audit

Get the detailed audit report in JSON format:

    $ npm audit --json

Get the detailed audit report in plain text result, separated by tab characters, allowing for future reuse in scripting or command line post processing, like for example, selecting some of the columns printed:

    $ npm audit --parseable

To parse columns, you can use for example `awk`, and just print some of them:

    $ npm audit --parseable | awk -F $'\t' '{print $1,$4}'

Fail an audit only if the results include a vulnerability with a level of moderate or higher:

    $ npm audit --audit-level=moderate

### Description

> The audit command submits a description of the dependencies configured in your project to your default registry and asks for a report of known vulnerabilities. The report returned includes instructions on how to act on this information. The command will exit with a 0 exit code if no vulnerabilities were found.

**You can also have npm automatically fix the vulnerabilities by running** `npm audit fix`. Note that some vulnerabilities cannot be fixed automatically and will require manual intervention or review. Also note that since `npm audit fix` runs a full-fledged `npm install` under the hood, all configs that apply to the installer will also apply to `npm install` -- so things like `npm audit fix --package-lock-only` will work as expected.

By default, the audit command will exit with a non-zero code if any vulnerability is found. It may be useful in CI environments to include the `--audit-level` parameter to specify the minimum vulnerability level that will cause the command to fail. This option does not filter the report output, it simply changes the command's failure threshold.

### Content Submitted

-   <span id="754e">npm\_version</span>
-   <span id="fac8">node\_version</span>
-   <span id="ef57">platform</span>
-   <span id="373e">node\_env</span>
-   <span id="a765">A scrubbed version of your package-lock.json or npm-shrinkwrap.json</span>

#### Scrubbing

In order to ensure that potentially sensitive information is not included in the audit data bundle, some dependencies may have their names (and sometimes versions) replaced with opaque non-reversible identifiers. It is done for the following dependency types:

-   <span id="0763">Any module referencing a scope that is configured for a non-default registry has its name scrubbed. (That is, a scope you did a `npm login --scope=@ourscope` for.)</span>
-   <span id="0046">All git dependencies have their names and specifiers scrubbed.</span>
-   <span id="0f8f">All remote tarball dependencies have their names and specifiers scrubbed.</span>
-   <span id="6ae2">All local directory and tarball dependencies have their names and specifiers scrubbed.</span>

The non-reversible identifiers are a sha256 of a session-specific UUID and the value being replaced, ensuring a consistent value within the payload that is different between runs.

------------------------------------------------------------------------

### Exit Code

The `npm audit` command will exit with a 0 exit code if no vulnerabilities were found.

If vulnerabilities were found the exit code will depend on the `audit-level` configuration setting.

------------------------------------------------------------------------

### Synopsis

    npm build [<package-folder>]

-   <span id="69ab">`<package-folder>`: A folder containing a `package.json` file in its root.</span>

### Description

This is the plumbing command called by `npm link` and `npm install`.

It should generally be called during installation, but if you need to run it directly, run:

    npm run-script build

The `npm bundle` command has been removed in 1.0, for the simple reason that it is no longer necessary, as the default behavior is now to install packages into the local space.

Just use `npm install` now to do what `npm bundle` used to do.

------------------------------------------------------------------------

### npm cache

#### Manipulates packages cache

### Synopsis

    npm cache add <tarball file>
    npm cache add <folder>
    npm cache add <tarball url>
    npm cache add <name>@<version>

    npm cache clean [<path>]
    aliases: npm cache clear, npm cache rm

    npm cache verify

### Description

Used to add, list, or clean the npm cache folder.

-   <span id="ffac">add: Add the specified package to the local cache. This command is primarily intended to be used internally by npm, but it can provide a way to add data to the local installation cache explicitly.</span>
-   <span id="0f00">clean: Delete all data out of the cache folder.</span>
-   <span id="4d73">verify: Verify the contents of the cache folder, garbage collecting any unneeded data, and verifying the integrity of the cache index and all cached data.</span>

### Details

npm stores cache data in an opaque directory within the configured `cache`, named `_cacache`. This directory is a `cacache`-based content-addressable cache that stores all http request data as well as other package-related data. This directory is primarily accessed through `pacote`, the library responsible for all package fetching as of npm@5.

All data that passes through the cache is fully verified for integrity on both insertion and extraction. Cache corruption will either trigger an error, or signal to `pacote` that the data must be refetched, which it will do automatically. For this reason, it should never be necessary to clear the cache for any reason other than reclaiming disk space, thus why `clean` now requires `--force` to run.

There is currently no method exposed through npm to inspect or directly manage the contents of this cache. In order to access it, `cacache` must be used directly.

npm will not remove data by itself: the cache will grow as new packages are installed.

### A note about the cache’s design

The npm cache is strictly a cache: it should not be relied upon as a persistent and reliable data store for package data. npm makes no guarantee that a previously-cached piece of data will be available later, and will automatically delete corrupted contents. The primary guarantee that the cache makes is that, if it does return data, that data will be exactly the data that was inserted.

To run an offline verification of existing cache contents, use `npm cache verify`.

### Configuration

#### cache

Default: `~/.npm` on Posix, or `%AppData%/npm-cache` on Windows.

The root cache folder.

### npm ci

### Install a project with a clean slate

### Synopsis

    npm ci

### Example

Make sure you have a package-lock and an up-to-date install:

    $ cd ./my/npm/project
    $ npm install
    added 154 packages in 10s
    $ ls | grep package-lock

Run `npm ci` in that project

    $ npm ci
    added 154 packages in 5s

Configure Travis to build using `npm ci` instead of `npm install`:

    # .travis.yml
    install:
    - npm ci
    # keep the npm cache around to speed up installs
    cache:
      directories:
      - "$HOME/.npm"

### Description

This command is similar to `npm install`, except it's meant to be used in automated environments such as test platforms, continuous integration, and deployment -- or any situation where you want to make sure you're doing a clean install of your dependencies. It can be significantly faster than a regular npm install by skipping certain user-oriented features. It is also more strict than a regular install, which can help catch errors or inconsistencies caused by the incrementally-installed local environments of most npm users.

In short, the main differences between using `npm install` and `npm ci` are:

-   <span id="8cf0">The project **must** have an existing `package-lock.json` or `npm-shrinkwrap.json`.</span>
-   <span id="fb09">If dependencies in the package lock do not match those in `package.json`, `npm ci` will exit with an error, instead of updating the package lock.</span>
-   <span id="a1d5">`npm ci` can only install entire projects at a time: individual dependencies cannot be added with this command.</span>
-   <span id="a666">If a `node_modules` is already present, it will be automatically removed before `npm ci` begins its install.</span>
-   <span id="2bcb">It will never write to `package.json` or any of the package-locks: installs are essentially frozen.</span>

------------------------------------------------------------------------

### npm config

### Manage the npm configuration files

### Synopsis

    npm config set <key> <value> [-g|--global]
    npm config get <key>
    npm config delete <key>
    npm config list [-l] [--json]
    npm config edit
    npm get <key>
    npm set <key> <value> [-g|--global]

    aliases: c

### Description

npm gets its config settings from the command line, environment variables, `npmrc` files, and in some cases, the `package.json` file.

See <a href="http://127.0.0.1:5500/public/configuring-npm/npmrc" class="markup--anchor markup--p-anchor">npmrc</a> for more information about the npmrc files.

See <a href="http://127.0.0.1:5500/public/using-npm/config" class="markup--anchor markup--p-anchor">config</a> for a more thorough discussion of the mechanisms involved.

The `npm config` command can be used to update and edit the contents of the user and global npmrc files.

### Sub-commands

Config supports the following sub-commands:

#### set

    npm config set key value

Sets the config key to the value.

If value is omitted, then it sets it to “true”.

#### get

    npm config get key

Echo the config value to stdout.

#### list

    npm config list

Show all the config settings. Use `-l` to also show defaults. Use `--json` to show the settings in json format.

#### delete

    npm config delete key

Deletes the key from all configuration files.

#### edit

    npm config edit

Opens the config file in an editor. Use the `--global` flag to edit the global config.

------------------------------------------------------------------------

### npm init

#### create a package.json file

#### Synopsis

    npm init [--force|-f|--yes|-y|--scope]
    npm init <@scope> (same as `npx <@scope>/create`)
    npm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)

### Examples

Create a new React-based project using `create-react-app`:

    $ npm init react-app ./my-react-app

Create a new `esm`-compatible package using `create-esm`:

    $ mkdir my-esm-lib && cd my-esm-lib
    $ npm init esm --yes

Generate a plain old package.json using legacy init:

    $ mkdir my-npm-pkg && cd my-npm-pkg
    $ git init
    $ npm init

Generate it without having it ask any questions:

    $ npm init -y

### Description

`npm init <initializer>` can be used to set up a new or existing npm package.

`initializer` in this case is an npm package named `create-<initializer>`, which will be installed by `npx`, and then have its main bin executed -- presumably creating or updating `package.json` and running any other initialization-related operations.

The init command is transformed to a corresponding `npx` operation as follows:

-   <span id="6d24">`npm init foo` -&gt; `npx create-foo`</span>
-   <span id="159c">`npm init @usr/foo` -&gt; `npx @usr/create-foo`</span>
-   <span id="675f">`npm init @usr` -&gt; `npx @usr/create`</span>

Any additional options will be passed directly to the command, so `npm init foo --hello` will map to `npx create-foo --hello`.

If the initializer is omitted (by just calling `npm init`), init will fall back to legacy init behavior. It will ask you a bunch of questions, and then write a package.json for you. It will attempt to make reasonable guesses based on existing fields, dependencies, and options selected. It is strictly additive, so it will keep any fields and values that were already set. You can also use `-y`/`--yes` to skip the questionnaire altogether. If you pass `--scope`, it will create a scoped package.

### npm install

### Install a package

### Synopsis

    npm install (with no args, in package dir)
    npm install [<@scope>/]<name>
    npm install [<@scope>/]<name>@<tag>
    npm install [<@scope>/]<name>@<version>
    npm install [<@scope>/]<name>@<version range>
    npm install <alias>@npm:<name>
    npm install <git-host>:<git-user>/<repo-name>
    npm install <git repo url>
    npm install <tarball file>
    npm install <tarball url>
    npm install <folder>

    aliases: npm i, npm add
    common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]

### Description

This command installs a package, and any packages that it depends on. If the package has a package-lock or shrinkwrap file, the installation of dependencies will be driven by that, with an `npm-shrinkwrap.json` taking precedence if both files exist. See <a href="http://127.0.0.1:5500/public/configuring-npm/package-lock-json" class="markup--anchor markup--p-anchor">package-lock.json</a> and `npm shrinkwrap`.

<span class="graf-dropCap">A</span> `package` is:

-   <span id="1e36">a) a folder containing a program described by a `package.json` file</span>
-   <span id="1312">b) a gzipped tarball containing (a)</span>
-   <span id="30f3">c) a url that resolves to (b)</span>
-   <span id="8563">d) a `<name>@<version>` that is published on the registry (see `registry`) with (c)</span>
-   <span id="4635">e) a `<name>@<tag>` (see `npm dist-tag`) that points to (d)</span>
-   <span id="9a02">f) a `<name>` that has a "latest" tag satisfying (e)</span>
-   <span id="23de">g) a `<git remote url>` that resolves to (a)</span>

> Even if you never publish your package, you can still get a lot of benefits of using npm if you just want to write a node program (a), and perhaps if you also want to be able to easily install it elsewhere after packing it up into a tarball (b).

-   <span id="8f35">`npm install` (in package directory, no arguments):</span>
-   <span id="c00a">Install the dependencies in the local node\_modules folder.</span>
-   <span id="a36b">In global mode (ie, with `-g` or `--global` appended to the command), it installs the current package context (ie, the current working directory) as a global package.</span>
-   <span id="cda2">By default, `npm install` will install all modules listed as dependencies in `package.json`.</span>
-   <span id="a0a9">With the `--production` flag (or when the `NODE_ENV` environment variable is set to `production`), npm will not install modules listed in `devDependencies`. To install all modules listed in both `dependencies` and `devDependencies` when `NODE_ENV` environment variable is set to `production`, you can use `--production=false`.</span>

#### NOTE: The `--production` flag has no particular meaning when adding a dependency to a project.

`npm install <folder>`:

-   <span id="b9be">Install the package in the directory as a symlink in the current project. Its dependencies will be installed before it’s linked. If `<folder>` sits inside the root of your project, its dependencies may be hoisted to the toplevel `node_modules` as they would for other types of dependencies.</span>
-   <span id="447d">`npm install <tarball file>`:</span>
-   <span id="0354">Install a package that is sitting on the filesystem. Note: if you just want to link a dev directory into your npm root, you can do this more easily by using `npm link`.</span>

#### Tarball requirements:

-   <span id="921e">The filename must use `.tar`, `.tar.gz`, or `.tgz` as the extension.</span>
-   <span id="1afb">The package contents should reside in a subfolder inside the tarball (usually it is called `package/`). npm strips one directory layer when installing the package (an equivalent of `tar x --strip-components=1` is run).</span>
-   <span id="bb85">The package must contain a `package.json` file with `name` and `version` properties.</span>
-   <span id="8e6f">Example:</span>

`npm install ./package.tgz`

`npm install <tarball url>`:

-   <span id="07bd">Fetch the tarball url, and then install it. In order to distinguish between this and other options, the argument must start with “http://” or “https://”</span>

#### Example:

`npm install https://github.com/indexzero/forever/tarball/v0.5.6`

`npm install [<@scope>/]<name>`:

Do a `<name>@<tag>` install, where `<tag>` is the "tag" config. (See `config`. The config's default value is `latest`.)

-   <span id="82c5">In most cases, this will install the version of the modules tagged as `latest` on the npm registry.</span>

#### Example:

`npm install sax`

`npm install <alias>@npm:<name>`:

> Install a package under a custom alias. Allows multiple versions of a same-name package side-by-side, more convenient import names for packages with otherwise long ones and using git forks replacements or forked npm packages as replacements. Aliasing works only on your project and does not rename packages in transitive dependencies. Aliases should follow the naming conventions stated in `validate-npm-package-name`.

#### Examples:

`npm install my-react@npm:react npm install jquery2@npm:jquery@2 npm install jquery3@npm:jquery@3 npm install npa@npm:npm-package-arg`

-   <span id="0b7d">`npm install` saves any specified packages into `dependencies` by default. Additionally, you can control where and how they get saved with some additional flags:</span>
-   <span id="d1c7">`-P, --save-prod`: Package will appear in your `dependencies`. This is the default unless `-D` or `-O` are present.</span>
-   <span id="e4be">`-D, --save-dev`: Package will appear in your `devDependencies`.</span>
-   <span id="fe2f">`-O, --save-optional`: Package will appear in your `optionalDependencies`.</span>
-   <span id="b312">`--no-save`: Prevents saving to `dependencies`.</span>
-   <span id="7c51">When using any of the above options to save dependencies to your package.json, there are two additional, optional flags:</span>
-   <span id="e759">`-E, --save-exact`: Saved dependencies will be configured with an exact version rather than using npm's default semver range operator.</span>
-   <span id="3d6b">`-B, --save-bundle`: Saved dependencies will also be added to your `bundleDependencies` list.</span>
-   <span id="b547">Further, if you have an `npm-shrinkwrap.json` or `package-lock.json` then it will be updated as well.</span>
-   <span id="bbe4">`<scope>` is optional. The package will be downloaded from the registry associated with the specified scope. If no registry is associated with the given scope the default registry is assumed. See `scope`.</span>
-   <span id="9e5d">Note: if you do not include the @-symbol on your scope name, npm will interpret this as a GitHub repository instead, see below. Scopes names must also be followed by a slash.</span>

#### Examples:

`npm install sax npm install githubname/reponame`

`npm install @myorg/privatepackage`

`npm install node-tap --save-dev`

`npm install dtrace-provider --save-optional`

`npm install readable-stream --save-exact`

`npm install ansi-regex --save-bundle`

-   <span id="c557">**Note**: If there is a file or folder named `<name>` in the current working directory, then it will try to install that, and only try to fetch the package by name if it is not valid.</span>
-   <span id="6899">`npm install [<@scope>/]<name>@<tag>`:</span>
-   <span id="aa9a">Install the version of the package that is referenced by the specified tag. If the tag does not exist in the registry data for that package, then this will fail.</span>

#### Example:

`npm install sax@latest npm install @myorg/mypackage@latest`

`npm install [<@scope>/]<name>@<version>`:

-   <span id="3d5e">Install the specified version of the package. This will fail if the version has not been published to the registry.</span>

#### Example:

`npm install sax@0.1.1 npm install @myorg/privatepackage@1.5.0`

`npm install [<@scope>/]<name>@<version range>`:

-   <span id="e303">Install a version of the package matching the specified version range. This will follow the same rules for resolving dependencies described in `package.json`.</span>

> Note that most version ranges must be put in quotes so that your shell will treat it as a single argument.

#### Example:

`npm install sax@">=0.1.0 <0.2.0" npm install @myorg/privatepackage@">=0.1.0 <0.2.0"`

`npm install <git remote url>`:

> Installs the package from the hosted git provider, cloning it with `git`. For a full git remote url, only that URL will be attempted.

`<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]`

-   <span id="d169">`<protocol>` is one of `git`, `git+ssh`, `git+http`, `git+https`, or `git+file`.</span>
-   <span id="5bf2">If `#<commit-ish>` is provided, it will be used to clone exactly that commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is specified, then the default branch of the repository is used.</span>
-   <span id="c468">If the repository makes use of submodules, those submodules will be cloned as well.</span>
-   <span id="33df">If the package being installed contains a `prepare` script, its `dependencies` and `devDependencies` will be installed, and the prepare script will be run, before the package is packaged and installed.</span>
-   <span id="3946">The following git environment variables are recognized by npm and will be added to the environment when running git:</span>
-   <span id="5809">`GIT_ASKPASS`</span>
-   <span id="a901">`GIT_EXEC_PATH`</span>
-   <span id="4c5e">`GIT_PROXY_COMMAND`</span>
-   <span id="de94">`GIT_SSH`</span>
-   <span id="96dc">`GIT_SSH_COMMAND`</span>
-   <span id="2855">`GIT_SSL_CAINFO`</span>
-   <span id="1fef">`GIT_SSL_NO_VERIFY`</span>
-   <span id="96d5">See the git man page for details.</span>

#### Examples:

`npm install git+ssh://git@github.com:npm/cli.git#v1.0.27 npm install git+ssh://git@github.com:npm/cli#semver:^5.0 npm install git+https://isaacs@github.com/npm/cli.git npm install git://github.com/npm/cli.git#v1.0.27 GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install git+ssh://git@github.com:npm/cli.git`

`npm install <githubname>/<githubrepo>[#<commit-ish>]`:

`npm install github:<githubname>/<githubrepo>[#<commit-ish>]`:

-   <span id="aee0">Install the package at `https://github.com/githubname/githubrepo` by attempting to clone it using `git`.</span>
-   <span id="641e">If `#<commit-ish>` is provided, it will be used to clone exactly that commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is specified, then `master` is used.</span>
-   <span id="2492">As with regular git dependencies, `dependencies` and `devDependencies` will be installed if the package has a `prepare` script, before the package is done installing.</span>

#### Examples:

`npm install mygithubuser/myproject npm install github:mygithubuser/myproject`

`npm install gist:[<githubname>/]<gistID>[#<commit-ish>|#semver:<semver>]`:

-   <span id="eecb">Install the package at `https://gist.github.com/gistID` by attempting to clone it using `git`. The GitHub username associated with the gist is optional and will not be saved in `package.json`.</span>
-   <span id="7541">As with regular git dependencies, `dependencies` and `devDependencies` will be installed if the package has a `prepare` script, before the package is done installing.</span>
-   <span id="b4f6">Example:</span>
-   <span id="e50b">`npm install gist:101a11beef`</span>
-   <span id="18f5">`npm install bitbucket:<bitbucketname>/<bitbucketrepo>[#<commit-ish>]`:</span>
-   <span id="d419">Install the package at `https://bitbucket.org/bitbucketname/bitbucketrepo` by attempting to clone it using `git`.</span>
-   <span id="0499">If `#<commit-ish>` is provided, it will be used to clone exactly that commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is specified, then `master` is used.</span>
-   <span id="66d5">As with regular git dependencies, `dependencies` and `devDependencies` will be installed if the package has a `prepare` script, before the package is done installing.</span>

#### Example:

`npm install bitbucket:mybitbucketuser/myproject`

`npm install gitlab:<gitlabname>/<gitlabrepo>[#<commit-ish>]`:

-   <span id="0a7e">Install the package at `https://gitlab.com/gitlabname/gitlabrepo` by attempting to clone it using `git`.</span>
-   <span id="4201">If `#<commit-ish>` is provided, it will be used to clone exactly that commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is specified, then `master` is used.</span>
-   <span id="3536">As with regular git dependencies, `dependencies` and `devDependencies` will be installed if the package has a `prepare` script, before the package is done installing.</span>

#### Example:

`npm install gitlab:mygitlabuser/myproject npm install gitlab:myusr/myproj#semver:^5.0`

You may combine multiple arguments, and even multiple types of arguments. For example:

    npm install sax@">=0.1.0 <0.2.0" bench supervisor

The `--tag` argument will apply to all of the specified install targets. If a tag with the given name exists, the tagged version is preferred over newer versions.

The `--dry-run` argument will report in the usual way what the install would have done without actually installing anything.

The `--package-lock-only` argument will only update the `package-lock.json`, instead of checking `node_modules` and downloading dependencies.

The `-f` or `--force` argument will force npm to fetch remote resources even if a local copy exists on disk.

    npm install sax --force

The `--no-fund` argument will hide the message displayed at the end of each install that acknowledges the number of dependencies looking for funding. See `npm-fund(1)`

The `-g` or `--global` argument will cause npm to install the package globally rather than locally. See <a href="http://127.0.0.1:5500/public/configuring-npm/folders" class="markup--anchor markup--p-anchor">folders</a>.

The `--global-style` argument will cause npm to install the package into your local `node_modules` folder with the same layout it uses with the global `node_modules` folder. Only your direct dependencies will show in `node_modules` and everything they depend on will be flattened in their `node_modules` folders. This obviously will eliminate some deduping.

The `--ignore-scripts` argument will cause npm to not execute any scripts defined in the package.json. See `scripts`.

The `--legacy-bundling` argument will cause npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package. This eliminates all automatic deduping.

The `--link` argument will cause npm to link global installs into the local space in some cases.

The `--no-bin-links` argument will prevent npm from creating symlinks for any binaries the package might contain.

The `--no-optional` argument will prevent optional dependencies from being installed.

The `--no-shrinkwrap` argument, which will ignore an available package lock or shrinkwrap file and use the package.json instead.

The `--no-package-lock` argument will prevent npm from creating a `package-lock.json` file. When running with package-lock's disabled npm will not automatically prune your node modules when installing.

The `--nodedir=/path/to/node/source` argument will allow npm to find the node source code so that npm can compile native modules.

The `--only={prod[uction]|dev[elopment]}` argument will cause either only `devDependencies` or only non-`devDependencies` to be installed regardless of the `NODE_ENV`.

The `--no-audit` argument can be used to disable sending of audit reports to the configured registries. See `npm-audit` for details on what is sent.

See `config`. Many of the configuration params have some effect on installation, since that's most of what npm does.

#### Algorithm

To install a package, npm uses the following algorithm:

    load the existing node_modules tree from disk
    clone the tree
    fetch the package.json and assorted metadata and add it to the clone
    walk the clone and add any missing dependencies
      dependencies will be added as close to the top as is possible
      without breaking any other modules
    compare the original tree with the cloned tree and make a list of
    actions to take to convert one to the other
    execute all of the actions, deepest first
      kinds of actions are install, update, remove and move

For this `package{dep}` structure: `A{B,C}, B{C}, C{D}`, this algorithm produces:

    A
    +-- B
    +-- C
    +-- D

That is, the dependency from B to C is satisfied by the fact that A already caused C to be installed at a higher level. D is still installed at the top level because nothing conflicts with it.

For `A{B,C}, B{C,D@1}, C{D@2}`, this algorithm produces:

    A
    +-- B
    +-- C
       `-- D@2
    +-- D@1

Because B’s D@1 will be installed in the top level, C now has to install D@2 privately for itself. This algorithm is deterministic, but different trees may be produced if two dependencies are requested for installation in a different order.

See <a href="http://127.0.0.1:5500/public/configuring-npm/folders" class="markup--anchor markup--p-anchor">folders</a> for a more detailed description of the specific folder structures that npm creates.

### Limitations of npm’s Install Algorithm

npm will refuse to install any package with an identical name to the current package. This can be overridden with the `--force` flag, but in most cases can simply be addressed by changing the local package name.

There are some very rare and pathological edge-cases where a cycle can cause npm to try to install a never-ending tree of packages. Here is the simplest case:

    A -> B -> A' -> B' -> A -> B -> A' -> B' -> A -> ...

where `A` is some version of a package, and `A'` is a different version of the same package. Because `B` depends on a different version of `A` than the one that is already in the tree, it must install a separate copy. The same is true of `A'`, which must install `B'`. Because `B'` depends on the original version of `A`, which has been overridden, the cycle falls into infinite regress.

To avoid this situation, npm flat-out refuses to install any `name@version` that is already present anywhere in the tree of package folder ancestors. A more correct, but more complex, solution would be to symlink the existing version into the new location. If this ever affects a real use-case, it will be investigated.

<a href="https://bryanguner.medium.com/membership" class="markup--anchor markup--p-anchor">https://bryanguner.medium.com/membership</a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [September 29, 2021](https://medium.com/p/6a33e7f6ed85).

<a href="https://medium.com/@bryanguner/understanding-npm-6a33e7f6ed85" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
