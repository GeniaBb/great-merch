<template>
  <div id="app">
    <header class="page-header">
      <img src="./assets/logo.png" alt="Логотип магазина" class="logo">
      <div class="social-media-icons">
        <a href="#" class="social-media-icons__icon social-media-icons__icon--inst"></a>
        <a href="#" class="social-media-icons__icon social-media-icons__icon--fb"></a>
        <a href="#" class="social-media-icons__icon social-media-icons__icon--vk"></a>
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
        <li>Поадрочные Сертификаты</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
  $main-color: #FFFFFF;
  $gray-color: #ADAAAA;

  * {
    box-sizing: border-box;
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
</style>

<script>

</script>
