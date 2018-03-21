<template>
    <div class="auth">
        <header>
            <div class="button">
                <router-link to="/auth/sign-up">sign up</router-link>
            </div>
        </header>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'auth'
}
</script>
