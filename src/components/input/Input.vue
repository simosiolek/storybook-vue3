<template>
  <label>{{ label }}</label>
  <input :type="type" value="">
</template>

<!-- <script>
export default {
  name: 'Input',

  props: {
    /**
    * Field label
    */
    label: {
      type: String
    },
    /**
     * The size of the button allows only some values
     */
    type: {
      type: String,
      default: 'text',
      required: true
    }
  }
}
</script> -->

<script setup>
import './input.css';

const props = defineProps({
  /**
  * Input label */
  label: {
    type: String
  },
  /**
  * Set input type */
  type: {
    type: String,
    default: 'text',
    required: true
  }
});
</script>