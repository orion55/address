<template>
    <div>
        <div v-if="loading">
            loading...
        </div>
        <div v-else>
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
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ListAddress',
    mounted () {
      this.$store.dispatch('loadData');
    },
    computed: mapState(['adds', 'loading']),
  }

</script>

<style scoped>

</style>
