<!-- <template>
  <div>
    <a :href="href" class="menu__btn btn-drop-down" @click="toggleDropdown" :class="{ 'menu__btn--active': active }">
      <img class="menu__btn-logo" :src="logoSrc" alt="" />
      <span v-html="dropDown"></span>
    </a>
    <ul v-if="active" class="menu__btn-sub-list">
      <li><a href="#" class="menu__btn-sub-link">Профиль</a></li>
      <li><a href="#" class="menu__btn-sub-link">Выход</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropDown: `<svg class="menu__btn-drop-down" width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99999 4.95L2.04999 0L0.635986 1.414L6.99999 7.778L13.364 1.414L11.95 0L6.99999 4.95Z" />
          </svg>`,
      href: "#",
      logoSrc: "./assets/Baranov_V_V.png",
      active: false,
    };
  },
  methods: {
    toggleDropdown() {
      if (!this.disabled) {
        this.active = !this.active;
      }
    },
  },
};
</script>

<style lang="scss"></style> -->


<template>
  <div class="example">
    <a :href="href" class="menu__btn" @click="toggleDropdown" :class="{ 'menu__btn--active': active }" ref="menuBtn">
      <img class="menu__btn-logo" :src="logoSrc" alt="" />
      <span v-html="dropDown"></span>
    </a>
    <ul v-if="active" class="menu__btn-sub-list" ref="menuBtnSubList">
      <li><a href="#" class="menu__btn-sub-link">Профиль</a></li>
      <li><a href="#" class="menu__btn-sub-link">Выход</a></li>
    </ul>
  </div>
</template>

<script>
import VueClickOutside from 'vue-click-outside';

export default {
  data() {
    return {
      dropDown: `<svg class="menu__btn-drop-down" width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99999 4.95L2.04999 0L0.635986 1.414L6.99999 7.778L13.364 1.414L11.95 0L6.99999 4.95Z" />
          </svg>`,
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

