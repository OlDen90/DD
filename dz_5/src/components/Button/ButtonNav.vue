<template>
  <a :href="href" class="menu__btn menu__btn-fon" :class="{ 'disabled': disabled }">
    <span v-if="showText">{{ text }}</span>
  </a>
</template>
  
<script>
export default {
  props: {
    href: String,
    text: String,
    disabledCondition: Boolean,
    showText: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    disabled() {
      return this.disabledCondition;
    },
  },
};
</script>
  
<style lang="scss">
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>

