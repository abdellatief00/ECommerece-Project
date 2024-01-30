// import { Product, Review, Cart } from "./modula.js";
// import {createCartData} from "./cartScript.js"

let searchForm = document.getElementById("header-search-form");
let searchButton = searchForm.querySelector("button");
let searchInput = searchForm.querySelector("input");
let products;
let searchBtn = document.querySelector("#header-search-form > button");
let searchBox = document.querySelector("#header-search-form > input");
let searchResultProducts = [];
let searchResultDiv = document.getElementById("search-results");
let currentProductId = 2;
let currentProductIndex;
let cartItemsTotalPriceSpan = document.querySelector("#cart-icon > span:nth-child(1)");

let cartItemsCountSpan = document.querySelector("#cart-items-count");
let loginBtn = document.getElementById("loginBtn");
let loginSubmit = document.querySelector("#LoginScreen > div > div > div.modal-body > div.modal-footer > input");
let userNameSpan = document.querySelector("#loginBtn > span");
let userCart = document.getElementById("ShoppingCart");
let cartDiv = document.getElementById("cart-icon");
let localCartItems;
let currentUser;


window.addEventListener("load", function(){

    getProductsFromLocal();
    //console.log("localproduct",getCurrentProductIdFromLocal()); 
    localCartItems = getCartFromlocal();
    currentProductId = getCurrentProductIdFromLocal();
    currentProductIndex = getProductIndex(currentProductId);
    currentUser = getCurrentUserFromLocal();
    
    if(currentUser !== null)
    {
        userNameSpan.innerText = currentUser.fname + " " + currentUser.lname;
    }
    console.log( "currentProductIndex", currentProductIndex);
    changeItemsPlaces();
    updateCartInfo(localCartItems);
    cartDiv.addEventListener("click", showCart);
    window.addEventListener('resize', changeItemsPlaces);

    //searchResultDiv.addEventListener("click", displayOneOrAllProducts);
    searchButton.addEventListener("click", dispalySearchBox);
    searchBtn.addEventListener("click", searchProductsByTitle);
    searchBox.addEventListener("input", searchProductsByTitle);

    loginBtn.addEventListener("click", showLoginDialog);
    loginSubmit.addEventListener("click", login);
    this.document.addEventListener("click", hideSearchBox);
    this.document.addEventListener("keydown", handleKeysActions);
}
)

function dispalySearchBox(e)
{
    e.preventDefault();
    searchInput.classList.remove("d-none");
    //searchResultDiv.classList.remove("d-none");
    searchInput.focus();
}

function hideSearchBox(e)
{
    var isClickInsideSearchBox = searchInput.contains(e.target);
    var isClickInsideSearchResults = searchResultDiv.contains(e.target);
    
    if (!isClickInsideSearchBox && !isClickInsideSearchResults) {
        if(!searchButton.contains(e.target))
        {
            searchInput.classList.add("d-none");
            searchResultDiv.classList.add("d-none");
        }
            
    }
}

function handleKeysActions(e)
{
    if(e.key === "Escape")
    {
        searchInput.classList.add("d-none");
        searchResultDiv.classList.add("d-none");
    }
        
}

function changeItemsPlaces()
{
    let navbar = document.getElementById("navbarSupportedContent");
    if(currentUser !== null)
    {
        if(currentUser.role === 0 || currentUser.role === 1)
        {
        

            if(currentUser.role === 1)
            navbar.querySelector("ul>li:nth-child(6)").innerHTML = `<a class="nav-link" href="Dashboard-seller.html">Dashboard</a>
            `;

            else if(currentUser.role === 0)
            navbar.querySelector("ul>li:nth-child(6)").innerHTML = `<a class="nav-link" href="Dashboard-users.html">Dashboard</a>
            `;
            


        }
    }
    
    let headerRightSection = document.querySelector("#header-right-section")
    let rightSectionFormDiv = headerRightSection.querySelector("div:nth-child(1)");
    let loginBtn = document.getElementById("loginBtn");

    if(window.innerWidth < 992)
    {
        navbar.querySelector("ul>li:nth-child(7)").appendChild(loginBtn);
        //navbar.appendChild(loginBtn);
        navbar.appendChild(searchForm);
    }

    else
    {
        headerRightSection.appendChild(loginBtn);
        rightSectionFormDiv.appendChild(searchForm);
    }



}

function searchProductsByTitle()
{
    let _searchTitle = document.querySelector("#header-search-form > input").value;
    searchResultDiv.innerHTML = "";

    const fuzzy = new Fuse(products, {
        // Configure Fuse for fuzzy matching with adjustments for "MR"
        keys: ["productTitle"], // Search within the "product_title" field
        threshold: 0.4 , // Higher threshold for stricter matching, ensuring "MR" is distinct
        location: 0, // Prioritize matches at the beginning of the title
        distance: 25, // Allow for some typos and variations, but not too generous
        maxPatternLength: 32, // Limit pattern length for performance
        includeScore: true, // Access scores for sorting results
      });
    
    let fuzzyResults = fuzzy.search(_searchTitle);
    
    fuzzyResults.sort((a,b) => b.score > a.score);
    searchResultProducts = fuzzyResults.map(element => {
        return element.item; 
    });

    console.log(searchResultProducts);

    let resultsDisplayCount = Math.min(3, searchResultProducts.length);

    if(resultsDisplayCount == 0)
        searchResultDiv.classList.add("d-none");
    else
        searchResultDiv.classList.remove("d-none");

    let i = 0;

    while(resultsDisplayCount)
    {
        let resDiv = createResultProductDiv(searchResultProducts[i])
        searchResultDiv.appendChild(resDiv);

        resultsDisplayCount--;
        i++;
    }

    if(searchResultProducts.length > 3)
    {
        searchResultDiv.appendChild(createShowAllResultsDiv(searchResultProducts));
    }
}

