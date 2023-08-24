<template>
  <div
    v-for="(food, index) in storeFoods.foods"
    :key="food.id"
    class="border rounded-lg pa-4 mb-10"
  >
    <div class="d-flex justify-space-between mb-4">
      <input
        class="border rounded-lg mx-1 pa-2"
        type="text"
        v-model="food.name"
        id=""
        placeholder="Название продукта"
      />
      <input
        class="border rounded-lg mx-1 pa-2"
        type="number"
        v-model="food.cost"
        id=""
        placeholder="Стоимость"
      />
      <v-btn icon variant="text" :key="food.id" @click="storeFoods.deleteFood(index)">
        <v-icon size="25"> mdi-delete </v-icon>
      </v-btn>
    </div>

    <v-select
      v-model="food.payerId"
      :items="storePeople.people"
      :item-title="'name'"
      :item-value="'id'"
      variant="outlined"
    >
    </v-select>

    <div class="d-flex flex-wrap">
      <div class="border" v-for="person in storePeople.people" :key="person.id">
        <my-eater :person="person" :index="index"></my-eater>
      </div>
    </div>
  </div>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'

import MyEater from './MyEater.vue'

export default {
  data() {
    return {
      storePeople: usePeopleStore(),
      storeFoods: useFoodsStore()
    }
  },
  components: {
    'my-eater': MyEater
  }
}
</script>

<style></style>
