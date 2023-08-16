<template>
  <v-container class="d-flex flex-column align-center">
    <v-btn @click="store.increment">
        добавить человека
    </v-btn>
    <div v-if="false">
        <div v-for="k in 5" :key="k">
            {{ k }}
        </div>
    </div>
    <div v-else>
        <h1 class="text-uppercase">за столом как-то пусто</h1>
        {{ store.count }}
        {{ store.doubleCount }}
    </div>
  </v-container>
</template>

<script setup>
import { usePeopleStore } from '@/stores/people'

const store = usePeopleStore();

</script>

<style>

</style>