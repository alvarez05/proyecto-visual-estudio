const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle
    ('hidden-cart')
})


/* ==================== */
const  cartInfo = document.querySelector('.cart-product')
const rowProduc = document.querySelector('.row-product')

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items')

// Variable de arreglos de productos
let allProducts =  [] 




productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent
        }

       allProducts = [...allProducts, infoProduct]
    }

    console.log(allProducts)
})