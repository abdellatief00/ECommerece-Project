
let loggedUser=JSON.parse(localStorage.getItem("current_user"));//get the current user from local storage
if(loggedUser)//if the user is logged in
{
   if (parseInt(loggedUser.role) != 1)//if the user is not a seller
    {
    window.location.href = 'homepage.html';//redirect to homepage
 }
}

 else//if the user is not logged in
 {
    window.location.href = 'homepage.html';//redirect to homepage
 }