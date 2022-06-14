<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1> <!-- add dynamic class binding here - use script section -->
  <h1 class="title">Make me red</h1> <!-- add class and use css form style section -->
</template>

<style>
.title {
  color: red;
}
</style>