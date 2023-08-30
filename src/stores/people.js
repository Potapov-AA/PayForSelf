import { defineStore } from 'pinia'

import { useFoodsStore } from '@/stores/foods'

const STORE_NAME = 'people'

export const usePeopleStore = defineStore(STORE_NAME, {
  state: () => ({
    uniquId: 0,
    people: [],
    foods: useFoodsStore()
  }),

  actions: {
    // Добавление элемента в people
    addPerson() {
      this.people.push({
        id: this.uniquId,
        name: ''
      })

      this.uniquId++
    },

    // Удаление элемента из people
    deletePerson(index) {
      this.foods.updateFoods(this.people[index])
      this.people.splice(index, 1)
      this.foods.clearFoodList(this.people.length)
    },

    // Поиск элемента по id в people
    findPerson(id) {
      var person = NaN

      this.people.forEach(p => {
        if (p.id == id) person = p
      });

      return person
    }
  }
})
