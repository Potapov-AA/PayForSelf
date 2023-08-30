<template>
  <v-tooltip location="top" :text="tooltipText">
    <template v-slot:activator="{ props }">
      <v-btn size="50" variant="text" icon v-bind="props" @click="this.$emit('show')" :class="{ activeResultsPage: isActive }">
        <v-icon size="35">{{ icon }}</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script>
export default {
    props: {
        icon: String,
        tooltipText: String,
        eventName: String,
        isActive: Boolean
    }
}
</script>

<style>
</style>
