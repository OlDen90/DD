<template>
  <section class="users">
    <div class="users-container">
      <div class="users__page">
        <div class="users__photo">
          <img :src="logoSrc" alt="">
        </div>
        <div class="users__content">
          <div class="users__name">{{ name }}</div>
          <div class="users__info">{{ info }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      logoSrc: './assets/Baranov_V_V.png',
      name: 'Фамилия Имя Отчество',
      info: 'Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка.И еще раз очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка.',
    }
  }
};
</script>
  
<style lang="scss">
@import '@/components/Users/users.scss';
</style>


