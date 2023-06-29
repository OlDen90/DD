<template>
  <div>
    <a :href="href" class="project-task__btn" @click="toggleDots" :class="{ 'project-task__btn--active': active }"
      ref="menuBtn" @mouseleave="hideBtn">
      <IconDots class="project-task__btn-dots" />
    </a>
    <ul v-if="active" class="project-task__btn-sub-list" ref="menuBtnSubList">
      <li><a href="#" class="project-task__btn-sub-link">Редактировать</a></li>
      <li><a href="#" class="project-task__btn-sub-link"><span>Удалить</span></a></li>
    </ul>
  </div>
</template>

<script>
import VueClickOutside from 'vue-click-outside';
import IconDots from '@/components/Button/IconDots.vue';

export default {
  components: {
    IconDots,
  },
  data() {
    return {
      href: "#",
      active: false,
    };
  },
  methods: {
    toggleDots() {
      if (!this.active) {
        this.active = true;
        this.$nextTick(() => {
          this.addClickOutsideEvent();
        });
      } else {
        this.active = false;
        this.removeClickOutsideEvent();
      }
    },
    addClickOutsideEvent() {
      document.addEventListener('click', this.handleOutsideClick);
    },
    removeClickOutsideEvent() {
      document.removeEventListener('click', this.handleOutsideClick);
    },
    handleOutsideClick(event) {
      if (
        this.$refs.menuBtn &&
        this.$refs.menuBtnSubList &&
        !this.$refs.menuBtn.contains(event.target) &&
        !this.$refs.menuBtnSubList.contains(event.target)
      ) {
        this.active = false;
        this.removeClickOutsideEvent();
      }
    },
    hideBtn() {
      if (!this.active) {
        this.active = false;
      }
    }
  },
  directives: {
    clickOutside: VueClickOutside.directive,
  },
};
</script>

<style lang="scss"></style>
