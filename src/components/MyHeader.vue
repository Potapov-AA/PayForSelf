<template>
  <header class="elevation-10 pa-5">
    <v-row class="mb-2">
      <v-spacer></v-spacer>
      <v-col align="center"><p class="text-h4"><strong>PayForSelf</strong></p></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col align="center">
        <my-header-item
          :iconName="'mdi-numeric-1'"
          :tooltipText="'Добавь тех, кто ел'"
          :size="40"
          :link="''"
        ></my-header-item>
      </v-col>
      <v-col align="center">
        <my-header-item
          :iconName="'mdi-numeric-2'"
          :tooltipText="'Добавь то, что ели'"
          :size="40"
          :link="'foods'"
        ></my-header-item>
      </v-col>
      <v-col align="center">
        <my-header-item
          :iconName="'mdi-numeric-3'"
          :tooltipText="'Посмотри, кто сколько наел'"
          :size="40"
          :link="'results'"
        ></my-header-item>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </header>
</template>

<script>
import MyHeaderItem from './MyHeaderItem.vue'

export default {
  components: {
    'my-header-item': MyHeaderItem
  }
}
</script>

<style></style>
