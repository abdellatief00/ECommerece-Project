totalprice();
function removeItem(itemId) {
    var elementToRemove = document.querySelector('.' + itemId);
    if (elementToRemove) {
        elementToRemove.remove();
    }
    totalprice()

}

function incrementValue() {
   var itemPrice=135; //we will get from jesons
    var price = event.target.parentNode.parentNode.parentNode.getElementsByClassName("Price")[0];

    var inputElement = event.target.parentNode.querySelector('input[type="number"]');
    if (inputElement) {
        inputElement.stepUp();
    }
price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";

totalprice()
}

function decrementValue() {
    var itemPrice=135; //we will get from jesons

    var price = event.target.parentNode.parentNode.parentNode.getElementsByClassName("Price")[0];
    var inputElement = event.target.parentNode.querySelector('input[type="number"]');
    if (inputElement) {
        inputElement.stepDown();
    }
    price.innerHTML = (itemPrice * Number(inputElement.value))+".00 $";
    totalprice()
}

function totalprice() {
var cartItems=document.getElementsByClassName("CartItems")[0].children;
var totalPrice=0
var itemsNumber=0
for (let index = 0; index < cartItems.length; index++) {
    totalPrice+=parseInt(cartItems[index].getElementsByClassName("Price")[0].innerHTML);
    itemsNumber+=parseInt(cartItems[index].querySelector('input').value);
    
}


document.querySelector(".total").innerHTML=document.querySelector(".CartMenu").children[0].children[0].innerHTML=totalPrice+".00 $";
document.querySelector("#cart-items-count").innerHTML=itemsNumber;
   

}