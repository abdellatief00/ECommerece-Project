let loggedUser=JSON.parse(localStorage.getItem("current_user"));
if(loggedUser) {
    window.location.href = 'homepage.html';
 }