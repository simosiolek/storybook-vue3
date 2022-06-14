<script setup>
import { reactive, ref } from 'vue'
  
const counter = reactive({ count: 0 })
const message = ref('Ultra Dupa Maryna')  

</script>

<template>
  <h1>{{ message.split('').join('-') }}</h1>
  <p>The nunber is: <b>{{ counter.count }}</b></p>	
</template>