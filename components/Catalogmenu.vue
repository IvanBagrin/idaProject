<template>
    <div class="catalogmenu" :class="{catalogmenu__active: $store.state.catalogActive} ">
                <div class="catalogmenu__close"  @click="$store.commit('catalogActive')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
                    </svg>

                </div>
        <div class="catalogmenu__title">Каталог</div>


            <ul class="catalogmenu__wrapper">
                <li class="catalogmenu__item" :data-catalog = "item.id" v-for="item in items" v-on:click="clickHandler(item)" :key="item.id" ><a href="#">{{item.name}}</a></li>
            </ul>
    </div>

</template>


<script>
export default {
    data: function() {
        return {
            items: []
        }
    },
    methods: {
    clickHandler : function(item){
      this.$root.$emit('remove', item.id);
      this.$store.commit('catalogActive', this.item);

     
      for(let key of document.querySelectorAll(".catalogmenu__item")) {
          key.classList.remove("active");
          if (key.getAttribute("data-catalog") == item.id)  key.classList.add("active")
      }

      
      
    }
    },
   
    mounted() {
        this.$axios
            .get("https://frontend-test.idaproject.com/api/product-category")
            .then((response) => {
                this.items = response.data
            })
    }
}
</script>


<style lang="scss">

</style>