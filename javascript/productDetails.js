  
window.addEventListener("load", function(){
    let nextProduct = document.getElementById("nextProduct");
    let prevProduct = document.getElementById("prevProduct");
    let incrementBtn = document.getElementById("incrementBtn");
    let decrementBtn = document.getElementById("decrementBtn");
    let floatingDecrementBtn = document.getElementById("floatingDecrementBtn");
    let floatingIncrementBtn = document.getElementById("floatingIncrementBtn");
    changeItemsPlaces();

    prevProduct.addEventListener("mouseenter", toggleProductPreviewDiv);
    nextProduct.addEventListener("mouseenter", toggleProductPreviewDiv);

    prevProduct.addEventListener("mouseleave", toggleProductPreviewDiv);
    nextProduct.addEventListener("mouseleave", toggleProductPreviewDiv);

    incrementBtn.addEventListener("click", incrementCounter);
    decrementBtn.addEventListener("click", decrementCounter);

    floatingIncrementBtn.addEventListener("click", incrementCounter);
    floatingDecrementBtn.addEventListener("click", decrementCounter);

    window.addEventListener("scroll", showOrHideFloatingDiv);
    /* window.addEventListener('resize', changeItemsPlaces);

    searchButton.addEventListener("click", dispalySearchBox);

    this.document.addEventListener("click", hideSearchBox);
    this.document.addEventListener("keydown", handleKeysActions); */
});

        
let currentProductIndex = 1;
let imageContainer = document.querySelector("#product-photo>div");
let productImage = document.querySelector("#product-photo>div>img");
let searchForm = document.getElementById("header-search-form");
let searchButton = searchForm.querySelector("button");
let searchInput = searchForm.querySelector("input");
let count = 1;

productImage.addEventListener("mousemove", function(e){

    let xPercent = (e.clientX - imageContainer.offsetLeft) / imageContainer.offsetWidth * 100;

    let yPercent = (e.clientY - imageContainer.offsetTop) / imageContainer.offsetHeight * 100;
    
    productImage.style.transform = 'translate(-' + xPercent + '%, -' + yPercent + '%) scale(2)';
});

imageContainer.addEventListener('mouseleave', function () {
    productImage.style.transform = 'translate(0, 0) scale(1)';
});        

function dispalyProductInfo(){
    let productInfoDiv = document.querySelector("#product-info");
    let category = document.createElement("span");
    let pName = document.createElement("h2");
    let pPrice = document.createElement("h3");
    let pDesc1 = document.createElement("p");
    let pDesc2 = document.createElement("p");
    let buttonsDiv = document.createElement("div");
    let line = document.createElement("hr");
    let line2 = document.createElement("hr");

    category.innerText = products[currentProductIndex].category;
    pName.innerText = products[currentProductIndex].name;
    pPrice.innerText = ` $ ${products[currentProductIndex].price} &free shipping `;
    pDesc1.innerText = products[currentProductIndex].description;
    pDesc2.innerText = products[currentProductIndex].description;
    buttonsDiv.innerHTML = createCountButton();

    productInfoDiv.append(category, pName, pPrice, pDesc1, pDesc2, buttonsDiv, line, category, line2);
}    

function createCountButton(){
    let incrementButton = document.createElement("button");
    let decrementButton = document.createElement("button");
    let countContainer = document.createElement("input");
    let buttonsDiv = document.createElement("div");


    let counterDiv = `
    <div class="d-flex align-items-center container-fluid">
                <div class="">
                    <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button" id="decrementBtn">-</button>
                        <input type="text" class="form-control text-center" value="0" id="countDisplay" readonly>
                        <button class="btn btn-outline-secondary" type="button" id="incrementBtn">+</button>
                    </div>
                </div>
                
                <div class="mx-4">
                    <button class="btn btn-outline-secondary">
                        Add To Cart
                    </button>
                </div>
            </div>
    
    `;

    // Set classes for styling
    buttonsDiv.classList.add("count-container");
    countContainer.classList.add("count-output");

    incrementButton.innerText = "+";
    decrementButton.innerText = "-";
    let counter = 1;

    buttonsDiv.append(decrementButton, countContainer, incrementButton);

    return counterDiv;
}    
    
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

function toggleProductPreviewDiv(){
    let previewDiv = document.getElementById("product-preview-div");
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

/* function dispalySearchBox(e)
{
    e.preventDefault();
    searchInput.classList.remove("d-none");
    searchInput.focus();
}

function hideSearchBox(e)
{
    var isClickInsideSearchBox = searchInput.contains(e.target);
    
    if (!isClickInsideSearchBox) {
        if(!searchButton.contains(e.target))
            searchInput.classList.add("d-none");
    }
}

function handleKeysActions(e)
{
    if(e.key === "Escape")
        searchInput.classList.add("d-none");
}

function changeItemsPlaces()
{
    let navbar = document.getElementById("navbarSupportedContent");
    let headerRightSection = document.querySelector("#header-right-section")
    let rightSectionFormDiv = headerRightSection.querySelector("div:nth-child(1)");
    let loginBtn = document.getElementById("loginBtn");

    if(window.innerWidth < 992)
    {
        navbar.querySelector("ul>li:nth-child(6)").appendChild(loginBtn);
        //navbar.appendChild(loginBtn);
        navbar.appendChild(searchForm);
        console.log("appended");
    }

    else
    {
        headerRightSection.appendChild(loginBtn);
        rightSectionFormDiv.appendChild(searchForm);
        console.log("deleted");
    }



} */
