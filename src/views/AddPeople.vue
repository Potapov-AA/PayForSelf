<template>
  <v-container class="d-flex flex-column align-center">
    <v-btn @click="storePeople.addPerson()"> добавить человека </v-btn>
        <my-person-list></my-person-list>
    <div v-if="storePeople.people.length > 0"></div>
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
    'my-person-list': MyPersonList,
  }
}
</script>

<style></style>
