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
      plugInfo: "Ни один проект не соответствует результатам поиска",
    };
  },
};
</script>

<style lang="scss">
@import "@/components/Plugs/plug.scss";
</style>