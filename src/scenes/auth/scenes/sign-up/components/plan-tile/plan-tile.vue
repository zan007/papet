<template>
<div class="plan-tile text-center" :class="{'highlight': highlight}">
    <header>
        <div class="price-tag">&#8364;{{plan.price}}</div>
        <div class="plan-name">{{$t('types.' + plan.name)}}</div>
        <div class="plan-duration" v-if="!allowExpand">{{plan.duration.value}} {{plan.duration.unit}}</div>
    </header>
    <div class="features">
        <slot>
        </slot>
    </div>
    <div class="select-button" v-on:click="expandDurationMenu">
        {{ $t('select-plan') }}
    </div>
    <div class="duration-details" v-show="showDurationMenu">
        <div class="header">{{ $t('choose-duration') }}</div>
        <div class="close-icon" v-on:click="collapseDurationMenu">x</div>
        <div class="price-container">
            <div class="price">
                &#8364;{{plan.price}} <strong>{{plan.duration.value}} {{plan.duration.unit}}</strong>
            </div>
            <button class="choose-button" v-on:click="choosePlan">{{ $t('get-it') }}</button>
        </div>
        <div class="trial-info" v-show="plan.price">
            {{ $t('free-trial') }}
        </div>
    </div>
</div>
</template>

<script>
import './plan-tile.scss';
import i18n from './plan-tile-i18n.json';
import { mapGetters } from 'vuex'

export default {
    name: 'planTile',
    i18n,
    props: ['plan', 'highlight', 'allowExpand'],
    computed: {
        ...mapGetters({
            currentStep: 'getCurrentStep',
            availableSteps: 'getAvailableSteps'
        })
    },
    data () {
        return {
            showDurationMenu: false
        }
    },
    methods: {
        expandDurationMenu () {
            if (this.allowExpand) {
                this.showDurationMenu = true;
            }
        },
        collapseDurationMenu () {
            this.showDurationMenu = false;
        },
        choosePlan () {
            this.$store.commit('selectPlan', this.plan);
            this.$store.commit('changeStep', this.availableSteps[1]);
        }
    }
}
</script>
