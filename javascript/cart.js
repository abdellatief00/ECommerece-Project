import { Cart} from './modula.js';

let cartarr = [];
cartarr.push(new Cart(1,"prod 1",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
cartarr.push(new Cart(2,"prod 2",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
cartarr.push(new Cart(3,"prod 3",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
cartarr.push(new Cart(4,"prod 44",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());

localStorage.setItem("cart",JSON.stringify(cartarr));
let stored = JSON.parse(window.localStorage.getItem("cart")) || [];
console.log(stored[0].image);


/* what happened when the window load */ 
window,addEventListener("load",function(e){
    createProductTable(stored);
})



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

                        <button class="buttonshape">PROCEED TO CHECKOUT</button>
                    </div>`;


    document.getElementById('tableparts').innerHTML = table;
    
    }

function createrow(product){
    let row =`<tr class="textfont" data-productId = ${product.productId}>
    <th scope="row"> <a href="#">
        <img src="${product.image}">
    </a></th>
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
    }
    else if(e.target.classList.contains("border-end")){
        let increaseamount = e.target;
        let prodid = increaseamount.parentElement.parentElement.parentElement.getAttribute("data-productId");
        let arr = getlocal();
        let ind = searchbyid(arr,prodid);
        arr[ind].quantity++;
        createProductTable(arr);
        setlocal(arr);
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
/*get and set element from local stoage */
function getlocal(){
    let arr  = JSON.parse(window.localStorage.getItem("cart")) || [];
    return arr;
}
function setlocal(arr){
    localStorage.setItem("cart",JSON.stringify(arr));
}



