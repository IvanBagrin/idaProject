<template>
    <form action="#" class="cart__form">
        <div class="cart__form_title">Оформить заказ</div>
        <input type="text" placeholder="Ваше имя" class="cart__form_input">
        <input type="text" placeholder="Телефон" class="cart__form_input">
        <input type="text" placeholder="Адрес" class="cart__form_input">
        <button class="cart__form_button active">Отправить</button>
    </form>
</template>

<style lang="scss">



    .cart__form {
        display: block;
        margin-top: 32px;
        &_title {
            font-size: 18px;
            line-height: 23px;
            color: #59606D;
        }
        &_input {
            display: flex;
            flex-direction: column;
            margin-top: 16px;
            background: #F8F8F8;
            border-radius: 8px;
            width: calc(100% - 28px);
            height: 50px;
            border: none;
            font-size: 16px;
            line-height: 21px;
            color: #959DAD;
            padding: 0px 14px;
        }
        
        &_button {
            margin-top: 24px;
            width: 100%;
            height: 50px;
            background: #1F1F1F;
            border-radius: 8px;
            font-size: 16px;
            line-height: 21px;
            padding: 14px 0;
            color: #FFFFFF;
            cursor: pointer;
        }
        .active {
            background: #59606D;
        }
        

    }
</style>