<template>
  <v-container>
    <div v-if="storePeople.people.length > 0" class="d-flex flex-column align-center">
      <v-btn @click="storeFoods.addFood()" prepend-icon="mdi-food-fork-drink" append-icon="mdi-food-fork-drink" class="my-5"> добавить продукт </v-btn>

      <div v-if="storeFoods.foods.length > 0">
        <my-food-list></my-food-list>
      </div>
      <div v-else>
        <h1 class="text-uppercase">люди за столом, а еды нет...</h1>
      </div>
    </div>
    <div v-else>
      <h1 class="text-uppercase">добавь сначала людей, кто-то же должен платить</h1>
    </div>
  </v-container>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'
import MyFoodList from '@/components/MyFoodList.vue'

export default {
  data() {
    return {
      storePeople: usePeopleStore(),
      storeFoods: useFoodsStore()
    }
  },
  components: {
    'my-food-list': MyFoodList,
  }
}
</script>

<style></style>
