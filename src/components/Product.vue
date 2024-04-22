<script setup lang="ts">
  import {defineProps} from 'vue'
  const {product} = defineProps({
    product: Array
  })
</script>

<template>
  <div>
    <span class="title">{{product.name}}</span>
    <span>{{product.description}}</span>
    <span>{{product.price}}</span>
  </div>
</template>

<style scoped>
  .title {
    font-weight: bold;
  }
</style>
