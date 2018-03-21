<template>
<div class="sign-up-form">
    <div class="header">
        <h1>{{ $t('header') }}</h1>
        <h3>{{ $t('sub-header') }}</h3>
    </div>

    <legend>{{ $t('user-details') }}</legend>

    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div>
              <input class="email"
                     :value="formValues.userDetails.email"
                     @input="$set(formValues.userDetails, 'email', $event.target.value)"
                     :placeholder="$t('email-placeholder')"
                     type="email"
                     name="email"
                     id="email">
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div>
              <input class="first-name"
                     :value="formValues.userDetails.firstName"
                     @input="$set(formValues.userDetails, 'firstName', $event.target.value)"
                     maxlength="255"
                     :placeholder="$t('first-name-placeholder')"
                     size="255"
                     type="text"
                     name="first-name"
                     id="first-name">
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div>
              <input class="family-name"
                     :value="formValues.userDetails.familyName"
                     @input="$set(formValues.userDetails, 'familyName', $event.target.value)"
                     maxlength="255"
                     :placeholder="$t('family-name-placeholder')"
                     size="255"
                     type="text"
                     name="family-name"
                     id="family-name">
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div>
              <input class="password"
                     :value="formValues.userDetails.password"
                     @input="$set(formValues.userDetails, 'password', $event.target.value)"
                     :placeholder="$t('password-placeholder')"
                     type="password"
                     name="password"
                     id="password">
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div >
              <input class="password-confirmation"
                     :value="formValues.userDetails.passwordConfirmation"
                     @input="$set(formValues.userDetails, 'passwordConfirmation', $event.target.value)"
                     :placeholder="$t('password-confirmation-placeholder')"
                     type="password"
                     name="password-confirmation"
                     id="password-confirmation">
          </div>
        </div>
    </div>

    <legend>{{ $t('company-details') }}</legend>

    <div class="row">
        <div class="col-sm-12 col-md-6">
            <input :placeholder="$t('company-name-placeholder')"
                   :value="formValues.companyDetails.companyName"
                   @input="$set(formValues.companyDetails, 'companyName', $event.target.value)"
                   class="company-name"
                   maxlength="63"
                   type="text"
                   name="company-name"
                   id="company-name">
        </div>
        <div class="col-sm-12 col-md-6">
            <input :placeholder="$t('subdomain-placeholder')"
                   :value="formValues.companyDetails.subdomain"
                   @input="$set(formValues.companyDetails, 'subdomain', $event.target.value)"
                   class="subdomain"
                   maxlength="63"
                   type="text"
                   name="subdomain"
                   id="subdomain">
        </div>
    </div>

    <div class="agreements">
        <input
            :value="formValues.companyDetails.agreement"
            @input="$set(formValues.companyDetails, 'agreement', $event.target.value)"
            id="terms-of-service"
            type="checkbox"
            name="terms-of-service">
        <span>
            {{ $t('terms-of-service.agree') }} <a target="_blank">{{ $t('terms-of-service.terms-conditions') }}</a>
        </span>
    </div>

    <div>
        <button type="submit" v-on:click="userRegister">{{ $t('register') }}</button>
    </div>

    <div>
        <router-link
            class="redirection-link"
            to="/auth/sign-in">
                {{ $t('sign-in') }}
        </router-link>
        <router-link
            class="redirection-link"
            to="/auth/confirmation/new">
                {{ $t('confirmation-instructions') }}
        </router-link>
        <router-link
            class="redirection-link"
            to="/authunlock/new">
                {{ $t('unlock-instructions') }}
        </router-link>
    </div>
</div>
</template>

<script>
import './sign-up-form.scss';
import i18n from './sign-up-form-i18n.json';
import { mapGetters } from 'vuex'

export default {
    name: 'signUpForm',
    i18n,
    computed: {
        ...mapGetters({
            signUpFormValues: 'getFormValues'
        })
    },
    mounted () {
        this.formValues = JSON.parse(this.getFormValuesCopy());
    },
    data () {
        return {
            formValues: {
                userDetails: {},
                companyDetails: {}
            }
        }
    },
    methods: {
        getFormValuesCopy () {
            return JSON.stringify(this.signUpFormValues);
        },
        userRegister () {
            this.$store.commit('register', this.formValues);
            this.$router.push('/');
        }
    }
}
</script>
