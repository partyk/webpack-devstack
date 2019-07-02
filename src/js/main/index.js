import '@babel/polyfill';
import(/* webpackChunkName: "test" */ '../modules/test');
import(/* webpackChunkName: "testJQuery" */ '../modules/testJQuery');

(async () => {
    await console.log('async func run');
})();
