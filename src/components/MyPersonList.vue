<template>
  <div v-for="(person, index) in storePeople.people" :key="person.id">
    {{ person.id }} TEST {{ index }}
    <input type="text" v-model="person.name" id="" placeholder="Введите имя" />
    <v-btn :key="person.id" @click="storePeople.deletePerson(index)">Удалить</v-btn>
  </div>
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

<style></style>
