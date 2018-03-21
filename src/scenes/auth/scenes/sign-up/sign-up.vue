<template>
    <div class="sign-up">
        <header>

        </header>
        <div class="row">
            <div class="small-18 column align-center">
                <plan-selector v-if="currentStep === availableSteps[0]"></plan-selector>
                <sign-up-form v-if="currentStep === availableSteps[1]"></sign-up-form>
            </div>
        </div>
    </div>
</template>

<script>
import planSelector from './components/plan-selector/plan-selector.vue';
import signUpForm from './components/sign-up-form/sign-up-form.vue';
import i18n from './sign-up-i18n.json';
import {mapGetters} from 'vuex';

export default {
    name: 'signUp',
    i18n,
    components: {
        planSelector,
        signUpForm
    },
    computed: {
        ...mapGetters({
            currentStep: 'getCurrentStep',
            availableSteps: 'getAvailableSteps'
        })
    }
}
</script>
