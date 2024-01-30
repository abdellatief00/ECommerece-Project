import { Cart ,user} from './modula.js';

// let cartarr = [];
// cartarr.push(new Cart(6,"prod1",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
// cartarr.push(new Cart(2,"prod2",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
// cartarr.push(new Cart(3,"prod3",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
// cartarr.push(new Cart(4,"prod44",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
// cartarr.push(new Cart(5,"prod80",3 , 200.00 ,"images/women/product-1-a.jpg").addJson());


// localStorage.setItem("cart",JSON.stringify(cartarr));

// let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
// window.localStorage.setItem("current_user",JSON.stringify(one_user));


/* what happened when the window load */ 
window,addEventListener("load",function(e){
    let arr = getlocal();
    createProductTable(arr);
    if(getlocal().length==0){
        let ele = `<div class="alert alert-primary" role="alert" style="width :100%">
        Your cart is currently Empty
        </div>
        <div>
        <a href="homepage.html" class="button-like-link">Return home</a>
        </div>`
        document.getElementById('tableparts').innerHTML = ele;
        document.getElementById('tableparts').style.flexWrap = "wrap";
    }
    setlocal(arr);

    showToast('Welcome to cart page!', 3000 , "#6cb36d");
})

/* toast that fire when action happens */



function showToast(message, duration , color) {
    var el =document.createElement('div');
    el.className = "toast";
    // var toast = document.querySelector('.toast');
    el.style.animationName = "animationdropfromtop";
    el.style.display = 'block';
    el.innerText = message;
    el.style.backgroundColor = color;
    document.body.appendChild(el);
    setTimeout(function () {
        document.querySelector('.toast').remove();
    }, duration);
  }

/* functions */

function createProductTable(arr){
        let table = `<table class="table">
        <thead class="">
        <tr class="textfont" >
            <th scope="col" class="bg-body-secondary"></th>
            <th scope="col" class="bg-body-secondary">Product</th>
            <th scope="col" class="bg-body-secondary">price</th>
            <th scope="col" class="bg-body-secondary">Quantity</th>
            <th scope="col" class="bg-body-secondary">subtotal</th>
            <th scope="col" class="bg-body-secondary"></th>
        </tr>
        </thead>
        <tbody>
        ${createallrows(arr)}
        </tbody>
    </table>

    <div class="secondtable">
                            <h5 class="headfont">Cart Total</h5>
                        
                            <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$${claculatetotal(arr)}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>$${claculatetotal(arr)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <a href="checkout.html" class="button-like-link";>Checkout Details</a>
                    </div>`;


    document.getElementById('tableparts').innerHTML = table;
    updatecartnumber(arr);
    updatecartmoney(arr);
    }

function createrow(product){
    let row =`<tr class="textfont" data-productId = ${product.productId}>
    <th scope="row"> 
        <img src="${product.image}">
    </th>
    <td data-title="Product">${product.productTitle}</td>
    <td data-title="price">$${product.price.toFixed(2)}</td>
    <td>
        <div class="d-flex counter">
            <output class="border-end">+</output>
            <output class="number">${product.quantity}</output>
            <output class="border-start">-</output>
        </div>
    </td>
    <td data-title="total price">$${(parseFloat(product.price)*parseFloat(product.quantity)).toFixed(2)}</td>
    <td><i class="fa-regular fa-circle-xmark"></i></td>
</tr>`;
return row;
}


function createallrows(arr){
    let rows =``;
    for(let i = 0 ; i < arr.length ; i++){
        rows +=`${createrow(arr[i])}`
    }
    return rows;
}

/* calculate the total */ 

function claculatetotal(arr){
    let total = 0;
    for(let i = 0 ; i < arr.length ; i++){
        total += parseFloat(arr[i].price)*parseFloat(arr[i].quantity);
    }
    return total.toFixed(2);
}

/*function to remove and add and decrease*/
document.getElementById("tableparts").addEventListener("click",function(e){
    if(e.target.classList.contains("fa-circle-xmark")){
        let close  = e.target;
        let prodid = close.parentElement.parentElement.getAttribute("data-productId");
        let arr = getlocal();
        let ind = searchbyid(arr,prodid);
        arr.splice(ind,1);
        createProductTable(arr);
        setlocal(arr);
        showToast('Action Completed', 3000 , "#ea6060");
    }


    /* adding more */
    else if(e.target.classList.contains("border-end")){
        let increaseamount = e.target;
        let prodid = increaseamount.parentElement.parentElement.parentElement.getAttribute("data-productId");
        let arr = getlocal();
        let ind = searchbyid(arr,prodid);

        let prod =JSON.parse(window.localStorage.getItem('products'));
        let prodind = searchbyid2(prod,prodid);
        console.log(prodind);
        let quant = prod[prodind].stockQuantity;
        if(arr[ind].quantity>=quant){
            showToast("can't add more the stock is empty" , 3000 , "orange");
        }
       
        else{
        arr[ind].quantity++;
        createProductTable(arr);
        setlocal(arr);
        showToast('Action Completed', 3000 , "#6cb36d");
        }
    }
    else if(e.target.closest('img')){
        let prodid = e.target.parentElement.parentElement.getAttribute("data-productId");
        console.log(typeof(parseInt(prodid)));
        window.localStorage.setItem("currentProductId",parseInt(prodid));
        window.location.assign("productDetails.html");
    }



    else if(e.target.classList.contains("border-start")){
        let increaseamount = e.target;
        let prodid = increaseamount.parentElement.parentElement.parentElement.getAttribute("data-productId");
        let arr = getlocal();
        let ind = searchbyid(arr,prodid);
        arr[ind].quantity--;
        if(arr[ind].quantity ==0){
            arr.splice(ind,1);
        }
        createProductTable(arr);
        setlocal(arr);
        showToast('Action Completed', 3000 , "#6cb36d");
    }

    if(getlocal().length==0){
        let ele = `<div class="alert alert-primary" role="alert" style="width :100%">
        Your cart is currently Empty
        </div>
        <div>
        <a href="homepage.html" class="button-like-link">Return home</a>
        </div>`
        document.getElementById('tableparts').innerHTML = ele;
        document.getElementById('tableparts').style.flexWrap = "wrap";
    }
});

/* write a search function */
function searchbyid(arr,_id){
    let ind = -1;
    for(let i= 0 ; i <arr.length ; i++ ){
        if(arr[i].productId==_id){
            ind = i;
            break;
        }
    }
    return ind;
}
function searchbyid2(arr,_id){
    let ind = -1;
    for(let i= 0 ; i <arr.length ; i++ ){
        if(arr[i].id==_id){
            ind = i;
            break;
        }
    }
    return ind;
}



/*get and set element from local stoage */
function getlocal(key="cart"){
    let arr  = JSON.parse(window.localStorage.getItem(key)) || [];
    return arr;
}

function setlocal(arr, key="cart"){
    localStorage.setItem(key,JSON.stringify(arr));
    // window.dispatchEvent(new Event('storage'));
}   


/* update cart number */

function updatecartnumber(arr){
    let amount = arr.reduce((sum, product) => sum + product.quantity, 0);
    document.getElementById("cart-items-count").innerText = amount;
}

function updatecartmoney(arr){
    let money = claculatetotal(arr);
    document.querySelector('#cart-icon span').innerText = `$ ${money}`;
}

/* local storage chnage */
/* it only fires when a change happens on the local storaege from different page */


// window.addEventListener("storage", function(e){
    
//     console.log("change");
// });
