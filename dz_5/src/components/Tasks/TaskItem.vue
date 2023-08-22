
<template>
  <div class="project-task__column">
    <div class="project-task__item">
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
      <ButtonIcon :showIcon="true"></ButtonIcon>
    </div>
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
};
</script>

<style lang="scss"></style>
