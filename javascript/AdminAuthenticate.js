let loggedUser=JSON.parse(localStorage.getItem("currentUser"));

if(loggedUser){if (loggedUser.role !== "0") {
    window.location.href = 'homepage.html';
 }}
 else{
    window.location.href = 'homepage.html';
 }
