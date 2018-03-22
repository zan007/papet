<template>
    <div class="app">
        <v-app id="inspire" dark>
            <v-navigation-drawer
                clipped
                fixed
                app
            >
                <v-list dense>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link to="/">Secure</router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <router-link to="/auth">Auth</router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <i class="material-icons">face</i>
                <v-toolbar-title>VUE APP says {{$t('message.hello')}}</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout justify-center align-center>
                        <v-flex shrink>
                            <router-view></router-view>
                            <v-tooltip right>
                                <v-btn
                                    icon
                                    large
                                    target="_blank"
                                    slot="activator"
                                >
                                    <v-icon large>code</v-icon>
                                </v-btn>
                                <span>Source</span>
                            </v-tooltip>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
            <v-footer app fixed>
                <span>&copy; 2017</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
import VueRouter from 'vue-router'

import 'assets/scss/app.scss'

import Auth from 'scenes/auth/auth';
import Secure from 'scenes/secure/secure';
import Dashboard from 'scenes/secure/scenes/dashboard/dashboard';
import SignUp from 'scenes/auth/scenes/sign-up/sign-up';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/auth',
            component: Auth,
            children: [
                {path: 'sign-up', component: SignUp}
            ]
        },
        {
            path: '/',
            component: Secure,
            children: [
                {path: '', component: Dashboard}
            ]
        }
    ]
});

export default {
    name: 'app',
    router
}
</script>
