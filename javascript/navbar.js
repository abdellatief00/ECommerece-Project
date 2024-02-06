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
    localCartItems = getCartFromlocal();
    currentProductId = getCurrentProductIdFromLocal();
    currentProductIndex = getProductIndex(currentProductId);
    currentUser = getCurrentUserFromLocal();
    
    if(currentUser !== null)
    {
        userNameSpan.innerText = currentUser.fname + " " + currentUser.lname;
    }
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
        
        keys: ["productTitle"], 
        threshold: 0.4 , 
        location: 0, 
        distance: 50,
        maxPatternLength: 32, // Limit pattern length for performance
        includeScore: true, // Access scores for sorting results
      });
    
    let fuzzyResults = fuzzy.search(_searchTitle);
    
    fuzzyResults.sort((a,b) => b.score > a.score);
    searchResultProducts = fuzzyResults.map(element => {
        return element.item; 
    });

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
        total += parseInt(arr[i].price)*parseInt(arr[i].quantity);
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



//#region  login and login validation
function validateLoginData(email, password) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Check if email and password are not empty
    if (email.trim() === "" && password.trim() === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        document.getElementById("passwordError").innerHTML = "Password is required.";
        return 0;
    }
    else
    {
        if (email.trim() === "") {
            document.getElementById("emailError").innerHTML = "Email is required.";
            return 0;
        }
        else if (!emailRegex.test(email)) {
            document.getElementById("emailError").innerHTML = "Invalid email address";
            return 0;
        }
    
        if (password.trim() === "") {
            document.getElementById("passwordError").innerHTML = "Password is required.";
            return 0;
        }
    }
    

    return 1;
}

function login() {
    


    var emailInput = document.getElementById("Email").value;//get email from login form
    var passwordInput = document.getElementById("Password").value;//get password from login form

    // Reset error messages
    document.getElementById("emailError").innerHTML = "";//reset error messages
    document.getElementById("passwordError").innerHTML = "";//reset error messages



    if (!validateLoginData(emailInput, passwordInput))    return;      //validate login data

       



    var userArray = JSON.parse(localStorage.getItem('users'));//get users from local storage
    var products = JSON.parse(localStorage.getItem('products'));//get products from local storage
    var cart = JSON.parse(localStorage.getItem('cart'));//get cart from local storage
    var flag = 0;//flag to check if user is exist in our system or not

    for (let index = 0; index < userArray.length; index++) {

        if (userArray[index].email === emailInput && userArray[index].password !== passwordInput)
         {
            document.getElementById("passwordError").innerHTML = "Password is incorrect.";
            return;
        }//in this section we find that user is exist in our system but password is incorrect


        if 
        (
            userArray[index].email === emailInput &&
            userArray[index].password === passwordInput
        ) //this section we find that user is exist in our system
        
        {
            flag = 1;
            var userCart = userArray[index].cart;//get cart of logged in user

            cart.forEach(element => {
                const existingIndex = userCart.findIndex(x => parseInt(x.productId) === parseInt(element.productId));

                if (existingIndex === -1) {
                    // If the item doesn't exist in userCart, add it
                    userCart.push(element);
                } else {
                    // If the item exists, sum the quantities
                    const newQuantity = parseInt(userCart[existingIndex].quantity) + parseInt(element.quantity);

                    // Check if the sum is less than or equal to product.stockQuantity
                    if (newQuantity <= products.find(product => product.id === element.productId).stockQuantity) {
                        userCart[existingIndex].quantity = String(newQuantity);
                    } else {
                        // If sum exceeds stockQuantity, set quantity to stockQuantity
                        userCart[existingIndex].quantity = String(products.find(product => product.id === element.productId).stockQuantity);
                    }
                }
            });//loop on cart in local storage and merge it with cart in user object

            localStorage.setItem("current_user", JSON.stringify(userArray[index]));//set current user in local storage after login is success
            localStorage.setItem("cart", JSON.stringify(cart))//update cart in local storage after login is success by merging cart in local storage with cart in user object
            break;
        }

                  //in this section we find that user is not exist in our system


    }

    if (flag)//reload page if user is logged in
        location.reload();
        else{
            
                document.getElementById("emailError").innerHTML = "You may not  have an account .";
                const authButtons = document.querySelector(".authButtons");
    
                if (authButtons) {
                    // Apply styles to make it bigger and bold
                    authButtons.style.fontSize = "20px";  // Change the size as needed
                    authButtons.style.fontWeight = "bold";
    
                    // Focus on the element
                    authButtons.focus();
                }
                return;
                                 
        }


}

//#endregion

function getCurrentUserFromLocal()
{
    return JSON.parse(localStorage.getItem("current_user"));
}

function showCart()
{
    let pageLocation = location.href.substring(location.href.lastIndexOf("/")+1,);
    if(pageLocation === "checkout.html" || pageLocation === "cart.html" || pageLocation === "ordercomplete.html")
    {
        return;
    }
    let modal = new bootstrap.Modal(userCart);
    modal.show();
}