import { addToCart } from "./cartScript.js";

document.addEventListener("DOMContentLoaded", function () {
    populateFavoritesTable();

    
    let search = document.querySelector("input[name=searchByName]");
    search.addEventListener("input", searching);

    function searching(e) {
        
        let targetTable = document.getElementById('tbodyFavorites');
        let tr = targetTable.querySelectorAll("tr");
        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = node.textContent.toLowerCase();
            let show = textContent.includes(this.value.toLowerCase());
            node.style.display = show ? "" : "none";
        }
    }

    function populateFavoritesTable() {
        let User = JSON.parse(localStorage.getItem('current_user')) || {};
        let productIds = User.favorites || [];
        if (productIds) {
            let productsData = JSON.parse(localStorage.getItem('products')) || [];

            let tbodyFavorites = document.getElementById('tbodyFavorites');
            tbodyFavorites.innerHTML = '';

            productIds.forEach(function (productId) {
                let product = productsData.find(p => p.id === productId);

                if (product) {
                    let row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${product.productTitle}</td>
                        <td>${product.price}$</td>
                        <td>${product.offer}$</td>
                        <td>${product.category}</td>
                        <td><img src="${product.images[0]}" alt="" style="max-width: 50px; max-height: 50px; cursor: pointer;" class="product-image"></td>
                        <td><i class="fa-solid fa-cart-plus" ></i></td>
                        <td><i class="fa-solid fa-trash"></i></td>
            
                    `;
                    tbodyFavorites.appendChild(row);
                    row.children[5].addEventListener('click', function () {addToCart(product);});
                    row.children[6].addEventListener('click',function(){removeFromFavorites(product.productId,this)})
                   
                    let productImage = row.querySelector('.product-image');
                    productImage.addEventListener('click', function () {
                        redirectToProductDetails(product.id);
                    });
                }
            });
        } else {
            
            let row = document.createElement('tr');
            row.innerHTML = `<td colspan="5">No Favorite products</td>`;
            tbodyFavorites.appendChild(row);
        }
    }
    
    function redirectToProductDetails(productId) {
        // Replace 'product-details.html' with the actual product details page URL
        localStorage.setItem("currentProductId", productId);
        window.location.href = 'productDetails.html';
    }
});
function removeFromFavorites(productId, deleteIcon) {
    // Show a confirmation dialog
    if (confirm('Are you sure you want to remove this product from favorites?')) {
        let User = JSON.parse(localStorage.getItem('current_user')) || {};
        let productIds = User.favorites || [];
    
        let updatedFavorites = productIds.filter(id => id !== productId);
        User.favorites = updatedFavorites;
        localStorage.setItem('current_user', JSON.stringify(User));
        let usersData = JSON.parse(localStorage.getItem('users')) || [];
        
        let userIndex = usersData.findIndex(user => user.id === User.id);
    
        if (userIndex !== -1) {
            usersData[userIndex].favorites = User.favorites;
            localStorage.setItem('users', JSON.stringify(usersData));
        }
    
        let row = deleteIcon.closest('tr');
        row.remove();
    } else {
        return;
        // User clicked cancel, do nothing
    }
}
