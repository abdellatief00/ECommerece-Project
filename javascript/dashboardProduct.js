import {Orders, Product,user} from './modula.js';

// let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
// window.localStorage.setItem("current_user",JSON.stringify(one_user));
  
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




/*end of show details*/

// /* save for later */
// function getfilelocation(tar){
//     var input = tar;
            
//     if (input.files && input.files[0]) {
//         var selectedFile = input.files[0];
//         var fileLocation = URL.createObjectURL(selectedFile);

//         return fileLocation;
//     }
// }


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
// import {
//     Orders,
//     Product,
//     user
// } from './modula.js';

// let row_id;
// let all_products = getlocal();
// let users=getlocal("users");
// var sellers = [];

// for (let i = 0; i < all_products.length; i++) {
//     let sellerId = all_products[i]["sellerId"];
//     let existingSeller = sellers.find(seller => seller.sellerId === sellerId);
//     let seller = users.find(user => user.id == sellerId);
//     let sellerName= seller.fname+" "+seller.lname ;
//     if (existingSeller) {
//         existingSeller.pro.push(all_products[i]);
//     } else {
//         let newSeller = {
//             sellerId: sellerId,
//             sellerName:sellerName,
//             pro: [all_products[i]]
//         };
//         sellers.push(newSeller);
//     }
// }

// console.log(sellers);

// let searched = all_products.slice();
// console.log(searched);
// window.addEventListener("load", function () {
//     createtablebody(sellers);
//     createlis();
//     changeactive();
// });





// /* repeated function */
// function setlocal(arr, key = "products") {
//     window.localStorage.setItem(key, JSON.stringify(arr));
// }

// function getlocal(key = "products") {
//     let arr = JSON.parse(window.localStorage.getItem(key));
//     return arr;
// }

// function searchbyid(arr, _id) {
//     let ind = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].sellerId == _id) {
//             ind = i;
//             break;
//         }
//     }
//     return ind;
// }
// /* end of repeated functions*/



// /*creation of the table */

// function createtablebody(arr) {
//     let table = `${createmultirow(arr)}`;
//     document.querySelector('#tbodyUsers').innerHTML = table;
//     changeactive();
// }

// function createproductrow(arr) {
//     console.log(arr);
//     let row = `<tr data-sellerId = ${arr.sellerId}>
//         <td><input type="checkbox" name="checkRow" ></td>
//         <td>${arr.sellerId}</td>
//         <td>${arr.sellerName}</td><td>`
        
//         for (let i = 0; i < arr.pro.length; i++) {
//             row +=`${arr.pro[i].productTitle} <hr/>`
            
//         }//product title
//         row+=`</td><td>`
//         for (let i = 0; i < arr.pro.length; i++) {
//             row +=` ${arr.pro[i].category}<hr/>`
            
//         }//product stock
//         row+=`</td><td>`
//         for (let i = 0; i < arr.pro.length; i++) {
//             row +=`${arr.pro[i].price}<hr/>`
            
//         }//product title
//         row+=`</td><td>`
//         for (let i = 0; i < arr.pro.length; i++) {
//             row +=`${Math.floor(arr.pro[i].stockQuantity)} <hr/>`
            
//         }//product title
//         row+=`</td><td>`
//         for (let i = 0; i < arr.pro.length; i++) {
//             row +=`<img src="../${arr.pro[i].images[0]}" alt="product img"> <hr/>`
//             // row +=`<img src="../images/women/product-3-a.jpg" alt="product img"> <hr/>`
            
//         }//product title
//         row+=`</td>
//         <td><button class="btn m-1" data-bs-toggle="modal" data-bs-target="#showproducts" data-row-index="0">
//         <i class="fa-regular fa-eye text-secondary cursorPointer"></i></button><button class="btn m-1" data-bs-toggle="modal" data-bs-target="#editproducts" data-row-index="0"><i class="fa-regular fa-pen-to-square text-info cursorPointer"></i></button><button class="btn m-1" data-bs-toggle="modal" data-bs-target="#deleteConfirm" data-row-index="0"><i class="fa-regular fa-trash-can text-danger cursorPointer"></i></button>
//         </td>
//     </tr>`;
//     return row;
// }

