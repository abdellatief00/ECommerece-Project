function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

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
            $("#sidebar, .offcanvas-start").css("background-color", "#212529");
            $(".nav-item").hover(function () {
                $(this).css("color", "white")
            }, function () {
                $(this).css("color", "#96999b");
                $(".nav-item.active").css("color", "white");
            });
        } else {
            $("#sidebar").attr("data-bs-theme", newMode);
            $("#sidebar, .offcanvas-start").css("background-color", "#eee");
            $(".nav-item").hover(function () {
                $(this).css("color", "black")
            }, function () {
                $(this).css("color", "#96999b");
                $(".nav-item.active").css("color", "black");
            });
        }
    });

    $("#sidebarToggle").click(function () {
        if ($(window).width() >= 780) {
            $("#sidebar").toggleClass("collapsed");
            $("#content").toggleClass("collapsed");
            $("#content").toggleClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11 offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
            if ($("#sidebar").hasClass("collapsed")) {
                $(".nav-link .fa").toggleClass("fa-bars fa-table-cells-large");
            } else {
                $(".nav-link .fa").toggleClass("fa-table-cells-large fa-bars");
            }
        }
    });

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

function updateSidebarState() {
    if ($(window).width() <= 1200) {
        $("#sidebar").addClass("collapsed");
        $("#content").addClass("collapsed");
        $("#content").toggleClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11 offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
        $(".nav-link .fa").toggleClass("fa-bars fa-table-cells-large");
    } else if ($(window).width() >= 768) {
        $("#sidebar").removeClass("collapsed");
        $("#content").removeClass("collapsed");
        $("#content").toggleClass("offset-xl-1 col-xl-11 offset-lg-1 col-lg-11 offset-md-1 col-md-11 offset-xl-2 col-xl-10 offset-lg-2 col-lg-10 offset-md-2 col-md-10");
        $(".nav-link .fa").toggleClass("fa-table-cells-large fa-bars");
    }
}

function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('current_user')) || {};
    $('#Fname').val(userData.fname || '');
    $('#Lname').val(userData.lname || '');
    $('#Age').val(userData.age || '');
    $('#Email').val(userData.email || '');
    $('#currentpass').val(userData.password || '');

    if (!userData.image) {
        userData.image = " ";
    }

    // $('#userImage').attr('src', userData.image);
    // console.log(userData.image);
   var imgUser= document.getElementById("userImage");
   imgUser.setAttribute("src",userData.image);

}

$(document).on('click', '#togglecurrentpass', function () {
    const passwordInput = $("#currentpass");
    const icon = $(this);
    togglePasswordVisibility(passwordInput, icon);
});

$(document).on('click', '#togglenewpass', function () {
    const newPasswordInput = $("#newpass");
    const icon = $(this);
    togglePasswordVisibility(newPasswordInput, icon);
});

$(document).on('click', '#togglecnewpass', function () {
    const confirmNewPasswordInput = $("#cnewpass");
    const icon = $(this);
    togglePasswordVisibility(confirmNewPasswordInput, icon);
});

function togglePasswordVisibility(inputField, icon) {
    if (inputField.attr('type') === 'password') {
        inputField.attr('type', 'text');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
    } else {
        inputField.attr('type', 'password');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    }
}

function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

$('.Tform').submit(function (event) {
    event.preventDefault();

    const newFname = $('#Fname').val();
    const newLname = $('#Lname').val();
    const newAge = $('#Age').val();
    const newEmail = $('#Email').val();
    const newPassword = $('#newpass').val();
    const confirmNewPassword = $('#cnewpass').val();
    const profileImageInput = document.getElementById('newImage');
    const nImage = getfilelocation(profileImageInput);
    console.log(nImage);

    const errorSpan = $('#passwordError');
    const successSpan = $('#successMessage');

    if (!newFname.trim() || !newLname.trim() || !newAge || isNaN(newAge) || !newEmail.trim()) {
        displayError(errorSpan, 'Please fill in all required fields with valid data.');
        return;
    }

    if (newPassword.length < 6) {
        displayError(errorSpan, 'Password must be at least 6 characters long.');
        return;
    }

    if (newPassword !== confirmNewPassword) {
        displayError(errorSpan, 'New password and confirm password do not match!');
        return;
    }

    clearError(errorSpan);

    const currentUserData = JSON.parse(localStorage.getItem('current_user')) || {};
    currentUserData.fname = newFname;
    currentUserData.lname = newLname;
    currentUserData.age = newAge;
    currentUserData.email = newEmail;
    currentUserData.password = newPassword;

    if (!currentUserData.image) {
        currentUserData.image = " ";
    }

    if (profileImageInput && profileImageInput.files && profileImageInput.files[0]) {
        currentUserData.image = nImage;
    }

    saveDataToLocalStorage('current_user', currentUserData);

    displaySuccess(successSpan, 'User data saved successfully!');

    let usersData = JSON.parse(localStorage.getItem('user')) || [];
    let userIndex = usersData.findIndex(user => user.id === currentUserData.id);

    if (userIndex !== -1) {
        usersData[userIndex].password = currentUserData.password;
        localStorage.setItem('user', JSON.stringify(usersData));
    }

    redirectToProfile();
});

function clearError(errorSpan) {
    errorSpan.text('');
}

function displayError(errorSpan, message) {
    errorSpan.text(message);
}

function displaySuccess(successSpan, message) {
    successSpan.text(message);
}

function redirectToProfile() {
    window.location.href = 'profileuser.html';
}

function redirectToProductDetails(productId) {
    localStorage.setItem("currentProductId", productId);
    window.location.href = 'productDetails.html';
}

function removeFromFavorites(productId, deleteIcon) {
    if (confirm("Are you sure you want to remove this product from favorites?")) {
        let User = JSON.parse(localStorage.getItem('current_user')) || {};
        let productIds = User.favorites || [];
    
        let updatedFavorites = productIds.filter(id => id !== productId);
        User.favorites = updatedFavorites;
        localStorage.setItem('current_user', JSON.stringify(User));
        let usersData = JSON.parse(localStorage.getItem('user')) || [];
    
        let userIndex = usersData.findIndex(user => user.id === User.id);
    
        if (userIndex !== -1) {
            usersData[userIndex].favorites = User.favorites;
            localStorage.setItem('user', JSON.stringify(usersData));
        }
   
        let row = deleteIcon.closest('tr');
        row.remove();
    }
}

function getfilelocation(tar){
    var input = tar;

    if (input.files && input.files[0]) {
        var selectedFile = input.files[0];
        console.log();
        var fileLocation = URL.createObjectURL(selectedFile);

        return fileLocation;
    }
}
