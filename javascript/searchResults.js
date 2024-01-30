import {updateCartInfo} from "./navbar.js";
import {Cart} from "./modula.js";
import {createCartData} from "./cartScript.js";
let searchResultProducts;
let searchResultsSection = document.querySelector("#search-results-section");
let productsPerPage = 6;
let currentPage = 1;
let pagesPerBar = 3;
let numOfPages;
let startingPage;

window.addEventListener("load", function(){

    searchResultProducts = getSearchResultsFromLocal();    

    numOfPages = (searchResultProducts.length/productsPerPage) + (searchResultProducts.length%productsPerPage ? 1 : 0);

    numOfPages = Math.floor(numOfPages);

    renderPage();
});

function renderPage()
{
    createPaginationBar(currentPage, "top-bar");
    displayResultProducts(currentPage);
    createPaginationBar(currentPage, "bottom-bar");
}

function displayResultProducts(pageNumber)
{
    startingPage = getStartingPage(pageNumber, pagesPerBar);
    let startingIndex = (currentPage-1) * productsPerPage;
    let lastIndex = Math.min(searchResultProducts.length, startingIndex+productsPerPage);
    searchResultsSection.innerHTML = "";
    for(let i = startingIndex; i<lastIndex; i++)
        searchResultsSection.appendChild(createProductCard(searchResultProducts[i]));
}