function createResultProductDiv(resultProduct) {
    const productDiv = document.createElement('div');
    productDiv.setAttribute('productId', resultProduct.id);
    productDiv.classList.add('d-flex', 'align-items-center');
  
    const img = document.createElement('img');
    img.src = resultProduct.images[0]; 
    img.alt = resultProduct.productTitle;
    productDiv.appendChild(img);
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('d-flex', 'flex-column', 'mx-2');
  
    const title = document.createElement('h6');
    title.textContent = resultProduct.productTitle;
    detailsDiv.appendChild(title);
  
    const priceCategoryDiv = document.createElement('div');

    const priceSpan = document.createElement('span');
    priceSpan.textContent = `$${resultProduct.price} ● `;
    priceCategoryDiv.appendChild(priceSpan);

    const categorySpan = document.createElement('span');
    categorySpan.textContent = resultProduct.category;
    priceCategoryDiv.appendChild(categorySpan);

    detailsDiv.appendChild(priceCategoryDiv);
  
    productDiv.appendChild(detailsDiv);

    productDiv.addEventListener("click", displayOneOrAllProducts);
  
    return productDiv;
}

function setCurrentProductToLocal()
{
    localStorage.setItem("currentProductId", currentProductId)
}

function getCurrentProductIdFromLocal()
{
    return +localStorage.getItem("currentProductId") || currentProductId;
}

function getProductIndex(productId)
{
    for(let i=0; i<products.length; i++)
    {
        if(products[i].id === productId)
            return i;
    }
    return -1;
}

function displayOneOrAllProducts()
{
    currentProductId = +this.getAttribute("productId");
    setCurrentProductToLocal();
    window.location.assign("productDetails.html");
}

function getProductsFromLocal()
{
    products = JSON.parse(localStorage.getItem("products")) || [];
}

function claculateTotalPrice(arr){
    let total = 0;
    for(let i = 0 ; i < arr.length ; i++){
        total += parseFloat(arr[i].price)*parseFloat(arr[i].quantity);
    }
    return total.toFixed(2);
}

function claculateTotalQuantity(arr)
{
    let total = 0;
    for(let i=0; i<arr.length; i++)
        total += +arr[i].quantity;

    return total;
    
}

export function updateCartInfo(cartItems)
{
    cartItemsTotalPriceSpan.innerText = `$ ${claculateTotalPrice(cartItems)}`;
    cartItemsCountSpan.innerText = `${claculateTotalQuantity(cartItems)}`;
    if(claculateTotalQuantity(cartItems) >= 100)
    {
        cartItemsCountSpan.innerText = `99+`;
    }
}

function getCartFromlocal(){
    let arr  = JSON.parse(window.localStorage.getItem("cart")) || [];
    return arr;
}

function createShowAllResultsDiv(products)
{
const showAllDiv = document.createElement('div');

showAllDiv.style.backgroundColor = 'rgb(181, 172, 172)';
showAllDiv.style.textAlign = 'center';

showAllDiv.innerHTML = 'Show all results &rarr;';

showAllDiv.addEventListener('click', () => {
    setSearchResultsToLocal(products);
    window.location.href = "searchResults.html";
});

return showAllDiv;

}

function setSearchResultsToLocal(products)
{
    localStorage.setItem("searchResults" ,JSON.stringify(products));
}

function showLoginDialog()
{
    if(currentUser !== null)
    {
        window.location.assign("profileuser.html");
        return;
    }


    let loginScreen = document.getElementById("LoginScreen");
    let modal = new bootstrap.Modal(loginScreen);
    modal.show();
}




function login(){
    var userArray=JSON.parse(localStorage.getItem('users'));
    
    for (let index = 0; index < userArray.length; index++) {
        if
        (
        userArray[index].email==document.getElementById("Email").value
        &&
        document.getElementById("Password").value==userArray[index].password
        )
        {
          var products=JSON.parse(localStorage.getItem('products'));
            var cart=JSON.parse(localStorage.getItem('cart'));
            var userCart=userArray[index].cart;

            cart.forEach(element => {
                const existingIndex = cart.findIndex(x => parseInt(x.productId) == parseInt(element.productId));
                
                if (existingIndex === -1) {
                  // If the item doesn't exist in cart, add it
                  cart.push(element);
                } else {
                  // If the item exists, sum the quantities
                  cart[existingIndex].quantity = String(
                    parseInt(cart[existingIndex].quantity) + parseInt(element.quantity)
                  );
                }
              });

        localStorage.setItem("current_user",JSON.stringify(userArray[index]));
        localStorage.setItem("cart",JSON.stringify(cart))
            break;
        }
    }
    
    location.reload();
}

function getCurrentUserFromLocal()
{
    return JSON.parse(localStorage.getItem("current_user"));
}

function showCart()
{
    let pageLocation = location.href.substring(location.href.lastIndexOf("/")+1,);
    console.log(location.href.substring(location.href.lastIndexOf("/")+1,));
    if(pageLocation === "checkout.html" || pageLocation === "cart.html" || pageLocation === "ordercomplete.html")
    {
        return;
    }
    let modal = new bootstrap.Modal(userCart);
    modal.show();
}