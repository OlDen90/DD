<template>
  <div class="example">
    <a :href="href" class="menu__btn btn-drop-down" @click="toggleDropdown" :class="{ 'menu__btn--active': active }"
      ref="menuBtn">
      <img class="menu__btn-logo" :src="logoSrc" alt="" />
      <DropDown class="menu__btn-drop-down" />
    </a>
    <ul v-if="active" class="menu__btn-sub-list" ref="menuBtnSubList">
      <li><a href="#" class="menu__btn-sub-link">Профиль</a></li>
      <li><a href="#" class="menu__btn-sub-link">Выход</a></li>
    </ul>
  </div>
</template>

<script>
import VueClickOutside from 'vue-click-outside';
import DropDown from '@/components/Button/DropDown.vue';

export default {
  components: {
    DropDown,
  },
  data() {
    return {
      href: "#",
      logoSrc: "./assets/Baranov_V_V.png",
      active: false,
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

