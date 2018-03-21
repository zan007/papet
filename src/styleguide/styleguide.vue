<template>
    <div class="styleguide">
        <div class="row collapse expanded">
            <div class="small-12 columns">
                <div class="row collapse expanded">
                    <div class="small-12 columns">
                        <md-toolbar class="md-dense">
                            <md-button class="md-icon-button menu-button" @click="hideSidebar = !hideSidebar">
                                <i class="material-icons">menu</i>
                            </md-button>
                            <router-link class="logo" to="/"></router-link>
                            <h1 class="md-title">styleguide</h1>
                        </md-toolbar>
                    </div>
                </div>
                <div class="row expanded">
                    <div class="small-6 medium-2 columns main-sidebar-links" :class="{'hide-sidebar' : hideSidebar}">
                        <md-list>
                            <md-list-item>
                                <router-link to="/colors">Colors</router-link>
                            </md-list-item>
                            <md-list-item>
                                <router-link to="/typography">Typography</router-link>
                            </md-list-item>
                            <md-list-item>
                                <router-link to="/buttons">Buttons</router-link>
                            </md-list-item>
                            <md-list-item>
                                <router-link to="/form">Form</router-link>
                            </md-list-item>
                            <md-list-item>
                                <router-link to="/tooltip">Tooltip</router-link>
                            </md-list-item>
                            <md-list-item>
                                <router-link to="/spinner">Spinner</router-link>
                            </md-list-item>
                        </md-list>
                    </div>
                    <div class="small-6 medium-10 columns main-styleguide-content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'assets/scss/app.scss';
import './styleguide.scss';

import VueRouter from 'vue-router'

import styleguideButtons from './components/styleguideButtons.vue';
import styleguideColors from './components/styleguideColors.vue';
import styleguideForm from './components/styleguideForm.vue';
import styleguideHome from './components/styleguideHome.vue';
import styleguideSpinner from './components/styleguideSpinner.vue';
import styleguideTooltip from './components/styleguideTooltip.vue';
import styleguideTypography from './components/styleguideTypography.vue';

const router = new VueRouter({
    routes: [
        {path: '/', component: styleguideHome},
        {path: '/buttons', component: styleguideButtons},
        {path: '/colors', component: styleguideColors},
        {path: '/form', component: styleguideForm},
        {path: '/spinner', component: styleguideSpinner},
        {path: '/tooltip', component: styleguideTooltip},
        {path: '/typography', component: styleguideTypography}
    ]
});

export default {
    data () {
        return {
            hideSidebar: false
        }
    },
    name: 'styleguide',
    router
}
</script>