// function createmultirow(arr) {
//     let max = parseInt(document.querySelector(".pagination .active").innerText) * 5;
//     max = Math.min(max, arr.length);
//     let min = parseInt(document.querySelector(".pagination .active").innerText) * 5 - 5;

//     let rows = ``;
//     for (let i = min; i < max; i++) {
//         rows += createproductrow(arr[i]);
//     }
//     return rows;
// }

// /* creation of the table */


// /*button action */


// document.querySelector('table tbody').addEventListener("click", function (e) {
//     if (e.target.closest("button")) {
//         row_id = $(e.target).parents('tr').attr('data-sellerid');
//         console.log(row_id);
//         showdetails(sellers, row_id);
//         showdetails2(sellers, row_id);
//     }
// });

// document.querySelector('#deleteRow').addEventListener('click', function () {
//     createlis();
//     removeproduct(row_id);
//     document.getElementById('searchByName').value = "";

// })


// /*end of buttons action*/

// /*show details */
// // console.log(current_products[0]);

// function showdetails(arr, _id) {
//     let ind = searchbyid(arr, _id);
//     console.log(ind, _id);
//     let prod = sellers[ind];
//     console.log(prod);
//     document.getElementById('SellerName').value = prod.sellerName;
//     let proTitle=document.getElementById('productsName');
//     proTitle.value=``;
//     let proPrice= document.getElementById('price');
//     proPrice.value=``
//     let proCat=document.getElementById('category');
//     proCat.value=``;
//     let proStock=document.getElementById('NoStock');
//     proStock.value=``
//     let proimgDiv=document.getElementById('fimage');
//     proimgDiv.innerHTML=null;
       
//     for (let i = 0; i <  prod.pro.length; i++) {
//         let proimg=document.createElement('img');
//         proTitle.value +=`${prod.pro[i].productTitle}, `;
//         proPrice.value +=`${prod.pro[i].price}, `;
//         proCat.value +=`${prod.pro[i].category}, `;
//         proStock.value +=`${prod.pro[i].stockQuantity}, `;
//         proimg.src =`${prod.pro[i].images[0]}`;
//         proimgDiv.appendChild(proimg);
//      }
// }

// function showdetails2(arr, _id) {
//     let ind = searchbyid(arr, _id);
//     console.log(ind, _id);
//     let prod = sellers[ind];
//     console.log(prod);
//     document.getElementById('SellerNameE').value = prod.sellerName;
//     let proTitle=document.getElementById('productsNameE');
//     proTitle.value=``;
//     let proPrice= document.getElementById('priceE');
//     proPrice.value=``
//     let proCat=document.getElementById('categoryE');
//     proCat.value=``;
//     let proStock=document.getElementById('NoStockE');
//     proStock.value=``
//     // let proimgDiv=document.getElementById('fimageE');
//     // proimgDiv.innerHTML=null;
       
//     for (let i = 0; i <  prod.pro.length; i++) {
//         // let proimg=document.createElement('img');
//         proTitle.value +=`${prod.pro[i].productTitle}, `;
//         proPrice.value +=`${prod.pro[i].price}, `;
//         proCat.value +=`${prod.pro[i].category}, `;
//         proStock.value +=`${prod.pro[i].stockQuantity}, `;
//         // proimg.src =`${prod.pro[i].images[0]}`;
//         // proimgDiv.appendChild(proimg);
//      }
// }

// function removeproduct(_id) {
//     let ind1 = searchbyid(sellers, _id);
//     let ind2 = searchbyid(all_products, _id);
//     all_products.splice(ind2, 1);
//     sellers.splice(ind1, 1);
//     setlocal(all_products, "products");
//     createtablebody(sellers);
// }




// /*end of show details*/

// /* save for later */
// function getfilelocation(tar) {
//     var input = tar;

//     if (input.files && input.files[0]) {
//         var selectedFile = input.files[0];
//         var fileLocation = URL.createObjectURL(selectedFile);

//         return fileLocation;
//     }
// }
// /* adding product */


