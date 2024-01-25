$(document).ready(function () {
    $("#sidebarToggle").click(function () {
        $("#sidebar").toggleClass("collapsed");
        $("#content").toggleClass("collapsed");

        //
        


        //
        if ($("#sidebar").hasClass("collapsed")) {
            $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
        } else {

            $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
        }
    });
    // let search = document.querySelector("input[name=searchByName]");
    // search.addEventListener("input", searching);

    // function searching(e) {
    //     //  console.log(e);
    //     let tr = document.querySelectorAll("tbody tr");
    //     for (let i = 0; i < tr.length; i++) {
    //         let node = tr[i];
    //         let textContent = node.children[2].textContent.toLowerCase();
    //         let show = textContent.indexOf(this.value.toLowerCase()) !== -1;
    //         node.style.display = show ? "" : "none";
    //     }
    // }



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

///////////////////////////////////////////////////////////////////////

