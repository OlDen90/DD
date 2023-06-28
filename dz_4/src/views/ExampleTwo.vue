<!-- eslint-disable no-debugger -->
<template>
  <div id="app" class="main-app">
    <h1>{{ title }}</h1>
    <h2 v-text="subtitle" />
    <section class="cards-container" v-for="type in productTypes" :key="type">

    <!-- теперь надо сделать так, чтобы в зависимости от типа выводился нужный заголовок -->
      <span class="cards-container__title" v-html="getSectionTitle(type)" />
      <div class="cards">

        <div class="cards__card card" v-for="product in getProductsByType(type)" :key="product.id" >
          <div class="card__img-wrapper">
            <img class="card__img" v-bind:src="product.img">
          </div>
          
          <div class="card__info">
            <span class="card__info-name">{{ product.name }}</span>
            <span class="card__info-price">{{ product.price }} руб/кг</span>
          </div>
          <div class="card__footer">
            <div class="counter">
              <button class="counter__btn" :disabled="!canRemove(product)" @click="removeFromCart(product)">-</button>
              <span class="counter__number">{{ counter(product) }} кг</span>
              <button class="counter__btn" :disabled="!canAdd(product)" @click="addToCart(product)">+</button>
            </div>
            <span class="quantity" :class="{error: product.quantity < 1}" v-show="isVisibleLeftover">
              Осталось {{product.quantity}} кг
            </span>
          </div>
        </div>


        
      </div>
    </section>

    <!-- <svg width="24px" height="24px">
      <use xlink:href="#anonim" />
    </svg> -->

    <footer>
      <div class="cart">
        <span v-if="totalCost > 0">Вы выбрали товаров на {{ totalCost }} рублей</span>
        <button v-if="isVisibleCart">Перейти в корзину</button>
        <span v-else>Добавьте товары в корзину</span>
      </div>
    </footer>
  </div>
</template>

<script>
import "@/assets/icons/anonim.svg"
import {Products, ProductTypes, ProductTypeName} from "@/common/index"

export default {
  data() {
    return {
      title: 'Интернет-магазин',
      subtitle: 'какой-то подзаголовок',

      product: {
        id: '001',
        name: 'Яблоки',
        price: 130,
        img: 'https://frutsnab.ru/wa-data/public/shop/products/17/00/17/images/33/33.970.jpg',
        section: 'fruits',
        quantity: 5
      },

      cart: [],

      products: Products,
      productTypes: ProductTypes,
      productTypeName: ProductTypeName
    }
  },

  computed: {
    totalCost() {
      // заглушка, т.к. не доделана логика
      const totalCost = null

      return totalCost
    },

    isVisibleCart() {
      //   return false
      return false
    },

    isVisibleLeftover() {
    //   return false
      return true
    },
  },
  watch: {
  },

  methods: {
    addToCart(product) {
      const temp = {
        id: product.id,
        quantity: 1,
      }

      let item = this.cart.find(x => x.id === product.id)

      if(item) {
        item.quantity += 1
      } else {
        this.cart.push(temp)
      }

      product.quantity -= 1
    },

    counter(product) {
      const item = this.cart.find(x => x.id === product.id)
      return item ? item.quantity : 0
    },

    removeFromCart(product) {
      let item = this.cart.find(x => x.id === product.id)

      if(item && item.quantity !== 1) {
        item.quantity -= 1
      } else if (item && item.quantity === 1) {
        const index = this.cart.findIndex(x => x.id === product.id)
        this.cart.splice(index, 1)
      }

      product.quantity += 1
    },
    
    getTotalCost() {
      const totalCost = this.counter * this.product.price
      return totalCost
    },

    getSectionTitle(type) {
      return this.productTypeName[type]
    },

    getProductsByType(type) {
      return this.products.data.filter(x => x.type === type)
    },

    canAdd(product) {
      return product.quantity > 0
    },

    canRemove(product) {
      const index = this.cart.findIndex(x => x.id === product.id)
      return index != -1
    },
  }
}
</script>

<style lang="scss">
  .main-app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #333;
  }
  
  .cards-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &__title {
      text-transform: uppercase;
      color: #3d642d;
      font-size: 28px;
      margin-bottom: 24px;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 16px;
    box-shadow: #e8e8e8 0px 0px 8px 4px;

    &__img-wrapper {
      display: flex;
      align-items: center;
      width: 250px;
      height: 250px;
    }

    &__img {
      width: 250px;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      padding: 8px 0px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0px;
    }
  }

  .counter {
    &__number {
      margin: 0px 8px;
    }
  }

  .quantity {
    font-size: 12px;
    
    &.error {
      color: red;
    }
  }

  .cart {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
