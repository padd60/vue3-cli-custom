<template>
    <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{msg:string}>();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
