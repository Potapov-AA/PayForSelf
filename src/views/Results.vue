<template>
  <v-container>
    <div class="d-flex justify-space-evenly my-5">
      <my-icon-result @show="showTableComponent" :tooltipText="'Таблички по продуктам'" :icon="'mdi-table'"></my-icon-result>
      <my-icon-result @show="showStaticticComponent" :tooltipText="'Статистика'" :icon="'mdi-form-select'"></my-icon-result>
      <my-icon-result @show="showDebtorComponent" :tooltipText="'Кто кому сколько должен'" :icon="'mdi-cash'"></my-icon-result>
    </div>

    <div v-for="food in storeFoods.foods" :key="food.id" class="mb-10 border pa-2">
      <p class="mt-4 mb-4 ml-1 text-h6"><strong>Продукт:</strong> {{ food.name }}</p>
      <v-table density="compact" height="150px" fixed-header class="border">
        <thead>
          <tr>
            <th><strong>Те кто ел</strong></th>
            <th><strong>Сколько c меня</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="eater in food.eaters" :key="eater.id">
            <th>{{ eater.name }}</th>
            <th>{{ food.cost / food.eaters.length }}</th>
          </tr>
        </tbody>
      </v-table>
    </div>

      <div v-if="showTable">
        Table
      </div>
      <div v-else-if="showStatistic">
        STATISTIC
      </div>
      <div v-else-if="showDebtor">
        DEBTOR
      </div>
  </v-container>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'
import MyIconResult from '../components/MyIconResult.vue'


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
    'my-icon-result': MyIconResult
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
    },
  }
}
</script>

<style></style>
