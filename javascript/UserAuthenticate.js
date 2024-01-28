let loggedUser=JSON.parse(localStorage.getItem("currentUser"));
if(loggedUser.id<0) {
    window.location.href = 'homepage.html';
 }