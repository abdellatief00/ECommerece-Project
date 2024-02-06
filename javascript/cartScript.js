import { Cart } from './modula.js';


if (!localStorage.getItem("cart")) {
    let cartarr = [];

    localStorage.setItem('cart', JSON.stringify(cartarr));
   }




createCartData()





function drawCartItem(cartItemObj,order) {
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

    cartItemsbody.appendChild(cartItem);//adding the cart item to the cart body
  

    }





    var decrementButton=document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[0];//getting the decrement button
    
    decrementButton.addEventListener("click",
    function () {
         decrementValue(cartItemObj,order) 
    
    
    }
    );//adding a listener to the decrement button






    var incrementButton=document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[2];//getting the increment button
    incrementButton.addEventListener("click",
    function () {
        incrementValue(cartItemObj,order) 
        
    })//adding a listener to the increment button






var deleteButton=document.querySelector(".Item"+cartItemObj.productId).children[2].children[2];//getting the delete button
deleteButton.addEventListener("click",
function () {
    removeItem(order);
})//adding a listener to the delete button


 }




function loadCartItems(cartItems) {

    var cartItemsbody=document.querySelector(".CartItems");//getting the cart body


    if(cartItems.length>5) //if the cart items are more than 5  we will add a scroll bar
    {
        var cartItemsbodyDrawSection=document.querySelector(".Cart-Content");//getting the cart body draw section

        cartItemsbodyDrawSection.style.overflowY="scroll";//adding the scroll bar to the cart body draw section
    
    }

    if(cartItemsbody)//if the cart body exists
    {
    cartItemsbody.innerHTML=``;//clearing the cart body
    
    for (let index = 0; index < cartItems.length; index++) //looping through the cart items
    {
        drawCartItem(cartItems[index],index);//drawing the cart item
        
    }
}
} 







function removeItem(order) {
    var  cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage

    cartItems.splice(order,1);//removing the item from the cart items array
         localStorage.setItem("cart", JSON.stringify(cartItems));//updating the local storage

    var cartBody=document.getElementsByClassName("CartItems")[0];//getting the cart body
    cartBody.innerHTML="";//clearing the cart body
    createCartData()//reloading the cart data
    

}//end of remove item function that removes the item from the cart 






function incrementValue(cartItemObj,order) {
    var cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage

    var itemPrice=parseInt(cartItemObj.price); //we will get from jesons
    

 
    var price = document.querySelector(".Item"+cartItemObj.productId).children[2].children[1];//getting the price span
 
    var inputElement = document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[1];//getting the input element
     if (inputElement) {
         inputElement.stepUp();//incrementing the input value
     }
 price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";//updating the price span
 
 var products=JSON.parse(localStorage.getItem('products'));//getting the products from the local storage
 var product=products.find(item=>item.id===cartItemObj.productId)//getting the product from the products array
 addToCart(product)//adding the product to the cart
  cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage





}//end of increment value function that increments the value of the item in the cart



function decrementValue(cartItemObj,order) {
    var cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage
   
    
    var itemPrice=parseInt(cartItemObj.price); //we will get from jesons
 
    var price = document.querySelector(".Item"+cartItemObj.productId).children[2].children[1];//getting the price span
   
    var inputElement = document.querySelector(".Item"+cartItemObj.productId).children[1].children[1].children[1];//getting the input element
    if (inputElement) {
        inputElement.stepDown();////decrementing the input value
    }
    price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";//   updating the price span
   
var products=JSON.parse(localStorage.getItem('products'));//getting the products from the local storage
var product=products.find(item=>item.id===cartItemObj.productId)//getting the product from the products array
addToCart(product,-1)//decrement the item quantity from the cart
cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage


if(parseInt(cartItems[order].quantity)==0)//if the quantity of the item is 0
removeItem(order);//remove the item from the cart

}//end of decrement value function that decrements the value of the item in the cart













 function totalprice() {
var cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage


var eachItemPrice=0;
var eachItemnNumber=0;
var totalPrice=0;
var itemsNumber=0;
//




for (let index = 0; index < cartItems.length; index++) //looping through the cart items
{
    eachItemPrice=parseInt(cartItems[index].price)*parseInt(cartItems[index].quantity);//getting the price of the item



    eachItemnNumber=parseInt(cartItems[index].quantity);//getting the quantity of the item

    itemsNumber+=eachItemnNumber;//adding the quantity of the item to the total items number
    
    totalPrice+=eachItemPrice;//adding the price of the item to the total price
}


if ( document.querySelector(".total")&&document.querySelector("#cart-items-count")) //if the total price span exists and the items number span exists we will update them with the total price and the items number
{
    document.querySelector(".total").innerHTML=totalPrice+".00 $";
    document.querySelector("#cart-items-count").innerHTML=itemsNumber+"";


}
//document.querySelector(".CartMenu").children[0].innerHTML=totalPrice+".00 $";  

   

}

export function createCartData(){

    var cartItems=JSON.parse(localStorage.getItem("cart"));//getting the cart items from the local storage

    var cartItemsbody=document.querySelector(".CartItems");//getting the cart body
    if(cartItemsbody)//if the cart body exists we will catch the view cart button and the checkout button
    {
    var viewCartBtn= cartItemsbody.parentElement.parentElement.children[6].children[0];
    var checkOutBtn=cartItemsbody.parentElement.parentElement.children[6].children[1];


    if (cartItems.length) //if the cart items array is not empty
    {
        loadCartItems(cartItems);//loading the cart items
    totalprice();//calculating the total price
    viewCartBtn.classList.remove("disabled") ; //removing the disabled class from the view cart button
      checkOutBtn.classList.remove("disabled");//removing the disabled class from the checkout button
        
    }

   else{ //if the cart items array is empty
    totalprice();//calculating the total price

    var cartItemsbody=document.querySelector(".CartItems").innerHTML=`<P style="    text-align: center; color: gray; font-size: 1.95rem!important;">Empty cart.... no items</p>`;//adding a message to the cart body
   viewCartBtn.classList.add("disabled");//adding the disabled class to the view cart button
checkOutBtn.classList.add("disabled");//adding the disabled class to the checkout button
   }
    }
   

}







export function addToCart(product,addingQuantity=1)
{
 
var products=JSON.parse(localStorage.getItem('products'));
var locationOfProduct=products.findIndex(item=>item.id===product.id)
let cartItemsTotalPriceSpan = document.querySelector("#cart-icon > span:nth-child(1)");
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
 
                let existingCartItem = cartItems.find(item => item.productId === product.id);
                if (!existingCartItem)
                cartItems.push(new Cart(product.id, product.productTitle, addingQuantity, product.price, product.images[0]).addJson());
                else if(existingCartItem.quantity<product.stockQuantity||(addingQuantity==-1&&existingCartItem.quantity>0))
                existingCartItem.quantity=parseInt( existingCartItem.quantity) + addingQuantity+"" 

                localStorage.setItem('cart', JSON.stringify(cartItems));
                if( document.querySelector(".CartItems")){
                createCartData();
                cartItemsTotalPriceSpan.innerText = claculateTotalPrice(cartItems);
                }
localStorage.setItem('products', JSON.stringify(products));

            if (parseInt(products[locationOfProduct].stockQuantity)===0) {
    
                addToCartButton.removeEventListener("click",this);
               
                
            
            
                
            }

}

function claculateTotalPrice(arr){
    let total = 0;
    for(let i = 0 ; i < arr.length ; i++){
        total += parseInt(arr[i].price)*parseInt(arr[i].quantity);
    }
    return total.toFixed(2);
}