// document.getElementById("editUser").addEventListener('click', function (e) {
//     let allinp = document.querySelectorAll('#editproducts input');
//     if (!isvalidvisaname(allinp[0].value)) {
//         showToast2("enter a valid Title", 3000, "#ea6060");
//     } else if (allinp[1].value <= 0) {
//         showToast2("enter a number in stock", 3000, "#ea6060");
//     } else if (allinp[2].value <= 0) {
//         showToast2("enter a valid price", 3000, "#ea6060");
//     }else if (!isvalidvisaname(allinp[3].value)) {
//         showToast2("enter a valid shape name", 3000, "#ea6060");
//     } else if (!isvalidvisaname(allinp[4].value)) {
//         showToast2("enter a frame color", 3000, "#ea6060");
//     } else if (!isvalidvisaname(allinp[5].value)) {
//         showToast2("enter a valid Lense glasses", 3000, "#ea6060");
//     } else if (!isvalidvisaname(allinp[6].value)) {
//         showToast2("enter a enter a valid treatment", 3000, "#ea6060");
//     } else {
//         all_products = getlocal("products");
//         let ind = searchbyid(all_products, row_id);

//         if (allinp[7].value) {
//             all_products[ind].images[0] = getfilelocation(allinp[7]);
//         }
//         if (allinp[8].value) {
//             all_products[ind].images[1] = getfilelocation(allinp[8]);
//         }

//         all_products[ind].productTitle = allinp[0].value;
//         all_products[ind].stockQuantity = allinp[1].value;
//         all_products[ind].price = allinp[2].value;
//         all_products[ind].productDescription = document.getElementById('textarea2').value.trim();
//         all_products[ind].price = allinp[2].value;
//         all_products[ind].shape = allinp[3].value;
//         all_products[ind].frameColor = allinp[4].value;
//         all_products[ind].lensClass = allinp[5].value;
//         all_products[ind].treatment = allinp[6].value;

//         setlocal(all_products, "products");
//         current_products = all_products.filter((ele) => {
//             return ele.sellerId == current_user_id
//         });

//         createtablebody(sellers);
//         document.getElementById('searchByName').value = "";
//         e.target.parentElement.children[0].click();

//     }
// })
// /* validation */
// function isvalidvisaname(input) {
//     const usernameRegex = /^[a-zA-Z0-9-' ]{3,30}$/;
//     return usernameRegex.test(input);
// }

// /* toast */

// function showToast(message, duration, color) {
//     var el = document.createElement('div');
//     el.className = "toast";
//     // var toast = document.querySelector('.toast');
//     el.style.animationName = "animationdropfromtop";
//     el.style.display = 'block';
//     el.innerText = message;
//     el.style.backgroundColor = color;
//     document.getElementById('addproduct').appendChild(el);
//     setTimeout(function () {
//         document.querySelector('.toast').remove();
//     }, duration);
// }

// function showToast2(message, duration, color) {
//     var el = document.createElement('div');
//     el.className = "toast";
//     // var toast = document.querySelector('.toast');
//     el.style.animationName = "animationdropfromtop";
//     el.style.display = 'block';
//     el.innerText = message;
//     el.style.backgroundColor = color;
//     document.getElementById('editproducts').appendChild(el);
//     setTimeout(function () {
//         document.querySelector('.toast').remove();
//     }, duration);
// }


// let checkAll =document.getElementById("checkAll");
// checkAll.addEventListener('click', function (e) {
//     if (checkAll.checked) {
//         let allItem = document.querySelectorAll("input[type=checkbox]");
//         allItem.forEach(item => item.checked = true);
//     } else {
//         let allItem = document.querySelectorAll("input[type=checkbox]");
//         allItem.forEach(item => item.checked = false);
//     }

// })


// /* search by name */

// document.getElementById('searchByName').addEventListener('input', function (e) {
//     let x = e.target.value;
//     searched = searched.filter(function (value) {
//         return value.productTitle.toLowerCase().includes(x);
//     });


//     if (e.target.value == "") {
//         searched = current_products.slice();
//     }
//     createtablebody(searched);
// })
// /* paggination */
// function changeactive(key) {
//     let pageItems = document.querySelectorAll('.pagination .page-item');

//     pageItems.forEach(function (item) {
//         item.addEventListener('click', function () {

