import { defineStore } from 'pinia'


const STORE_NAME = 'foods'

export const useFoodsStore = defineStore(STORE_NAME, {
  state: () => ({
    uniquId: 0,
    foods: []
  }),

  actions: {
    addFood() {
      this.foods.push({
        id: this.uniquId,
        name: '',
        cost: '',
        eaters: []
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
        });
    }
  }
})
