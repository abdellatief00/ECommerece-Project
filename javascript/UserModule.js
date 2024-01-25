import { user } from './modula.js';

// Example usage
let users = [];
users.push(
  new user(
    "Admin","",
    "Admin@Admin.com",
    "Admin123",
    "24",
    "",
    "0"

  )
  .addjson()
);

// users.push(
//   new user(
//     "Omar emad","Aboshosha",
//     "omaremadaboshosha13@gmail.com",
//     "Omaremadaboshosha13",
//     "24",
//     "images/users/omaremadaboshosha_Img.jpg",
//     "2"

//   )
//   .addjson()
// );
// users.push(
//   new user(
//     "Seller1","",
//     "seller@gmail.com",
//     "Seller1123",
//     "29",
//     "images/users/seller1.jpg",
//     "1"

//   )
//   .addjson()
// );

let loginUser=new user();
// localStorage.setItem("currentUser",JSON.stringify(loginUser));
let currentUser=JSON.parse(localStorage.getItem("currentUser"))||{}
console.log(currentUser);

// Modify the existing users and update it in local storage
//product1[0].images.push('images/product-09-a.jpg');
if (!localStorage.getItem('Users')) {
  localStorage.setItem('Users', JSON.stringify(users));
}



// Retrieve the products from local storage
let storedUsers = JSON.parse(localStorage.getItem('Users')) || [];
//console.log(storedUsers);