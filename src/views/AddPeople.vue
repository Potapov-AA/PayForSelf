<template>
  <transition name="btn-plus-animation" mode="out-in">
    <v-container
      v-if="storePeople.people.length == 0"
      class="d-flex flex-column align-center justify-center h-100"
    >
      <v-btn variant="text" icon size="150">
        <v-icon @click="storePeople.addPerson()" size="150">mdi-plus-circle</v-icon>
      </v-btn>
    </v-container>
    <v-container v-else class="d-flex flex-column justify-center align-center">
      <v-btn @click="storePeople.addPerson()" class="my-5">
      <v-icon size="30">mdi-account-plus</v-icon>
      </v-btn>

      <div v-if="storePeople.people.length > 0">
        <my-person-list></my-person-list>
      </div>
      <div v-else>
        <h1 class="text-uppercase">за столом как-то пусто</h1>
      </div>
    </v-container>
  </transition>
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

<style>
.btn-plus-animation-enter-active,
.btn-plus-animation-leave-active {
  transition: opacity 0.5s ease;
}

.btn-plus-animation-enter-from,
.btn-plus-animation-leave-to {
  opacity: 0;
}
</style>
