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
    // Добавление элемента в foods
    addFood() {
      this.foods.push({
        id: this.uniquId,
        name: '',
        cost: '',
        eaters: [],
        payerId: '---'
      })

      this.uniquId++
    },

    // Удаление элемента из foods
    deleteFood(index) {
      this.foods.splice(index, 1)
    },

    // Добавление или удаление person из списка eater, в зависимости от его наличия
    changeEater(person, index) {
      if (this.foods[index].eaters.indexOf(person) == -1) {
        this.foods[index].eaters.push(person)
      } else {
        this.foods[index].eaters = this.foods[index].eaters.filter((p) => p !== person)
      }
    },

    // Возвращает статус нахождения person в списке eaters
    checkEaterStatus(person, index) {
      if (this.foods[index].eaters.indexOf(person) == -1) {
        return false
      } else {
        return true
      }
    },

    // Убирает из списка eaters, переданный person
    updateFoods(person) {
      this.foods.forEach((food) => {
        food.eaters = food.eaters.filter((p) => p !== person)
        if (food.payerId == person.id) {
          food.payerId = '---'
        }
      })
    },

    // Очишает список продуктов, если все person удалены
    clearFoodList(peopleCount) {
      if (this.foods.length != 0) {
        if (this.foods[0].eaters.length == 0 && peopleCount == 0) {
          this.foods = []
        }
      }
    }
  }
})