function createProductCard(product) {
    
    var card = document.createElement("div");
    card.className = "card m-2";
    card.style.width = "300px";

    var img = document.createElement("img");
    img.style.height = "300px";
    img.src = product.images[0]; 
    img.className = "card-img-top";
    img.alt = "Product Image";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body p-0 d-flex flex-column align-items-center";

    var buttonsContainer = document.createElement("div");
    buttonsContainer.className = "d-flex justify-content-around bg-secondary-subtle w-100 p-0 m-0";

    var buttonIcons = ["far fa-heart", "fa fa-eye", "fa fa-search"];
    for (var i = 0; i < buttonIcons.length; i++) {
        var button = document.createElement("button");
        button.className = "btn btn-outline-secondary border-0";
        var icon = document.createElement("i");
        icon.className = buttonIcons[i];
        switch(i)
        {
            case 0:
                icon.title = "AddToFavourites"
                break;
            case 1:
                icon.title = "showProductDetails"
                break;
            case 2:
                icon.title = "showProductImages"
                break;
        }
        button.appendChild(icon);
        if(i===2)
        {
            button.addEventListener("click", function()
            {
                viewProductImagesInModal(product);
            });
        }
        else if(i === 1)
        {
            button.addEventListener("click", function()
            {
                viewProductDetails(product);
            });
        }
        else
        {
            button.addEventListener("click", function()
            {
                AddToFavourites(product);
            });
        }

        buttonsContainer.appendChild(button);
    }

    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = product.productTitle;

    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = "$" + product.price;

    var addToCartButton = document.createElement("button");
    addToCartButton.className = "btn btn-outline-secondary w-100 bg-secondary-subtle border-0";
    addToCartButton.textContent = "Add To Cart";
    addToCartButton.addEventListener("click",()=>
    {
        addToCart(product);
    })

    cardBody.appendChild(buttonsContainer);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(addToCartButton);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

function viewProductImagesInModal(product) {
    
    let carouselInner = document.querySelector('#productImageCarousel .carousel-inner');
    carouselInner.innerHTML = '';

    product.images.forEach((imageUrl, index) => {
        let itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';

        let imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.classList.add('d-block', 'w-100');

        let carouselItem = document.createElement('div');
        carouselItem.className = itemClass;
        carouselItem.appendChild(imageElement);

        carouselInner.appendChild(carouselItem);
    });

    let modal = new bootstrap.Modal(document.getElementById('picsModal'));
    modal.show();
}

function itemIndxInCart(_item)
{
    let cartItems = getCartFromlocal();
    let indx = -1;
    for(let i = 0; i<cartItems.length; i++){
        if(cartItems[i].productId === _item.id)
        {
            indx = i;
            break;
        }
    }
    return indx;
}

function setCartTolocal(arr){
    localStorage.setItem("cart",JSON.stringify(arr));
}

function getCartFromlocal(){
    let arr  = JSON.parse(window.localStorage.getItem("cart")) || [];
    return arr;
}

function addToCart(product)
{
    let cartItems = getCartFromlocal();
    let currentProduct = product;
    let addedQuantity = 1;
    let indexInCart = itemIndxInCart(currentProduct);
    let availableQuantity = currentProduct.stockQuantity;
    
    let totalQuantity = addedQuantity;
    let notEnoughItemModal = document.getElementById("not-enough-items-modal");

    if(indexInCart === -1)
    {
        
        if(totalQuantity > availableQuantity)
        {
            let modal = new bootstrap.Modal(notEnoughItemModal);
            modal.show();
            return;
        }
        cartItems.push(new Cart(currentProduct.id, currentProduct.productTitle, addedQuantity, currentProduct.price, currentProduct.images[0]).addJson());

    }
    else
    {
        totalQuantity += cartItems[indexInCart].quantity;

        if(totalQuantity > availableQuantity)
        {
            let modal = new bootstrap.Modal(notEnoughItemModal);
            modal.show();
            return;
        }

        cartItems[indexInCart].quantity += addedQuantity;

    }

    //currentProduct.stock_quantity -= addedQuantity;
    setCartTolocal(cartItems);
    updateCartInfo(cartItems);
    createCartData();

}

function viewProductDetails(product)
{
    localStorage.setItem("currentProductId", product.id);
    window.location.assign("productDetails.html");
}

function AddToFavourites(product)
{
    let currentUser = JSON.parse(localStorage.getItem("current_user"));
    if (currentUser) {
        currentUser.favorites = currentUser.favorites || [];
        const productId = product.id;
        const index = currentUser.favorites.indexOf(productId);

        if (index === -1) {
            currentUser.favorites.push(productId);
            console.log(`Added product ${productId} to favorites.`);
        } else {
            currentUser.favorites.splice(index, 1);
            console.log(`Removed product ${productId} from favorites.`);
        }

        // Update the currentUser in local storage
        localStorage.setItem('current_user', JSON.stringify(currentUser));

        // Get the entire array of users from local storage
        let usersData = JSON.parse(localStorage.getItem('user')) || [];
        console.log(usersData);

        // Find the index of the current user in the array
        let userIndex = usersData.findIndex(user => user.id === currentUser.id);

        if (userIndex !== -1) {
            // Update only the favorites in the array
            usersData[userIndex].favorites = currentUser.favorites;
            localStorage.setItem('user', JSON.stringify(usersData));
        }
    }
}

function getSearchResultsFromLocal()
{
    return JSON.parse(localStorage.getItem("searchResults")) || [];
}

function getProductsFromLocal()
{
    return JSON.parse(localStorage.getItem("products")) || [];
}

function createPaginationBar(pageNumber, barId)
{
    let paginationBar = document.getElementById(barId);
    paginationBar.innerHTML = "";

    let startingPage = getStartingPage(pageNumber, pagesPerBar);
    let lastPage = Math.min(startingPage+2, numOfPages);
    let prePage = document.createElement('li');
    prePage.classList.add("page-item");
    prePage.innerHTML = `
    <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
    </a>
    `;
    prePage.addEventListener("click", goToPreviousPage);

    let nextPage = document.createElement('li');
    nextPage.classList.add("page-item");
    nextPage.innerHTML = `
    <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&raquo;</span>
    </a>
    `;
    nextPage.addEventListener("click", goToNextPage);

    if(currentPage > 1)
        paginationBar.appendChild(prePage);

    for(let i = startingPage; i<=lastPage; i++)
    {
        paginationBar.appendChild(createPaginationItem(i));
    }

    if(currentPage+1 <= numOfPages)
        paginationBar.appendChild(nextPage);

}

function createPaginationItem(pageNumber)
{
    let item = document.createElement("li");
    item.className = "page-item";
    item.setAttribute("pageNumber", pageNumber);
    item.innerHTML = 
    `
    <a class="page-link" href="#"> ${pageNumber} </a>
    `;

    item.addEventListener("click", function(){
        gotToPage(pageNumber);
    })

    if(pageNumber === currentPage)
        item.classList.add("active");

    return item;
}

function getStartingPage(pageNumber, pagesPerBar)
{
    let startingPage;

    if(pageNumber%pagesPerBar === 0)
        startingPage = pageNumber-2;
    else
        startingPage = pageNumber - pageNumber%pagesPerBar + 1;

    return startingPage;
}

function goToNextPage()
{
    if(currentPage + 1 > numOfPages)
        return;
    
    currentPage++;
    renderPage();
}

function goToPreviousPage()
{
    if(currentPage - 1 <= 0)
        return;
    
    currentPage--;
    renderPage();
}

function gotToPage(pageNumber)
{
    currentPage = pageNumber;
    renderPage();
}