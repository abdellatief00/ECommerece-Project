$(document).ready(function () {
    $("#sidebarToggle").click(function () {
        $("#sidebar").toggleClass("collapsed");
        $("#content").toggleClass("collapsed");
        if ($("#sidebar").hasClass("collapsed")) {
            $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
        } else {

            $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
        }
    });
    let search = document.querySelector("input[name=searchByName]");
    search.addEventListener("input", searching);

    function searching(e) {
        //  console.log(e);
        let tr = document.querySelectorAll("tbody tr");
        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = node.children[2].textContent.toLowerCase();
            let show = textContent.indexOf(this.value.toLowerCase()) !== -1;
            node.style.display = show ? "" : "none";
        }
    }
    $(window).resize(function () {
        updateSidebarState();
    });

}); //load event

function updateSidebarState() {
    if ($(window).width() <= 1200) {

        $("#sidebar").addClass("collapsed");
        $("#content").addClass("collapsed");

        $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
    } else {

        $("#sidebar").removeClass("collapsed");
        $("#content").removeClass("collapsed");

        $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Populate the favorites table on page load
    populateFavoritesTable();

    // Add event listener for the search input
    let search = document.querySelector("input[name=searchByName]");
    search.addEventListener("input", searching);

    function searching(e) {
        // Get the target table (favorites table)
        let targetTable = document.getElementById('tbodyFavorites');

        // Get all rows in the table
        let tr = targetTable.querySelectorAll("tr");
        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = node.textContent.toLowerCase();
            let show = textContent.includes(this.value.toLowerCase());
            node.style.display = show ? "" : "none";
        }
    }

    // Function to populate the favorites table
    function populateFavoritesTable() {
        let User = JSON.parse(localStorage.getItem('current_user')) || {};
        let productIds = User.favorites || [];
        if (productIds) {
            let productsData = JSON.parse(localStorage.getItem('products')) || [];

            let tbodyFavorites = document.getElementById('tbodyFavorites');
            tbodyFavorites.innerHTML = '';

            productIds.forEach(function (productId) {
                // Find the product details based on the stored IDs
                let product = productsData.find(p => p.id === productId);

                if (product) {
                    let row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${product.productTitle}</td>
                        <td>${product.price}$</td>
                        <td>${product.offer}$</td>
                        <td>${product.category}</td>
                        <td><img src="${product.images[0]}" alt="" style="max-width: 50px; max-height: 50px; cursor: pointer;" class="product-image"></td>
                        <td><i class="fa-solid fa-cart-plus" onclick="addToCart(${product.id})"></i></td>
                        <td><i class="fa-solid fa-trash" onclick="removeFromFavorites(${product.id}, this)"></i></td>
            
                    `;
                    tbodyFavorites.appendChild(row);

                    // Add event listener to the image
                    let productImage = row.querySelector('.product-image');
                    productImage.addEventListener('click', function () {
                        redirectToProductDetails(product.id);
                    });
                }
            });
        } else {
            // If no favorite products, display a message
            let row = document.createElement('tr');
            row.innerHTML = `<td colspan="5">No Favorite products</td>`;
            tbodyFavorites.appendChild(row);
        }
    }
    
    //#########################################################################   product details sharkawy
    // Function to redirect to product details page
    function redirectToProductDetails(productId) {
        // Replace 'product-details.html' with the actual product details page URL
        localStorage.setItem("currentProductId", productId);
        window.location.href = 'productDetails.html';
    }
});
function removeFromFavorites(productId, deleteIcon) {
    let User = JSON.parse(localStorage.getItem('current_user')) || {};
    let productIds = User.favorites || [];

    // Remove the productId from the favorites array
    let updatedFavorites = productIds.filter(id => id !== productId);

    // Update the user's favorites in local storage
    User.favorites = updatedFavorites;
    localStorage.setItem('current_user', JSON.stringify(User));
    let usersData = JSON.parse(localStorage.getItem('user')) || [];
            console.log(usersData);
    
            // Find the index of the current user in the array
            let userIndex = usersData.findIndex(user => user.id === User.id);
    
            if (userIndex !== -1) {
                // Update only the favorites in the array
                usersData[userIndex].favorites = User.favorites;
                localStorage.setItem('user', JSON.stringify(usersData));
            }
    // Remove the row from the table
    let row = deleteIcon.closest('tr');
    row.remove();
}
//#########################################################################   add to cart Ali
function addToCart(productId){

}