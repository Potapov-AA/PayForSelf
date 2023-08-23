<template>
  <v-container>
    <div class="d-flex justify-space-evenly my-5">
      <my-icon-result
        @show="showTableComponent"
        :tooltipText="'Таблички по продуктам'"
        :icon="'mdi-table'"
        :isActive="showTable"
      ></my-icon-result>
      <my-icon-result
        @show="showStaticticComponent"
        :tooltipText="'Статистика'"
        :icon="'mdi-form-select'"
        :isActive="showStatistic"
      ></my-icon-result>
      <my-icon-result
        @show="showDebtorComponent"
        :tooltipText="'Кто кому сколько должен'"
        :icon="'mdi-cash'"
        :isActive="showDebtor"
      ></my-icon-result>
    </div>

    <div v-if="showTable">
      <my-table-result></my-table-result>
    </div>
    <div v-else-if="showStatistic">
      <my-statistic></my-statistic>
    </div>
    <div v-else-if="showDebtor">DEBTOR</div>
  </v-container>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'
import MyIconResult from '@/components/MyIconResult.vue'
import MyTableResult from '@/components/MyTableResult.vue'
import MyStatistic from '../components/MyStatistic.vue'



export default {
  data() {
    return {
      storePeople: usePeopleStore(),
      storeFoods: useFoodsStore(),
      showTable: true,
      showStatistic: false,
      showDebtor: false
    }
  },
  components: {
    'my-icon-result': MyIconResult,
    'my-table-result': MyTableResult,
    'my-statistic': MyStatistic
  },
  methods: {
    showTableComponent() {
      this.showTable = true
      this.showStatistic = false
      this.showDebtor = false
    },
    showStaticticComponent() {
      this.showTable = false
      this.showStatistic = true
      this.showDebtor = false
    },
    showDebtorComponent() {
      this.showTable = false
      this.showStatistic = false
      this.showDebtor = true
    }
  }
}
</script>

<style></style>
