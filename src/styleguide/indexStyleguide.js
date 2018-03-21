import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';

import Styleguide from './styleguide';

Vue.use(VueRouter);
Vue.use(VueMaterial);

const styleguide = new Vue({
    template: '<styleguide />',
    components: {Styleguide}
});

styleguide.$mount('#styleguide');
