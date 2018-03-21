<template>
    <section>
        <h1 class="ra-title">Tooltip</h1>
        <section>
            <h2 class="ra-subtitle">Tooltip wrapper</h2>
            <md-button class="ra-button md-raised" v-on:click="toggleTooltip">
                Change tooltip msg and position
            </md-button>
            <md-button class="ra-tooltip-container i-button md-icon-button">
                <i class="material-icons">help</i>
                <md-tooltip v-if="!tooltipChanged" md-direction="top">{{ tooltipMessage }}</md-tooltip>
                <md-tooltip v-if="tooltipChanged" md-direction="bottom">{{ tooltipMessage }}</md-tooltip>
            </md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">Custom position + defined message</h2>
            <md-button class="ra-tooltip-container i-button md-icon-button">
                <i class="material-icons">help</i>
                <md-tooltip md-direction="top">Hello tooltip!</md-tooltip>
            </md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">Custom icon</h2>
            <md-button class="ra-tooltip-container i-button md-icon-button">
                <i class="material-icons">star</i>
                <md-tooltip md-direction="top">Hello tooltip with star icon</md-tooltip>
            </md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">Custom content instead of icon</h2>
            <md-button class="ra-tooltip-container ra-custom-tooltip-container">
                This is some custom content
                <md-tooltip md-direction="right">Hello tooltip without icon</md-tooltip>
            </md-button>
        </section>
    </section>
</template>

<script>
export default {
    name: 'styleguide-tooltip',
    data () {
        return {
            tooltipChanged: false,
            tooltipMessage: 'Initial tooltip message'
        }
    },
    methods: {
        toggleTooltip () {
            this.tooltipChanged = true;
            this.tooltipMessage = 'Brand new message'
        }
    }
}
</script>
