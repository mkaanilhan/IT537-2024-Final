import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { list } from 'postcss'

export const useGameStore = defineStore('game', {
  state(){
      return{
          imgList:[],
          gameDataList:[],
      }
  },
  actions:{
    add(id,link){
      const object =
        {
          id,
          link
        }
      this.imgList.push(object)
    },
    getImageLink(id){
      for (let index = 0; index < this.imgList.length; index++) {
        const object = this.imgList[index]
        if (id.toString()===object.id.toString()) {
          return object.link
        }
      }
  },
    getGameId(id){
      for (let index = 0; index < this.imgList.length; index++) {
        const object = this.imgList[index]
        if (id.toString()===object.id.toString()) {
          return object.id
        }
      }
    },
    addProduct(gameData){
      this.gameDataList.push(gameData)
    },
    removeProduct(){

    },
    removeAllProduct(){

    }

  },
  getters:{
    numberOfItem(state){
      return state.gameDataList.length
    }
  },
  setters:{

  }
})
