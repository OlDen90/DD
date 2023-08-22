<template>
  <div class="project-task__column">
    <div class="project-task__item">
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
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>