import Vue from 'vue/dist/vue.esm'; // vue
import Template from './Template'; // vue template

new Vue({
    el: '#app',
    render: h => h(Template)
});

console.log('vue');