<style src="./ListAddress.scss" lang="scss" scoped></style>
<script src="./ListAddress.js"></script>

<template>
    <div class="list-adds">
        <div v-if="loading" class="preloader">
            <div class="page-loader-circle"></div>
        </div>
        <div v-else class="list-adds__box">
            <div class="list-adds__title">Адресная программа</div>
            <div class="list-adds__wrap">
                <div class="list-adds__header">
                    <div class="list-adds__col list-adds__col--1"></div>
                    <div class="list-adds__col list-adds__col--2">Город</div>
                    <div class="list-adds__col list-adds__col--3">Адрес, направление</div>
                    <div class="list-adds__col list-adds__col--4">Сторона</div>
                </div>
                <div class="list-adds__body">
                    <div class="list-adds__item" v-for="item in adds">
                        <div class="list-adds__column list-adds__col--1">
                            <div class="list-adds--circle"></div>
                        </div>
                        <div class="list-adds__column list-adds__col--2 list-adds__col--text">{{item.city}}</div>
                        <div class="list-adds__column list-adds__col--3">{{item.street}}</div>
                        <div class="list-adds__column list-adds__col--4">A</div>
                    </div>
                </div>
                <FooterAddress></FooterAddress>
            </div>
        </div>

    </div>
</template>
