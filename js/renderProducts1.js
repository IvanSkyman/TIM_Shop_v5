"host_permissions" [".products.json"];

const productsContainer = document.querySelector('#products-container');

async function getProducts() {
    const response = await fetch('./js/products.json');
    console.log("responce=",responce);
}

getProducts();