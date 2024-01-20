totalprice();
var cartItemObj={
    "id": "1",
    "name": "Sunglasses",
    "price": "135.00 $",
    "image": "images/product-09-a.jpg",
    "quantity": "1"
}

var cartItems = [
    {
        "id": "1",
        "name": "Sunglasses",
        "price": "135.00 $",
        "image": "images/product-09-a.jpg",
        "quantity": "1"
    }
    ,
    {
        "id": "2",
        "name": "Sunglasses",
        "price": "150.00 $",
        "image": "images/product-10-a.jpg",
        "quantity": "2"
    },
    {
        "id": "3",
        "name": "Sunglasses",
        "price": "200.00 $",
        "image": "images/product-11-a.jpg",
        "quantity": "4"
    }];

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

function addToCart(cartItemObj,order) {
    var cartItems=document.getElementsByClassName("CartItems")[0];
    var cartItem=document.createElement("div");
    cartItem.classList.add("Item"+cartItemObj.id);
    
    cartItem.innerHTML=
    `
    <img src="${cartItemObj.image}" alt="${cartItemObj.name}" width="22%" height="22%" >
    <div class="CartItemDetails" style="display: inline-block;">
                                     <h6>${cartItemObj.name}</h6>


                                     <div class="input-group">
                                     <button class="btn btn-outline-secondary" type="button" onclick="decrementValue(${order}) ">-</button>
                                     <input type="number"  value="${cartItemObj.quantity}" min="1" class="QuantityValue text-center flex-fill  "/>
                                     <button class="btn btn-outline-secondary" type="button" onclick="incrementValue(${order})">+</button>
                                     </div>

                                </div>

                            <div class="float-end">
                                <br>
                                <span class="fs-5 text-secondary Price">${parseInt(cartItemObj.price)*parseInt(cartItemObj.quantity)}.00 $</span>
                                <i class="fa-solid fa-trash-can btn" data-bs-dismiss="Item1" aria-label="Close" onclick="removeItem('${order}')"></i>
                             </div>

    `;
    cartItems.appendChild(cartItem);




 }




function loadCartItems(cartItems) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    for (let index = 0; index < cartItems.length; index++) {
        addToCart(cartItems[index],index);
        
    }
    
} 







function removeItem(order) {
    
    cartItems.splice(order,1);
         localStorage.setItem("cartItems", JSON.stringify(cartItems));

    var cartBody=document.getElementsByClassName("CartItems")[0];
    cartBody.innerHTML="";
    loadCartItems(cartItems);
    totalprice()

}

function incrementValue(order) {

   var itemPrice=0; //we will get from jesons
   var realPrice=parseInt(cartItems[order].price);
   itemPrice=realPrice;

    var price = event.target.parentNode.parentNode.parentNode.getElementsByClassName("Price")[0];

    var inputElement = event.target.parentNode.querySelector('input[type="number"]');
    if (inputElement) {
        inputElement.stepUp();
    }
price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";

cartItems[order].quantity=inputElement.value;
localStorage.setItem("cartItems", JSON.stringify(cartItems));
totalprice()
}

function decrementValue(order) {
    var itemPrice=0; //we will get from jesons
    var realPrice=parseInt(cartItems[order].price);
    itemPrice=realPrice;
    
    var price = event.target.parentNode.parentNode.parentNode.getElementsByClassName("Price")[0];
    var inputElement = event.target.parentNode.querySelector('input[type="number"]');
    if (inputElement) {
        inputElement.stepDown();
    }
    price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";
    cartItems[order].quantity=inputElement.value;
localStorage.setItem("cartItems", JSON.stringify(cartItems));

    totalprice()
}

function totalprice() {
var cartItems=document.getElementsByClassName("CartItems")[0].children;
// console.log(cartItems);
var eachItemPrice=0;
var eachItemnNumber=0;
var totalPrice=0
var itemsNumber=0
for (let index = 0; index < cartItems.length; index++) {
    eachItemPrice=parseInt(cartItems[index].getElementsByClassName("Price")[0].innerHTML);
    // console.log(eachItemPrice);

    // console.log(cartItems[index].querySelector('input').value);
        eachItemnNumber=parseInt(cartItems[index].querySelector('input').value);
    itemsNumber+=parseInt(cartItems[index].querySelector('input').value);
    
    totalPrice+=eachItemPrice;
}

// console.log(totalPrice);
// console.log(itemsNumber);
// console.log(document.querySelector(".CartMenu").children[0].children[0].innerHTML)
// document.querySelector(".total").innerHTML=document.querySelector(".CartMenu").children[0].children[0].innerHTML=totalPrice+".00 $";
document.querySelector("#cart-items-count").innerHTML=itemsNumber+"";
   

}



var cartItemObj={
    "id": "1",
    "name": "Sunglasses",
    "price": "135.00 $",
    "image": "images/product-09-a.jpg",
    "quantity": "1"
}

var cartItems = [
    {
        "id": "1",
        "name": "Sunglasses",
        "price": "135.00 $",
        "image": "images/product-09-a.jpg",
        "quantity": "1"
    }
    ,
    {
        "id": "2",
        "name": "Sunglasses",
        "price": "150.00 $",
        "image": "images/product-10-a.jpg",
        "quantity": "2"
    },
    {
        "id": "3",
        "name": "Sunglasses",
        "price": "200.00 $",
        "image": "images/product-11-a.jpg",
        "quantity": "4"
    }];

loadCartItems( cartItems);

totalprice();