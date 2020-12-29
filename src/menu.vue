<template>
    <header class="page-header">
      <img src="./assets/logo.png" alt="Логотип магазина" class="logo">
      <div class="social-media-icons">
        <a href="https://www.instagram.com/" class="social-media-icons__icon social-media-icons__icon--inst"></a>
        <a href="https://facebook.com/" class="social-media-icons__icon social-media-icons__icon--fb"></a>
        <a href="https://vk.com/" class="social-media-icons__icon social-media-icons__icon--vk"></a>
      </div>
    </header>
</template>

<style lang="scss">
 @import "./assets/styles/_variables.scss";

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
</style>
