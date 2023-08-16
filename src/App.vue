<script>
import MyHeader from '@/components/MyHeader.vue';

export default {
  components: {
    'my-header': MyHeader,
  }
}
</script>

<template>
  <v-app>
    <my-header></my-header>
    <router-view></router-view>
  </v-app>
</template>

<style scoped></style>
