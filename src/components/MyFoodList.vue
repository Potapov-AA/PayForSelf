<template>
  <div
    v-for="(food, index) in storeFoods.foods"
    :key="food.id"
    class="border rounded-lg pa-4 mb-10"
  >
    <div class="d-flex justify-space-between">
      <v-text-field v-model="food.name" class="w-250" label="Название продукта" variant="outlined">
      </v-text-field>

      <v-text-field
        v-model="food.cost"
        class="w-250 ml-4"
        label="Стоимость"
        type="number"
        variant="outlined"
      >
      </v-text-field>

      <v-btn
        class="ml-2 mt-1"
        icon
        variant="text"
        :key="food.id"
        @click="storeFoods.deleteFood(index)"
      >
        <v-icon size="30"> mdi-delete </v-icon>
      </v-btn>
    </div>

    <v-select
      v-model="food.payerId"
      :items="storePeople.people"
      :item-title="'name'"
      :item-value="'id'"
      variant="outlined"
      label="Кто платит?"
    >
    </v-select>

    <p class="text-h6 mb-1">Кто ел?</p>
    <div class="d-flex justify-center flex-wrap w-auto">
      <div class="border ma-1" v-for="person in storePeople.people" :key="person.id">
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

<style>
.w-250 {
  width: 250px;
}
</style>
