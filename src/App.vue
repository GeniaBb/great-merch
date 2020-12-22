<template>
  <div id="app">
    <header class="page-header">
      <img src="./assets/logo.png" alt="Логотип магазина" class="logo">
      <div class="social-media-icons">
        <a href="https://www.instagram.com/" class="social-media-icons__icon social-media-icons__icon--inst"></a>
        <a href="https://facebook.com/" class="social-media-icons__icon social-media-icons__icon--fb"></a>
        <a href="https://vk.com/" class="social-media-icons__icon social-media-icons__icon--vk"></a>
      </div>
    </header>

    <nav class="main-menu">
      <ul>
        <li class="expandable">Коллекции</li>
        <li>SALE</li>
        <li>Одежда</li>
        <li>Аксессуары</li>
        <li>Стикеры</li>
        <li>Канцелярия</li>
        <li>Фигурки</li>
        <li>Подарочные Сертификаты</li>
      </ul>
    </nav>

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

    <div class="hits-goods-page">

      <div class="hits-logo"></div>

      <div class="hit-goods-wrapper">
        <div class="hit-goods">
          <div class="hit-goods__photo--first hit-goods__photo"></div>
          <p>Футболка “Rick and Morty”</p>
          <p>790 ₽</p>
          <button class="purchase-btn">Купить</button>
        </div>

        <div class="hit-goods">
          <div class="hit-goods__photo--second hit-goods__photo"></div>
          <p>Худи “Sexual Pressure” от Юлика</p>
          <p>4000 ₽</p>
          <button class="purchase-btn">Купить</button>
        </div>

        <div class="hit-goods">
          <div class="hit-goods__photo--third hit-goods__photo"></div>
          <p>Фигурка Демогоргон “Stranger Things” </p>
          <p>2500 ₽</p>
          <button class="purchase-btn">Купить</button>
        </div>

        <div class="hit-goods">
          <div class="hit-goods__photo--first hit-goods__photo"></div>
          <p>Футболка “Rick and Morty”</p>
          <p>790 ₽</p>
          <button class="purchase-btn">Купить</button>
        </div>

        <div class="hit-goods">
          <div class="hit-goods__photo--second hit-goods__photo"></div>
          <p>Худи “Sexual Pressure” от Юлика</p>
          <p>4000 ₽</p>
          <button class="purchase-btn">Купить</button>
        </div>

        <div class="hit-goods">
          <div class="hit-goods__photo--third hit-goods__photo"></div>
          <p>Фигурка Демогоргон “Stranger Things” </p>
          <p>2500 ₽</p>
          <button class="purchase-btn">Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');
  $main-color: #FFFFFF;
  $gray-color: #ADAAAA;
  $font-color: #373229;

  * {
    box-sizing: border-box;
    font-size: 16px;
    color: $font-color;
    font-weight: 400;
    font-family: Nova Oval;
    font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
  }

  .page-header {
    width: 100%;
    height: 108px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 66px 14px 66px;
    background-color: $main-color;
    border-bottom: $gray-color solid 1px;

    .logo {
      width: 208px;
      height: 80px;
    }

    .social-media-icons {
      display: flex;

      &__icon {
        width: 24px;
        height: 24px;
        display: block;
        margin-left: 35px;

        &--inst {
          background-image: url("./assets/inst_color_black.svg");
        }

        &--fb {
          background-image: url("./assets/fb_color_black.svg");
        }

        &--vk {
          background-size: contain;
          background-image: url("./assets/vk_color_black.svg");
        }
      }
    }

  }

  .main-menu {

      ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }

      li {
        margin-left: 15px;
      }

    .expandable {
      background-image: url("./assets/arrow.svg");
      background-repeat: no-repeat;
      background-position: right;
      padding-right: 25px;
  }
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

.hits-goods-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hits-logo {
  width: 187px;
  height: 129px;
  margin-top: 57px;
  margin-bottom: 5px;
  background-image: url("./assets/hits-logo.svg");
}

.hit-goods-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: $main-color;

  .purchase-btn {
    width: 192px;
    height: 32px;
    border: none;
    outline: none;
    background-color: $main-color;
    border: 1px solid #CEC7BB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .hit-goods {
    width: 365px;
    height: 540px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 50px 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &__photo {
      width: 365px;
      height: 365px;
      background-size: cover;

      &--first {
      background-image: url("./assets/t-shirt_R&M.jpg");
      }

      &--second {
        background-image: url("./assets/hudi_yulik.jpg");
      }

      &--third {
        background-image: url("./assets/demagorgon.jpg");
      }
    }
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
