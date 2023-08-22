<template>
  <section class="plug__container">
    <div class="plug">
      <div class="plug__body">
        <div class="plug__info">{{ plugSearchInfo }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    plugSearchInfo: {
      type: String,
      default: "Ни один элемент не соответствует результатам поиска",
    }
  },
};
</script>

<!-- НЕ УДАЛЯТЬ, ЗАГОТОВКА -->
<!-- Что вставить в родительский файл
<PlugSearch v-else :plugSearchInfo="projectPlugSearchInfo"></PlugSearch>
или
<PlugSearch v-else :plugSearchInfo="tasksPlugSearchInfo"></PlugSearch>
или
<PlugSearch v-else :plugSearchInfo="usersPlugSearchInfo"></PlugSearch>

import PlugSearch from "@/components/Plugs/PlugSearch.vue";
components: {
  PlugSearch,
},
data() {
  return {
    projectPlugSearchInfo: "Не создан ни один проект",
    или
    tasksPlugSearchInfo: "Ни одна задача не соответствует результатам поиска/фильтрации",
    или
    usersPlugSearchInfo: "Нет ни одного пользователя",
  };
}, -->

<style lang="scss">
@import "@/components/Plugs/plug.scss";
</style>