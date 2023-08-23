<template>
  <div v-for="food in storeFoods.foods" :key="food.id" class="mb-10 border rounded-lg pa-2">
    <div class="mt-2 mb-4 ml-1">
      <p class="text-h6"><strong>Продукт:</strong> {{ food.name }}</p>
      <p class="text-h8"><strong>Стоимость:</strong> {{ food.cost }}</p>
    </div>

    <div v-if="food.eaters.length > 1">
      <v-table density="compact" height="150px" fixed-header class="border">
        <thead>
          <tr>
            <th><strong>Те кто ел</strong></th>
            <th><strong>Сколько c меня</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="eater in food.eaters" :key="eater.id">
            <th v-if="eater.name == ''">Мистер инкогнито</th>
            <th v-else>{{ eater.name }}</th>
            <th>{{ Math.floor(food.cost / food.eaters.length) }}</th>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div class="mt-2 mb-4 ml-1" v-else>
      <p>
        Данное блюдо ел только
        <strong v-if="food.eaters[0].name == ''">Мистер инкогнито. </strong>
        <strong v-else>{{ food.eaters[0].name }}. </strong>
        С него <strong>{{ food.cost }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { useFoodsStore } from '@/stores/foods'

export default {
  data() {
    return {
      storeFoods: useFoodsStore()
    }
  }
}
</script>

<style></style>
