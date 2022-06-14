<template>
  <div :class="classes">
      <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
  import './card.css';
  import { computed } from 'vue';

  const props = defineProps({
    title: {
      type: String
    },
    border: {
      type: Boolean,
      default: false
    }
  });

  const classes = computed(() => ({
    'card': true,
    'card--border': props.border,
  }));

</script>