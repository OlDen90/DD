<template>
  <form class="search-box">
    <div class="search-box-reset">
      <input class="search-txt" type="text" :placeholder=placeholder />
      <button type="reset" class="reset-btn" v-if="showIcon">
        <img :src=icoClear alt="" />
      </button>
    </div>
    <button type="submit" class="search-btn"><img :src=icoSearch alt="" /></button>
  </form>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Поиск...",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: "",
    },
    icoClear: {
      type: String,
      default: "./assets/icoClear.png"
    },
    icoSearch: {
      type: String,
      default: "./assets/icoSearch.png"
    },
  },
};
</script>
<style lang="scss">
@import '@/components/InputSearch/SearchField.scss';
</style>
