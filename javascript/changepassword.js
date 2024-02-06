const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    // Event listener when the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        const userData = JSON.parse(localStorage.getItem('current_user'));
        if (userData) {
            updateProfileData(userData);
        }
    });

    // Event listener for show password button
    $(document).on('click', '.Tshowpass', function () {
        const passwordInput = $(this).siblings('.Tpassword');
        togglePasswordVisibility(passwordInput, $(this));
    });

    // Event listener for form submission
    $('.Tform').submit(function (event) {
        event.preventDefault();
        const userData = JSON.parse(localStorage.getItem('current_user'));
        const newPassword = $('#newpass').val();
        const confirmNewPassword = $('#cnewpass').val();
        const currentpassword=$('#currentpass').val();
        const errorSpan = $('#passwordError');

        if(userData.password!=currentpassword){
            displayError($('#currentpass'), 'Password is wrong');
            return;
        }else{
            clearError($('#currentpass'));
        }
        
        if (!passwordRegex.test(newPassword)) {
            displayError($('#newpass'), 'Invalid password');
            return;
        }else{
            clearError($('#newpass'));
        }

        // Check if the new password and confirm password match
        if (newPassword !== confirmNewPassword) {
            displayError(errorSpan, 'New password and confirm password do not match!');
            //clearSuccessMessage(successSpan);
            return;
        }

        // Clear any existing error messages
        clearError(errorSpan);

        const currentuser = JSON.parse(localStorage.getItem('current_user'));

        if (currentuser) {
            currentuser.password = newPassword;
            localStorage.setItem('current_user', JSON.stringify(currentuser));
            displaySuccess(successSpan, 'Password updated successfully!');
            redirectToProfile();
        }
        let usersData = JSON.parse(localStorage.getItem('user')) || [];
            console.log(usersData);
    
            // Find the index of the current user in the array
            let userIndex = usersData.findIndex(user => user.id === currentuser.id);
    
            if (userIndex !== -1) {
                // Update only the favorites in the array
                usersData[userIndex].password = currentuser.password;
                localStorage.setItem('user', JSON.stringify(usersData));
            }
    });

    // Helper function to update profile data on the page
    function updateProfileData(userData) {
        document.getElementById('userFullName').textContent = `${userData.fname} ${userData.lname}`;
        document.getElementById('userAge').textContent = userData.age;
        document.getElementById('userEmail').textContent = userData.email;;
        document.getElementById('userImage').src = userData.image;
    }

    // Helper function to toggle password visibility
    function togglePasswordVisibility(passwordInput, icon) {
        const passwordType = passwordInput.attr('type');
        passwordInput.attr('type', passwordType === 'password' ? 'text' : 'password');
        icon.toggleClass('fa-eye fa-eye-slash');
    }

    let newErrorMessage;
function displayError(field, message) {
    field.addClass('fielderror'); 
    newErrorMessage = field.siblings('.error-message');
   // field.siblings('.error-message').remove();
   if (newErrorMessage.length > 0) {
    newErrorMessage.text(message);
    } else {
        // Create a new error message
        newErrorMessage = $('<span class="error-message"></span>').text(message);
        newErrorMessage.css('color', 'red');
        field.after(newErrorMessage);
    }

}

function clearError(field) {
   field.removeClass('fielderror');
    field.siblings('.error-message').remove();
}

function redirectToProfile() {
    window.location.href = 'profileuser.html';
}

    // Helper function to clear success message
    function clearSuccessMessage(element) {
        element.text('');
    }

    // Helper function to redirect to the profile page
    function redirectToProfile() {
        window.location.href = 'profileuser.html';
    }

