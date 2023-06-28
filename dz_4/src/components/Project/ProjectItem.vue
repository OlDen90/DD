<template>
  <div class="project-task__column">
    <div class="project-task__rows">
      <div class="project-task__row row-top">
        <div class="project-task__text">{{ project.text }}</div>
      </div>
      <div class="project-task__row row-bottom">
        <div class="project-task__left-side">
          <div class="project-task__point">{{ project.point }}</div>
          <div class="project-task__creator">{{ project.creator }}</div>
        </div>
        <div class="project-task__right-side">
          <div class="project-task__spotter">{{ project.spotter }}</div>
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
    project: {
      type: Object,
      required: true,
    },
  },

  // data() {
  //   return {
  //     text: "Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка.",
  //     point: "#1",
  //     creator: "Иванов И.И. создал 1 час назад",
  //     spotter: "Баранов В.В. изменил 1 минуту назад",
  //   };
  // },
};
</script>

<style lang="scss">
</style>