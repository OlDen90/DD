<template>
  <div>
    <a :href="href" class="project-task__btn" @click="toggleDots" :class="{ 'project-task__btn--active': active }"
      ref="menuBtn" @mouseleave="hideBtn">
      <IconDots class="project-task__btn-dots" v-if="showIcon" :iconPath="customIconPath" :iconWidth="customIconWidth"
        :iconHeight="customIconHeight" :iconViewBox="customIconViewBox" />
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
  props: {
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      href: "#",
      active: false,

      customIconPath: 'M6.99999 4.95L2.04999 0L0.635986 1.414L6.99999 7.778L13.364 1.414L11.95 0L6.99999 4.95Z', // пример нового пути для иконки
      customIconWidth: '16', // пример новой ширины иконки
      customIconHeight: '12', // пример новой высоты иконки
      customIconViewBox: '0 0 14 8', // пример новый атрибут иконки
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
