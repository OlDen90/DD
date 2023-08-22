<template>
  <svg :width="iconWidth" :height="iconHeight" :viewBox="iconViewBox" xmlns="http://www.w3.org/2000/svg">
    <path :d="iconPath" />
  </svg>
</template>

<script>
export default {
  name: 'IconDropdown',
  props: {
    iconPath: {
      type: String,
      default: 'M6.99999 4.95L2.04999 0L0.635986 1.414L6.99999 7.778L13.364 1.414L11.95 0L6.99999 4.95Z',
    },
    iconWidth: {
      type: String,
      default: '14',
    },
    iconHeight: {
      type: String,
      default: '8',
    },
    iconViewBox: {
      type: String,
      default: '0 0 14 8',
    },
  },
};
</script>

<style lang="scss"></style>