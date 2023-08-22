<template>
  <input class="input-text" type="text" :placeholder=placeholder />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Введите текст...",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    value: String,
  },
};
</script>
<style lang="scss">
@import '@/components/InputSearch/InputField.scss';
</style>
