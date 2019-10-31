import Vue from 'vue'
import SuperTable from './../../components/SuperTable.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(SuperTable),
}).$mount('#table1')

