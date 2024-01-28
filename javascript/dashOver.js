$(document).ready(function () {
    $(window).resize(function () {
        // updateSidebarState();
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
    });
    $("#darkMood").on("click", function () {

        var currentMode = $("body").attr("data-bs-theme");
        var newMode = currentMode === "light" ? "dark" : "light";
        $("body").attr("data-bs-theme", newMode);

        if (newMode === "dark") {
            $("#sidebar").attr("data-bs-theme", newMode);
            $("#sidebar").css("background-color", "#212529");
        } else {
            $("#sidebar").attr("data-bs-theme", newMode);
            $("#sidebar").css("background-color", "#eee");
        }


    });

    // $("#sidebarToggle").click(function () {
    //     $("#sidebar").toggleClass("collapsed");
    //     $("#content").toggleClass("collapsed");
    //     if ($("#sidebar").hasClass("collapsed")) {
    //         $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
    //     } else {

    //         $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
    //     }
    //     if ($(window).width() <= 780) {
    //         var sidebarShow = $("#sidebar").css("display");
    //         var newMode = sidebarShow == "none" ? "block" : "none";
    //         $("#sidebar").css("display", newMode);
    //     }//else{$("#sidebar").css("display", "none");}
    // });


    $("#sidebarToggle").click(function () {
        if ($(window).width() >= 780) {

            $("#sidebar").toggleClass("collapsed");
            $("#content").toggleClass("collapsed");
            if ($("#sidebar").hasClass("collapsed")) {
                $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
            } else {
                $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
            }
        }
        // if ($(window).width() <= 780) {
        //     // var sidebarShow = $("#sidebar").css("display");
        //     // var newMode = sidebarShow == "none" ? "block" : "none";
        //     // $("#sidebar").css("display", newMode);
        //     $("#sidebar").css("display","none");
        //     $("#sidebarToggle").attr("data-bs-toggle","offcanvas");
        //     $("#sidebarToggle").attr("data-bs-target","#offcanvasSidebar");
        //     $("#sidebarToggle").attr("aria-controls","offcanvasSidebar");
        //     ///data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar"
        // }//  else {
        //     $("#sidebar").css("display", "none");
        // }
    }); //end of click event





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

// function updateSidebarState() {
//     if ($(window).width() <= 1200) {
//         // If screen width is 768px or less, hide the custom sidebar
//         $("#sidebar").addClass("collapsed");
//         $("#content").addClass("collapsed");
//         // Change icon to show text
//         $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
//     } else if ($(window).width() >= 768) {
//         // If screen width is greater than 768px, show the custom sidebar
//         $("#sidebar").removeClass("collapsed");
//         $("#content").removeClass("collapsed");
//         // Change icon to hide text
//         $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
//     }

// }

///////////////////////////////////////////////////////////////////////