//             pageItems.forEach(function (el) {
//                 el.classList.remove('active');
//             });

//             item.classList.add('active');
//             createtablebody(key);
//             document.getElementById('searchByName').value = "";

//         });
//     });
// }

// function createlis() {
//     let createpages = ``;
//     let act = "active";
//     for (let i = 0; i < Math.ceil(searched.length / 5); i++) {
//         if (i != 0) {
//             act = ""
//         }
//         createpages += `<li class="page-item ${act}" aria-current="page">
//                     <a class="page-link " href="#">${i+1}</a>
//                 </li>`;
//     }
//     document.querySelector(".pagination").innerHTML = createpages;
// }




















































// // let userTable_tbody = document.getElementById('tbodyUsers');
// // var users = JSON.parse(localStorage.getItem("users"));
// // var products = JSON.parse(localStorage.getItem("products"));
// // console.log(products[0]["sellerId"]);
// // // var sellers=products
// // var sellers = [];

// // for (let i = 0; i < products.length; i++) {
// //     let sellerId = products[i]["sellerId"];
// //     let existingSeller = sellers.find(seller => seller.sellerId === sellerId);

// //     if (existingSeller) {
// //         existingSeller.pro.push(products[i]["id"]);
// //     } else {
// //         let newSeller = {
// //             sellerId: sellerId,
// //             pro: [products[i]["id"]]
// //         };
// //         sellers.push(newSeller);
// //     }
// // }

// // console.log(sellers);


// // for (let i = 0; i < users.length; i++) {
// //     let userId = users[i]["id"];
// //     let seller = sellers.find(seller => seller.sellerId == userId);
// //     if (seller) {
// //         console.log(users[i]["fname"]);
// //         let row =this.document.createElement("tr");

// //         let productNames = seller.pro.map(productId => {
// //             let product = products.find(p => p.id == productId);
// //             console.log(product);
// //             if (product) {
// //                 return `${product.productTitle}`;
// //             }
// //         });
// //         let productCategory = seller.pro.map(productId => {
// //             let product = products.find(p => p.id == productId);
// //             console.log(product);
// //             if (product) {
// //                 return `${product.category}`;
// //             }
// //         });
// //         let productImage1 = seller.pro.map(productId => {
// //             let product = products.find(p => p.id == productId);
// //             // console.log(product);
// //             if (product) {
// //                 console.log(product.images[0]);


// //                 return `<img src="${product.images[0]}" />`;
// //             }
// //         });    
// //         row.innerHTML = `
// //             <td><input type="checkbox" name="checkRow" id="checkRow${i}" /></td>
// //             <td>${userId}</td>
// //             <td>${users[i]["fname"]} ${users[i]["lname"]}</td>
// //             <td>${productNames.join("<hr/>")}</td>
// //             <td>${productCategory.join("<hr/>")}</td>
// //              <td${productImage1.join("<hr/>")}</td>
// //         `;
// //         userTable_tbody.appendChild(row);
// //         //users[i].sellerInfo = seller;
// //     } else {
// //         users[i].sellerInfo = null; // or any default value if no seller is found
// //     }
// // }
// // console.log(users);












// // console.log(users.call());
// // let rowsNum = document.getElementById("rowsNum");
// // DrawTable(products, rowsNum.value);
// // rowsNum.addEventListener("change", function () {
// //     deleteTable();
// //     DrawTable(products, rowsNum.value);
// // })

// // function DrawTable(products, rowsNumValue) {
// //     let n;
// //     if (rowsNumValue <= products.length) {
// //         n = rowsNumValue;
// //     } else {
// //         n = products.length
// //     }
// //     for (let i = 0; i < n; i++) {
// //         let createdrow = document.createElement('tr');
// //         let createdtd = document.createElement('td');
// //         let checkCreatted = document.createElement('input');
// //         // <input type="checkbox" name="checkRow" id="checkRow1">
// //         checkCreatted.setAttribute("type", "checkbox");
// //         checkCreatted.setAttribute("name", "checkRow");
// //         checkCreatted.setAttribute("id", `checkRow${i}`);
// //         //console.log(checkCreatted);
// //         createdtd.appendChild(checkCreatted);
// //         createdrow.appendChild(createdtd);
// //         for (let key in products[i]) {
// //             let createdtd = document.createElement('td');
// //             switch (key) {
// //                 case "images":
// //                     let imgTag = document.createElement("img");
// //                     imgTag.setAttribute("src", `${key}/${users[i][key]}`)
// //                     createdtd.appendChild(imgTag);
// //                     break;
// //                 case "role":
// //                     continue;
// //                     break;
// //                 case "fname":
// //                     createdtd.innerText = users[i][key];
// //                     break;
// //                 case "lname":
// //                     createdtd.innerText = users[i][key];
// //                     break;

