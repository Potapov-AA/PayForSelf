<template>
  <keep-alive>
    <div v-for="(food, index) in storeFoods.foods" :key="food.id">
      {{ food.id }} TEST {{ index }}
      <input type="text" v-model="food.name" id="" placeholder="Введите название продукта" />
      <input type="number" v-model="food.cost" id="" placeholder="Введите стоимость" />
      <v-btn :key="food.id" @click="storeFoods.deleteFood(index)">Удалить</v-btn>

      <div v-for="person in storePeople.people" :key="person.id">
        <my-eater :person="person" :index="index"></my-eater>
      </div>
    </div>
  </keep-alive>
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
