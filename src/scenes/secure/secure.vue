<template>
    <div class="secure">
        Secure
        <header-view></header-view>
        <p>
            <router-link to="/">Dashboard</router-link>
        </p>

        <router-view></router-view>
        <footer-view></footer-view>
    </div>
</template>

<script>
import headerView from './components/header/header.vue';
import footerView from './components/footer/footer.vue';

export default {
    name: 'secure',
    components: {headerView, footerView}
}
</script>
