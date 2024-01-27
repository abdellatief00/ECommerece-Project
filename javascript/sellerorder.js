import {Orders, Product,user} from './modula.js';

let row_id;
let current_user_id = getlocal('current_user').id;
let all_products  = getlocal();
let current_products =  all_products.filter((ele)=>{return ele.sellerId==current_user_id});
let allorders = getlocal('orders');
let seller_orders = createorders();
let searched =  seller_orders.slice();
let current_page_number = 0;


window.addEventListener('load',function(){
    createlis();
    changeactive();
    createtablebody(seller_orders);
    document.querySelector('.adminImgANDNot').children[1].children[0].src  = getlocal('current_user').images[0];
    document.querySelector('.adminImgANDNot').children[1].children[1].innerText =getlocal('current_user').fname+" "+getlocal('current_user').lname

    });
    

/* repeated functions */
function setlocal(arr,key = "products"){
    window.localStorage.setItem(key,JSON.stringify(arr));
}
function getlocal(key="products"){
    let arr = JSON.parse(window.localStorage.getItem(key));
    return arr;
}
function searchbyid(arr,_id){
    let ind = -1;
    for(let i= 0 ; i <arr.length ; i++ ){
        if(arr[i].orderNumber==_id){
            ind = i;
            break;
        }
    }
    return ind;
}
function searchbyid2(arr,_id){
    let ind = -1;
    for(let i= 0 ; i <arr.length ; i++ ){
        if(arr[i].orderid==_id){
            ind = i;
            break;
        }
    }
    return ind;
}
/*end of repeated functions*/


function createtablebody(arr){
    let table =`${createmultirow(arr)}`;
    document.querySelector('#tbodyUsers').innerHTML = table;

}

function createproductrow(arr){
    let pend;
    let clas;
    if(arr.state=="pending"){pend = "pending"
                            clas = "btn-primary"}
    else{pend=  "delivery"
        clas = "btn-info"}
    let row = `<tr data-order=${arr.id} , data-this-order = ${arr.orderid}>
    <td>${arr.id}</td>
    <td>${arr.product_title}</td>
    <th>${arr.quantity}</th>
    <td>$${arr.total_price}</td>
    <td>${arr.location}</td>
    <td>${arr.name}</td>
    <td><button type="button" class="btn ${clas} state" value=${pend}>${pend}</button>
    </td>
    <td>
<button class="btn m-1" data-bs-toggle="modal" data-bs-target="#showproducts" data-row-index="0">
<svg class="svg-inline--fa fa-eye text-secondary cursorPointer" aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
<path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z">
</path></svg></button>
</td>
</tr>`;
return row;
}

function createmultirow(arr){
    let max;
    let min;
    if(document.querySelector(".pagination .active")===null){
        max = arr.length;
        min = 0;
    }
    else{
    max= parseInt(document.querySelector(".pagination .active").innerText)*5 || 0 ;
    max = Math.min(max,arr.length);
    min = parseInt(document.querySelector(".pagination .active").innerText)*5-5 ;
    }
    let rows = ``;
    for(let i = min ; i < max ; i++){
        rows += createproductrow(arr[i]);
    }
    return rows;
}

/* pending change status */
document.querySelector("table tbody").addEventListener('click',function(e){
    if(e.target.closest ("button.state")){
        let data_order = $(e.target).parents("tr").attr('data-order');
        let ind  = searchbyid(allorders , data_order);
        let rows = document.querySelectorAll("tbody tr").length;
        for (let i = 0 ; i < rows ; i++){
            if(document.querySelectorAll("tbody tr")[i].getAttribute("data-order")==data_order){
                let current = document.querySelectorAll("tbody tr button.state")[i];
                if(current.value=="delivery"){
                    current.value = "pending";
                    current.innerText = "pending";
                    current.classList.add("btn-primary");
                    current.classList.remove("btn-info");
                }
                else{
                    current.value = "delivery";
                    current.innerText = "delivery";
                    current.classList.remove("btn-primary");
                    current.classList.add("btn-info");
                }
                
            }
        }
        allorders[ind].state = e.target.value;
        setlocal(allorders,"orders");
    }

    if(e.target.closest ("button")){
        row_id = $(e.target).parents('tr').attr('data-this-order');
        showdetails2(seller_orders,row_id);
    }
});

