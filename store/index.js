export const state = () => ({
    productCart: [],
    count: 0,
    toSend: false,
    catalogActive: false,
  })
  
  export const mutations = {
    cacheCart(state) {
      if(JSON.parse(localStorage.getItem('cacheProductCart')) !== null && JSON.parse(localStorage.getItem('cacheCount')) !== null ) {
        state.productCart = JSON.parse(localStorage.getItem('cacheProductCart'))
        state.count = JSON.parse(localStorage.getItem('cacheCount'))
      }
    },

    addProductCart(state, item) {
      state.productCart.push(item)
      state.count++
      localStorage.setItem('cacheProductCart', JSON.stringify(state.productCart));
      localStorage.setItem('cacheCount',  JSON.stringify(state.count));
    },

    dellProductCart(state, index) {
        state.productCart.splice(index, 1);
        state.count--
        localStorage.setItem('cacheProductCart', JSON.stringify(state.productCart));
        localStorage.setItem('cacheCount', JSON.stringify(state.count));

      },

    toSend(state, item) {
        state.toSend = item;

      },
    clearProductCart(state) {
      state.productCart = [];
      state.count = 0;
      localStorage.setItem('cacheProductCart', JSON.stringify(state.productCart));
      localStorage.setItem('cacheCount', JSON.stringify(state.count));
    },
    catalogActive(state) {
      state.catalogActive = !state.catalogActive;
    }
  }


  //this.$store.commit('addProductCart', e.target.value)