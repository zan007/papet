import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import Styleguide from './styleguide';

Vue.use(VueRouter);
Vue.use(Vuetify);

const styleguide = new Vue({
    template: '<styleguide />',
    components: {Styleguide}
});

styleguide.$mount('#styleguide');
