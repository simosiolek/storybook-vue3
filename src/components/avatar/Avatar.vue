<template>
  <div :class="classes">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
import './avatar.css';
import { reactive, computed } from 'vue';

export default {
  name: 'avatar',

  props: {
    title: {
      type: String,
      default: 'AA'
    },
    alt: {
      type: Boolean,
      default: false,
    },
    /**
    * 'small' | 'regular'
    */
    size: {
      type: String,
      default: 'regular'
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'avatar': props.title,
        'avatar--alt': props.alt,
        'avatar--small': props.size == 'small' 
      })),

      onClick() {
        emit('click');
      }
    }
  }
};
</script>