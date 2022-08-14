const menuEmail = document.querySelector(".navbar-email");
const topMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//Aqui estamos seleccionando las clases del ccs
//Se dice que estamos creandoselectores
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainerSecondary = document.querySelector(".product-detail-secondary")
const productDetailSecondaryCloseIcon = document.querySelector(".product-detail-secondary-close")


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
//Aqui estamos llamando funciones
productDetailSecondaryCloseIcon.addEventListener('click', closeProductDetailAsideSecondary);



function toggleDesktopMenu() {
    const IsAsideClosed = aside.classList.contains('inactive')

    if (!IsAsideClosed) {
        aside.classList.add('inactive');
    }

    topMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {

    const IsAsideClosed = aside.classList.contains('inactive')
    if (!IsAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    console.log("Mobile");

    closeProductDetailAsideSecondary();
}

function toggleCarritoAside() {
    //Cada vez que querramos abrir el carrito
    //Si le damos click vamos a cerrar el 
    //menu de mobile
    //aside.classList.toggle('inactive')

    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!IsMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

    const IsProductDetailSecClosed = productDetailContainerSecondary.classList.contains('inactive')
    if (!IsProductDetailSecClosed) {
        productDetailContainerSecondary.classList.add('inactive');
    }


}

function openProductDetailAsideSecondary() {
    aside.classList.add('inactive')
    productDetailContainerSecondary.classList.remove('inactive');
}

function closeProductDetailAsideSecondary() {
    productDetailContainerSecondary.classList.add('inactive');

}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: 'Compu',
    price: 80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: 'Pantalla',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

// < div class="product-card" >
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//         alt="">
//         <div class="product-info">
//             <div>
//     s            <p>$120,00</p>
//                 <p>Bike</p>
//             </div>
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
//     </div>

function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAsideSecondary);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);

{/* //Primero tenemos que crear un selector
//para que aparezca o desaparezca el mobile
//menu, pero tambien necesitamos un selector
//para el menú hamburguesa  */}

//La función Toggle es para abrir y cerrar
