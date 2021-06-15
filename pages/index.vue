<template>

    <div class="container">
      
    <div class="sort">
      <div class="sort__wrapper">
        <div  class="sort__title">Сортировать по:</div>
        <div class="sort__subtitle" @click = "sorSelectActive = !sorSelectActive" ref = "sortText">цене</div>
        <div class="sort__icon">
          <svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
          </svg>

        </div>
      </div>

      <div class="sort__select" :class="{active: sorSelectActive}">
        
          <div class="sort__select_item" @click="sortProduct('price')">По цене</div>
          <div class="sort__select_item" @click="sortProduct('popularity')">По популярности</div>
        
      </div>
    </div>
    <div class="product__item">
      <Product v-for="item in items" :key="item.id" :item="item" />
      

  </div>
  </div>
</template>


<script>
export default {
    data: function() {
        return {
            items: [],
            sorSelectActive: false,
            itemsAll: [],
            
        }
    },
    methods: {
      sortProduct(event) {
        if(event === 'price') {
          this.items = this.items.sort((a,b) => b.price - a.price);
          this.$refs.sortText.textContent = 'цене'
        }
        if(event === 'popularity') {
          this.items = this.items.sort((a,b) => b.rating - a.rating);
          this.$refs.sortText.textContent = 'популярности'
        }

        this.sorSelectActive = !this.sorSelectActive;


      },
 
      },
   
    mounted() {
          this.$axios
            .get("https://frontend-test.idaproject.com/api/product")
            .then((response) => {
                 this.items = response.data;
                 this.itemsAll = response.data;
                
            })
         
          this.$store.commit('cacheCart');

            this.$root.$on('remove', (id) => {
              this.list = this.itemsAll;
              this.list = this.list.filter(item => 
                item.category == id)
                this.items = this.list;
            })

    }
    

    
}
</script>

<style lang="scss">

</style>