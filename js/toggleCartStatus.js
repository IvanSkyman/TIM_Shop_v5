//Меняем надпись в корзине в зависимости от того, есть там товар или нет

function toggleCartStatus(){

    //console.log("toggleCartStatus=",toggleCartStatus);
    const catrWrapper = document.querySelector('.cart-wrapper');
    //console.log("number of elements inside cartWrapper "+catrWrapper.children.length);
    const cartEmptyBage = document.querySelector('[data-cart-empty');
    //console.log("toggleCartStatus just worked");

    const orderForm = document.querySelector('#order-form');

    if (cartWrapper.children.length >0) {
        console.log("basket NOT empty");
        cartEmptyBage.classList.add('none');
        console.log(cartEmptyBage);
        console.log("cart-wrapper-children-length=",cartWrapper.children.length);
        orderForm.classList.remove('none');  //показываем форму заказа, убирая аттрибут 'none'
        console.log("orderForm=", orderForm);
    } else {
        console.log("basket empty");
        cartEmptyBage.classList.remove('none');
        console.log(cartEmptyBage)
        console.log("cart-wrapper-children-length=",cartWrapper.children.length);
        orderForm.classList.add('none'); //убираем форму заказа, добавляя аттрибут 'none'
        console.log("orderForm=", orderForm);
    }

}