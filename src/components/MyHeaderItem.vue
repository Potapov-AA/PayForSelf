<template>
  <v-tooltip location="bottom" :text="tooltipText">
    <template v-slot:activator="{ props }">
      <v-btn variant="outlined" icon v-bind="props" value="nearby" @click="$router.push('/' + link)"> 
        <v-icon :size="size">{{ iconName }}</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    iconName: String,
    tooltipText: String,
    size: Number,
    link: String
  }
}
</script>

<style></style>
