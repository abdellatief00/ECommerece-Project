import { Product, Review, Rating, Cart } from "./modula.js";

let searchForm = document.getElementById("header-search-form");
let searchButton = searchForm.querySelector("button");
let searchInput = searchForm.querySelector("input");
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
let searchBtn = document.querySelector("#header-search-form > button");
let searchBox = document.querySelector("#header-search-form > input");
let searchResultProducts = [];
let searchResultDiv = document.getElementById("search-results");
let currentProductId = 8;
let currentProductIndex = getProductIndex(currentProductId) ;

window.addEventListener("load", function(){
    changeItemsPlaces();

    console.log("localproduct",getCurrentProductFromLocal()); 
    currentProductIndex = getProductIndex(currentProductId);
    console.log( "currentProductIndex", currentProductIndex)
    window.addEventListener('resize', changeItemsPlaces);

    //searchResultDiv.addEventListener("click", displayOneOrAllProducts);
    searchButton.addEventListener("click", dispalySearchBox);
    searchBtn.addEventListener("click", searchProductsByTitle);
    searchBox.addEventListener("input", searchProductsByTitle);

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
    let headerRightSection = document.querySelector("#header-right-section")
    let rightSectionFormDiv = headerRightSection.querySelector("div:nth-child(1)");
    let loginBtn = document.getElementById("loginBtn");

    if(window.innerWidth < 992)
    {
        navbar.querySelector("ul>li:nth-child(6)").appendChild(loginBtn);
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
        keys: ["product_title"], // Search within the "product_title" field
        threshold: 0.4 , // Higher threshold for stricter matching, ensuring "MR" is distinct
        location: 0, // Prioritize matches at the beginning of the title
        distance: 25, // Allow for some typos and variations, but not too generous
        maxPatternLength: 32, // Limit pattern length for performance
        includeScore: true, // Access scores for sorting results
      });
    
    let fuzzyResults = fuzzy.search(_searchTitle);
    
    fuzzyResults.sort((a,b) => b>a);
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

}

function createResultProductDiv(resultProduct) {
    const productDiv = document.createElement('div');
    productDiv.setAttribute('productId', resultProduct.product_id);
    productDiv.classList.add('d-flex', 'align-items-center');
  
    const img = document.createElement('img');
    img.src = resultProduct.images[0]; 
    img.alt = resultProduct.product_title;
    productDiv.appendChild(img);
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('d-flex', 'flex-column', 'mx-2');
  
    const title = document.createElement('h6');
    title.textContent = resultProduct.product_title;
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

function getCurrentProductFromLocal()
{
    return +localStorage.getItem("currentProductId");
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

function displayOneOrAllProducts(e)
{
    e.preventDefault();
    console.log(this.getAttribute("productId"));
    currentProductId = 2;
    setCurrentProductToLocal();
    window.location.assign("productDetails.html");
}