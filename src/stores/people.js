import { defineStore } from 'pinia'

import { useFoodsStore } from './foods'

const STORE_NAME = 'people'

export const usePeopleStore = defineStore(STORE_NAME, {
  state: () => ({
    uniquId: 0,
    people: [],
    foods: useFoodsStore()
  }),

  actions: {
    addPerson() {
      this.people.push({
        id: this.uniquId,
        name: ''
      })

      this.uniquId++
    },

    deletePerson(index) {
      this.foods.updateFoods(this.people[index])
      this.people.splice(index, 1)
      this.foods.clearFoodList(this.people.length)
    }
  }
})
