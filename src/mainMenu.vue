<template>
    <div>
        <nav class="main-menu">
            <ul>
                <li 
                    v-for="menuItem of menu" 
                    :key="menuItem.name" 
                    v-on:mouseover="downMenu(menuItem)" 
                    v-on:mouseleave="closeMenu(menuItem)"
                >
                    {{ menuItem.name }}
                    <i class="arrow-img" v-if="menuItem.hasArrow"></i>
                    <ul class="dropDownMenu" v-if="menuItem.isVisibleDropdown && menuItem.hasArrow">
                        <li v-for="product of menuItem.links" :key="product.name">{{ product.name }}</li>
                    </ul>
                </li>
            </ul>
        </nav>
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
            position: relative;

            &:hover {
            background: #F0F0F0;
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
        max-height: 240px;
        flex-direction: column;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        padding: 0;
        position: absolute;
        top: 60px;
        left: 0;
        z-index: 5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        opacity: 1;
        display: none;
        flex-wrap: wrap;

        li {
            width: 255px;
            height: 60px;
            background-color: #F9F9F9;
            display: flex;
            align-items: center;
            padding: 10px;

            &:hover {
                background: #ffffff;
            }
        }
    }
</style>

<script>
export default {
    data() {
        return({
            menu: 
            [
                {
                    name: 'Коллекции',
                    hasArrow: true,
                    isVisibleDropdown: false,

                    links: [
                        {
                            name: 'Кузьма',
                        },
                        {
                            name: 'Гарри Поттер',
                        },
                        {
                            name: 'Очень странные дела',
                        }
                    ]
                },
                {
                    name: 'Sale',
                    hasArrow: false,
                },
                {
                    name: 'Одежда',
                    hasArrow: true,
                    isVisibleDropdown: false,

                    links: [
                        {
                            name: 'Кофты',
                        },
                        {
                            name: 'Футболки',
                        },
                        {
                            name: 'Куртки',
                        }
                    ]
                },
                {
                    name: 'Аксессуары',
                    hasArrow: true,
                    isVisibleDropdown: false,

                    links: [
                        {
                            name: 'Кепки и шапки',
                        },
                        {
                            name: 'Чехлы на iPhone',
                        },
                        {
                            name: 'Носки',
                        },
                        {
                            name: 'Попсокеты',
                        },
                        {
                            name: 'Сумки',
                        },
                        {
                            name: 'Обложки',
                        },
                        {
                            name: 'Браслеты',
                        },
                        {
                            name: 'Пины',
                        },
                    ]
                },
                {
                    name: 'Стикеры',
                    hasArrow: false,
                },
                {
                    name: 'Канцелярия',
                    hasArrow: false,
                },
                {
                    name: 'Фигурки',
                    hasArrow: false,
                },
                {
                    name: 'Подарочные Сертификаты',
                    hasArrow: false,
                },
            ]
        })
    },
    methods: {
        downMenu: function(name) {
           if (name.hasArrow === true) {
               name.isVisibleDropdown = true
           }
        },
        closeMenu: function(name) {
            if (name.hasArrow === true) {
               name.isVisibleDropdown = false
           }
        }
    }
}
</script>