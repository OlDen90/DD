<template>
  <div class="project-task__column">
    <div class="project-task__rows">
      <div class="project-task__row row-top">
        <div class="project-task__text">{{ task.text }}</div>
        <img class="project-task__logo" :src="task.logoSrc" alt="" />
      </div>
      <div class="project-task__row row-bottom">
        <div class="project-task__left-side">
          <div class="project-task__point">{{ task.point }}</div>
          <div class="project-task__creator">{{ task.creator }}</div>
          <div class="project-task__status">{{ task.status }}</div>
        </div>
        <div class="project-task__right-side">
          <div class="project-task__spotter">{{ task.spotter }}</div>
        </div>
      </div>
    </div>
    <ButtonIcon></ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from "@/components/Button/ButtonIcon.vue";
export default {
  components: {
    ButtonIcon,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  // data() {
  //   return {
  //     text: "Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка.",
  //     point: "#1",
  //     creator: "Иванов И.И. создал 1 час назад",
  //     status: "Черновик",
  //     spotter: "Баранов В.В. изменил 1 минуту назад",
  //   };
  // },
};
</script>

<style lang="scss">
</style>
