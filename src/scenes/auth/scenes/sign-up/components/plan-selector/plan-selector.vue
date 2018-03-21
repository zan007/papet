<template>
<div class="plan-selector">
    <div class="advert">
        <h1>{{ $t('advert.header') }}</h1>
        <h3>{{ $t('advert.sub-header') }}</h3>
    </div>
    <div class="available-plans">
        <div v-for="plan in availablePlans" :key="plan.name">
            <plan-tile :plan="plan" :allow-expand="true">
                <ul>
                    <li>
                        {{$t('plan.service-limit')}} <strong>{{plan.serviceLimit}}</strong>
                    </li>
                    <li>
                        {{$t('plan.alerts')}}
                        <strong>{{plan.alerts}}</strong>
                    </li>
                    <li>
                        {{$t('plan.alert-conditions')}} <strong>{{plan.alertConditions}}</strong>
                    </li>
                </ul>
            </plan-tile>
        </div>
    </div>
</div>
</template>

<script>
import './plan-selector.scss';
import planTile from '../plan-tile/plan-tile.vue';
import i18n from './plan-selector-i18n.json';
import {mapGetters} from 'vuex';

export default {
    name: 'planSelector',
    i18n,
    components: {planTile},
    computed: {
        ...mapGetters({
            availablePlans: 'getAvailablePlans'
        })
    }
}
</script>
