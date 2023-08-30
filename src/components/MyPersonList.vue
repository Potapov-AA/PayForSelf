<template>
  <transition-group name="list">
    <div
      v-for="(person, index) in storePeople.people"
      :key="person.id"
      class="border rounded-lg pt-5 px-4 mb-4 w-200 d-flex justify-space-between"
    >
      <v-text-field v-model="person.name" label="Введите имя" variant="outlined">
      </v-text-field>
      <v-btn class="ml-2 mt-1" icon variant="text" :key="person.id" @click="storePeople.deletePerson(index)">
        <v-icon size="30"> mdi-delete </v-icon>
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

.w-200 {
  width: 300px;
}
</style>
