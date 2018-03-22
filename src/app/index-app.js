import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import Vuetify from 'vuetify';

import modules from 'store';
import {messages} from 'services/i18n';
import App from './app';
import 'babel-polyfill';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(Vuetify);

const i18n = new VueI18n({
    locale: 'pl',
    messages
});

const store = new Vuex.Store({modules});

const app = new Vue({
    i18n,
    store,
    template: '<app />',
    components: {App},
    created () {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js').then(registration => {
                    console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }
});

app.$mount('#app');
