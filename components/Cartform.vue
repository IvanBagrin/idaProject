<template>

    <div>
    
    
        <div  class="cart__form" >
            <div class="cart__form_title">Оформить заказ</div>

            
                <input  type="text"  id = "name" placeholder="Ваше имя" class="cart__form_input" >
                
                
            

            <input type="text" id = "phone" placeholder="Телефон" class="cart__form_input" v-mask="'+7 ### ###-##-##'" v-model="inputPhoneModel">
            <input type="text" id = "address" placeholder="Адрес" class="cart__form_input">
            
            <button class="cart__form_button " :class="{active: btnActive} " @click="toSend()">Отправить</button>
            <div class="cart__form_text">Все поля обязательны для заполнения</div>
        </div>
        
        
          
    </div>
  

</template>

<script>


export default {
    data() {
      return {
        inputPhoneModel: '',
        btnActive: false,
      };
    },
    methods: {
        toSend() {
            if (document.getElementById('name').value == '' || document.getElementById('phone').value == '' || document.getElementById('address').value == '') {
                document.querySelector('.cart__form_text').style.display = 'block';
                this.btnActive = true;
                
            } else {
                console.log(
                
                `Список товаров ${JSON.stringify(this.$store.state.productCart)}`,
            )
            this.$store.commit('toSend', true);
            this.$store.commit('clearProductCart');
            document.querySelector('.cart__form_text').style.display = 'none';
            this.btnActive = false;
            }

            
        }
    },

    mounted() {
        
    },

 
}

</script>

<style lang="scss">


</style>