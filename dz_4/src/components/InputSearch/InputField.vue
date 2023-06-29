<template>
  <input class="input-text" type="text" :placeholder=placeholder />
</template>

<script>
export default {
  data() {
    return {
      placeholder: "Поиск...",
    };
  },

};
</script>
<style lang="scss">
@import '@/components/InputSearch/InputField.scss';
</style>
