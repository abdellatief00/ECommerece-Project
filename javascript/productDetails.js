  import { Product, Review,  Cart } from "./modula.js";
import { updateCartInfo } from "./navbar.js";

let nextProduct = document.getElementById("nextProduct");
let prevProduct = document.getElementById("prevProduct");

let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");

let floatingDecrementBtn = document.getElementById("floatingDecrementBtn");
let floatingIncrementBtn = document.getElementById("floatingIncrementBtn");
let floatingAddToCart = document.getElementById("floatingAddToCart");
let floatingDivImg = document.querySelector("#bottom-product-counter > div:nth-child(1) > img");
let floatingDivPName = document.querySelector("#bottom-product-counter > div:nth-child(1) > span");
let floatingDivPPrice = document.querySelector("#bottom-product-counter > div:nth-child(2) > div > span");
let currentProductIndex = 2;

let imageContainer = document.querySelector("#product-photo>div");
let productImage = document.querySelector("#product-photo>div>img");
let previewDiv = document.getElementById("product-preview-div");
let products;

let cartItems = getCartFromlocal();
let addToCartBtn = document.querySelector("#add-to-cart-btn");

window.addEventListener("load", function(){
    getProductsFromLocal();
    console.log( "products from nav",products);
    console.log( "products from nav",products.length);
    console.log("yes, here");
    console.log("currentProductId",getCurrentProductIdFromLocal());
    currentProductIndex = getProductIndex(getCurrentProductIdFromLocal());
    console.log("currentProductIndex",currentProductIndex);
    dispalyProductInfo();
    
    
    prevProduct.addEventListener("mouseenter", toggleProductPreviewDiv);
    nextProduct.addEventListener("mouseenter", toggleProductPreviewDiv);

    prevProduct.addEventListener("mouseleave", toggleProductPreviewDiv);
    nextProduct.addEventListener("mouseleave", toggleProductPreviewDiv);

    prevProduct.addEventListener("click", displayPreviousProduct);
    nextProduct.addEventListener("click", displayNextProduct);

    incrementBtn.addEventListener("click", incrementCounter);
    decrementBtn.addEventListener("click", decrementCounter);

    floatingIncrementBtn.addEventListener("click", incrementCounter);
    floatingDecrementBtn.addEventListener("click", decrementCounter);
    floatingAddToCart.addEventListener("click", addToCart);

    window.addEventListener("scroll", showOrHideFloatingDiv);

    addToCartBtn.addEventListener("click", addToCart);

    /* searchBtn.addEventListener("click", searchProductsByTitle);
    searchBox.addEventListener("input", searchProductsByTitle); */
});

productImage.addEventListener("mousemove", function(e){

    let xPercent = (e.clientX - imageContainer.offsetLeft) / imageContainer.offsetWidth * 100;

    let yPercent = (e.clientY - imageContainer.offsetTop) / imageContainer.offsetHeight * 100;
    
    productImage.style.transform = 'translate(-' + xPercent + '%, -' + yPercent + '%) scale(2)';
});

imageContainer.addEventListener('mouseleave', function () {
    productImage.style.transform = 'translate(0, 0) scale(1)';
});

function updateFloatingDivContent()
{
    let currentProduct = products[currentProductIndex];
    floatingDivImg.src = currentProduct.images[0];
    floatingDivPName.innerText = currentProduct.productTitle;
    floatingDivPPrice.innerText = `$ ${currentProduct.price}`;
}

function showOrHideFloatingDiv(){
    let triggerElement = document.getElementById("add-to-cart-btn");
    let triggerElementPosition = triggerElement.getBoundingClientRect().bottom;
    updateFloatingDivContent();
    if(triggerElementPosition < 0)
    {
        document.getElementById("bottom-product-counter").classList.remove("d-none");
    }
    else
    document.getElementById("bottom-product-counter").classList.add("d-none");
}    

function toggleProductPreviewDiv(e){
    updatePreviewDiv(e);
    previewDiv.classList.toggle("d-none");
}

function incrementCounter(){
    if(count < 99)
        count++;
    updateCounterDisplay();
}    

function decrementCounter(){
    if(count > 1)
        count--;
    updateCounterDisplay();
}    

function updateCounterDisplay(){
    document.getElementById("countDisplay").value = count;
    document.getElementById("floatingCountDisplay").value = count;
}

