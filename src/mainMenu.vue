<template>
    <div>
        <nav class="main-menu">
        <ul>
            <li>Коллекции <i class="arrow-img"></i></li>
            <li>SALE</li>
            <li>Одежда <i class="arrow-img"></i></li>
            <li>Аксессуары <i class="arrow-img"></i></li>
            <li>Стикеры</li>
            <li>Канцелярия</li>
            <li>Фигурки</li>
            <li>Подарочные Сертификаты</li>
        </ul>
        </nav>
        <ul class="dropDownMenu">
            <li>Кузьма</li>
            <li>Гарри Поттер</li>
            <li>Очень странные дела</li>
        </ul>
    </div>
</template>

<style lang="scss">
@import "./assets/styles/_variables.scss";

    .main-menu {

        ul {
            margin-top: 0;
            list-style-type: none;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }

        li {
            height: 60px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            padding: 10px;

            &:hover {
            background: #ebebeb;
            .arrow-img {
                transform: rotate(90deg);
            }
            }
        }

        .arrow-img {
        background-position: right;
        background-image: url("./assets/arrow.svg");
        width: 24px;
        height: 24px;
        transition: 0.3s;
        }

    }

    .dropDownMenu {
        width: 255px;
        height: 181px;
        background-color: #f5f5f5;
        flex-direction: column;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        padding: 0;

        li {
            height: 45px;
            display: flex;
            align-items: center;
            padding: 10px;

            &:hover {
                background: #ffffff;
            }
        }
    }
</style>
