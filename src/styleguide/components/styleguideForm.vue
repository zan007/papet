<template>
    <div>
        <h1 class="ra-title">Form</h1>
        <form novalidate @submit.stop.prevent="submit">
            <section>
                <h2 class="ra-subtitle">md-input-container .ra-container</h2>
                <md-input-container class="ra-input-container">
                    <label>PLACEHOLDER TEXT</label>
                    <md-input></md-input>
                </md-input-container>
                <md-input-container class="ra-input-container">
                    <label>INPUT LABEL</label>
                    <md-input v-model="initialValue"></md-input>
                </md-input-container>
            </section>
            <section>
                <h2 class="ra-subtitle">md-input-container .ra-input-container .ra-input-fixed-width</h2>
                <md-input-container class="ra-input-container ra-input-fixed-width">
                    <label>Input label</label>
                    <md-input></md-input>
                </md-input-container>
            </section>
        </form>
    </div>
</template>

<script>
export default {
    name: 'styleguide-form',
    data () {
        return {
            initialValue: 'Predefined value'
        };
    }
}
</script>
