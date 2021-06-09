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
        }
    },
    methods: {
      sortProduct(event) {
        if(event === 'price') {
          this.items = this.items.sort((a,b) => b.price - a.price);
          console.log(this.$refs.sortText.textContent = 'цене')
        }
        if(event === 'popularity') {
          this.items = this.items.sort((a,b) => b.rating - a.rating);
          this.$refs.sortText.textContent = 'популярности'
        }

        this.sorSelectActive = !this.sorSelectActive;


      }
    },
   
    mounted() {
        this.$axios
            .get("https://frontend-test.idaproject.com/api/product")
            .then((response) => {
                 this.items = response.data
               // console.log(response.data);
                
            })
    }
}
</script>

<style lang="scss">
.container {
    margin: 147px 0 0 220px;
    
}
.product__item {
  display: flex;
  flex-wrap: wrap;

    /* display: grid;
    grid-template-columns: repeat(4, 264px);
    grid-template-rows: 272px;
    grid-auto-rows: 272px;
    gap: 16px; */
}
.sort {
  position: absolute;
  top: 108px;
  right: 88px;
  z-index: 80;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    cursor: pointer;
    // text-align: center;
  }
  &__subtitle {
    margin-left: 6px;
    
  }
  &__icon {
    position: relative;
    margin-left: 4px;
    svg {
      position: absolute;
    }
  }
  &__select {
    display: none;
    width: 100%;
    height: 56px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 8px 0 0px 0;
    margin-top: 6px;
    

    &_item {
        font-size: 14px;
        line-height: 24px;
        color: #959DAD;
        padding: 0px 12px;
        &:hover {
          color: #1F1F1F;
          background: #F8F8F8;
          cursor: pointer;
        }
      }
    
  }

  &__select.active {
    display: block;
  }
}
</style>