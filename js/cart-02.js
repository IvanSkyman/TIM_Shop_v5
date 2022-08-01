const cartWrapper = document.querySelector('.cart-wrapper');

//Отслеживаем клик на странице
window.addEventListener('click',function(event){
    //Проверяем, что клик был совершён по кнопке "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')){
        //Находим карточку с товаром, внутри которой был совершён клик
        const card = event.target.closest('.card');

        //Собираем данные с этого товара и записываем их в единый объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('[data-items-in-box]').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        console.log("productInfo:",productInfo);

        //Проверяем, есть ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`); //шаблонная строка в обратных кавычках
        //console.log("productInfo.id=",productInfo.id);
        //console.log("itemInCart=",itemInCart);

        //Если товар есть в корзине
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            //Если товара нет в корзине
            //Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.title} </div>
    
                    <!-- cart-item__details -->
                    <div class="cart-item__details">
    
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
    
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
    
                    </div>
                    <!-- // cart-item__details -->
    
                </div>
            </div>
            </div>`;
    
            //Отобразим товары в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        card.querySelector('[data-counter]').innerText = '1';  //Сбрасываем счётчик в 0 после добавления в корзину
        
       //Управление отображением статуса корзины
       toggleCartStatus();

       //Подсчёт общей стоимости товаров в корзине
       calcCartPriceAndDelivery();


    }

})