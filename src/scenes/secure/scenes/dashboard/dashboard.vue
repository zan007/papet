<template>
    <div class="dashboard">
        DASHBOARD
        <ul>
            <li v-for="p in list" v-bind:key="p.title">
                {{ p.title }} - {{p.price}}
                <br>
            </li>
        </ul>
        <p>message: {{ $t('message.hello') }}</p>
        <button v-on:click="addWidget">Add widget</button>
        <ul>
            <li v-for="widget in widgets" v-bind:key="widget.componentName">
                {{ widget.componentName }}
                <component v-bind:is="widget.component"></component>
            </li>
        </ul>
    </div>
</template>

<script>
import './dashboard.scss';
import {mapGetters, mapMutations} from 'vuex';
import i18n from './dashboard-i18n.json';

export default {
    name: 'dashboard',
    i18n,
    computed: {
        ...mapGetters({
            list: 'getList',
            widgets: 'getWidgets'
        })
    },
    methods: {
        ...mapMutations({
            addWidget: 'increment'
        })
    }
};
</script>
