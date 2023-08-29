import { defineStore } from 'pinia'
import { usePeopleStore } from './people'

const STORE_NAME = 'foods'

export const useFoodsStore = defineStore(STORE_NAME, {
  state: () => ({
    uniquId: 0,
    foods: [],
    people: usePeopleStore()
  }),

  actions: {
    addFood() {
      this.foods.push({
        id: this.uniquId,
        name: '',
        cost: '',
        eaters: [],
        payerId: 'Кто платит?',
      })

      this.uniquId++
    },

    deleteFood(index) {
        this.foods.splice(index, 1)
    },

    changeEater(person, index) {
        if (this.foods[index].eaters.indexOf(person) == -1) {
            this.foods[index].eaters.push(person)
        } else {
            this.foods[index].eaters = this.foods[index].eaters.filter((p) => p !== person)
        }
    },

    checkEaterStatus(person, index) {
        if (this.foods[index].eaters.indexOf(person) == -1) {
            return false
        } else {
            return true
        }
    },

    updateFoods(person) {
        this.foods.forEach(food => {
            food.eaters = food.eaters.filter((p) => p !== person)
            if (food.payerId == person.id) {
              food.payerId = 'Кто платит?'
            }
        });
    },

    clearFoodList(peopleCount) {
      if(this.foods[0].eaters.length == 0 && peopleCount == 0) {
        this.foods = []
      }
    }
  }
})
