import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[]
  },
  getters: {
    products(state){
      return state.products;
    }
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    }
  },
  actions: {
    fetchAllProducts(context){
      return fetch("https://mu-een.github.io/productAPI/data.json")
      .then((response) => response.json())
      .then((data) => {
        context.commit("setProducts", data.products);
      })
      .catch((err) => console.error(err))
    }
  },
  modules: {
  }
})
