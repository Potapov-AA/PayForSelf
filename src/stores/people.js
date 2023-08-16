import { defineStore } from 'pinia'

const STORE_NAME = 'people'

export const usePeopleStore = defineStore(STORE_NAME, {
  state: () => ({
    uniquId: 0,
    people: []
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
        this.people.splice(index, 1)
    }
  }
})
