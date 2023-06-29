<template>
  <form class="search-box">
    <div class="search-box-reset">
      <input class="search-txt" type="text" :placeholder=placeholder />
      <button type="reset" class="reset-btn">
        <img :src=icoClear alt="" />
      </button>
    </div>
    <button type="submit" class="search-btn"><img :src=icoSearch alt="" /></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "Поиск...",
      icoClear: "./assets/icoClear.png",
      icoSearch: "./assets/icoSearch.png"
    };
  },
};
</script>
<style lang="scss">
@import '@/components/InputSearch/SearchField.scss';
</style>
