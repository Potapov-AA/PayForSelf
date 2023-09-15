<template>
  <v-tooltip location="bottom" :text="tooltipText">
    <template #activator="{ props }">
      <router-link :to="{name: name}" class="link" active-class="active">
        <v-btn variant="outlined" icon v-bind="props" value="nearby">
          <v-icon :size="size">{{ iconName }}</v-icon>
        </v-btn>
      </router-link>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    iconName: String,
    tooltipText: String,
    size: Number,
    name: String
  }
}
</script>

<style scoped>
.active {
  color: red !important;
}

.link {
  color: black;
}
</style>
