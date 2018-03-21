<template>
    <section>
        <h1 class="ra-title">Buttons</h1>
        <section>
            <h2 class="ra-subtitle">md-button .ra-button .link</h2>
            <md-button class="ra-button link">Link button</md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">md-button .ra-button .md-raised</h2>
            <md-button class="ra-button md-raised">Normal button</md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">md-button .ra-button .md-raised [disabled]</h2>
            <md-button class="ra-button md-raised" disabled>Disabled button</md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">buttons next to each other</h2>
            <md-button class="ra-button md-raised">Normal button 1</md-button>
            <md-button class="ra-button md-raised">Normal button 2</md-button>
            <md-button class="ra-button link">Link button 1</md-button>
            <md-button class="ra-button link">Link button 2</md-button>
        </section>
        <section>
            <h2 class="ra-subtitle">search circle</h2>
            <md-button class="ra-button md-icon-button">
                <i class="material-icons">search</i>
            </md-button>
        </section>
    </section>
</template>

<script>
export default {
    name: 'styleguide-buttons'
}
</script>
