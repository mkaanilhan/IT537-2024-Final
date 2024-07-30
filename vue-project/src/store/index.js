import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: [],
    productDetails: null,
  },
  mutations: {
    loadProducts(state, products){
      state.products = products;
    },
    loadBag(state, products){
      state.productsInBag = products;
    },

    addToBag(state, product) {
      const existingProduct = state.productsInBag
      .find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        state.productsInBag.push(product);
      }
      localStorage.setItem('productsInBag', 
        JSON.stringify(state.productsInBag));
    },
    updateQuantity(state, { productId, quantity }) {
      const product = state.productsInBag.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;
        localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
      }
    },

    removeFromBag(state, productId){
      var updatedBag = state.productsInBag.filter(item => productId != item.id);
      state.productsInBag = updatedBag;
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))
    },
    setProductDetails(state, product) {
      state.productDetails = product;
    },

  },
  actions: {

    loadProducts({commit}){
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts',response.data);
      })
    },

    async fetchProductDetails({ commit }, id) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        commit('setProductDetails', product);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    },


    loadBag({ commit }) {
      const productsInBag = localStorage.getItem('productsInBag');
      if (productsInBag) {
        commit('loadBag', JSON.parse(productsInBag));
      }
    },


    addToBag({commit}, product){
      commit('addToBag', product);
    },

    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload);
    },
  
    
    removeFromBag({commit}, productId){
      if(confirm(
        'Are you sure you want to remove the item from the cart?')){
          commit('removeFromBag', productId);
        }
      
    }
  },
  modules: {
  }
})
