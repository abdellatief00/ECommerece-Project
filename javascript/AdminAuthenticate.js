let loggedUser=JSON.parse(localStorage.getItem("current_user"));

if(loggedUser){if (parseInt(loggedUser.role) != 0) {
    window.location.href = 'homepage.html';
 }}
 else{
    window.location.href = 'homepage.html';
 }
