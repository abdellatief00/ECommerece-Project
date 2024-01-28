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