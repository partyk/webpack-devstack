// import '@babel/polyfill';
/*
As of Babel 7.4.0, this '@babel/polyfill' package has been deprecated in favor of directly including core-js/stable (to polyfill ECMAScript features) and regenerator-runtime/runtime (needed to use transpiled generator functions):
*/
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import(/* webpackChunkName: "test" */ '../modules/test');
import(/* webpackChunkName: "testJQuery" */ '../modules/testJQuery');
import(/* webpackChunkName: "testTypeScript" */ '../modules/testTypeScript');
import(/* webpackChunkName: "testVueJs" */ '../modules/vueJs');

(async () => {
    await console.log('async func run');
})();
