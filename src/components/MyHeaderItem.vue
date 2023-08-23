<template>
  <v-tooltip location="bottom" :text="tooltipText">
    <template v-slot:activator="{ props }">
      <router-link :to="'/' + link" class="link" active-class="active">
      <v-btn
        variant="outlined"
        icon
        v-bind="props"
        value="nearby"
      >
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
    link: String
  }
}
</script>

<style>
.active{
  color: red !important;
}

.link {
  color: black;
}
</style>