//name  phone  product_title location total_price  email
function showdetails2(arr,_ind){
    let ind = searchbyid2(arr,row_id);
    console.log(ind);
    console.log(seller_orders[ind]);
    document.getElementById('fname1').value = seller_orders[ind].name;
    document.getElementById('lname1').value = seller_orders[ind].phone;
    document.getElementById('email1').value = seller_orders[ind].product_title;
    document.getElementById('pass1').value = seller_orders[ind].location;
    document.getElementById('age1').value = seller_orders[ind].total_price;
    document.getElementById('image1').value = seller_orders[ind].email;
    document.getElementById('date').value = seller_orders[ind].date.split('T')[0];
}


/*search  */
document.getElementById('searchByName').addEventListener('input',function(e){
    searched = seller_orders.slice();
    let x = e.target.value.trim().toLowerCase();
    searched = searched.filter(function(value){
        return value.product_title.toLowerCase().includes(x)|| value.location.toLowerCase().includes(x)||value.name.toLowerCase().includes(x);
    });
    
    
    if(e.target.value==""){
    searched = seller_orders.slice();
    }
    createlis(searched);
    changeactive(searched);
    createtablebody(searched);
})


/* sorting */

function sortascending(innername){

    
    seller_orders.sort(function(a,b){
        var nameA = a[innername]; 
        var nameB = b[innername];
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0; 
    })
    searched = seller_orders.slice();
    createlis(searched);
    changeactive(searched);
    createtablebody(searched);
}
function sortdescending(innername){

    seller_orders.sort(function(a,b){
        var nameA = a[innername]; 
        var nameB = b[innername];
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0; 
    })
    searched = seller_orders.slice();
    createlis(searched);
    changeactive(searched);
    createtablebody(searched);
}


let before = '';
document.querySelector('thead').addEventListener('click',function(e){
    let obj = {
        ['ID'] : 'id', 
        ['Product Title'] : 'product_title',
        ['Quantity'] : 'quantity',
        ['Total Price']: 'total_price',
        ['Location'] : 'location',
        ['Customer Name'] : 'name',
        ['current State'] : 'state'
    }
    
    if(e.target.innerText === before){
        before = '';
        let val = obj[e.target.innerText];
        sortdescending(val);
    }
    else{
        before = e.target.innerText;
        let val = obj[e.target.innerText];
        sortascending(val);
    }
})






















/*navigation */

function changeactive(key = searched){
    let pageItems = document.querySelectorAll('.pagination .page-item');

    pageItems.forEach(function (item) {
        item.addEventListener('click', function () {
            
            pageItems.forEach(function (el) {
                el.classList.remove('active');
            });

            item.classList.add('active');
            current_page_number = parseInt(item.innerText)-1;
            createtablebody(key);
            // document.getElementById('searchByName').value = ""; 
        });
    });
}
function createlis(key = searched){
let createpages = ``;
    
    for(let i = 0 ;  i<Math.ceil(key.length/5) ; i++){
        let act = "";
        if(i==current_page_number){act="active"}
        createpages += `<li class="page-item ${act}" aria-current="page">
        <a class="page-link " href="#">${i+1}</a>
    </li>`;
    }
    document.querySelector(".pagination").innerHTML = createpages;
}
/* navigation */







/* create orders */
function createorders(){
    let order_id = 0;
    let obj = {};
    let seller = [];
    for(let i = 0 ; i < allorders.length ; i++){
        for(let j = 0 ; j < allorders[i].cart.length ; j++){
            let prodid = allorders[i].cart[j].productId;
            let x = current_products.some((ele)=>ele.id==prodid);
            if(x){
                order_id++;
                obj = {
                    orderid : order_id,
                    id : allorders[i].orderNumber,
                    product_title: allorders[i].cart[j].productTitle,
                    quantity : allorders[i].cart[j].quantity,
                    total_price : allorders[i].cart[j].quantity * allorders[i].cart[j].price,
                    location : allorders[i].city + "-"+ allorders[i].country,
                    date : allorders[i].date,
                    name : allorders[i].name,
                    payment: allorders[i].paymentMethod,
                    email : allorders[i].email,
                    state : allorders[i].state || "pending",
                    phone : allorders[i].phone
                };
                seller.push(obj);
            }
        }
    }
    return seller;
}
