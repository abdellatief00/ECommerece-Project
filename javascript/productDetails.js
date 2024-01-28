import { Product, Review, Cart } from "./modula.js";
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

let productImage = document.querySelector("#product-photo>div>img");
let previewDiv = document.getElementById("product-preview-div");
let count = 1;
let reviewDiv = document.querySelector("#reviewsCollapse > div");
let reviewSubmitBtn = document.querySelector("#formCollapse > div > form > button");
let currentUser = {
    id: 1,
    fname: "Abdellatif",
    lname: "Hamed",
    email: "tefa@Gmail.com",
    password: "123",
    age: 24,
    images: ["images/tefa.png"],
    role: "Admin",
    orders: [1, 2, 3],
    favorites: [""]
};




/*   let product1 = [];
  product1.push(
    new Product(
      'Product 1',
      'Metalen Ronde Shades Vrouwen Zonnebril Mode Mannen Brillen 2022 Vintage Wit Rood Zonnebril Vrouwelijke Mannen Eyewear Vrouwelijke Oculos',
      ['../images/women/product-1-a.jpg', '../images/women/product-1-b.jpg'],
      0,
      [{3:5}],
      300.67,
      'seller123',
      '20',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2024-01-23T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 2',
      'Description for Product 2',
      ['../images/women/product-2-a.jpg', '../images/women/product-2-b.jpg'],
      100,
      [{3:5}],
      189.00,
      'seller1',
      '30',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2024-01-20T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 3',
      'Description for Product 3',
      ['../images/women/product-3-a.jpg', '../images/women/product-3-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller2',
      '5',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2023-01-23T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 4',
      'Description for Product 4',
      ['../images/women/product-4-a.jpg', '../images/women/product-4-b.jpg'],
      100,
      [{3:5}],
      50.00,
      'seller3',
      '0',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2023-07-23T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 5',
      'Description for Product 5',
      ['../images/women/product-5-a.png', '../images/women/product-5-b.png'],
      100,
      [{3:5}],
      200.99,
      'seller3',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2023-06-23T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'BLOOM',
      'Description for Product 6',
      ['../images/women/product-6-a.jpg', '../images/women/product-6-b.jpg'],
      100,
      [{3:5}],
      400.99,
      'seller3',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2023-11-23T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 7',
      'Description for Product 7',
      ['../images/men/product-7-a.jpg', '../images/men/product-7-b.jpg'],
      100.67,
      [{3:5}],
      49.99,
      'seller2',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Men',
      new Date('2023-11-25T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 8',
      'Description for Product 8',
      ['../images/men/product-8-a.jpg', '../images/men/product-8-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller2',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Men',
      new Date('2024-01-22T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 9',
      'Description for Product 9',
      ['../images/men/product-9-a.jpg', '../images/men/product-9-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller4',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Men',
      new Date('2023-11-20T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 10',
      'Description for Product 10',
      ['../images/men/product-10-a.jpg', '../images/men/product-10-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller4',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Men',
      new Date('2024-01-11T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 11',
      'Description for Product 11',
      ['../images/men/product-11-a.jpg', '../images/men/product-11-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller4',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Men',
      new Date('2023-08-09T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'DOLCE GABBANA',
      'Description for Product 12',
      ['../images/men/product-12-a.webp', '../images/men/product-12-b.webp'],
      0,
      [{3:5}],
      49.99,
      'seller1',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Men',
      new Date('2024-01-01T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 13',
      'Description for Product 13',
      ['../images/women/product-13-a.jpg', '../images/women/product-13-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller2',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2023-12-30T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 14',
      'Description for Product 14',
      ['../images/women/product-14-a.jpg', '../images/women/product-14-b.jpg'],
      100,
      [{3:5}],
      49.99,
      'seller3',
      '10',
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2023-09-23T12:00:00.000Z')
      
    )
    .addJson()
  );
  product1.push(
    new Product(
      'Product 15',
      'Description for Product 15',
      ['../images/women/product-15-a.jpg', '../images/women/product-15-b.jpg'],
      100,
      [{3:5}],
      250.00,
      'seller2',
      '10', //offer
      'Round',
      'Black',
      'Plastic',
      'UV Protection',
      'High Index',
      'Women',
      new Date('2024-01-02T12:00:00.000Z')
      
    )
    .addJson()
  );
  localStorage.setItem('products', JSON.stringify(product1));
 */
let products = [];

let cartItems;
let addToCartBtn = document.querySelector("#add-to-cart-btn");

window.addEventListener("load", function(){

    // getting data from the localStorage
    getProductsFromLocal();
    console.log("currentProductId",getCurrentProductIdFromLocal());
    currentProductIndex = getProductIndex(getCurrentProductIdFromLocal());
    console.log("currentProductIndex",currentProductIndex);
    currentUser = getUserFromLocal();
    cartItems = getCartFromlocal();
    setUserToLocal();
    console.log( "products",products);

    dispalyProductInfo();
    updateReviewFormInfo();
    // ================================================================
    
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

    productImage.addEventListener("click", viewProductImage);

    reviewSubmitBtn.addEventListener("click", addReview);

    /* searchBtn.addEventListener("click", searchProductsByTitle);
    searchBox.addEventListener("input", searchProductsByTitle); */
});

// floating div functions
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
// ================================================================

// next and pre products buttons preview div functions
function toggleProductPreviewDiv(e){
    updatePreviewDiv(e);
    previewDiv.classList.toggle("d-none");
}

