import { Cart ,user} from './modula.js';
// //import{Orders}from './modula.js';
let user1 = [];

// let orders =
// [
//     {
//         "orderNumber": 177,
//         "date": "2024-01-03T18:51:12.911Z",
//         "total": 66.78610152647282,
//         "paymentMethod": "Credit Card",
//         "cart": [
//             {
//                 "productId": 12,
//                 "quantity": 3
//             },
//             {
//                 "productId": 6,
//                 "quantity": 2
//             },
//             {
//                 "productId": 15,
//                 "quantity": 3
//             },
//             {
//                 "productId": 14,
//                 "quantity": 4
//             }
//         ],
//         "userId": 1
//     },
//     {
//         "orderNumber": 489,
//         "date": "2023-02-10T18:51:12.912Z",
//         "total": 51.24107419954016,
//         "paymentMethod": "Credit Card",
//         "cart": [
//             {
//                 "productId": 13,
//                 "quantity": 2
//             },
//             {
//                 "productId": 6,
//                 "quantity": 3
//             },
//             {
//                 "productId": 3,
//                 "quantity": 1
//             },
//             {
//                 "productId": 3,
//                 "quantity": 3
//             }
//         ],
//         "userId": 2
//     },
//     {
//         "orderNumber": 751,
//         "date": "2023-12-15T18:51:12.912Z",
//         "total": 16.800541146849234,
//         "paymentMethod": "PayPal",
//         "cart": [
//             {
//                 "productId": 14,
//                 "quantity": 3
//             },
//             {
//                 "productId": 8,
//                 "quantity": 2
//             }
//         ],
//         "userId": 1
//     },
//     {
//         "orderNumber": 750,
//         "date": "2023-09-07T17:51:12.912Z",
//         "total": 17.0898882484283,
//         "paymentMethod": "Credit Card",
//         "cart": [
//             {
//                 "productId": 10,
//                 "quantity": 2
//             },
//             {
//                 "productId": 5,
//                 "quantity": 4
//             }
//         ],
//         "userId": 825
//     },
//     {
//         "orderNumber": 858,
//         "date": "2024-02-22T18:51:12.912Z",
//         "total": 6.883951274391054,
//         "paymentMethod": "PayPal",
//         "cart": [
//             {
//                 "productId": 8,
//                 "quantity": 4
//             },
//             {
//                 "productId": 7,
//                 "quantity": 3
//             },
//             {
//                 "productId": 5,
//                 "quantity": 1
//             },
//             {
//                 "productId": 8,
//                 "quantity": 4
//             }
//         ],
//         "userId": 190
//     },
//     {
//         "orderNumber": 800,
//         "date": "2023-05-04T17:51:12.912Z",
//         "total": 57.682764030949784,
//         "paymentMethod": "PayPal",
//         "cart": [
//             {
//                 "productId": 2,
//                 "quantity": 1
//             },
//             {
//                 "productId": 3,
//                 "quantity": 4
//             },
//             {
//                 "productId": 3,
//                 "quantity": 3
//             },
//             {
//                 "productId": 3,
//                 "quantity": 5
//             },
//             {
//                 "productId": 8,
//                 "quantity": 2
//             }
//         ],
//         "userId": 310
//     },
//     {
//         "orderNumber": 962,
//         "date": "2023-02-13T18:51:12.913Z",
//         "total": 2.3060128672778513,
//         "paymentMethod": "PayPal",
//         "cart": [
//             {
//                 "productId": 16,
//                 "quantity": 2
//             },
//             {
//                 "productId": 8,
//                 "quantity": 1
//             },
//             {
//                 "productId": 3,
//                 "quantity": 1
//             },
//             {
//                 "productId": 8,
//                 "quantity": 2
//             }
//         ],
//         "userId": 999
//     },
//     {
//         "orderNumber": 591,
//         "date": "2023-05-21T17:51:12.913Z",
//         "total": 41.48830848925671,
//         "paymentMethod": "PayPal",
//         "cart": [
//             {
//                 "productId": 14,
//                 "quantity": 4
//             },
//             {
//                 "productId": 16,
//                 "quantity": 3
//             },
//             {
//                 "productId": 3,
//                 "quantity": 2
//             },
//             {
//                 "productId": 3,
//                 "quantity": 2
//             }
//         ],
//         "userId": 495
//     },
//     {
//         "orderNumber": 677,
//         "date": "2024-08-14T17:51:12.913Z",
//         "total": 19.746920910764977,
//         "paymentMethod": "Credit Card",
//         "cart": [
//             {
//                 "productId": 13,
//                 "quantity": 3
//             },
//             {
//                 "productId": 2,
//                 "quantity": 3
//             },
//             {
//                 "productId": 4,
//                 "quantity": 2
//             },
//             {
//                 "productId": 3,
//                 "quantity": 2
//             },
//             {
//                 "productId": 10,
//                 "quantity": 4
//             }
//         ],
//         "userId": 714
//     }
// ]
// localStorage.setItem('orders', JSON.stringify(orders));