function dispalyProductInfo(){
    let productDetailsSection = document.getElementById("product-details-section");
    let productInfoDiv = productDetailsSection.querySelector("#product-info");
    let pImage = productDetailsSection.querySelector("#product-photo>div>img");
    let category = productInfoDiv.querySelector("div>span");
    let pName = productInfoDiv.querySelector("section:nth-child(2)>h1");
    let pPrice = productInfoDiv.querySelector("section:nth-child(2)>h3");
    let pDesc1 = productInfoDiv.querySelector("section:nth-child(2)>p");
    let pFrameDesc = document.querySelector("#descriptionCollapse > div > div:nth-child(5)>ul");
    let pLensInfo = document.querySelector("#descriptionCollapse > div > div:nth-child(7)>ul");
    let pFShape = pFrameDesc.querySelector("li:nth-child(1)>span");
    let pFColor = pFrameDesc.querySelector("li:nth-child(2)>span");
    let pFMaterial = pFrameDesc.querySelector("li:nth-child(3)>span");

    let pLClass = pLensInfo.querySelector("li:nth-child(1)>span");
    let pLColor = pLensInfo.querySelector("li:nth-child(2)>span");
    let pLTreatment = pLensInfo.querySelector("li:nth-child(3)>span");

    let currP = products[currentProductIndex];
    
    category.innerText = currP.category;
    pImage.src = currP.images[0];
    pName.innerText = currP.productTitle;
    pPrice.innerText = ` $ ${currP.price}`;
    pDesc1.innerText = currP.productDescription;
    pFShape.innerText = currP.shape;
    pFColor.innerText = currP.frameColor;
    pFMaterial.innerText = currP.material;
    pLClass.innerText = currP.lensClass;
    pLColor.innerText = currP.frameColor;
    pLTreatment.innerText = currP.treatment;

    updateFloatingDivContent();

    if(currentProductIndex === 0)
        prevProduct.classList.add("disabled");
    else
        prevProduct.classList.remove("disabled");

    if(currentProductIndex === products.length-1)
        nextProduct.classList.add("disabled");
    else
        nextProduct.classList.remove("disabled");
}

function updatePreviewDiv(e)
{
    let pPreviewImg = previewDiv.querySelector("img");
    let pPreviewName = previewDiv.querySelector("#product-preview-div > div > div:nth-child(1)");
    let pPreviewPrice = previewDiv.querySelector("#product-preview-div > div > div:nth-child(2)");
    let currPreviewProduct;
    
    if(currentProductIndex==0 || currentProductIndex == products.length-1)
        return;

    if(e.target == prevProduct)
        currPreviewProduct = products[currentProductIndex-1];
    if(e.target == nextProduct)
        currPreviewProduct = products[currentProductIndex+1];
    
    pPreviewName.innerText = currPreviewProduct.productTitle;
    pPreviewPrice.innerText = `$ ${currPreviewProduct.price}`;
    pPreviewImg.src = currPreviewProduct.images[0];

}

function displayNextProduct(e){
    e.preventDefault();
    if(currentProductIndex<products.length-1)
    {
        currentProductIndex++;
        updatePreviewDiv(e);
        setCurrentProductToLocal(products[currentProductIndex].id);
        dispalyProductInfo();
    }
}

function displayPreviousProduct(e)
{
    e.preventDefault();
    if(currentProductIndex>0)
    {
        currentProductIndex--;
        updatePreviewDiv(e);
        setCurrentProductToLocal(products[currentProductIndex].id);
        dispalyProductInfo();
    }
}

function getCartFromlocal(){
    let arr  = JSON.parse(window.localStorage.getItem("cart")) || [];
    return arr;
}

function setCartTolocal(arr){
    localStorage.setItem("cart",JSON.stringify(arr));
}

function itemIndxInCart(_item)
{
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

 export function addToCart()
{
    let currentProduct = products[currentProductIndex];
    let addedQuantity = +document.querySelector("#countDisplay").value;
    let indexInCart = itemIndxInCart(currentProduct);
    let availableQuantity = currentProduct.stockQuantity;
    console.log("available quantity",currentProduct.stockQuantity);
    let totalQuantity = addedQuantity;
    let notEnoughItemModal = document.getElementById("not-enough-items-modal");

    if(indexInCart === -1)
    {
        console.log("total quantity", totalQuantity);
        if(totalQuantity > availableQuantity)
        {
            let modal = new bootstrap.Modal(notEnoughItemModal);
            modal.show();
            //alert(`Not enough product only ${availableQuantity} left in stock`);
            return;
        }
        cartItems.push(new Cart(currentProduct.id, currentProduct.productTitle, addedQuantity, currentProduct.price, currentProduct.images[0]).addJson());

    }
    else
    {
        totalQuantity += cartItems[indexInCart].quantity;
        console.log("total quantity", totalQuantity);

        if(totalQuantity > availableQuantity)
        {
            let modal = new bootstrap.Modal(notEnoughItemModal);
            modal.show();
            //alert(`Not enough product only ${availableQuantity} left in stock`);
            return;
        }

        cartItems[indexInCart].quantity += addedQuantity;

    }

    //currentProduct.stock_quantity -= addedQuantity;
    setCartTolocal(cartItems);
    updateCartInfo(cartItems);

}

function getCurrentProductIdFromLocal()
{
    return +localStorage.getItem("currentProductId");
}

function setCurrentProductToLocal(currentProductId)
{
    localStorage.setItem("currentProductId", currentProductId)
}

//get product Index by Id
function getProductIndex(productId)
{
    console.log("productId",productId);
    for(let i=0; i<products.length; i++)
    {
        console.log("innerId",products[i].id);
        if(products[i].id === productId)
            return i;
    }
    return -1;
}

function getProductsFromLocal()
{
    products = JSON.parse(localStorage.getItem("products")) || [];
}
  