// //                 default:
// //                     createdtd.innerText = users[i][key];
// //                     break;
// //             }

// //             createdrow.appendChild(createdtd);
// //         }
// //         //<i class="fa-regular fa-eye"></i>
// //         let lastcreatedtd = document.createElement('td');
// //         let showIcon = document.createElement('i');
// //         showIcon.setAttribute("class", "fa-regular fa-eye text-primary cursorPointer");
// //         let showBtn = document.createElement('button');
// //         showBtn.setAttribute("class", "btn m-1");
// //         showBtn.setAttribute("data-bs-toggle", "modal");
// //         showBtn.setAttribute("data-bs-target", "#editViewUser");
// //         showBtn.appendChild(showIcon);
// //         lastcreatedtd.appendChild(showBtn);
// //         showBtn.setAttribute('data-row-index', i);
// //         showBtn.addEventListener('click', function () {
// //             // Retrieve the stored index
// //             let index = showBtn.getAttribute('data-row-index');
// //             document.getElementById("fname").value = users[index]["fname"];
// //             document.getElementById("lname").value = users[index]["lname"];
// //             document.getElementById("email").value = users[index]["email"];
// //             document.getElementById("pass").value = users[index]["password"];
// //             document.getElementById("age").value = users[index]["age"];
// //             document.getElementById("fname").setAttribute("disabled", "disabled");
// //             document.getElementById("lname").setAttribute("disabled", "disabled");
// //             document.getElementById("email").setAttribute("disabled", "disabled");
// //             document.getElementById("pass").setAttribute("disabled", "disabled");
// //             document.getElementById("pass").removeAttribute("type");
// //             document.getElementById("pass").setAttribute("type", "text");
// //             document.getElementById("age").setAttribute("disabled", "disabled");
// //             document.getElementById("editUser").style.display = "none";
// //             document.getElementById("editViewUserCancel").innerText = "close";
// //             document.getElementById("editViewUserCancel").classList.remove("btn-danger");
// //             document.getElementById("editViewUserCancel").classList.add("btn-secondary");

// //         });


// //         let editIcon = document.createElement('i');
// //         //console.log(editIcon);
// //         editIcon.setAttribute("class", "fa-regular fa-pen-to-square text-info cursorPointer");

// //         lastcreatedtd.appendChild(editIcon);
// //         let editBtn = document.createElement('button');
// //         editBtn.setAttribute("class", "btn m-1");
// //         editBtn.setAttribute("data-bs-toggle", "modal");
// //         editBtn.setAttribute("data-bs-target", "#editViewUser");
// //         editBtn.appendChild(editIcon);

