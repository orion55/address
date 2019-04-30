import { mapState } from 'vuex'
import FooterAddress from '../FooterAddress'

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
