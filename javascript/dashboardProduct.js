import {
    Orders,
    Product,
    user
} from './modula.js';

let row_id;
let all_products = getlocal();
// let all_products = all_products
let searched = all_products.slice();
var checked = [];
var ch;

document.getElementById('userTable').addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == 'INPUT' && target.type == 'checkbox' && target.name == 'checkRow') {
        console.log("hello");
        checked = Array.from(document.querySelectorAll("input[name=checkRow]:checked"));
        console.log(checked);
        deleteAllBtn.disabled = checked.length <= 1;
    }
});
window.addEventListener("load", function () {
    let deleteAllBtn = document.getElementById("deleteAllBtn");
    deleteAllBtn.addEventListener("click", function () {
        console.log("hello delete all btn event");
        document.getElementById("deleteRow").addEventListener("click", deleteRow)

    });

    
    let checkAll = document.getElementById("checkAll");
    checkAll.addEventListener('click', function (e) {
        if (checkAll.checked) {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            console.log(allItem);
            allItem.forEach(item => item.checked = true);
            checked = allItem;
            deleteAllBtn.removeAttribute("disabled")
            document.querySelectorAll(".deleteBtn").forEach(deleteBtn => deleteBtn.disabled = false)               
        } else {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            allItem.forEach(item => item.checked = false);
            deleteAllBtn.setAttribute("disabled", true);
            document.querySelectorAll(".deleteBtn").forEach(deleteBtn => deleteBtn.disabled = true)
        }

    })

    createtablebody(all_products);
    createlis();
    changeactive();
});


/* repeated function */
function setlocal(arr, key = "products") {
    window.localStorage.setItem(key, JSON.stringify(arr));
}

function getlocal(key = "products") {
    let arr = JSON.parse(window.localStorage.getItem(key));
    return arr;
}

function searchbyid(arr, _id) {
    let ind = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == _id) {
            ind = i;
            break;
        }
    }
    return ind;
}
/* end of repeated functions*/
/*creation of the table */

function createtablebody(arr) {
    let table = `${createmultirow(arr)}`;
    document.querySelector('#tbodyUsers').innerHTML = table;
    ch = document.querySelectorAll(".checkRow");
    ch.forEach(chech => chech.addEventListener("change", function () {
    row_id = chech.getAttribute("data-row-index");
    document.querySelectorAll(".deleteBtn").forEach(deleteBtn => {
        if (deleteBtn.getAttribute("data-row-index") == row_id) {
            deleteBtn.disabled = !chech.checked;
        }
    });
}));
    changeactive();
}

function createproductrow(arr, i) {
    let row = `<tr data-productId=${arr.id} data-row-index= ${i}>
    <td><input type="checkbox" name="checkRow" class="checkRow" data-row-index= ${i}></td>
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
    <button class="btn m-1 border border-light deleteBtn" data-bs-toggle="modal" data-bs-target="#deleteConfirm" data-row-index="${i}" disabled><i class="fa-regular fa-trash-can text-danger cursorPointer"></i></button>
    </td>
</tr>`;
    return row;
}

function createmultirow(arr) {
    let max = parseInt(document.querySelector(".pagination .active").innerText) * 5;
    max = Math.min(max, arr.length);
    let min = parseInt(document.querySelector(".pagination .active").innerText) * 5 - 5;

    let rows = ``;
    for (let i = min; i < max; i++) {
        rows += createproductrow(arr[i], i);
    }
    return rows;
}

/* creation of the table */

/*button action */


document.querySelector('table tbody').addEventListener("click", function (e) {
    if (e.target.closest("button")) {
        row_id = $(e.target).parents('tr').attr('data-productid');
        showdetails(all_products, row_id);

    }
});

document.querySelector('#deleteRow').addEventListener('click', function () {
    createlis();
    deleteRow(row_id);
})


/*show details */
console.log(all_products[0]);

function showdetails(arr, _id) {
    let ind = searchbyid(arr, _id);
    let prod = all_products[ind];
    document.getElementById('fname1').value = prod.productTitle;
    document.getElementById('lname1').value = prod.stockQuantity;
    document.getElementById('email1').value = prod.price;
    document.getElementById('pass1').value = prod.category;
    document.getElementById('age1').value = prod.shape;
    document.getElementById('image1').value = prod.frameColor;
    document.getElementById('image2').value = prod.lensClass;
    document.getElementById('image3').value = prod.treatment;
    document.getElementById('fimage').src = prod.images[0];
    document.getElementById('simage').src = prod.images[1];
}

function removeproduct(_id) {
    let ind1 = searchbyid(all_products, _id);
    all_products.splice(ind1, 1);
    setlocal(all_products, "products");
    createtablebody(all_products);
}

/* validation */
/* paggination */
function changeactive(key = all_products) {
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

function createlis() {
    let createpages = ``;
    let act = "active";
    for (let i = 0; i < Math.ceil(searched.length / 5); i++) {
        if (i != 0) {
            act = ""
        }
        createpages += `<li class="page-item ${act}" aria-current="page">
                <a class="page-link " href="#">${i+1}</a>
            </li>`;
    }
    document.querySelector(".pagination").innerHTML = createpages;
}
function deleteRow() {
    let indeces = [];
    for (let i = 0; i < checked.length - 1; i++) {
        indeces.push(checked[i].parentNode.parentNode.getAttribute("data-row-index"));
        console.log(checked[i]);
        console.log();
    }
    for (let i = indeces.length - 1; i >= 0; i--) {
        all_products.splice(indeces[i], 1);
    }
    localStorage.setItem("all_products", JSON.stringify(all_products));
    console.log(row_id);
    removeproduct(row_id);
    createtablebody(all_products);
    createlis();
    changeactive();
    checked = [];
    deleteAllBtn.disabled = true;
}