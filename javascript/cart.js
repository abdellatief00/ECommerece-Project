import { Cart} from './modula.js';

let cartarr = [];
cartarr.push(new Cart(1,"prod 1",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
cartarr.push(new Cart(2,"prod 2",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
cartarr.push(new Cart(3,"prod 3",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());
cartarr.push(new Cart(4,"prod 44",3 , 135.00 ,"images/women/product-1-a.jpg").addJson());

localStorage.setItem("cart",JSON.stringify(cartarr));
let stored = JSON.parse(window.localStorage.getItem("cart")) || [];
console.log(stored[0].image);


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
        <tr class="textfont" >
            <th scope="row"> <a href="#">
                <img src="images/Cart/product-01-a-600x600.jpg">
            </a></th>
            <td data-title="Product">Mark</td>
            <td data-title="price">$185.00</td>
            <td>
                <div class="d-flex counter">
                    <output class="border-end">+</output>
                    <output class="number">1</output>
                    <output class="border-start">-</output>
                </div>
            </td>
            <td data-title="total price">$185.00</td>
            <td><i class="fa-regular fa-circle-xmark"></i></td>
        </tr>
        <tr class="textfont">
            <th scope="row"> <a href="#">
                <img src="images/Cart/product-01-a-600x600.jpg">
            </a></th>
            <td data-title="Product">Jacob</td>
            <td data-title="price">$185.00</td>
            <td><div class="d-flex counter">
                <output class="border-end">+</output>
                <output class="number">1</output>
                <output class="border-start">-</output>
            </div></td>
            <td data-title="total price">$185.00</td>
            <td><i class="fa-regular fa-circle-xmark"></i></td>
        </tr>
        <tr class="textfont">
            <th scope="row"> <a href="#">
                <img src="images/Cart/product-01-a-600x600.jpg">
            </a> </th>
            <td data-title="Product">Larry the Bird</td>
            <td data-title="price">$185.00</td>
            <td><div class="d-flex counter">
                <output class="border-end">+</output>
                <output class="number">1</output>
                <output class="border-start">-</output>
            </div></td>
            <td data-title="total price">$185.00</td>
            <td><i class="fa-regular fa-circle-xmark"></i></td>
        </tr>
        ${createallrows(arr)}
        </tbody>
    </table>

    <div class="secondtable">
                            <h5 class="headfont">Cart Total</h5>
                        
                            <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$185.00</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>$185.00</td>
                                </tr>
                            </tbody>
                        </table>

                        <button class="buttonshape">PROCEED TO CHECKOUT</button>
                    </div>`;


    document.getElementById('tableparts').innerHTML = table;
    
    }
createProductTable(stored);

function createrow(product){
    let row =`<tr class="textfont" data-productId = ${product.productId}>
    <th scope="row"> <a href="#">
        <img src="${product.image}">
    </a></th>
    <td data-title="Product">${product.productTitle}</td>
    <td data-title="price">$${product.price}</td>
    <td>
        <div class="d-flex counter">
            <output class="border-end">+</output>
            <output class="number">${product.quantity}</output>
            <output class="border-start">-</output>
        </div>
    </td>
    <td data-title="total price">$${parseFloat(product.price)*parseFloat(product.quantity)}</td>
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
console.log(createallrows(stored)); 
