<template>
  <div id="app" class="main-app">
    <!-- <h1>Интернет-магазин</h1> -->
    <h1>{{ title }}</h1>
    
    <!-- v-text  -->
    <h2 v-text="subtitle" />

    <section class="cards-container">
        <!-- v-html  -->
      <span class="cards-container__title" v-html="sectionTitle" /> 
      <div class="carsd">
        <!-- v-bind:style  -->
        <!-- <div class="cards__card card" :style="{display: display, flexDirection: direction, width: cardWidth + 'px'}"> -->
        <!-- Используемый объект желательно не указывать прямо в шаблоне -->
        <!-- <div class="cards__card card" :style="cardStyles"> -->
        <div class="cards__card card" :style="[cardStyles, cardStyles2]">
          <!-- v-bind -->
          <!-- у v-bind есть сокращенная запись - : -->

          <!-- <img src="product.img"> Это будет ошибкой -->
          <!-- <img class="card__body-img" v-bind:src="product.img" width="250"> -->
          <img class="card__img" v-bind:src="product.img" width="250">
          <div class="card__info">
            <span class="card__info-name">{{ product.name }}</span>
            <span class="card__info-price">{{ product.price }} руб/кг</span>
          </div>
          <div class="card__footer">
            <div class="counter">
              <!-- <button class="counter__btn">-</button> -->
              <!-- v-on  -->
              <button class="counter__btn" :disabled="counter < 1" v-on:click="removeFromCart()">-</button>
              <span class="counter__number">{{ counter }} кг</span>
              <!-- у v-on есть сокращенная запись - @ -->
              <button class="counter__btn" :disabled="product.quantity < 1" @click="addToCart()">+</button>
            </div>
            <!-- v-bind:class -->
            <!-- 1 <span class="quantity" :class="{error: product.quantity < 1}">Осталось {{product.quantity}} кг</span> -->
            <!-- 2 <span class="quantity" :class="errorClass">Осталось {{product.quantity}} кг</span> -->
            <!-- 3 <span class="quantity" :class="[errorClass, errorClass, {qwerty: true}]">Осталось {{product.quantity}} кг</span> -->

            <!-- v-show -->
            <span class="quantity" :class="{error: product.quantity < 1}" v-show="isVisibleLeftover">
              Осталось {{product.quantity}} кг
            </span>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="cart">
      <!-- v-if v-else -->
        <span v-if="totalCost > 0">Вы выбрали товаров на {{ totalCost }} рублей</span>
        <!-- <span>Итого: {{ getTotalCost() }} рублей</span> Так делать не рекомендуется. По возможности используйте вычислительные св-ва, а не методы -->
        <button v-if="isVisibleCart">Перейти в корзину</button>
        <!-- между ними при необходимости можно добавить v-else-if  -->
        <span v-else>Добавьте товары в корзину</span>
      </div>
    </footer>

    <!-- пример иконки -->
    <svg width="24px" height="24px">
      <use xlink:href="#anonim" />
    </svg>
  </div>
</template>

<script>
import "@/assets/icons/anonim.svg"

export default {
  data() {
    return {
      title: 'Интернет-магазин',
      subtitle: 'какой-то подзаголовок',
      sectionTitle: '<p style="color: #3d642d; font-size: 28px; ">Секция 1</p>',

      product: {
        id: '001',
        name: 'Яблоки',
        price: 130,
        img: 'https://frutsnab.ru/wa-data/public/shop/products/17/00/17/images/33/33.970.jpg',
        section: 'fruits',
        quantity: 5
      },

      display: 'flex',
      direction: 'column',
      cardWidth: 250,

      cardStyles: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
      },

      cardStyles2: {
        boxShadow: '#e8e8e8 0px 0px 8px 4px',
        padding: '8px',
      },

      counter: 0,
      
      errorClass: {
        error: true,
      },

      cart: {
        totalCost: 0,
      }
    }
  },

  computed: {
    totalCost() {
      const totalCost = this.counter * this.product.price
      return totalCost
    },

    isVisibleCart() {
      return this.totalCost > 0
    },

    isVisibleLeftover() {
      return this.product.quantity < 10
    }
  },

  // Когда есть данные, которые необходимо обновлять при изменении других данных, 
  // возникает соблазн избыточно использовать только этот подход.
  // Но, как правило, лучше использовать вычисляемые свойства, а не императивный коллбэк в watch
  watch: {
    // counter() {
    //   console.log("!!!")
    // }

    // counter(newVal, oldVal) {
    //   console.log(newVal, oldVal)
    // }

    counter(newVal, oldVal) {
      if(newVal > oldVal) {
        console.log("Добавлено в корзину")
      } else {
        console.log("Удалено из корзины")
      }
    }
  },

  methods: {
    addToCart() {
      this.counter += 1
      this.product.quantity -= 1
    },

    removeFromCart() {
      this.counter -= 1
      this.product.quantity += 1
    },
    
    getTotalCost() {
      const totalCost = this.counter * this.product.price
      return totalCost
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/style.scss';
  // .main-app {
  //   font-family: Verdana, Geneva, Tahoma, sans-serif;
  //   color: #333;
  // }
  
  // .cards-container {
  //   display: flex;
  //   flex-direction: column;

  //   &__title {
  //     text-transform: uppercase;
  //   }

  //   .cards {
  //     display: flex;
  //   }
  // }

  // .card {
  //   display: flex;
  //   flex-direction: column;
  //   padding: 16px;

  //   &__info {
  //     display: flex;
  //     justify-content: space-between;
  //     padding: 8px 0px;
  //   }

  //   &__footer {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     padding: 8px 0px;
  //   }
  // }

  // .counter {
  //   &__number {
  //     margin: 0px 8px;
  //   }
  // }

  // .quantity {
  //   font-size: 12px;
    
  //   &.error {
  //     color: red;
  //   }
  // }

  // .cart {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: end;
  //   gap: 16px;

  //   position: fixed;
  //   right: 24px;
  //   bottom: 24px;
  // }
  </style>
