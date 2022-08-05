//Создание и управление модальным окном (не доделано)

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

const cartWrapper1 = document.querySelector('.cart-wrapper1');

btn.onclick = function () {
    modal.style.display = "block";

    console.log("Modal window is started");
    console.log("cartItemsArray[0].title=",cartItemsArray[0].title);

    cartItemsArray.forEach(function(element,index) {
        console.log("index=",index,"element=",element);
  
        const cartItemHTML = `
        <div class="cart-item" data-id="${cartItemsArray[index].id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${cartItemsArray[index].imgSrc}" alt="${cartItemsArray[index].title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${cartItemsArray[index].title}</div>
                <div class="cart-item__weight">${cartItemsArray[index].title} </div>
    
                <!-- cart-item__details -->
                <div class="cart-item__details">
    
                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${cartItemsArray[0].title}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
    
                    <div class="price">
                        <div class="price__currency">${cartItemsArray[0].price}</div>
                    </div>
    
                </div>
                <!-- // cart-item__details -->
    
            </div>
        </div>
        </div>   
        `;    
          //Отобразим товары в модальной корзине
          cartWrapper1.insertAdjacentHTML('beforeend', cartItemHTML);
         // console.log("cartItemsArray[0].title=",cartItemsArray[0].title);
    });

    
  

}
span.onclick = function() { //Закрытие модального окна с помощью кнопки
    modal.style.display = "none";
    cartItemsArray.length = 0;
    console.log("cartItemsArray=",cartItemsArray);//очищаем массив с товарами при закрытии модального окна
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}