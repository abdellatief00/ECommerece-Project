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

///////////////////////////////////////////////////////////////////////
   
    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem('current_user'));
        if (userData) {
            $('#Fname').val(userData.fname || '');
            $('#Lname').val(userData.lname || '');
            $('#Age').val(userData.age || '');
            $('#Email').val(userData.email || '');
            $('#currentpass').val(userData.password || '');
            
   
            if (!userData.images) {
                userData.images = [];
            }

            $('#userImage').attr('src', userData.images[0] || ''); 
        }
    }

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

    $('.Tform').submit(function (event) {
        event.preventDefault();

        const newFname = $('#Fname').val();
        const newLname = $('#Lname').val();
        const newAge = $('#Age').val();
        const newEmail = $('#Email').val();
        const newPassword = $('#newpass').val();
        const confirmNewPassword = $('#cnewpass').val();
        const profileImageInput = $('#newImage').val();
        // const newAddress=$('#newAddress').val();
        // const newPhone=$('#newPhone').val();

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
        //currentUserData.address=newAdress;
        //currentUserData.phone=newPhone;

        
        if (!currentUserData.images) {
            currentUserData.images = [];
        }

        
        if (profileImageInput && profileImageInput[0].files && profileImageInput[0].files.length > 0) {
            const file = profileImageInput.files[0];
            currentUserData.images[0] = URL.createObjectURL(file); 
        }

      
        saveDataToLocalStorage('current_user', currentUserData);

        
        displaySuccess(successSpan, 'User data saved successfully!');
        let usersData = JSON.parse(localStorage.getItem('user')) || [];
        console.log(usersData);

        let userIndex = usersData.findIndex(user => user.id === currentUserData.id);

        if (userIndex !== -1) {
            usersData[userIndex].password = currentUserData.password;
            localStorage.setItem('user', JSON.stringify(usersData));
        }

        
        redirectToProfile();
    });

    
    $(document).ready(function () {
        loadUserData();
    });
// Toggle current password visibility
$(document).on('click', '#togglecurrentpass', function () {
    const passwordInput = $("#currentpass");
    const icon = $(this);
    togglePasswordVisibility(passwordInput, icon);
});

// Toggle new password visibility
$(document).on('click', '#togglenewpass', function () {
    const newPasswordInput = $("#newpass");
    const icon = $(this);
    togglePasswordVisibility(newPasswordInput, icon);
});

// Toggle confirm new password visibility
$(document).on('click', '#togglecnewpass', function () {
    const confirmNewPasswordInput = $("#cnewpass");
    const icon = $(this);
    togglePasswordVisibility(confirmNewPasswordInput, icon);
});

// Toggle visibility function
function togglePasswordVisibility(inputField, icon) {
    if (inputField.attr('type') === 'password') {
        inputField.attr('type', 'text');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
        
    } else {
        inputField.attr('type', 'password');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    }
}




