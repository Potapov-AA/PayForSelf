<template>
  <div>
    <v-checkbox
      :model-value="isEater"
      :key="person.id"
      @change="storeFoods.changeEater(person, index)"
    >
      <p v-if="person.name == ''">Мистер инкогнито</p>
      <p v-else>{{ person.name }}</p>
    </v-checkbox>
  </div>
</template>

<script>
import { useFoodsStore } from '@/stores/foods'

export default {
  data() {
    return {
      storeFoods: useFoodsStore(),
      isEater: false
    }
  },
  props: {
    person: Object,
    index: Number
  },
  mounted() {
    this.isEater = this.storeFoods.checkEaterStatus(this.person, this.index)
  }
}
</script>

<style></style>
