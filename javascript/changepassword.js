$(document).ready(function () {
    // Toggle Sidebar function
    $("#sidebarToggle").click(function () {
        $("#sidebar").toggleClass("collapsed");
        $("#content").toggleClass("collapsed");
        if ($("#sidebar").hasClass("collapsed")) {
            $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
        } else {
            $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
        }
    });

    // Update Sidebar State function
    function updateSidebarState() {
        const sidebar = $("#sidebar");
        const content = $("#content");
        const navLinkIcon = $(".nav-link .fa");

        if ($(window).width() <= 1200) {
            sidebar.addClass("collapsed");
            content.addClass("collapsed");
            navLinkIcon.removeClass("fa-bars").addClass("fa-table-cells-large");
        } else {
            sidebar.removeClass("collapsed");
            content.removeClass("collapsed");
            navLinkIcon.removeClass("fa-table-cells-large").addClass("fa-bars");
        }
    }

    // Event listener for window resize
    $(window).resize(updateSidebarState);

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

        const newPassword = $('#newpass').val();
        const confirmNewPassword = $('#cnewpass').val();
        const errorSpan = $('#passwordError');
        const successSpan = $('#successMessage');

        // Check if the new password meets the minimum length requirement
        if (newPassword.length < 6) {
            displayError(errorSpan, 'Password must be at least 6 characters long.');
            clearSuccessMessage(successSpan);
            return;
        }

        // Check if the new password and confirm password match
        if (newPassword !== confirmNewPassword) {
            displayError(errorSpan, 'New password and confirm password do not match!');
            clearSuccessMessage(successSpan);
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
        document.getElementById('userPrimaryPhone').textContent = userData.phone;
        document.getElementById('userSecondaryPhone').textContent = userData.secondaryPhone;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('currentpass').value = userData.password;
        document.getElementById('userImage').src = userData.images[0];
    }

    // Helper function to toggle password visibility
    function togglePasswordVisibility(passwordInput, icon) {
        const passwordType = passwordInput.attr('type');
        passwordInput.attr('type', passwordType === 'password' ? 'text' : 'password');
        icon.toggleClass('fa-eye fa-eye-slash');
    }

    // Helper function to display error message
    function displayError(element, message) {
        element.text(message);
    }

    // Helper function to clear error message
    function clearError(element) {
        element.text('');
    }

    // Helper function to display success message
    function displaySuccess(element, message) {
        element.text(message);
    }

    // Helper function to clear success message
    function clearSuccessMessage(element) {
        element.text('');
    }

    // Helper function to redirect to the profile page
    function redirectToProfile() {
        window.location.href = 'profileuser.html';
    }
});
