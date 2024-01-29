if (!localStorage.getItem("cart")) {
    let cartarr = [];

    localStorage.setItem('cart', JSON.stringify(cartarr));
   }

createCartData()


// var cartItemObj={
//     "id": "1",
//     "name": "Sunglasses",
//     "price": "135.00 $",
//     "image": "images/product-09-a.jpg",
//     "quantity": "1"
// }

// var cartItems = [
//     {
//         "id": "1",
//         "name": "Sunglasses",
//         "price": "135.00 $",
//         "image": "images/product-09-a.jpg",
//         "quantity": "1"
//     }
//     ,
//     {
//         "id": "2",
//         "name": "Sunglasses",
//         "price": "150.00 $",
//         "image": "images/product-10-a.jpg",
//         "quantity": "2"
//     },
//     {
//         "id": "3",
//         "name": "Sunglasses",
//         "price": "200.00 $",
//         "image": "images/product-11-a.jpg",
//         "quantity": "4"
//     }];

//     localStorage.setItem("cart", JSON.stringify(cartItems));

var cartItems=JSON.parse(localStorage.getItem("cart"));

function addToCart(cartItemObj,order) {
    var cartItemsbody=document.getElementsByClassName("CartItems")[0];
    if(cartItemsbody){
    var cartItem=document.createElement("div");
    cartItem.classList.add("Item"+cartItemObj.productId);
    
    cartItem.innerHTML=
    `
    <img src="${cartItemObj.image}" alt="${cartItemObj.productTitle}" width="23%" style="margin-bottom:5px"  >
    <div class="CartItemDetails" style="display: inline-block;">
                                     <h6>${cartItemObj.productTitle}</h6>

                                      
                                     <div class="input-group">
                                     <button class="btn btn-outline-secondary" type="button"  >-</button>
                                     <input type="number"  value="${cartItemObj.quantity}" min="1" class="QuantityValue text-center flex-fill  "/>
                                     <button class="btn btn-outline-secondary" type="button" >+</button>
                                     </div>

                                </div>

                            <div class="float-end" >
                                
                                <br>
                                <span class="fs-5 text-secondary Price">${parseInt(cartItemObj.price)*parseInt(cartItemObj.quantity)}.00 $</span>
                               <button class="border-0" btn-close style="background-color: transparent;" > <i class="fa-solid fa-trash-can btn" data-bs-dismiss="Item"  ></i></button>
                             </div>
                          

    `;
    // cartItems.appendChild(cartItem);





    var decrementButton=document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[0];
    
    decrementButton.addEventListener("click",
    function () {
        var cartItems=JSON.parse(localStorage.getItem("cart"));
   
    
        var itemPrice=0; //we will get from jesons
        itemPrice=parseInt(cartItemObj.price);
        var price = document.querySelector(".Item"+cartItemObj.productId).children[2].children[1];
       
        var inputElement = document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[1];;
        if (inputElement) {
            inputElement.stepDown();
        }
        price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";
       
        cartItems[order].quantity=inputElement.value;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    createCartData();
    
    
    }
    );






    var incrementButton=document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[2];
    incrementButton.addEventListener("click",
    function () {
        var cartItems=JSON.parse(localStorage.getItem("cart"));

        var itemPrice=0; //we will get from jesons
        itemPrice=parseInt(cartItemObj.price);

     
        var price = document.querySelector(".Item"+cartItemObj.productId).children[2].children[1];
     
        var inputElement = document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[1];;
         if (inputElement) {
             inputElement.stepUp();
         }
     price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";
     
     cartItems[order].quantity=inputElement.value;
     localStorage.setItem("cart", JSON.stringify(cartItems));
     createCartData();
    })






var deleteButton=document.querySelector(".Item"+cartItemObj.productId).children[2].children[2];
console.log(deleteButton);
deleteButton.addEventListener("click",
function () {
    var cartItems=JSON.parse(localStorage.getItem("cart"));

    cartItems.splice(order,1);
         localStorage.setItem("cart", JSON.stringify(cartItems));

    var cartBody=document.getElementsByClassName("CartItems")[0];
    cartBody.innerHTML="";
    createCartData();
})


 }




function loadCartItems(cartItems) {
    var cartItemsbody=document.getElementsByClassName("CartItems")[0];
    cartItemsbody.innerHTML=``;
    
    for (let index = 0; index < cartItems.length; index++) {
        addToCart(cartItems[index],index);
        
    }
    
} 







function removeItem(order) {
    
    cartItems.splice(order,1);
         localStorage.setItem("cart", JSON.stringify(cartItems));

    var cartBody=document.getElementsByClassName("CartItems")[0];
    cartBody.innerHTML="";
    totalprice()

}

function incrementValue(order) {
    var cartItems=JSON.parse(localStorage.getItem("cart"));

   var itemPrice=0; //we will get from jesons
   var realPrice=parseInt(cartItems[order].price);
   itemPrice=realPrice;

    var price = document.getElementsByClassName("Price")[order];

    var inputElement = document.getElementsByClassName("Price")[order].parentNode.parentNode.children[1].children[1].children[1];
    if (inputElement) {
        inputElement.stepUp();
    }
price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";

cartItems[order].quantity=inputElement.value;
localStorage.setItem("cart", JSON.stringify(cartItems));

}



function decrementValue(cartItemObj,order) {
    var cartItems=JSON.parse(localStorage.getItem("cart"));
   
    
    var itemPrice=0; //we will get from jesons
    itemPrice=parseInt(cartItemObj.price);
    var price = document.querySelector(".Item"+cartItemObj.productId).children[2].children[1];
   
    var inputElement = document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[1];;
    if (inputElement) {
        inputElement.stepDown();
    }
    price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";
   
    cartItems[order].quantity=inputElement.value;
localStorage.setItem("cart", JSON.stringify(cartItems));

}

function totalprice() {
// var cartItems=document.getElementsByClassName("CartItems")[0].children;
// console.log(cartItems);
var eachItemPrice=0;
var eachItemnNumber=0;
var totalPrice=0
var itemsNumber=0
// for (let index = 0; index < cartItems.length; index++) {
//     eachItemPrice=parseInt(cartItems[index].getElementsByClassName("Price")[0].innerHTML);
//     // console.log(eachItemPrice);

//     // console.log(cartItems[index].querySelector('input').value);
//         eachItemnNumber=parseInt(cartItems[index].querySelector('input').value);
//     itemsNumber+=parseInt(cartItems[index].querySelector('input').value);
    
//     totalPrice+=eachItemPrice;
// }

// console.log(totalPrice);
// console.log(itemsNumber);
// console.log(document.querySelector(".CartMenu").children[0].children[0].innerHTML)
if ( document.querySelector(".total")) {
    document.querySelector(".total").innerHTML=totalPrice+".00 $";

}
document.querySelector("#cart-items-count").innerHTML=itemsNumber+"";
document.querySelector(".CartMenu").children[0].innerHTML=totalPrice+".00 $";  

   

}

export function createCartData(){
   // debugger;
    var cartItems=JSON.parse(localStorage.getItem("cart"));

    loadCartItems(cartItems);
    totalprice();

}