function updatePreviewDiv(e)
{
    let pPreviewImg = previewDiv.querySelector("img");
    let pPreviewName = previewDiv.querySelector("#product-preview-div > div > div:nth-child(1)");
    let pPreviewPrice = previewDiv.querySelector("#product-preview-div > div > div:nth-child(2)");
    let currPreviewProduct;
    
    if(currentProductIndex<0 || currentProductIndex > products.length-1)
    {
        return;
    }

    if(currentProductIndex==0)
    {
        currPreviewProduct = products[currentProductIndex+1]
    }
    else if(currentProductIndex == products.length-1)
    {
        currPreviewProduct = products[currentProductIndex-1]
    }
    else
    {
        if(e.target == prevProduct)
            currPreviewProduct = products[currentProductIndex-1];
        if(e.target == nextProduct)
            currPreviewProduct = products[currentProductIndex+1];
    }

    pPreviewName.innerText = currPreviewProduct.productTitle;
    pPreviewPrice.innerText = `$ ${currPreviewProduct.price}`;
    pPreviewImg.src = currPreviewProduct.images[0];

}
// ================================================================

// product count to add to cart functions
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
// ================================================================

// updating the product info functions
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

    if(currentProductIndex === 0)
        prevProduct.classList.add("disabled");
    else
        prevProduct.classList.remove("disabled");

    if(currentProductIndex === products.length-1)
        nextProduct.classList.add("disabled");
    else
        nextProduct.classList.remove("disabled");

    updateFloatingDivContent();
    displaProductReviews();
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

/* added one line here -_- ممتهورش */


function getProductIndex(productId)
{
    // let products1 =JSON.parse(window.localStorage.getItem('products')); 
    for(let i=0; i<products.length; i++)
    {
        if(products[i].id === productId)
            return i;
    }
    return -1;
}

function viewProductImage() {
    console.log("inside the product images loader");
    let currentProduct = products[currentProductIndex];
    const carouselInner = document.querySelector('#productImageCarousel .carousel-inner');
    carouselInner.innerHTML = '';

    currentProduct.images.forEach((imageUrl, index) => {
        const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.classList.add('d-block', 'w-100');

        const carouselItem = document.createElement('div');
        carouselItem.className = itemClass;
        carouselItem.appendChild(imageElement);

        carouselInner.appendChild(carouselItem);
    });

    let modal = new bootstrap.Modal(document.getElementById('picsModal'));
    modal.show();
    
}
// ================================================================

// localStorage functions
function getCartFromlocal(){
    let arr  = JSON.parse(window.localStorage.getItem("cart")) || [];
    return arr;
}

function setCartTolocal(arr){
    localStorage.setItem("cart",JSON.stringify(arr));
}

function getCurrentProductIdFromLocal()
{
    return +localStorage.getItem("currentProductId");
}

function setCurrentProductToLocal(currentProductId)
{
    localStorage.setItem("currentProductId", currentProductId)
}

function setUserToLocal(){
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
}

function getUserFromLocal()
{
    return JSON.parse(localStorage.getItem("current_user"));
}

function getProductsFromLocal()
{
    products = JSON.parse(localStorage.getItem("products")) || [];
}

function setProductsToLocal()
{
    localStorage.setItem("products", JSON.stringify(products));
}
// ================================================================

// Reviews section functions
function addReview(e)
{
    e.preventDefault();
    let reviewsCountSpan = document.querySelector("#reviewsHeading > button > span");
    //currentUser = JSON.parse(localStorage.getItem("car"));
    if(currentUser === null)
    {
        alert("Sign in first to review");
        return;
    }
    let reviewText = document.getElementById("review").value;
    let newReview = new Review(currentUser.id, reviewText).toJSON();

    products[currentProductIndex].reviews.push(newReview);
    //console.log(products[currentProductIndex].reviews);
    reviewsCountSpan.innerText = products[currentProductIndex].reviews.length;
    setProductsToLocal();
    createReviewDiv(currentUser.images[0], currentUser.fname + " " + currentUser.lname, reviewText);
}

function createReviewDiv(userImg, userName, review)
{
    let cardDiv = document.createElement("div");

    cardDiv.className = 'd-flex flex-column w-100 border border-secondary-subtle border-2 rounded-3 p-3 m-3';

    cardDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <img src="${userImg}" alt="" style="width: 50px; height: 50px; border-radius: 50%;" class="m-2">
            <h6>${userName}</h6>
        </div>
        <div>
            ${review}
        </div>
    `;
    
    reviewDiv.appendChild(cardDiv);

}

function displaProductReviews()
{
    let currentProduct = products[currentProductIndex];
    let reviews = currentProduct.reviews;
    let reviewsCountSpan = document.querySelector("#reviewsHeading > button > span");

    console.log(reviews);
    if(reviews.length > 0)
    {
        reviewDiv.innerHTML = "";
        reviewsCountSpan.innerText = reviews.length;
    }
    else
    {
        reviewsCountSpan.innerText = 0;
        reviewDiv.innerHTML = "<p>No reviews yet. Be the first to review this product.</p>";
        return;
    }
    

    for(let i=0; i<reviews.length; i++)
    {
        console.log(`review ${i}`, reviews[i]);
        createReviewDiv("images/product-09-a.jpg", "userNamePlaceholder", reviews[i].reviewBody);
    }
}

function updateReviewFormInfo()
{
    let reviewFormName = document.getElementById("name");
    let reviewFormMail = document.getElementById("email");
    
    if(currentUser !== null){
        reviewFormName.value = currentUser.fname + " " + currentUser.lname;
        reviewFormMail.value = currentUser.email;
    }
    else
    {
        reviewFormName.value = currentUser.fname + " " + currentUser.lname;
        reviewFormMail.value = currentUser.email;
    }
}
// ================================================================


// cart functions
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

function addToCart()
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
// ================================================================

