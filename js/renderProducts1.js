//Получение сведений о товарах с json-сервера и всьавка их в index.html

const productsContainer = document.querySelector('#products-container'); //находим место, куда будем вставлять
//сведения из json по свойству products-container
console.log("productsContainer=",productsContainer);

getProducts();

//Асинхронная функция получения данных с json-сервера
async function getProducts() {
    const response = await fetch('http://localhost:3000/items');
    console.log("response=",response);

    const productsArray = await response.json();
    console.log(productsArray);

    renderProducts(productsArray);
}

//Функция вставки полученных с json-сервера данных в файл index.html
function renderProducts(productsArray) {
    productsArray.forEach(function (items) {
		//Такую штуку будем вставлять для каждого из продуктов
        const productHTML = `<div class="col-md-6">  
						<div class="card mb-4" data-id="${items.id}">
                            <img class="product-img" src="img/items/${items.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${items.title}</h4>
                                <p><small data-items-in-box class="text-muted">${items.itemsInBox}</small></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__currency">${items.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}

