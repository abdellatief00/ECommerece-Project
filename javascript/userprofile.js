
document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem('current_user'));

   
    if (userData) {
   
        document.getElementById('userFullName').textContent = userData.fname + ' ' + userData.lname;
        document.getElementById('userAge').textContent = userData.age;
       // document.getElementById('userPhone').textContent = userData.phone;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userPassword').value = userData.password;
        document.getElementById('userImage').src=userData.image;
        console.log(userData.image);
        //document.getElementById('userAddress')=userData.address;
    }
});
