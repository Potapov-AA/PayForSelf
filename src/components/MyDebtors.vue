<template>
  <div v-for="(payer, payerId) in fillPayersArray()" :key="payer">
    <v-table v-if="checkDebtors(payer)" density="compact" class=" border rounded-lg pa-2 mb-10">
      <thead>
        <tr>
          <th colspan="2">
            <strong class="text-uppercase text-h6">{{ storePeople.findPerson(payerId).name }} должны</strong>
          </th>
        </tr>
        <tr>
          <th class="center">
            <strong class="text-uppercase">имя</strong>
          </th>
          <th class="center">
            <strong class="text-uppercase">сумма долга</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(debtor, debtorId) in payer.debtors" :key="debtor">
          <th v-if="debtor != 0" class="center">
            {{ storePeople.findPerson(debtorId).name }}
          </th>
          <th v-if="debtor != 0" class="center">
            {{ debtor }}
          </th>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { useFoodsStore } from '@/stores/foods'
import { usePeopleStore } from '@/stores/people'

export default {
  data() {
    return {
      storeFoods: useFoodsStore(),
      storePeople: usePeopleStore(),
      payers: {}
    }
  },
  methods: {
    fillPayersArray() {
      var payersArray = []
      this.storeFoods.foods.forEach((food) => {
        if (!(food.payerId in payersArray)) {
          payersArray.push(food.payerId)
        }
      })

      payersArray.forEach((payer) => {
        this.payers[payer] = {
          debtors: {}
        }
      })

      this.storeFoods.foods.forEach((food) => {
        food.eaters.forEach((eater) => {
          if (eater.id != food.payerId) {
            if (!(eater.id in this.payers[food.payerId].debtors)) {
              this.payers[food.payerId].debtors[eater.id] = Math.floor(
                food.cost / food.eaters.length
              )
            } else {
              this.payers[food.payerId].debtors[eater.id] += Math.floor(
                food.cost / food.eaters.length
              )
            }
          }
        })
      })

      for(var k1 in this.payers) {
        for(var k2 in this.payers) {
          if(k1 != k2) {
            if(k1 in this.payers[k2].debtors && k2 in this.payers[k1].debtors) {
              if (this.payers[k2].debtors[k1] == this.payers[k1].debtors[k2]) {
                this.payers[k2].debtors[k1] = 0
                this.payers[k1].debtors[k2] = 0
              } else if (this.payers[k2].debtors[k1] > this.payers[k1].debtors[k2]) {
                this.payers[k2].debtors[k1] -= this.payers[k1].debtors[k2]
                this.payers[k1].debtors[k2] = 0
              } else {
                this.payers[k1].debtors[k2] -= this.payers[k2].debtors[k1]
                this.payers[k2].debtors[k1] = 0
              }
            }
          }
        }
        
      }

      return this.payers
    },

    checkDebtors(payer) {
      let hasDebtor = false;

      for(let debtor in payer.debtors) {
        if(payer.debtors[debtor] != 0) {
          hasDebtor = true
        }
      }

      return hasDebtor
    }
  }
}
</script>

<style></style>
