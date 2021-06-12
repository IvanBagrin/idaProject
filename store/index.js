export const state = () => ({
    productCart: [],
    count: 0,
  })
  
  export const mutations = {
    addProductCart(state, item) {
      state.productCart.push(item)
      state.count++
    },

    dellProductCart(state, index) {
        state.productCart.splice(index, 1);
        state.count--

      }
  }


  //this.$store.commit('addProductCart', e.target.value)