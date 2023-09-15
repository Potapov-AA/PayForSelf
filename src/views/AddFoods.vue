<template>
  <v-container
    v-if="isShowMessage()"
    class="d-flex flex-column align-center justify-center h-100"
  >
    <my-warning :warningText="warningText" />
  </v-container>
  <transition v-else name="btn-plus-animation" mode="out-in">
    <v-container
      v-if="storeFoods.foods.length == 0"
      class="d-flex flex-column align-center justify-center h-100"
    >
      <my-add-first-item-btn :addItemFunction="storeFoods.addFood" />
    </v-container>
    <v-container v-else>
      <div v-if="storePeople.people.length > 0" class="d-flex flex-column align-center">
        <v-btn
          @click="storeFoods.addFood()"
          prepend-icon="mdi-food-fork-drink"
          append-icon="mdi-food-fork-drink"
          class="my-5"
        >
          добавить продукт
        </v-btn>
        <my-food-list />
      </div>
    </v-container>
  </transition>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import { useFoodsStore } from '@/stores/foods'

import MyFoodList from '@/components/MyFoodList.vue'
import MyWarning from '@/components/MyWarning.vue'
import MyAddFirstItemBtn from '@/components/MyAddFirstItemBtn.vue'

import MyMixinValidate from '@/components/MyMixinValidate.vue'

export default {
  mixins: [MyMixinValidate],
  data() {
    return {
      storePeople: usePeopleStore(),
      storeFoods: useFoodsStore()
    }
  },
  components: {
    'my-food-list': MyFoodList,
    'my-warning': MyWarning,
    'my-add-first-item-btn': MyAddFirstItemBtn
  }
}
</script>
