<template>
    <div>

        <div class="cart__bg" :class="{cart__active: handleCartCheck} " >
        <div class="cart" :class="{cart__active: handleCartCheck} ">
            <div class="cart__header">
                <div class="cart__header_title">Корзина</div>
                <div class="cart__header_close"  @click="closeCart()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
                    </svg>

                </div>
            </div>

            <div class="cart__body"   v-if="$store.state.productCart.length>0">
                <div class="cart__subheader" >
                    Товары в корзине
                </div>

                <Cartproduct v-for="(item, index) in $store.state.productCart" :key="item.id+Math.random()" :item="item" :index="index" />

                <Cartform  />



            </div>

            <div class="cart__body" v-else>
                <div class="cart__body_descr">
                    Пока что вы ничего не добавили
                    в корзину.
                </div>
                <button class="cart__body_btnToProduct" @click="closeCart()">Перейти к выбору</button>
                
            </div>

            <div class="cart__ok" :class="{cart__ok_active: $store.state.toSend} " >
                <div class="cart__header">
                <div class="cart__header_title">Корзина</div>
                <div class="cart__header_close cart__header_close-ok"  @click="closeCart()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
                    </svg>

                </div>
            </div>
            <div class="cart__ok_body">
                <div class="cart__ok_img"><img src="img/ok.png" alt="ok"></div>
                <div class="cart__ok_title">Заявка успешно отправлена</div>
                <div class="cart__ok_subtitle">Вскоре наш менеджер свяжется с Вами</div>
            </div>
                
            </div>

            


        </div>
    </div>

    </div>
    
</template>

<script>
export default {
    data: function() {
        return {
            handleCartCheck: false,
            productCart: this.$store.state.productCart,
        }
    },
    methods : {
    dellProductCart : function (index) {
        this.$store.commit('dellProductCart', index);
    },
    closeCart : function() {
        this.handleCartCheck = !this.handleCartCheck
        document.body.classList.toggle('cart__bg_hidden');
        this.$store.commit('toSend', false);
    }
    },
    mounted() {
        this.$root.$on('handleCart', () => {
            this.handleCartCheck = !this.handleCartCheck;
            
            
    })

    
}
}
</script>

<style lang="scss">

</style>