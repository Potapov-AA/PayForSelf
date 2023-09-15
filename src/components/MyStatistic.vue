<template>
  <div>
    <v-table density="compact" class="border rounded-lg pa-2">
      <thead>
        <tr>
          <th colspan="2" class="center">
            <strong class="text-uppercase">Кто на сколько наел</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Object.keys(calculateFinalSum())" :key="item">
          <th class="center">
            {{ calculateFinalSum()[item].name }}
          </th>
          <th class="center">
            {{ calculateFinalSum()[item].sum }}
          </th>
        </tr>
      </tbody>
    </v-table>

    <div class="mt-10">
      <strong v-if="maxSum().length === 1">Самый богатый едок:</strong>
      <strong v-else>Самые богатые едоки:</strong> {{ maxSum().join('; ') }}.
    </div>

    <div class="mt-10">
      <strong v-if="maxEat().length === 1">Главный любитель поесть:</strong>
      <strong v-else>Главные любители поесть:</strong> {{ maxEat().join('; ') }}.
    </div>
  </div>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'

export default {
  data() {
    return {
      storePeople: usePeopleStore(),
      storeFoods: useFoodsStore()
    }
  },
  methods: {
    // Расчет финальной суммы для каждой персоны и каждого продукта
    calculateFinalSum() {
      let finalResult = {}

      this.storePeople.people.forEach((person) => {
        this.storeFoods.foods.forEach((food) => {
          if (food.eaters.indexOf(person) !== -1) {
            if (person.id in finalResult) {
              finalResult[person.id].sum += Math.floor(food.cost / food.eaters.length)
            } else {
              finalResult[person.id] = {
                sum: Math.floor(food.cost / food.eaters.length),
                name: person.name
              }
            }
          }
        })
      })

      return finalResult
    },

    // Поиск того, кто потратил больше всех
    maxSum() {
      let richEater = []
      let max = 0

      const keys = Object.keys(this.calculateFinalSum())
      const finalSums = this.calculateFinalSum()

      keys.forEach((key) => {
        if (finalSums[key].sum > max) {
          richEater = []
          richEater.push(finalSums[key].name)
          max = finalSums[key].sum
        } else if (finalSums[key].sum === max) {
          richEater.push(finalSums[key].name)
        }
      })

      return richEater
    },

    // Поиск того, кто съел больше всех
    maxEat() {
      let maxEaters = []
      let max = 0

      let finalResult = {}

      this.storePeople.people.forEach((person) => {
        this.storeFoods.foods.forEach((food) => {
          if (food.eaters.indexOf(person) !== -1) {
            if (person.id in finalResult) {
              finalResult[person.id].sum += 1
            } else {
              finalResult[person.id] = {
                sum: 1,
                name: person.name
              }
            }
          }
        })
      })

      const keys = Object.keys(finalResult)

      keys.forEach((key) => {
        if (finalResult[key].sum > max) {
          maxEaters = []
          maxEaters.push(finalResult[key].name)
          max = finalResult[key].sum
        } else if (finalResult[key].sum === max) {
          maxEaters.push(finalResult[key].name)
        }
      })

      return maxEaters
    }
  }
}
</script>
