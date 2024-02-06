
const userData = JSON.parse(localStorage.getItem('current_user')) || {};
function loadUserData() {
    $('#Fname').val(userData.fname || '');
    $('#Lname').val(userData.lname || '');
    $('#Age').val(userData.age || '');
    $('#Email').val(userData.email || '');
    $('#currentpass').val(userData.password || '');

    if (!userData.image) {
        userData.image = " ";
    }

    $('#userImage').attr('src', userData.image || '');
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
const usernameRegex = /^[a-zA-Z]{3}[a-zA-Z0-9_-]{0,13}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
$('.Tform').submit(function (event) {
    event.preventDefault();

    const newFname = $('#Fname').val();
    const newLname = $('#Lname').val();
    const newAge = $('#Age').val();
    const newEmail = $('#Email').val();
    const newPassword = $('#newpass').val();
    const confirmNewPassword = $('#cnewpass').val();
    const profileImageInput = document.getElementById('newImage');
    const currentpassword=$('#currentpass').val();
    const nImage = getfilelocation(profileImageInput);
    console.log(nImage);

    let usersData = JSON.parse(localStorage.getItem('users')) || [];
    if(userData.password!=currentpassword){
        displayError($('#currentpass'), 'Password is wrong');
        return;
    }else{
        clearError($('#currentpass'));
    }
    if (!usernameRegex.test(newFname) || !usernameRegex.test(newLname)) {
        displayError($('#Fname'), 'Invalid username. It must be 3 to 16 characters long and can only contain letters, underscore, or hyphen.');
        return;
    }else{
        clearError($('#Fname'));
    }
    if (!emailRegex.test(newEmail)) {
        displayError($('#Email'), 'Invalid Email');
        return;
    }else{
        clearError($('#Email'));
    }
    if (!passwordRegex.test(newPassword)) {
        displayError($('#newpass'), 'Password must be at least 6 characters long.');
        return;
    }else{
        clearError($('#newpass'));
    }

    if (newAge<15) {
        displayError($('#Age'), 'Age must be greater than 15.');
        return;
    }else{
        clearError($('#Age'));
    }

    if (newPassword !== confirmNewPassword) {
        displayError($('#cnewpass'), 'New password and confirm password do not match!');
        return;
    }else{
        clearError($('#cnewpass'));
    }
    if (isUsernameTaken(newFname)) {
        displayError($('#Fname'), 'Username is already exist. Please choose another.');
        return;
    }else{
        clearError($('#Fname'));
    }

    // Check if email is already in use
    if (isEmailTaken(newEmail)) {
        displayError($('#Email'), 'Email is already in use. Please use a different email.');
        return;
    }else{
        clearError($('#Email'));
    }
    
    
    function isUsernameTaken(username, currentUserId) {
        const otherUsers = JSON.parse(localStorage.getItem('users')) || [];
        return otherUsers.some(user => user.fname === username && user.id !== currentUserId);
    }
    
    // Function to check if an email is already taken by another user (excluding current user)
    function isEmailTaken(email, currentUserId) {
        const otherUsers = JSON.parse(localStorage.getItem('users')) || [];
        return otherUsers.some(user => user.email === email && user.id !== currentUserId);
    }

    
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

    //displaySuccess(successSpan, 'User data saved successfully!');

    
    let userIndex = usersData.findIndex(user => user.id === currentUserData.id);

    if (userIndex !== -1) {
        usersData[userIndex].password = currentUserData.password;
        localStorage.setItem('users', JSON.stringify(usersData));
    }

    redirectToProfile();
});
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

function getfilelocation(tar){
    var input = tar;

    if (input.files && input.files[0]) {
        var selectedFile = input.files[0];
        console.log();
        var fileLocation = URL.createObjectURL(selectedFile);

        return fileLocation;
    }
}
