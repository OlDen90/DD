<template>
  <section class="plug__container">
    <div class="plug">
      <div class="plug__body">
        <div class="plug__info">{{ plugInfo }}</div>
        <a class="plug__btn" href="#">{{ plugBtn }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      plugInfo: "Не создан ни один проект",
      plugBtn: "Добавить",
    };
  },
};
</script>

<style lang="scss">
@import "@/components/Plugs/plug.scss";
</style>