import { Product, Review, Rating, Cart } from "./modula.js";

let nextProduct = document.getElementById("nextProduct");
let prevProduct = document.getElementById("prevProduct");
let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let floatingDecrementBtn = document.getElementById("floatingDecrementBtn");
let floatingIncrementBtn = document.getElementById("floatingIncrementBtn");
let currentProductIndex = 2;
let imageContainer = document.querySelector("#product-photo>div");
let productImage = document.querySelector("#product-photo>div>img");
let previewDiv = document.getElementById("product-preview-div");
let count = 1;

let products = [
    new Product(
      "Product 1",
      "Description for Product 1",
      ["images/", "image2.jpg"],
      100,
      [{ userId: "user1", reviewBody: "Great product!" }],
      [{ userId: "user1", rating: 4 }],
      29.99,
      "seller1",
      "10% off",
      "Round",
      "Black",
      "Plastic",
      "UV400",
      "Anti-reflective",
      "Men's"
    ),
    new Product(
      "Product 2",
      "Description for Product 2",
      ["image3.jpg", "image4.jpg"],
      50,
      [{ userId: "user2", reviewBody: "Nice design." }],
      [{ userId: "user2", rating: 5 }],
      49.99,
      "seller2",
      "20% off",
      "Square",
      "Brown",
      "Metal",
      "UV400",
      "Anti-scratch",
      "Women's"
    ),
    new Product(
      "Product 3",
      "Description for Product 3",
      ["image5.jpg", "image6.jpg"],
      75,
      [{ userId: "user3", reviewBody: "Perfect fit!" }],
      [{ userId: "user3", rating: 4 }],
      39.99,
      "seller3",
      "15% off",
      "Oval",
      "Blue",
      "Acetate",
      "UV400",
      "Anti-glare",
      "MEN's"
    ),
    new Product(
      "Product 4",
      "Description for Product 4",
      ["image7.jpg", "image8.jpg"],
      120,
      [{ userId: "user4", reviewBody: "Comfortable to wear." }],
      [{ userId: "user4", rating: 3 }],
      59.99,
      "seller4",
      "25% off",
      "Aviator",
      "Silver",
      "Titanium",
      "Polarized",
      "Water-resistant",
      "Men's"
    ),
    new Product(
      "Product 5",
      "Description for Product 5",
      ["image9.jpg", "image10.jpg"],
      90,
      [{ userId: "user5", reviewBody: "Durable and stylish." }],
      [{ userId: "user5", rating: 5 }],
      34.99,
      "seller5",
      "30% off",
      "Rectangular",
      "Red",
      "Plastic",
      "Polarized",
      "Scratch-resistant",
      "Women's"
    ),
  ];