// //         editBtn.setAttribute('data-row-index', i);
// //         editBtn.addEventListener('click', function () {
// //             let index = editBtn.getAttribute('data-row-index');
// //             document.getElementById("fname").removeAttribute("disabled");
// //             document.getElementById("lname").removeAttribute("disabled");
// //             document.getElementById("email").removeAttribute("disabled");
// //             document.getElementById("pass").removeAttribute("disabled");
// //             document.getElementById("age").removeAttribute("disabled");
// //             document.getElementById("editUser").style.display = "block";
// //             document.getElementById("editViewUserCancel").innerText = "Cancel";
// //             document.getElementById("editViewUserCancel").classList.add("btn-danger");
// //             document.getElementById("editViewUserCancel").classList.remove("btn-secondary");
// //             document.getElementById("fname").value = users[index]["fname"];
// //             document.getElementById("lname").value = users[index]["lname"];
// //             document.getElementById("email").value = users[index]["email"];
// //             document.getElementById("pass").value = users[index]["password"];
// //             document.getElementById("pass").removeAttribute("type");
// //             document.getElementById("pass").setAttribute("type", "text");
// //             document.getElementById("age").value = users[index]["age"];
// //             //let imagepath = document.getElementById("image").value = users[index]["images"];
// //             document.getElementById("editUser").addEventListener("click", function () {
// //                 users[index]["fname"] = document.getElementById("fname").value;
// //                 users[index]["lname"] = document.getElementById("lname").value;
// //                 users[index]["email"] = document.getElementById("email").value;
// //                 users[index]["password"] = document.getElementById("pass").value;
// //                 users[index]["age"] = document.getElementById("age").value;
// //                 //users[index]["images"]=imagepath.value;
// //                 localStorage.setItem("users", JSON.stringify(users));
// //                 deleteTable();
// //                 // Remove the row from the table
// //                 DrawTable(users, rowsNum.value);

// //             });
// //         }); // edit button

// //         lastcreatedtd.appendChild(editBtn);
// //         ///////edit icon

// //         // lastcreatedtd.appendChild(document.createElement('hr'));
// //         let deleteIcon = document.createElement('i');
// //         deleteIcon.setAttribute("class", "fa-regular fa-trash-can text-danger cursorPointer");
// //         let deleteBtn = document.createElement('button');
// //         deleteBtn.setAttribute("class", "btn m-1");
// //         deleteBtn.setAttribute("data-bs-toggle", "modal");
// //         deleteBtn.setAttribute("data-bs-target", "#deleteConfirm");
// //         deleteBtn.appendChild(deleteIcon);
// //         // Store the index as a data attribute on the delete button
// //         deleteBtn.setAttribute('data-row-index', i);
// //         deleteBtn.addEventListener('click', function () {
// //             // Retrieve the stored index
// //             let index = deleteBtn.getAttribute('data-row-index');
// //             users.splice(index, 1);
// //             document.getElementById("deleteRow").addEventListener("click", function () {
// //                 localStorage.setItem("users", JSON.stringify(users));
// //                 deleteTable();
// //                 // Remove the row from the table
// //                 DrawTable(users, rowsNum.value);

// //             });

// //         }); //delete button

// //         lastcreatedtd.appendChild(deleteBtn);
// //         createdrow.appendChild(lastcreatedtd);
// //         userTable_tbody.appendChild(createdrow);
// //     }
// // }

// let search = document.querySelector("input[name=searchByName]");
// search.addEventListener("input", searching);

// function searching(e) {
//     //  console.log(e);
//     let tr = document.querySelectorAll("tbody tr");
//     for (let i = 0; i < tr.length; i++) {
//         let node = tr[i];
//         let textContent = node.children[2].textContent.toLowerCase();
//         let show = textContent.indexOf(this.value.toLowerCase()) !== -1;
//         node.style.display = show ? "" : "none";
//     }
// }


// function deleteTable() {
//     let newTbody = document.querySelectorAll('tbody>tr');
//     newTbody.forEach(function (trs) {
//         return trs.parentNode.removeChild(trs);
//     })
// }


// let addNewUser = document.getElementById("addUser");
// //addNewUser.addEventListener("click", display);

// function display() {
//     let userFirstName = document.getElementById("user-fname");
//     let userLastName = document.getElementById("user-lname");
//     let userEmail = document.getElementById("user-email");
//     let userPass = document.getElementById("user-pass");
//     let userAge = document.getElementById("user-age");
//     let userImagePath = document.getElementById("user-image");

//     let item = new userClass(userFirstName.value, userLastName.value, userEmail.value, userPass.value, userAge.value, userImagePath.value, 0).addjson();
//     item.id = userClass.autoincreaseid();

//     usersfullData.push(item);

//     localStorage.setItem("users", JSON.stringify(usersfullData));
//     usersfullData = JSON.parse(localStorage.getItem("users"));
//     deleteTable();
//     DrawTable(users, rowsNum.value);
// }

// //}); //end of load

// ///////////////////////////////////////////////////////////////////////