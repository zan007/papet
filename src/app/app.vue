<template>
    <div class="app">
        VUE APP says {{$t('message.hello')}} <br/>

        <p>
            <router-link to="/">Secure</router-link>
            <router-link to="/auth">Auth</router-link>
        </p>

        <router-view></router-view>
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
