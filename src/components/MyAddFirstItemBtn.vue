<template>
  <v-btn variant="text" icon size="150">
    <v-icon @click="addItemFunction" size="150">mdi-plus-circle</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    addItemFunction: Function
  }
}
</script>
