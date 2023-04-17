
> webpack-lab@0.3.4 start
> webpack serve --open --config webpack.dev.js

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from ./dist
i ｢wds｣: 404s will fallback to /index.html
(node:10512) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
i ｢wdm｣: wait until bundle finished: /
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
(node:10512) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
        Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
        Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
× ｢wdm｣: asset main.bundle.js 1010 KiB [emitted] (name: main)
asset ba7dd61c001d3d8ff22f.png 153 KiB [emitted] [immutable] [from: src/images/agave-color.png] (auxiliary name: main)
asset index.html 193 bytes [emitted]
runtime modules 25.7 KiB 13 modules
modules by path ./node_modules/ 344 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 20.9 KiB 10 modules
  modules by path ./node_modules/webpack/hot/ 4.46 KiB 5 modules
  modules by path ./node_modules/html-entities/lib/*.js 61 KiB 5 modules
  modules by path ./node_modules/url/ 37.4 KiB 3 modules
  modules by path ./node_modules/querystring/*.js 4.51 KiB 3 modules
modules by path ./src/ 2.07 KiB (javascript) 153 KiB (asset)
  javascript modules 1.9 KiB
    ./src/index.js 366 bytes [built] [code generated]
    ./src/styles/main.scss 1.5 KiB [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss 39 bytes [built] [code generated] [2 errors]
  asset modules 183 bytes (javascript) 153 KiB (asset)
    ./src/images/agave-color.png 42 bytes (javascript) 153 KiB (asset) [built] [code generated]
    ./src/images/logo.svg 141 bytes [built] [code generated]

ERROR in ./src/styles/main.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss)
Module Error (from ./node_modules/sass-loader/dist/cjs.js):
Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (93)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v5.0.0
 @ ./src/styles/main.scss 47:4-60:5 2:12-179 9:17-24 13:7-21 45:20-34 49:6-59:7 50:38-52 56:26-40 58:21-28 68:15-29
 @ ./src/index.js 3:0-27

ERROR in ./src/styles/main.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss)
Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
Error: PostCSS received undefined instead of CSS string
    at new Input (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\input.js:20:13)
    at parse (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\parse.js:8:15)
    at new LazyResult (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\lazy-result.js:122:16)
    at Processor.process (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\processor.js:33:12)
    at Object.loader (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss-loader\dist\index.js:87:44)
 @ ./src/styles/main.scss 47:4-60:5 2:12-179 9:17-24 13:7-21 45:20-34 49:6-59:7 50:38-52 56:26-40 58:21-28 68:15-29
 @ ./src/index.js 3:0-27

webpack 5.18.0 compiled with 2 errors in 26657 ms
i ｢wdm｣: Failed to compile.
i ｢wdm｣: Compiling...
i ｢wdm｣: wait until bundle finished: /main.bundle.js
× ｢wdm｣: assets by status 153 KiB [cached] 1 asset
assets by path *.js 1010 KiB
  asset main.bundle.js 1010 KiB [emitted] (name: main)
  asset main.ebe2db6d425cac62b9fd.hot-update.js 723 bytes [emitted] [immutable] [hmr] (name: main)
asset main.ebe2db6d425cac62b9fd.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 1010 KiB (153 KiB) = main.bundle.js 1010 KiB main.ebe2db6d425cac62b9fd.hot-update.js 723 bytes 1 auxiliary asset
cached modules 346 KiB (javascript) 153 KiB (asset) [cached] 37 modules
runtime modules 25.7 KiB 13 modules
./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss 39 bytes [built] [2 errors]

ERROR in ./src/styles/main.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss)
Module Error (from ./node_modules/sass-loader/dist/cjs.js):
Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (93)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v5.0.0
 @ ./src/styles/main.scss 47:4-60:5 2:12-179 9:17-24 13:7-21 45:20-34 49:6-59:7 50:38-52 56:26-40 58:21-28 68:15-29
 @ ./src/index.js 3:0-27

ERROR in ./src/styles/main.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss)
Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
Error: PostCSS received undefined instead of CSS string
    at new Input (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\input.js:20:13)
    at parse (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\parse.js:8:15)
    at new LazyResult (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\lazy-result.js:122:16)
    at Processor.process (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss\lib\processor.js:33:12)
    at Object.loader (O:\workspace\lab\frontend\bundler\webpack-lab\node_modules\postcss-loader\dist\index.js:87:44)
 @ ./src/styles/main.scss 47:4-60:5 2:12-179 9:17-24 13:7-21 45:20-34 49:6-59:7 50:38-52 56:26-40 58:21-28 68:15-29
 @ ./src/index.js 3:0-27

webpack 5.18.0 compiled with 2 errors in 443 ms
i ｢wdm｣: Failed to compile.

