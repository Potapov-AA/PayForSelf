<template>
  <transition name="btn-plus-animation" mode="out-in">
    <v-container
      v-if="storePeople.people.length == 0"
      class="d-flex flex-column align-center justify-center h-100"
    >
      <my-add-first-item-btn :addItemFunction="storePeople.addPerson"></my-add-first-item-btn>
    </v-container>
    <v-container v-else class="d-flex flex-column justify-center align-center">
      <v-btn @click="storePeople.addPerson()" class="my-5">
        <v-icon size="30">mdi-account-plus</v-icon>
      </v-btn>

      <my-person-list></my-person-list>
    </v-container>
  </transition>
</template>

<script>
import { usePeopleStore } from '@/stores/people'

import MyPersonList from '@/components/MyPersonList.vue'
import MyAddFirstItemBtn from '@/components/MyAddFirstItemBtn.vue'

export default {
  data() {
    return {
      storePeople: usePeopleStore()
    }
  },
  components: {
    'my-person-list': MyPersonList,
    'my-add-first-item-btn': MyAddFirstItemBtn
  }
}
</script>

<style></style>