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
    const userData = JSON.parse(localStorage.getItem('current_user'));

   
    if (userData) {
   
        document.getElementById('userFullName').textContent = userData.fname + ' ' + userData.lname;
        document.getElementById('userAge').textContent = userData.age;
       // document.getElementById('userPhone').textContent = userData.phone;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userPassword').value = userData.password;
        document.getElementById('userImage').src=userData.images[0];
        //document.getElementById('userAddress')=userData.address;
    }
});
$(document).on('click', '#togglePassword', function () {
    const passwordInput = $("#userPassword");
    const icon = $(this);

    if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        passwordInput.attr('type', 'password');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
});
