<template>
    <div class="cart__bg">
        <div class="cart">
            <div class="cart__header">
                <div class="cart__header_title">Корзина</div>
                <div class="cart__header_close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
                    </svg>

                </div>
            </div>
            <div class="cart__subheader">
                Товары в корзине
            </div>

            <Cartproduct />
            <Cartproduct />
            <Cartproduct />

            <Cartform />


            <div class="cart__attention">
                Все поля обязательные. После удачной отправки формы содержимое корзины очищается
            </div>

            


        </div>
    </div>
</template>

<style lang="scss">
.cart {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 460px;
    padding: 52px 48px;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    z-index: 999;
    &__bg {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        background: rgba(255,255,255, 0.8);
        z-index: 99;
    }
    &__header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &_title {
            font-weight: bold;
            font-size: 32px;
            line-height: 41px;
            color: #000000;
        }
        &_close {
            position: absolute;
            right: 0;
            top: 25%;
        }
    }
    &__subheader {
        margin-top: 24px;
        font-size: 18px;
        line-height: 23px;
        color: #59606D;
    }

    &__attention {
        position: relative;
        margin-top: 32px;
        font-size: 16px;
        line-height: 21px;
        color: #000000;
        margin-left: 27px;

        &:before {
            content: '!!';
            position: absolute;
            top: -4px;
            left: -27px;
            font-weight: bold;
            font-size: 32px;
            line-height: 41px;
            color: #EB5757;
        }
    }



}
</style>