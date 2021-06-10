<template>
    <div class="catalogmenu">
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
.catalogmenu {
    position: fixed;
    margin-top: 32px;
    min-width: 248px;
    padding: 0 0 0 88px;
    left: 0px;
    top: 57px;
    &__title {
        font-weight: bold;
        font-size: 32px;
        line-height: 41px;
        color: #1F1F1F;
    }
    &__wrapper {
        list-style-type: none;
        margin: 24px 0 0 0;
        padding: 0;
    }
    &__item {
        margin: 0;

        a {
            text-decoration: none;
            font-size: 16px;
            line-height: 30px;
            color: #959DAD;
            &:hover {
                font-weight: 10px;
                transition: .5s;
                color: #59606D;
            }
            
        }
    }
    .active {
        a {
            border-bottom: 1px solid #1F1F1F;
            color: #1F1F1F;
            font-weight: 10px;
            transition: .5s;

        }

    }
}
</style>