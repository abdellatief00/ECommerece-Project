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

   
    function saveDataToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

   
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



});
