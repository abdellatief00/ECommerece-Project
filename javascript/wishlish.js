$(document).ready(function () {
    $(window).resize(function () {
        updateSidebarState();
        if ($(window).width() <= 768) {
            
            $("#sidebar").css("display", "none");
            $("#sidebarToggle").attr("data-bs-toggle", "offcanvas");
            $("#sidebarToggle").attr("data-bs-target", "#offcanvasSidebar");
            $("#sidebarToggle").attr("aria-controls", "offcanvasSidebar");
        } else {
            var sidebarShow = $("#sidebar").css("display");
            var newMode = sidebarShow == "none" ? "block" : "";
            $("#sidebar").css("display", newMode);
            $("#sidebarToggle").removeAttr("data-bs-toggle");
            $("#sidebarToggle").removeAttr("data-bs-target");
            $("#sidebarToggle").removeAttr("aria-controls");
        }
    });
    $("#darkMood").on("click", function () {

        var currentMode = $("body").attr("data-bs-theme");
        var newMode = currentMode === "light" ? "dark" : "light";
        $("body").attr("data-bs-theme", newMode);

        if (newMode === "dark") {
            $("#sidebar").attr("data-bs-theme", newMode);

            $("#sidebar").css("background-color", "#212529");
            $(".offcanvas-start").css("background-color", "#212529");
            $(".nav-item").hover(function () {
                $(this).css("color", "white")

            }, function () {
                $(this).css("color", "#96999b");
                $(".nav-item.active").css("color", "white");
            });
            $(".nav-item.active").css("color", "white");
        } else {
            $("#sidebar").attr("data-bs-theme", newMode);
            $("#sidebar").css("background-color", "#eee");
            $(".offcanvas-start").css("background-color", "#eee");
            $(".nav-item").hover(function () {
                $(this).css("color", "black")

            }, function () {
                $(this).css("color", "#96999b");
                $(".nav-item.active").css("color", "black");
            });
            $(".nav-item.active").css("color", "black");
        }


    });

    $("#sidebarToggle").click(function () {
        if ($(window).width() >= 780) {

            $("#sidebar").toggleClass("collapsed");
            $("#content").toggleClass("collapsed");
            $("#content").removeClass("offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
            $("#content").addClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11");
            if ($("#sidebar").hasClass("collapsed")) {
                $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
            } else {
                $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
                $("#content").removeClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11");
                $("#content").addClass("offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
            }
        }
    }); //end of click event

    let searchInput = document.getElementById("searchTerm");
    let searchTypeSelect = document.getElementById("searchType");

    searchInput.addEventListener("input", searching);

    function searching() {
        let searchTerm = searchInput.value.toLowerCase();
        let searchType = searchTypeSelect.value;
        let tr = document.querySelectorAll("tbody tr");

        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = "";

            // Choose the text content based on the selected search type
            if (searchType === "id") {
                textContent = node.children[1].textContent.toLowerCase(); // Assuming ID is in the first column
            } else if (searchType === "name") {
                textContent = node.children[2].textContent.toLowerCase(); // Assuming Name is in the third column
            }

            let show = textContent.indexOf(searchTerm) !== -1;
            node.style.display = show ? "" : "none";
        }
    }


    if ($(window).width() <= 768) {
        // var sidebarShow = $("#sidebar").css("display");
        // var newMode = sidebarShow == "none" ? "block" : "none";
        // $("#sidebar").css("display", newMode);
        $("#sidebar").css("display", "none");
        $("#sidebarToggle").attr("data-bs-toggle", "offcanvas");
        $("#sidebarToggle").attr("data-bs-target", "#offcanvasSidebar");
        $("#sidebarToggle").attr("aria-controls", "offcanvasSidebar");
        ///data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar"
    } else {
        var sidebarShow = $("#sidebar").css("display");
        var newMode = sidebarShow == "none" ? "block" : "";
        $("#sidebar").css("display", newMode);
        $("#sidebarToggle").removeAttr("data-bs-toggle");
        $("#sidebarToggle").removeAttr("data-bs-target");
        $("#sidebarToggle").removeAttr("aria-controls");
    }
}); //load event

function updateSidebarState() {
    if ($(window).width() <= 1200) {
        // If screen width is 768px or less, hide the custom sidebar
        $("#sidebar").addClass("collapsed");
        $("#content").addClass("collapsed");
        $("#content").removeClass("offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
        $("#content").addClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11");
        // $("#content").addClass("collapsed");
        // Change icon to show text
        $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
    } else if ($(window).width() >= 768) {
        // If screen width is greater than 768px, show the custom sidebar
        $("#sidebar").removeClass("collapsed");
        $("#content").removeClass("collapsed");
        $("#content").removeClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11");
        $("#content").addClass("offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
        // Change icon to hide text
        $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
    }

}

///////////////////////////////////////////////////////////////////////

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