document.addEventListener('DOMContentLoaded', function () {
    // Retrieve products and current user from local storage
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    let currentUser = JSON.parse(localStorage.getItem('current_user')) || null;
    
    // Constants and initialization
    const productsPerPage = 5;
    let currentPage = 1;
    const categoryFilter = 'Women';
    const productContainer = document.getElementById('product-container');

    // Check if the product container exists in the HTML
    if (!productContainer) {
        console.error("Product container not found in HTML. Make sure you have an element with id 'product-container'.");
        return;
    }

    // Function to create a product div
    function createProductDiv(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', 'col-md-4', 'mb-4');

        const productImageDiv = createProductImageDiv(product);
        const productInfoDiv = createProductInfoDiv(product);

        productDiv.appendChild(productImageDiv);
        productDiv.appendChild(productInfoDiv);

        return productDiv;
    }

    // Function to create a product image div
    function createProductImageDiv(product) {
        const productImageDiv = document.createElement('div');
        productImageDiv.classList.add('product-image', 'position-relative', 'overflow-hidden');

        const image = document.createElement('img');
        image.src = product.images[0];
        image.classList.add('productImage');

        const productLinks = createProductLinks(product);

        // Check if the product has an offer
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

    // Function to create product links (wishlist, eye, quick view)
    function createProductLinks(product) {
        const productLinks = document.createElement('ul');
        productLinks.classList.add('product-links', 'list-unstyled', 'position-absolute', 'start-50', 'translate-middle', 'text-center');

        const wishlistLink = createProductLink('<i class="far fa-heart" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"></i>', function () {
            toggleFavorite(product);
            updateWishlistLinkColor(wishlistLink, product.id);
        });

        const eyeLink = createProductLink('<i class="fa fa-eye" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>', function () {
            showProductDetails(product);
        });

        const quickViewLink = createProductLink('<i class="fa fa-search" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>', function () {
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
    function showProductDetails(product) {
        setCurrentProductIdToLocal(product.id);
        window.location.assign("productDetails.html");
        //console.log('Product details popup:', product);
        // Implement logic to display product details in a popup
        // You can use a modal or any other UI component to display detailed product information
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
    
    
    

    // Function to update wishlist link color
    function updateWishlistLinkColor(wishlistLink, productId) {
        if (currentUser && currentUser.favorites && currentUser.favorites.includes(productId)) {
            wishlistLink.classList.add('filled-heart');
        } else {
            wishlistLink.classList.remove('filled-heart');
        }
    }

    // Function to render products on the page
    function renderProducts(sortedProducts, page) {
        console.log('Rendering products:', sortedProducts);
        productContainer.innerHTML = '';

        const startIndex = (page - 1) * productsPerPage;
        let endIndex = startIndex + productsPerPage;

        const filteredProducts = sortedProducts.filter(product => product.category === categoryFilter);

        // Check if endIndex is greater than the total number of products
        if (endIndex > filteredProducts.length) {
            endIndex = filteredProducts.length;
        }

        const productsForPage = filteredProducts.slice(startIndex, endIndex);

        productsForPage.forEach(product => {
            const productDiv = createProductDiv(product);
            productContainer.appendChild(productDiv);
        });
    }

    // Function to update paging buttons
    function updatePagingButtons() {
        const prevButton = document.getElementById('prev-page');
        const nextButton = document.getElementById('next-page');

        prevButton.classList.toggle('disabled', currentPage === 1);
        nextButton.classList.toggle('disabled', currentPage === Math.ceil(storedProducts.length / productsPerPage));
    }

    // Function to sort and render products
    function sortAndRenderProducts(selectedOption) {
        let sortedProducts;

        switch (selectedOption) {
            case 'date':
                sortedProducts = storedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;

            case 'price':
                sortedProducts = storedProducts.sort((a, b) => a.price - b.price);
                break;

            case 'price-desc':
                sortedProducts = storedProducts.sort((a, b) => b.price - a.price);
                break;

            default:
            case 'menu-order':
                sortedProducts = storedProducts;
                break;
        }

        renderProducts(sortedProducts, currentPage);
        updatePagingButtons();
    }

    // Event listener for the "Sort By" dropdown
    document.getElementById('orderby').addEventListener('change', function () {
        const selectedOption = this.value;
        sortAndRenderProducts(selectedOption);
    });

    // Event listener for the "Next" button
    document.getElementById('next-page').addEventListener('click', function () {
        currentPage++;
        sortAndRenderProducts(document.getElementById('orderby').value);
    });

    // Event listener for the "Previous" button
    document.getElementById('prev-page').addEventListener('click', function () {
        currentPage--;
        sortAndRenderProducts(document.getElementById('orderby').value);
    });

    // Initial rendering of products
    sortAndRenderProducts(document.getElementById('orderby').value);
    updatePagingButtons();
});

function setCurrentProductIdToLocal(productId)
{
    localStorage.setItem("currentProductId", productId);
}