let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
window.localStorage.setItem("current_user",JSON.stringify(one_user));
// console.log(one_user);
// user1.push(new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson());
// localStorage.setItem('user', JSON.stringify(user1));
// console.log(one_user);

// user1.push(new user("donya","mohamed","donyamohamed@gmail.com","wedfaa",24,"images/women/product-1-a.jpg",0).addjson());
// localStorage.setItem('user', JSON.stringify(user1));

//console.log(seond);



/* read more */
document.querySelectorAll("#sectiontwo button")[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#sectiontwo span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#sectiontwo span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})

document.querySelectorAll('#sectionfive button')[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#sectionfive span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#sectionfive span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})
document.querySelectorAll('#div5 button')[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#div5 span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#div5 span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve products and current user from local storage
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    let currentUser = JSON.parse(localStorage.getItem('current_user')) || null;

    const productContainer = document.getElementById('products');

    if (!productContainer) {
        console.error("Product container not found in HTML. Make sure you have an element with id 'products'.");
        return;
    }

    // Function to create product div
    function createProductDiv(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', 'col-md-4', 'mb-4');

        const productImageDiv = createProductImageDiv(product);
        const productInfoDiv = createProductInfoDiv(product);

        productDiv.appendChild(productImageDiv);
        productDiv.appendChild(productInfoDiv);

        return productDiv;
    }

    // Function to create product image div
    function createProductImageDiv(product) {
        const productImageDiv = document.createElement('div');
        productImageDiv.classList.add('product-image', 'position-relative', 'overflow-hidden');

        const image = document.createElement('img');
        image.src = product.images[0];
        image.classList.add('productImage');

        const productLinks = createProductLinks(product);

        if (product.offer > 0) {
            const offerDiv = document.createElement('div');
            offerDiv.classList.add('offer-overlay');
            offerDiv.textContent = `Offer: ${product.offer}% Off`;
            productImageDiv.appendChild(offerDiv);
        }

        productImageDiv.appendChild(image);
        productImageDiv.appendChild(productLinks);

        addImageHoverListeners(product, productImageDiv, image);

        return productImageDiv;
    }

    // Function to create product links
    function createProductLinks(product) {
        const productLinks = document.createElement('ul');
        productLinks.classList.add('product-links', 'list-unstyled', 'position-absolute', 'start-50', 'translate-middle', 'text-center');

        const wishlistLink = createProductLink('<i class="far fa-heart" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"></i>', function () {
            toggleFavorite(product);
            updateWishlistLinkColor(wishlistLink, product.id);
        });

        const eyeLink = createProductLink('<i class="fa fa-eye" data-bs-toggle="tooltip" data-bs-placement="top" title="Product details"></i>', function () {
            showProductDetails(product);
        });

        const quickViewLink = createProductLink('<i class="fa fa-search" data-bs-toggle="tooltip" data-bs-placement="top" title="View"></i>', function () {
            viewProductImage(product);
        });

        productLinks.appendChild(wishlistLink);
        productLinks.appendChild(eyeLink);
        productLinks.appendChild(quickViewLink);

        return productLinks;
    }

    // Function to create a product link
    function createProductLink(html, clickHandler) {
        const linkItem = document.createElement('li');
        linkItem.innerHTML = html;
        linkItem.addEventListener('click', clickHandler);
        return linkItem;
    }

    // Function to handle image hover events
    function addImageHoverListeners(product, productImageDiv, image) {
        productImageDiv.addEventListener('mouseenter', function () {
            if (product.stockQuantity === 0) {
                const outOfStockOverlay = createOutOfStockOverlay();
                productImageDiv.appendChild(outOfStockOverlay);
            }
            image.src = product.images[1];
        });

        productImageDiv.addEventListener('mouseleave', function () {
            if (product.stockQuantity === 0) {
                const outOfStockOverlay = productImageDiv.querySelector('.out-of-stock');
                if (outOfStockOverlay) {
                    productImageDiv.removeChild(outOfStockOverlay);
                }
            }
            image.src = product.images[0];
        });
    }

    // Function to create out of stock overlay
    function createOutOfStockOverlay() {
        const outOfStockOverlay = document.createElement('div');
        outOfStockOverlay.classList.add('out-of-stock');
        outOfStockOverlay.textContent = 'Out of Stock';
        return outOfStockOverlay;
    }

    // Function to create product info div
    function createProductInfoDiv(product) {
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');
        const addToCartButton = createAddToCartButton(product);
        const productNameH2 = createProductNameH2(product.productTitle);
        const priceP = createPriceP(product.price);

        productInfoDiv.appendChild(productNameH2);
        productInfoDiv.appendChild(priceP);
        productInfoDiv.appendChild(addToCartButton);

        return productInfoDiv;
    }

    // Function to create "Add to Cart" button
    function createAddToCartButton(product) {
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart', 'btn', 'btn-primary');
        addToCartButton.type = 'button';
        addToCartButton.textContent = 'Add to Cart';

        addToCartButton.addEventListener('click', function () {
            if (product.stockQuantity > 0) {
                let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                let existingCartItem = cartItems.find(item => item.productId === product.id);
                if (!existingCartItem) {
                    cartItems.push(new Cart(product.id, product.productTitle, 1, product.price, product.images[0]).addJson());
                } else {
                    existingCartItem.quantity = existingCartItem ? parseInt(existingCartItem.quantity) + 1 + "" : 1;
                }

                localStorage.setItem('cart', JSON.stringify(cartItems));
                createCartData();
                console.log(`Product added to cart: ${product.productTitle}`);
            } else {
                console.log(`Product is out of stock: ${product.productTitle}`);
            }
        });

        return addToCartButton;
    }

    // Function to create product name heading
    function createProductNameH2(productTitle) {
        const productNameH2 = document.createElement('h2');
        productNameH2.classList.add('productname');
        productNameH2.textContent = productTitle;
        return productNameH2;
    }

    // Function to create price paragraph
    function createPriceP(price) {
        const priceP = document.createElement('p');
        priceP.classList.add('price');
        priceP.textContent = `${price} $`;
        return priceP;
    }

    // Function to show product popup
    function showProductDetails(productId) {
        localStorage.setItem("currentProductId", productId);
        window.location.href = 'productDetails.html';
    }

    // Function to view product image
    function viewProductImage(product) {
        const carouselInner = document.querySelector('#productImageCarousel .carousel-inner');
        carouselInner.innerHTML = '';

        product.images.forEach((imageUrl, index) => {
            const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';

            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.classList.add('d-block', 'w-100');

            const carouselItem = document.createElement('div');
            carouselItem.className = itemClass;
            carouselItem.appendChild(imageElement);

            carouselInner.appendChild(carouselItem);
        });

        const modal = new bootstrap.Modal(document.getElementById('productImageModal'));
        modal.show();
    }

    // Function to toggle favorite status
    function toggleFavorite(product) {
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

            localStorage.setItem('current_user', JSON.stringify(currentUser));

            let usersData = JSON.parse(localStorage.getItem('user')) || [];
            console.log(usersData);

            let userIndex = usersData.findIndex(user => user.id === currentUser.id);

            if (userIndex !== -1) {
                usersData[userIndex].favorites = currentUser.favorites;
                localStorage.setItem('user', JSON.stringify(usersData));
            }
        }
    }

    // Function to update wishlist link color
    function updateWishlistLinkColor(wishlistLink, productId) {
        if (currentUser && currentUser.favorites && currentUser.favorites.includes(productId)) {
            wishlistLink.classList.add('filled-heart');
        } else {
            wishlistLink.classList.remove('filled-heart');
        }
    }

    // Append the first 3 products to the container
    storedProducts.slice(0, 3).forEach(function (product) {
        productContainer.appendChild(createProductDiv(product));
    });

   
});

/* end of read more */