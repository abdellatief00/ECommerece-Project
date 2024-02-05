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
    const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const tbodyOrders = document.getElementById("tbodyOrders");

    // Sort orders by date (oldest to newest)
    const UserOrders = orders.filter(order => order.userId === currentUser.id)
                            .sort((a, b) => new Date(a.date) - new Date(b.date));

    UserOrders.forEach((order, index) => {
        const orderNumber = index + 1; // Order number starts from 1 for the oldest order
        let state="delivery"; // Order number starts from 1 for the oldest order
        let currentState=Object.keys(order.state);    
        for (let i = 0; i < currentState.length; i++) {
            if(order.state[currentState[i]]=="pending"){
                state="pending";
                break;
            }
            
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${orderNumber}</td>
            <td>${order.paymentMethod}</td>
            <td>${order.total}</td>
            <td>${new Date(order.date).toLocaleString()}</td>
            <td>${state}</td>
        `;

        const buttonCell = document.createElement("td");
        const button = document.createElement("button");
        button.className = "btn btn-link";
        button.type = "button";
        button.innerHTML = '<i class="fa-solid fa-chevron-down arrow"></i>';

        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tbodyOrders.appendChild(row);

        const productRow = document.createElement("tr");
        productRow.innerHTML = `
            <td colspan="6">
                <div class="collapse" id="collapse${index}">
                    ${generateProductTable(order.cart, products)}
                </div>
            </td>
        `;

        tbodyOrders.appendChild(productRow);

        button.addEventListener("click", function () {
            const collapseDiv = document.getElementById(`collapse${index}`);
            const isCollapsed = collapseDiv.classList.contains("show");

            if (isCollapsed) {
                collapseDiv.classList.remove("show");
                button.innerHTML = '<i class="fa-solid fa-chevron-down arrow"></i>';
            } else {
                collapseDiv.classList.add("show");
                button.innerHTML = '<i class="fa-solid fa-chevron-up arrow"></i>';
            }
        });
    });
});

function generateProductTable(cart, products) {
        let html = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Product Image</th>
                        
                    </tr>
                </thead>
                <tbody>
        `;
    
        cart.forEach(item => {
            const productDetails = products.find(product => product.id === item.productId) || {};
            // let state="delivery"; // Order number starts from 1 for the oldest order
            // let currentState=Object.keys(order.state);    
            // for (let i = 0; i < currentState.length; i++) {
            //     if(order.state[currentState[i]]=="pending"){
            //     state="pending";
            //     break;
            // }
            
//         }
            html += `
                <tr>
                    <td>${productDetails.productTitle}</td>
                    <td>${item.quantity}</td>
                    <td>${productDetails.category}</td>
                    <td>${productDetails.price}</td>
                    
                    <td><img src="${productDetails.images[0]}"></td>
                </tr>`;
        });
    
        html += `
                </tbody>
            </table>
        `;
    
        return html;
    }
