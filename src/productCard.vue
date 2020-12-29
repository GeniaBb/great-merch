<template>
    <div class="hits-goods-page">

      <div class="hits-logo"></div>

      <div class="hit-goods-wrapper">
        <div class="hit-goods" v-for="card of goodsData" :key="card.id">
          <img :src="card.photo" alt="" class="hit-goods__photo">
          <p>{{ card.productName }}</p>
          <p>{{ card.cost }}</p>
          <button class="purchase-btn">Купить</button>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
@import "./assets/styles/_variables.scss";

.hits-goods-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: $gray-color solid 1px;
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

    p {
      font-weight: 500;
    }

    &__photo {
      width: 365px;
      height: 365px;
    }
  }
}
</style>

<script>
export default {
    data() {
        return ({
            goodsData: 
            [
                {
                    id: 1,
                    photo: require('./assets/t-shirt_R&M.jpg'),
                    productName: 'Футболка “Rick and Morty”',
                    cost: '790 ₽'
                },
                {
                    id: 2,
                    photo: require('./assets/hudi_yulik.jpg'),
                    productName: 'Худи “Sexual Pressure” от Юлика',
                    cost: '4000 ₽'
                },
                {
                    id: 3,
                    photo: require('./assets/demagorgon.jpg'),
                    productName: 'Фигурка Демогоргон “Stranger Things”',
                    cost: '2500 ₽'
                },
                {
                    id: 4,
                    photo: require('./assets/t-shirt_R&M.jpg'),
                    productName: 'Футболка “Rick and Morty”',
                    cost: '790 ₽'
                },
                {
                    id: 5,
                    photo: require('./assets/hudi_yulik.jpg'),
                    productName: 'Худи “Sexual Pressure” от Юлика',
                    cost: '4000 ₽'
                },
                {
                    id: 6,
                    photo: require('./assets/demagorgon.jpg'),
                    productName: 'Фигурка Демогоргон “Stranger Things”',
                    cost: '2500 ₽'
                }
            ]
        })
    }
}
</script>