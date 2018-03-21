<template>
    <section>
        <h1 class="ra-title">Progress circle</h1>
        <section>
            <md-spinner class="ra-progress-circle" md-indeterminate :md-size="50"></md-spinner>
            <md-spinner class="ra-progress-circle" md-indeterminate :md-size="100"></md-spinner>
            <md-spinner class="ra-progress-circle" md-indeterminate :md-size="150"></md-spinner>
        </section>
    </section>
</template>

<script>
export default {
    name: 'styleguide-spinner'
}
</script>
