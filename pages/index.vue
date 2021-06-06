<template>
  <div class="container">
    <div class="sort">
      <div class="sort__wrapper">
        <div class="sort__title">Сортировать по:</div>
        <div class="sort__subtitle">цене</div>
        <div class="sort__icon">
          <svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
          </svg>

        </div>
      </div>

      <div class="sort__select">
        <ul>
          <li>По цене</li>
          <li>По популярности</li>
        </ul>
      </div>
    </div>
    <div class="product__item">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>

  </div>
</template>


<style>
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
}
</style>