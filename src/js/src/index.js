// It needs for support dynamic import for the older browser
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import(/* webpackChunkName: "main-index" */ '../main/index');

// (async () => {
//     // first, we wait then the import polyfill
//     await import(/* webpackChunkName: "@babel-polyfill" */ '@babel/polyfill');
//     // then import and run main script for project
//     import(/* webpackChunkName: "main-index" */ '../main/index');
// })();
