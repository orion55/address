<template>
    <div class="list-adds">
        <div v-if="loading">
            loading...
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
                    <ul>
                        <li v-for="item in adds">
                            <h1>
                                {{item.city}}
                            </h1>
                            <p>
                                {{item.street}}<br/>
                                {{item.size}}
                            </p>
                        </li>
                    </ul>
                </div>
                <FooterAddress></FooterAddress>
            </div>
        </div>

    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import FooterAddress from './FooterAddress'

  export default {
    name: 'ListAddress',
    components: {
      FooterAddress,
    },
    mounted () {
      this.$store.dispatch('loadData')
    },
    computed: mapState(['adds', 'loading']),
  }

</script>

<style lang="scss">
    .list-adds {
        height: 100%;
        /*padding-right: 4px;*/
    }

    .list-adds__title {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        padding-top: 30px;
        padding-left: 40px;
        padding-bottom: 20px;
    }

    .list-adds__body {
        overflow: auto;
        margin: 10px 4px 10px 10px;
        flex: 1;
    }

    .list-adds__box {
        height: 100%;
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: #ffffff;
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 4px;
        background-color: #DFE4E6;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        width: 4px;
        background-color: #DFE4E6;
    }

    .list-adds__col {
        font-weight: 600;
        font-size: 11px;
        line-height: 13px;
        color: #868F98;
    }

    .list-adds__header {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 4px rgba(217, 220, 227, 0.5);
        padding-top: 18px;
        padding-bottom: 18px;
        height: 60px;
    }

    .list-adds__wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        min-height: 90%;
        height: calc(91% + 2px);
    }
</style>
