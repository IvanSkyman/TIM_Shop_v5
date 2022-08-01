//Добавляем прослушку на всём окне
window.addEventListener('click',function(event) {
    //Объявляем переменную для счётчика
    let counter;

    //Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //Находим обёртку счётчика
        counterWrapper = event.target.closest('.counter-wrapper');
        //Находим див с числом счётчика
        counter = counterWrapper.querySelector('[data-counter]');
    }


    //Проверяем, является ли элемент кнопкой Плюс
    if (event.target.dataset.action === 'plus') {   
        counter.innerText = ++counter.innerText;
    }

    //Проверяем, является ли элемент кнопкой Минус
    if (event.target.dataset.action === 'minus') {
        //Проверяем, что счётчик больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1)  {//Проверяем, находится ли кнопка минус внутри корзины, то есть cart-wrapper
            console.log("event.target.closest.(.cart-item)=",event.target.closest('.cart-item'))
            event.target.closest('.cart-item').remove();  //Удаление товара из корзины
            console.log("cart-wrapper-children-length from counter.js=",cartWrapper.children.length)

            // Вызываем надпись "Пустая корзина"
			toggleCartStatus();

            //Пересчёт общей стоимости товаров в корзине, чтобы при полном удалении
            //товаров получался 0
            calcCartPriceAndDelivery();
        }

    }

    //Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //Пересчёт общей стоимости товаров в корзине
        calcCartPriceAndDelivery();

    }

})