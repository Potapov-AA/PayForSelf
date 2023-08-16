<template>
  <v-container class="d-flex flex-column align-center">
    <v-btn @click="store.addPerson()">
        добавить человека
    </v-btn>
    
    <div v-if="store.people.length > 0">
        <div v-for="(person, index) in store.people" :key="person.id">
            {{ person.id }} TEST
            {{ index }}
            <input type="text" v-model="person.name" id="" placeholder="Введите имя">
            <v-btn :key="person.id" @click="store.deletePerson(index)">Удалить</v-btn>
        </div>
    </div>
    <div v-else>
        <h1 class="text-uppercase">за столом как-то пусто</h1>
    </div>
  </v-container>
</template>

<script setup>
import { usePeopleStore } from '@/stores/people'

const store = usePeopleStore();

</script>

<style>

</style>