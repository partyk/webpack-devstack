// It needs for support dynamic import for the older browser
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

Promise.all([
    import(/* webpackChunkName: "coreJs" */ 'regenerator-runtime/runtime'),
    import(/* webpackChunkName: "runtime" */ 'regenerator-runtime/runtime'),
    import(/* webpackChunkName: "mainIndex" */ '../main/index'),
]).then();
