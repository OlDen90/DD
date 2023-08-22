<template>
  <div>
    <a :href="href" class="menu__btn btn-drop-down" @click="toggleDropdown" :class="{ 'menu__btn--active': active }"
      ref="menuBtn">
      <img class="menu__btn-logo" :src="logoSrc" alt="" />
      <IconDropdown class="menu__btn-drop-down" v-if="showIcon" :iconPath="customIconPath" :iconWidth="customIconWidth"
        :iconHeight="customIconHeight" :iconViewBox="customIconViewBox" />
      <span v-if="showTitle" class="menu__btn-title">{{ title }}</span>
    </a>
    <ul v-if="active" class="menu__btn-sub-list" ref="menuBtnSubList">
      <li><a href="#" class="menu__btn-sub-link">Профиль</a></li>
      <li><a href="#" class="menu__btn-sub-link">Выход</a></li>
    </ul>
  </div>
</template>

<script>
import VueClickOutside from 'vue-click-outside';
import IconDropdown from '@/components/Button/IconDropdown.vue';

export default {
  components: {
    IconDropdown,
  },
  props: {
    showIcon: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Dropdown',
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      href: "#",
      logoSrc: "./assets/Baranov_V_V.png",
      active: false,
      customIconPath: 'M3.5 11.5C3.5 11.8978 3.34196 12.2794 3.06066 12.5607C2.77936 12.842 2.39782 13 2 13C1.60218 13 1.22064 12.842 0.93934 12.5607C0.658035 12.2794 0.5 11.8978 0.5 11.5C0.5 11.1022 0.658035 10.7206 0.93934 10.4393C1.22064 10.158 1.60218 10 2 10C2.39782 10 2.77936 10.158 3.06066 10.4393C3.34196 10.7206 3.5 11.1022 3.5 11.5ZM3.5 6.5C3.5 6.89782 3.34196 7.27936 3.06066 7.56066C2.77936 7.84196 2.39782 8 2 8C1.60218 8 1.22064 7.84196 0.93934 7.56066C0.658035 7.27936 0.5 6.89782 0.5 6.5C0.5 6.10218 0.658035 5.72064 0.93934 5.43934C1.22064 5.15804 1.60218 5 2 5C2.39782 5 2.77936 5.15804 3.06066 5.43934C3.34196 5.72064 3.5 6.10218 3.5 6.5ZM3.5 1.5C3.5 1.89782 3.34196 2.27936 3.06066 2.56066C2.77936 2.84196 2.39782 3 2 3C1.60218 3 1.22064 2.84196 0.93934 2.56066C0.658035 2.27936 0.5 1.89782 0.5 1.5C0.5 1.10218 0.658035 0.720644 0.93934 0.43934C1.22064 0.158035 1.60218 0 2 0C2.39782 0 2.77936 0.158035 3.06066 0.43934C3.34196 0.720644 3.5 1.10218 3.5 1.5Z', // пример нового пути для иконки
      customIconWidth: '26', // пример новой ширины иконки
      customIconHeight: '22', // пример новой высоты иконки
      customIconViewBox: '0 0 4 13', // пример новый атрибут иконки
    };
  },
  methods: {
    toggleDropdown() {
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
  },
  directives: {
    ClickOutside: VueClickOutside.directive,
  },
};
</script>

<style lang="scss"></style>

