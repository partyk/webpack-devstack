// It needs for support dynamic import for the older browser
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import(/* webpackChunkName: "main-index" */ '../main/index').then();