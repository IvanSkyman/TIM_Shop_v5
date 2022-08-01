function calcCartPriceAndDelivery() {
    
    const cartItems = document.querySelectorAll('.cart-item');
    console.log("cartItems=",cartItems);

    //Находим элемент в корзине, где пишется общая сумма товаров
    const totalPriceItems = document.querySelector('.item-cost');

    //Находим элемент в корзине, где пишется общая сумма заказа
    const totalPriceEl = document.querySelector('.total-price');  

    //Находим элемент в корзине, где пишется стоимость доставки
    const deliveryCost = document.querySelector('.delivery-cost');

    //Находим элемент, соответствующий блоку доставки в корзине
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;

    cartItems.forEach(function (item){
        console.log("item=",item);
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        console.log("amountEl=",amountEl);
        console.log("priceEl=",priceEl);
        const currentPrice = parseInt(amountEl.innerText)*parseInt(priceEl.innerText);
        console.log("currentPrice=",currentPrice);
        totalPrice += currentPrice; //Здесь в totalPrice входит только стоимость товара
    })

    console.log("totalPrice=",totalPrice);

    totalPriceItems.innerText = totalPrice;

    //Скрываем/показываем блок со стоимостью доставки
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }
  
    //Если стоимость товара больше 600р, доставка бесплатная, иначе платная 250р
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
        console.log("deliveryCost=",deliveryCost);


    } else if (totalPrice < 600 && totalPrice > 0){ //Если доставка платная, её нужно включить в общую стоимость
        //но только, если она больше 0
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 P'
        console.log("deliveryCost=",deliveryCost);
        totalPrice += parseInt(deliveryCost.innerText); //Если доставка платная, её нужно включить в общую стоимость
        console.log("totalPrice with delivery=",totalPrice);

    } else { //Если товаров нет то есть стоимость 0, то не нужно к общей стоимости прибавлять стоимость доставки
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 P'
        console.log("deliveryCost=",deliveryCost);
        totalPrice = 0; //Если доставка платная, её нужно включить в общую стоимость
        console.log("totalPrice with delivery=",totalPrice);
    }

    totalPriceEl.innerText = totalPrice;

}