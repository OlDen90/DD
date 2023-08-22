<template>
  <section class="plug__container">
    <div class="plug">
      <div class="plug__body">
        <div class="plug__info">{{ plugInfo }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      plugInfo: "Ни одна задача не соответствует результатам поиска/фильтрации",
    };
  },
};
</script>

<style lang="scss">
@import "@/components/Plugs/plug.scss";
</style>