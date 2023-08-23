<template>
  <v-container class="d-flex flex-column justify-center align-center">
    <v-btn @click="storePeople.addPerson()" class="my-5"> добавить человека </v-btn>

    <div v-if="storePeople.people.length > 0">
      <my-person-list></my-person-list>
    </div>
    <div v-else>
      <h1 class="text-uppercase">за столом как-то пусто</h1>
    </div>
  </v-container>
</template>

<script>
import { usePeopleStore } from '@/stores/people'
import MyPersonList from '@/components/MyPersonList.vue'

export default {
  data() {
    return {
      storePeople: usePeopleStore()
    }
  },
  components: {
    'my-person-list': MyPersonList
  }
}
</script>

<style></style>
