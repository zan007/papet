<template>
    <div class="styleguide-colors">
        <div class="color-item"
            v-for="(color, index) in colorsList" :key="index">
            <div class="color-item-preview"
                v-bind:class="color">
            </div>
            <div class="color-item-name">#{{ color }}</div>
        </div>
    </div>
</template>

<script>
const COLORS_LIST = [
    'white',
    'white-two',
    'white-three',
    'white-four',
    'warm-grey',
    'warm-grey-two',
    'greyish-brown',
    'black',
    'primary-blue',
    'apple-green',
    'true-green',
    'red',
    'pink'
];

export default {
    name: 'styleguide-colors',
    data () {
        return {
            colorsList: COLORS_LIST
        }
    }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables/index';

.styleguide-colors {
    display: flex;
    flex-wrap: wrap;
}

.color-item {
    display: flex;
    flex-basis: 33%;
    align-items: center;
    margin-bottom: 16px;

    @media (max-width: 900px) {
        flex-basis: 50%;
    }
}

.color-item-name {
    margin-left: 16px;
}

.color-item-preview {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 100%;
    border: 2px solid rgba(0, 0, 0, 0.15);
}

@each $class, $color in $ra-colors {
  .#{$class} {
    background: $color;
  }
}
</style>
