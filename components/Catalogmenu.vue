<template>
    <div class="catalogmenu">
        <div class="catalogmenu__title">Каталог</div>
            <ul class="catalogmenu__wrapper">
                <li class="catalogmenu__item" v-for="item in items" :key="item.id"><a href="#">{{item.name}}</a></li>
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
                text-decoration-line: underline;
                color: #1F1F1F;
                transition: .5s;
            }
        }
    }
}
</style>