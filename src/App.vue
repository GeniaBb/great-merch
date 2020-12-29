<template>
  <div id="app">
    <div>
      <app-menu></app-menu>
    </div>

    <div>
      <app-mainMenu></app-mainMenu>
    </div>

    <div class="search">
      <button class="search__btn"></button>
    </div>

    <div class="carousel">
      <div class="carousel-tape" v-bind:style="`right: ${carousel.right}vw`">
        <div class="carousel-tape__element carousel-tape__element--first"></div>
        <div class="carousel-tape__element carousel-tape__element--second"></div>
        <div class="carousel-tape__element carousel-tape__element--third"></div>
      </div>

      <div class="carousel__btns">
        <button class="carousel__btn" @click="moveCarousel(offset.oneBtn)" :class="activeBtn(offset.oneBtn)"></button>
        <button class="carousel__btn" @click="moveCarousel(offset.twoBtn)" :class="activeBtn(offset.twoBtn)"></button>
        <button class="carousel__btn" @click="moveCarousel(offset.threeBtn)" :class="activeBtn(offset.threeBtn)"></button>
      </div>
    </div>

    <div>
      <app-productCard ></app-productCard>
    </div>

    <div class="delivery">
      <h2>Доставка и оплата</h2>
      <p class="heading-delivery">Оплата</p>
      <p>- Мы работаем по 100% предоплате.</p>
      <p>- Оплата только с банковской карты или переводом на Яндекс.Деньги</p>
      <p>- Отправка товара только после полной оплаты заказа</p>
      <p class="heading-delivery">Доставка</p>
      <p>- Доставка Почтой России, отправка по России от 300р., по всему миру от 600р.</p>
      <p>- При оформлении доставки Почтой России, получение товара происходит на почтовом отделении.</p>
      <p>- Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.</p>
      <p>- Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.</p>
      <p>- Возможна доставка курьерской службой EMS, тариф рассчитывается при оформлении заказа.</p>
      <p>- Для жителей Санкт-Петербурга возможен самовывоз по адресу Лиговский пр-т 64, магазин Great Merch</p>
      <p>- Если в описании товара указано что это предзаказ,  то ваш заказ будет отправлен после изготовления партии. Сроки изготовления указаны на странице товара.</p>
      <p>- Срок доставки от 7 до 30 дней, в зависимости от региона и способа доставки.</p>
      <p>- В комментариях к заказу указывайте страницу ВК для оперативной связи.</p>
      <p>ИП Белова Валерия Дмитриевна</p>
      <p>ИНН: 111111111111, ОГРНИП:00000000000000</p>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  @import "./assets/styles/_variables.scss";

  * {
    box-sizing: border-box;
    font-size: 16px;
    color: $font-color;
    font-weight: 400;
    font-family: Roboto;
    font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
  }

.search {
  
  &__btn {
    width: 68px;
    height: 68px;
    outline: none;
    border-radius: 50%;
    border: none;
    background-size: 36px;
    background-image: url("./assets/search.svg");
    background-color: $main-color;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 3px 11px rgba(0, 0, 0, 0.25);
    margin-left: 30px;
    position: relative;
    bottom: 20px;
    cursor: pointer;
  }
}

.carousel {
  width: 100vw;
  overflow-x: hidden;

  .carousel-tape {
    width: 300%;
    display: flex;
    position: relative;
    transition: 0.3s;

    &__element {
      height: 480px;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      &--first {
      background-image: url("./assets/carousel_kuzma.jpg");
      }

      &--second {
        background-image: url("./assets/carousel_gp.jpg");
      }

      &--third {
        background-image: url("./assets/carousel_st.jpg");
      }
    }
  }

  &__btns {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 25px;
  }

  &__btn {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: $gray-color;
    border: none;
    outline: none;
    margin-right: 24px;
  }
}

.active-btn {background: $main-color;}



.delivery {
  width: 611px;
  display: flex;
  flex-direction: column;
  margin: auto;

  h2 {
    font-size: 28px;
    line-height: 34px;
  }
  .heading-delivery {
    font-weight: 500;
  }

  p {
    line-height: 1.8em;
  }
}
</style>

<script>
export default {
  // Данные
  data: () => ({
    carousel: {
      right: 0,
    },
    offset: {
      oneBtn: 0,
      twoBtn: 100,
      threeBtn: 200
    },
    isActive: true,
  }),

  // Методы
  methods: {
    moveCarousel(offset) {
      this.carousel.right = offset
      if (this.carousel.right >= 300) {
        this.carousel.right = 0
      }
    },
    activeBtn: function(offset) {
      return ({
        'active-btn': offset === this.carousel.right
      })
    },
  }
}
</script>
