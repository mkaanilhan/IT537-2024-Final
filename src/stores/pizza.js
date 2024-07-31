import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePizzaStore = defineStore('pizza', {

  state(){

    return{

      basketList:[]
    }

},

  getters:{

    numberOfItems(state){

      return state.basketList.length

    }

  },

  actions:{
  add(pizza){

    this.basketList.push(pizza)

  }
}

})
