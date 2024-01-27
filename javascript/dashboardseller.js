import {Orders, Product,user} from './modula.js';

// let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
// window.localStorage.setItem("current_user",JSON.stringify(one_user));

let row_id;
let current_user_id = getlocal('current_user').id;
let all_products  = getlocal();
let current_products =  all_products.filter((ele)=>{return ele.sellerId==current_user_id});
let searched = current_products.slice();

window.addEventListener("load",function(){
    createlis(searched);
    changeactive(searched);
    createtablebody(searched);

    document.querySelector('.adminImgANDNot').children[1].children[0].src  = getlocal('current_user').images[0];
    document.querySelector('.adminImgANDNot').children[1].children[1].innerText =getlocal('current_user').fname+" "+getlocal('current_user').lname

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
    <td>${Math.floor(arr.stockQuantity)}</td>
    <td>$${parseFloat(arr.price).toFixed(2)}</td>
    <td>${arr.category}</td>
    <td>${arr.shape}</td>
    <td> <img src="${arr.images[0]}" alt="product img"> </td>
    <td>
    <button class="btn m-1" data-bs-toggle="modal" data-bs-target="#showproducts" data-row-index="0">
    <svg class="svg-inline--fa fa-eye text-secondary cursorPointer" aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
    <path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z">
    </path></svg><!-- <i class="fa-regular fa-eye text-secondary cursorPointer"></i> Font Awesome fontawesome.com --></button><button class="btn m-1" data-bs-toggle="modal" data-bs-target="#editproducts" data-row-index="0"><svg class="svg-inline--fa fa-pen-to-square text-info cursorPointer" aria-hidden="true" focusable="false" data-prefix="far" data-icon="pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"></path></svg><!-- <i class="fa-regular fa-pen-to-square text-info cursorPointer"></i> Font Awesome fontawesome.com --></button><button class="btn m-1" data-bs-toggle="modal" data-bs-target="#deleteConfirm" data-row-index="0"><svg class="svg-inline--fa fa-trash-can text-danger cursorPointer" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-can" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg><!-- <i class="fa-regular fa-trash-can text-danger cursorPointer"></i> Font Awesome fontawesome.com --></button>
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
    removeproduct(row_id);
    document.getElementById('searchByName').value = "";
    
})


/*end of buttons action*/

/*show details */

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
    searched = current_products.slice();

    createlis(searched);
    changeactive(searched);
    createtablebody(searched);
}




/*end of show details*/

/* save for later */

function getfilelocation(tar){
    var input = tar;
            
    if (input.files && input.files[0]) {
        var selectedFile = input.files[0];
        var fileLocation = URL.createObjectURL(selectedFile);

        return fileLocation;
    }
}
/* adding product */ 


document.querySelector("button#addproduct").addEventListener("click",function(e){
    let allinp = document.querySelectorAll('#addproduct input');
    if(!isvalidvisaname(allinp[0].value)){
        showToast("enter a valid name", 3000, "#ea6060");
    }
    else if(allinp[1].value <=0){
        showToast("enter a number in stock", 3000, "#ea6060");
    }
    else if(allinp[2].value <=0){
        showToast("enter a valid price", 3000, "#ea6060");
    }
    else if(document.getElementById('textarea').value.trim()==""){
        showToast("enter a description", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[3].value)){
        showToast("enter a valid shape name", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[4].value)){
        showToast("enter a frame color", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[5].value)){
        showToast("enter a valid material name", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[6].value)){
        showToast("enter a lense glass", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[7].value)){
        showToast("enter a valid treatment", 3000, "#ea6060");
    }
    else if(allinp[8].value==""){
        showToast("enter a valid first photo", 3000, "#ea6060");
    }
    else if(allinp[9].value==""){
        showToast("enter a valid seconed photo", 3000, "#ea6060");
    }
    else{

        let imgarr = [getfilelocation(allinp[8]),getfilelocation(allinp[9])];
        console.log(imgarr);
        let o = new Product(allinp[0].value,document.getElementById('textarea').value.trim(),imgarr,allinp[1].value,[],
        allinp[2].value,current_user_id,"",allinp[3].value,allinp[4].value,allinp[5].value,allinp[6].value,allinp[7].value,
        document.getElementById("categorychoose").value);
        all_products.push(o.addJson());
        current_products.push(o.addJson());
        searched = current_products.slice();
        setlocal(all_products,"products");
        createlis(searched);
        changeactive(searched);
        createtablebody(searched);
        document.getElementById('searchByName').value = "";
        
        e.target.parentElement.children[0].click();    
    }

    
})
document.getElementById("editUser").addEventListener('click',function(e){
    let allinp = document.querySelectorAll('#editproducts input');
    if(!isvalidvisaname(allinp[0].value)){
        showToast2("enter a valid Title", 3000, "#ea6060");
    }
    else if(allinp[1].value <=0){
        showToast2("enter a number in stock", 3000, "#ea6060");
    }
    else if(allinp[2].value <=0){
        showToast2("enter a valid price", 3000, "#ea6060");
    }
    else if(document.getElementById('textarea2').value.trim()==""){
        showToast2("enter a description", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[3].value)){
        showToast2("enter a valid shape name", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[4].value)){
        showToast2("enter a frame color", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[5].value)){
        showToast2("enter a valid Lense glasses", 3000, "#ea6060");
    }
    else if(!isvalidvisaname(allinp[6].value)){
        showToast2("enter a enter a valid treatment", 3000, "#ea6060");
    }
    else{
        all_products = getlocal("products");
        let ind = searchbyid(all_products,row_id);

        if(allinp[7].value){
            all_products[ind].images[0] = getfilelocation(allinp[7]);
        }
        if(allinp[8].value){
            all_products[ind].images[1] = getfilelocation(allinp[8]);
        }

        all_products[ind].productTitle = allinp[0].value;
        all_products[ind].stockQuantity = allinp[1].value;
        all_products[ind].price = allinp[2].value;
        all_products[ind].productDescription = document.getElementById('textarea2').value.trim();
        all_products[ind].price = allinp[2].value;
        all_products[ind].shape = allinp[3].value;
        all_products[ind].frameColor = allinp[4].value;
        all_products[ind].lensClass = allinp[5].value;
        all_products[ind].treatment = allinp[6].value;

        setlocal(all_products,"products");
        current_products =  all_products.filter((ele)=>{return ele.sellerId==current_user_id});
        
        createtablebody(current_products);
        document.getElementById('searchByName').value = "";
        e.target.parentElement.children[0].click();    

    }
})




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




/* search by name */

document.getElementById('searchByName').addEventListener('input',function(e){
    searched = current_products.slice();
    let x = e.target.value.trim().toLowerCase();
    searched = searched.filter(function(value){
        let z = value.productTitle.toLowerCase().includes(x)||value.category.toLowerCase().includes(x)||value.shape.toLowerCase().includes(x)||value.treatment.toLowerCase().includes(x);
        return z ;
    });
    if(e.target.value==""){
    searched = current_products.slice();
    }
    createlis(searched);
    changeactive(searched);
    createtablebody(searched);
});


/* paggination */
function changeactive(key = searched){
            let pageItems = document.querySelectorAll('.pagination .page-item');

            pageItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    
                    pageItems.forEach(function (el) {
                        el.classList.remove('active');
                    });

                    item.classList.add('active');
                    createtablebody(key);
                    // document.getElementById('searchByName').value = ""; 
                });
            });
}
function createlis(key = searched){
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