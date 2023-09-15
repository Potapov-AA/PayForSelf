<template>
  <v-container
    v-if="checkFoodListFields()"
    class="d-flex flex-column align-center justify-center h-100"
  >
    <my-warning :warningText="warningMessage" />
  </v-container>
  <v-container v-else>
    <div class="d-flex justify-space-evenly my-5">
      <my-icon-result
        @show="showTableComponent"
        :tooltipText="'Таблички по продуктам'"
        :icon="'mdi-table'"
        :isActive="showTable"
      />
      <my-icon-result
        @show="showStaticticComponent"
        :tooltipText="'Статистика'"
        :icon="'mdi-form-select'"
        :isActive="showStatistic"
      />
      <my-icon-result
        @show="showDebtorComponent"
        :tooltipText="'Кто кому сколько должен'"
        :icon="'mdi-cash'"
        :isActive="showDebtor"
      />
    </div>

    <div v-if="showTable">
      <my-table-result />
    </div>
    <div v-else-if="showStatistic">
      <my-statistic />
    </div>
    <div v-else-if="showDebtor">
      <my-debtors />
    </div>
  </v-container>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'

import MyIconResult from '@/components/MyIconResult.vue'
import MyTableResult from '@/components/MyTableResult.vue'
import MyStatistic from '@/components/MyStatistic.vue'
import MyWarning from '@/components/MyWarning.vue'
import MyDebtors from '@/components/MyDebtors.vue'

import MyMixinValidate from '@/components/MyMixinValidate.vue'

export default {
  mixins: [MyMixinValidate],
  data() {
    return {
      storePeople: usePeopleStore(),
      storeFoods: useFoodsStore(),
      showTable: true,
      showStatistic: false,
      showDebtor: false,
      warningMessage: ''
    }
  },
  components: {
    'my-icon-result': MyIconResult,
    'my-table-result': MyTableResult,
    'my-statistic': MyStatistic,
    'my-warning': MyWarning,
    'my-debtors': MyDebtors
  },
  methods: {
    // Функции для изменения отображаемого окна статистики
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

    // Проверка на корректное заполнение полей добавления еды
    checkFoodListFields() {
      let show = false

      if (this.isShowMessage()) {
        this.warningMessage = this.warningText
        show = true
      } else {
        if (this.warningText === '') {
          if (this.storeFoods.foods.length == 0) {
            this.warningMessage =
              'Для отображения результатов необходимо добавить блюда и заполнить все поля.'
            show = true
          } else {
            this.storeFoods.foods.forEach((food) => {
              if (food.name === '' || food.cost === '' || food.payerId === '---') {
                this.warningMessage =
                  'Для отображения результатов необходимо заполнить все поля у каждого блюда.'
                show = true
              } else if (isNaN(Number(food.cost)) || food.cost <= 0) {
                this.warningMessage =
                  'Проверьте поле стоимости блюда, возможно где-то введено некорретное число.'
                show = true
              } else if (food.eaters.length === 0) {
                this.warningMessage = 'Проверьте, что у каждого блюда выбраны те, кто его ел.'
                show = true
              }
            })
          }
        }
      }

      return show
    }
  }
}
</script>
