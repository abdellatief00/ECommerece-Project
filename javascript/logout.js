document.addEventListener("DOMContentLoaded", function () {
    // Declare logoutConfirmationModal in a scope accessible by both event listeners
    let logoutConfirmationModal;

    let logoutButton = document.querySelector('.logout-btn');
    logoutButton.addEventListener('click', function () {
        // Display the confirmation modal
        logoutConfirmationModal = new bootstrap.Modal(document.getElementById('logoutConfirmationModal'));
        logoutConfirmationModal.show();
    });

    // Add event listener for confirming logout
    let confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
    confirmLogoutBtn.addEventListener('click', function () {
        // Close the confirmation modal
        if (logoutConfirmationModal) {
            logoutConfirmationModal.hide();

            // Call the logout function directly and pass the logoutButton as a parameter
            updateAndLogout(logoutButton);
        }
    });

    // Add event listener for closing the modal using the close (x) button
    let modalCloseBtn = document.querySelector('.btn-close');
    modalCloseBtn.addEventListener('click', function () {
        if (logoutConfirmationModal) {
            logoutConfirmationModal.hide();
        }
    });

    // Add event listener for cancel button in the modal
    let cancelBtn = document.getElementById('cancelLogoutBtn');
    cancelBtn.addEventListener('click', function () {
        if (logoutConfirmationModal) {
            logoutConfirmationModal.hide();
        }
    });
});

// Function to update user data and logout
function updateAndLogout(logoutButton) {
    // Replace 'current_user' and 'users' with your actual local storage keys
    let currentUser = JSON.parse(localStorage.getItem('current_user')) || {};
    let usersData = JSON.parse(localStorage.getItem('user')) || [];

    let userIndex = usersData.findIndex(user => user.id === currentUser.id);
    if (userIndex !== -1) {
        usersData[userIndex] = currentUser;
        localStorage.setItem('user', JSON.stringify(usersData));
    }

    localStorage.removeItem('current_user');
    logoutButton.style.display = 'none';
    window.location.href = 'homepage.html';
}
