import { Orders } from "./modula.js";


window.addEventListener('load',function(e){
    let order = getlocal("orders");
    let lastorder = order[order.length-1];
    console.log(lastorder);
    /*the bill */
    this.document.querySelectorAll("#bill>div>ul li strong")[0].innerText = lastorder.orderNumber;
    this.document.querySelectorAll("#bill>div>ul li strong")[1].innerText = lastorder.date.split('T')[0];
    this.document.querySelectorAll("#bill>div>ul li strong")[2].innerText = lastorder.total;
    this.document.querySelectorAll("#bill>div>ul li strong")[3].innerText = lastorder.paymentMethod;

    /* inside the table */
    this.document.querySelectorAll('#bill>div section table tfoot tr td')[1].innerText = lastorder.total;
    createProductTable(lastorder)

})

function createProductTable(arr){
    let table = `
    <tr>
        ${createallrows(arr.cart)}
    </tr>
    <tr>
        <td>SubTotal </td>
        <td class="subtotal">$${claculatetotal(arr.cart)} </td>
    </tr>
    <tr>
        <td>Payment Method </td>
        <td class="pay">${arr.paymentMethod} </td>
    </tr>
`
document.querySelectorAll('#bill>div section table tbody')[0].innerHTML = table;
}

function createrow(product){
    let row = `<tr>
    <td>${product.productTitle} <strong>x ${product.quantity}</strong> </td>
    <td>$${(parseFloat(product.price)*parseFloat(product.quantity)).toFixed(2)}</td>
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

function claculatetotal(arr){
    let total = 0;
    for(let i = 0 ; i < arr.length ; i++){
        total += parseFloat(arr[i].price)*parseFloat(arr[i].quantity);
    }
    return total.toFixed(2);
}

/* get and set local storage */
function getlocal(_key){
    let arr  = JSON.parse(window.localStorage.getItem(_key)) || [];
    return arr;
}
function setlocal(_key,arr){
    localStorage.setItem(_key,JSON.stringify(arr));
}