let ps = [
    {
        "id": 1,
        "productTitle": "Product 1",
        "productDescription": "Metalen Ronde Shades Vrouwen Zonnebril Mode Mannen Brillen 2022 Vintage Wit Rood Zonnebril Vrouwelijke Mannen Eyewear Vrouwelijke Oculos",
        "images": [
            "../images/women/product-1-a.jpg",
            "../images/women/product-1-b.jpg"
        ],
        "stockQuantity": 0,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2024-01-23T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 300.67
    },
    {
        "id": 2,
        "productTitle": "Product 2",
        "productDescription": "Description for Product 2",
        "images": [
            "../images/women/product-2-a.jpg",
            "../images/women/product-2-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2024-01-20T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 189
    },
    {
        "id": 3,
        "productTitle": "Product 3",
        "productDescription": "Description for Product 3",
        "images": [
            "../images/women/product-3-a.jpg",
            "../images/women/product-3-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2023-01-23T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 4,
        "productTitle": "Product 4",
        "productDescription": "Description for Product 4",
        "images": [
            "../images/women/product-4-a.jpg",
            "../images/women/product-4-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2023-07-23T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 50
    },
    {
        "id": 5,
        "productTitle": "Product 5",
        "productDescription": "Description for Product 5",
        "images": [
            "../images/women/product-5-a.png",
            "../images/women/product-5-b.png"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2023-06-23T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 200.99
    },
    {
        "id": 6,
        "productTitle": "BLOOM",
        "productDescription": "Description for Product 6",
        "images": [
            "../images/women/product-6-a.jpg",
            "../images/women/product-6-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2023-11-23T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 400.99
    },
    {
        "id": 7,
        "productTitle": "Product 7",
        "productDescription": "Description for Product 7",
        "images": [
            "../images/men/product-7-a.jpg",
            "../images/men/product-7-b.jpg"
        ],
        "stockQuantity": 100.67,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Men",
        "category": "2023-11-25T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 8,
        "productTitle": "Product 8",
        "productDescription": "Description for Product 8",
        "images": [
            "../images/men/product-8-a.jpg",
            "../images/men/product-8-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Men",
        "category": "2024-01-22T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 9,
        "productTitle": "Product 9",
        "productDescription": "Description for Product 9",
        "images": [
            "../images/men/product-9-a.jpg",
            "../images/men/product-9-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Men",
        "category": "2023-11-20T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 10,
        "productTitle": "Product 10",
        "productDescription": "Description for Product 10",
        "images": [
            "../images/men/product-10-a.jpg",
            "../images/men/product-10-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Men",
        "category": "2024-01-11T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 11,
        "productTitle": "Product 11",
        "productDescription": "Description for Product 11",
        "images": [
            "../images/men/product-11-a.jpg",
            "../images/men/product-11-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Men",
        "category": "2023-08-09T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 12,
        "productTitle": "DOLCE GABBANA",
        "productDescription": "Description for Product 12",
        "images": [
            "../images/men/product-12-a.webp",
            "../images/men/product-12-b.webp"
        ],
        "stockQuantity": 0,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Men",
        "category": "2024-01-01T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 13,
        "productTitle": "Product 13",
        "productDescription": "Description for Product 13",
        "images": [
            "../images/women/product-13-a.jpg",
            "../images/women/product-13-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2023-12-30T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 14,
        "productTitle": "Product 14",
        "productDescription": "Description for Product 14",
        "images": [
            "../images/women/product-14-a.jpg",
            "../images/women/product-14-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2023-09-23T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 49.99
    },
    {
        "id": 15,
        "productTitle": "Product 15",
        "productDescription": "Description for Product 15",
        "images": [
            "../images/women/product-15-a.jpg",
            "../images/women/product-15-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "Round",
        "shape": "Black",
        "frameColor": "Plastic",
        "material": "UV Protection",
        "lensClass": "High Index",
        "treatment": "Women",
        "category": "2024-01-02T12:00:00.000Z",
        "reviews": [
            {
                "3": 5
            }
        ],
        "rating": 250
    }
]

let cartItems = getCartFromlocal();
let addToCartBtn = document.querySelector("#add-to-cart-btn");
// let searchBtn = document.querySelector("#header-search-form > button");
// let searchBox = document.querySelector("#header-search-form > input");
// let searchResultProducts = [];
// let searchResultDiv = document.getElementById("search-results");

window.addEventListener("load", function(){
    console.log("yes, here");
    //this.localStorage.setItem("products", JSON.stringify(product1));
    //console.log(JSON.parse(this.localStorage.getItem("products")));
    //console.log(ps[0]);
    console.log("currentProductId",getCurrentProductIdFromLocal());
    currentProductIndex = getProductIndex(getCurrentProductIdFromLocal());
    dispalyProductInfo();
    
    console.log("currentProductIndex",currentProductIndex);
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
    
function showOrHideFloatingDiv(){
    let triggerElement = document.getElementById("add-to-cart-btn");
    let triggerElementPosition = triggerElement.getBoundingClientRect().bottom;

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
    pName.innerText = currP.product_title;
    pPrice.innerText = ` $ ${currP.price}`;
    pDesc1.innerText = currP.product_description;
    pFShape.innerText = currP.shape;
    pFColor.innerText = currP.frame_color;
    pFMaterial.innerText = currP.material;
    pLClass.innerText = currP.lens_class;
    pLColor.innerText = currP.frame_color;
    pLTreatment.innerText = currP.treatment;

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
    
    pPreviewName.innerText = currPreviewProduct.product_title;
    pPreviewPrice.innerText = `$ ${currPreviewProduct.price}`;

}

function displayNextProduct(e){
    e.preventDefault();
    if(currentProductIndex<products.length-1)
    {
        currentProductIndex++;
        updatePreviewDiv(e);
        setCurrentProductToLocal(products[currentProductIndex].product_id);
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
        setCurrentProductToLocal(products[currentProductIndex].product_id);
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
        if(cartItems[i].productId === _item.product_id)
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
    let availableQuantity = currentProduct.stock_quantity;
    console.log("available quantity",currentProduct.stock_quantity);
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
        cartItems.push(new Cart(currentProduct.product_id, currentProduct.product_title, addedQuantity, currentProduct.price, currentProduct.images[0]).addJson());

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

}

function getCurrentProductIdFromLocal()
{
    return +localStorage.getItem("currentProductId");
}

function setCurrentProductToLocal(currentProductId)
{
    localStorage.setItem("currentProductId", currentProductId)
}

function getProductIndex(productId)
{
    console.log("productId",productId);
    for(let i=0; i<products.length; i++)
    {
        console.log("innerId",products[i].product_id);
        if(products[i].product_id === productId)
            return i;
    }
    return -1;
}
  


