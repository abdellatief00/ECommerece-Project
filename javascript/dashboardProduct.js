import {Orders, Product,user} from './modula.js';

let row_id;
// let current_user_id = getlocal('current_user').id;
let all_products  = getlocal();
let current_products =  all_products
let searched = all_products.slice();

window.addEventListener("load",function(){
    createtablebody(current_products);
    createlis();
    changeactive();
});


/* repeated function */
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
        if(arr[i].id==_id){
            ind = i;
            break;
        }
    }
    return ind;
}
/* end of repeated functions*/



/*creation of the table */

function createtablebody(arr){
    let table =`${createmultirow(arr)}`;
    document.querySelector('#tbodyUsers').innerHTML = table;
}

function createproductrow(arr){
    let row = `<tr data-productId = ${arr.id}>
    <td><input type="checkbox" name="checkRow"></td>
    <td>${arr.id}</td>
    <td>${arr.productTitle}</td>
    <td>${arr.sellerId}</td>
    <td>${Math.floor(arr.stockQuantity)}</td>
    <td>${arr.price}</td>
    <td>${arr.category}</td>
    <td>${arr.shape}</td>
    <td> <img src="${arr.images[0]}" alt="product img"> </td>
    <td>
    <button class="btn m-1" data-bs-toggle="modal" data-bs-target="#showproducts" data-row-index="0">
    <i class="fa-regular fa-eye text-secondary cursorPointer"></i></button>
    <button class="btn m-1" data-bs-toggle="modal" data-bs-target="#deleteConfirm" data-row-index="0"><i class="fa-regular fa-trash-can text-danger cursorPointer"></i></button>
    </td>
</tr>`;
return row;
}

function createmultirow(arr){
    let max = parseInt(document.querySelector(".pagination .active").innerText)*5 ;
    max = Math.min(max,arr.length);
    let min = parseInt(document.querySelector(".pagination .active").innerText)*5-5;

    let rows = ``;
    for(let i = min ; i < max ; i++){
        rows += createproductrow(arr[i]);
    }
    return rows;
}

/* creation of the table */


/*button action */


document.querySelector('table tbody').addEventListener("click",function(e){
    if(e.target.closest ("button")){
        row_id = $(e.target).parents('tr').attr('data-productid');
        showdetails(current_products,row_id);
        showdetails2(current_products,row_id);
    }
});

document.querySelector('#deleteRow').addEventListener('click',function(){
    createlis();
    removeproduct(row_id);
    document.getElementById('searchByName').value = "";
    
})


/*end of buttons action*/

/*show details */
console.log(current_products[0]);

function showdetails(arr,_id){
    let ind = searchbyid(arr,_id);
    let prod = current_products[ind];
    document.getElementById('fname1').value = prod.productTitle;
    document.getElementById('lname1').value = prod.stockQuantity;
    document.getElementById('email1').value = prod.price;
    document.getElementById('pass1').value =  prod.category;
    document.getElementById('age1').value =  prod.shape;
    document.getElementById('image1').value = prod.frameColor;
    document.getElementById('image2').value = prod.lensClass;
    document.getElementById('image3').value = prod.treatment;
    document.getElementById('fimage').src = prod.images[0];
    document.getElementById('simage').src = prod.images[1];
}
function showdetails2(arr,_id){
    let ind = searchbyid(arr,_id);
    let prod = current_products[ind];
    document.getElementById("fname").value = prod.productTitle;
    document.getElementById('lname').value = prod.stockQuantity;
    document.getElementById('email').value = prod.price;
    document.getElementById('categorychoose2').value =  prod.category;
    document.getElementById('age').value =  prod.shape;
    document.getElementById('age2').value = prod.frameColor;
    document.getElementById('age3').value = prod.lensClass;
    document.getElementById('age4').value = prod.treatment;
    document.getElementById("textarea2").value = prod.productDescription;
}

function removeproduct(_id){
    let ind1 = searchbyid(current_products,_id);
    let ind2 = searchbyid(all_products,_id);
    all_products.splice(ind2,1);
    current_products.splice(ind1,1);
    setlocal(all_products,"products");
    createtablebody(current_products);
}


/* validation */
function isvalidvisaname(input) {
    const usernameRegex = /^[a-zA-Z0-9-' ]{3,30}$/;
    return usernameRegex.test(input);
}




/* toast */



function showToast(message, duration , color) {
    var el =document.createElement('div');
    el.className = "toast";
    // var toast = document.querySelector('.toast');
    el.style.animationName = "animationdropfromtop";
    el.style.display = 'block';
    el.innerText = message;
    el.style.backgroundColor = color;
    document.getElementById('addproduct').appendChild(el);
    setTimeout(function () {
        document.querySelector('.toast').remove();
    }, duration);
}
function showToast2(message, duration , color) {
    var el =document.createElement('div');
    el.className = "toast";
    // var toast = document.querySelector('.toast');
    el.style.animationName = "animationdropfromtop";
    el.style.display = 'block';
    el.innerText = message;
    el.style.backgroundColor = color;
    document.getElementById('editproducts').appendChild(el);
    setTimeout(function () {
        document.querySelector('.toast').remove();
    }, duration);
}

/* paggination */
function changeactive(key = current_products){
            let pageItems = document.querySelectorAll('.pagination .page-item');

            pageItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    
                    pageItems.forEach(function (el) {
                        el.classList.remove('active');
                    });

                    item.classList.add('active');
                    createtablebody(key);
                    //document.getElementById('searchByName').value = "";
                    
                });
            });
}
function createlis(){
    let createpages = ``;
            let act = "active";
            for(let i = 0 ;  i<Math.ceil(searched.length/5) ; i++){
                if(i!=0){act=""}
                createpages += `<li class="page-item ${act}" aria-current="page">
                <a class="page-link " href="#">${i+1}</a>
            </li>`;
            }
            document.querySelector(".pagination").innerHTML = createpages;
}