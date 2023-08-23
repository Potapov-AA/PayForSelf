<template>
  <transition-group name="list" tag="div">
    <div
      v-for="(person, index) in storePeople.people"
      :key="person.id"
      class="border rounded-lg pa-4 mb-2"
    >
      <input type="text" v-model="person.name" id="" placeholder="Введите имя" class="border rounded-lg pa-2 mr-3"/>
      <v-btn icon variant="text" :key="person.id" @click="storePeople.deletePerson(index)">
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </div>
  </transition-group>
</template>

<script>
import { usePeopleStore } from '@/stores/people'

export default {
  data() {
    return {
      storePeople: usePeopleStore()
    }
  }
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
