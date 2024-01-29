import {
    Orders,
    Product,
    user as userClass
} from './modula.js';

window.addEventListener('load', function () {
    let row_id;
    let userTable_tbody = document.getElementById('tbodyUsers');
    var currentUser = JSON.parse(localStorage.getItem("current_user"));
    document.getElementById("userName").innerText=currentUser.fname + " "+currentUser.lname ;
    document.getElementById("userImg").setAttribute("src",currentUser.images);
    document.getElementById("userImg").addEventListener('click',function(){
        window.location.href=`profileuser.html`;
    });
    
    var users = JSON.parse(localStorage.getItem("users"));
    var products = JSON.parse(localStorage.getItem("products"))
    let rowsNum = document.getElementById("rowsNum");
    
    DrawTable(users, rowsNum.value);
    rowsNum.addEventListener("change", function () {
        deleteTable();
        DrawTable(users, rowsNum.value);
    }) // end of number of rows

    function DrawTable(users, rowsNumValue) {
        let n;
        if (rowsNumValue <= users.length) {
            n = rowsNumValue;
        } else {
            n = users.length
        }
        for (let i = 0; i < n; i++) {
            let createdrow = document.createElement('tr');
            createdrow.setAttribute("data-row-index", i);
            let createdtd = document.createElement('td');
            let checkCreatted = document.createElement('input');
            // <input type="checkbox" name="checkRow" id="checkRow1">
            checkCreatted.setAttribute("type", "checkbox");
            checkCreatted.setAttribute("name", "checkRow");
            checkCreatted.setAttribute("id", `checkRow${i}`);
            //console.log(checkCreatted);
            createdtd.appendChild(checkCreatted);
            createdrow.appendChild(createdtd);
            for (let key in users[i]) {
                let createdtd;
                switch (key) {
                    case "image":
                        createdtd = document.createElement('td');
                        createdtd.setAttribute("data-row-index", i)
                        let imgTag = document.createElement("img");
                        imgTag.setAttribute("src", `${users[i][key]}`)
                        createdtd.appendChild(imgTag);
                        createdrow.appendChild(createdtd);
                        break;
                        case "role":
                            createdtd = document.createElement('td');
                            createdtd.setAttribute("data-row-index", i)
                            if (users[i][key] == 2) {
                                createdtd.innerHTML = `<span class="text-bg-primary p-2 rounded-2  text-center" data-row-index=${i}> User </span>`;
                                
                            } else if (users[i][key] == 1) {
                                
                                createdtd.innerHTML = `<span class=" btn text-bg-success p-2 text-center" data-bs-toggle="modal" data-bs-target="#specifcProductForSpecificSeller" data-row-index=${i}> Seller </span>`
                            }
                            createdrow.appendChild(createdtd);

                        break;
                    case "fname":
                    case "lname":
                    case "id":
                    case "email":
                    case "password":
                    case "age":
                        createdtd = document.createElement('td');
                        createdtd.setAttribute("data-row-index", i)
                        createdtd.innerText = users[i][key];
                        createdrow.appendChild(createdtd);
                         break;
                         case "cart":
                            console.log(users[i][key]);
                         break;
                    default:
                        break;
                }
            }
            //<i class="fa-regular fa-eye"></i>
            let lastcreatedtd = document.createElement('td');
            let editIcon = document.createElement('i');
            editIcon.setAttribute("class", "fa-regular fa-pen-to-square text-info cursorPointer");
            lastcreatedtd.appendChild(editIcon);
            let editBtn = document.createElement('button');
            editBtn.setAttribute("class", "btn m-1");
            editBtn.setAttribute("data-bs-toggle", "modal");
            editBtn.setAttribute("data-bs-target", "#editUserModal");
            editBtn.appendChild(editIcon);

            editBtn.setAttribute('data-row-index', i);
            editBtn.addEventListener('click', function () {
                let index = editBtn.getAttribute('data-row-index');
                document.getElementById("fname").value = users[index]["fname"];
                document.getElementById("lname").value = users[index]["lname"];
                document.getElementById("email").value = users[index]["email"];
                document.getElementById("pass").value = users[index]["password"];
                document.getElementById("pass").removeAttribute("type");
                document.getElementById("pass").setAttribute("type", "text");
                document.getElementById("age").value = users[index]["age"];
                document.getElementById("role").value = users[index]["role"] == 2 ? "user" : users[index]["role"] == 1? "seller":"";
                // document.getElementById("image").value = users[index].images[0];            
            }); // edit button

            lastcreatedtd.appendChild(editBtn);
            ///////edit icon
            let deleteIcon = document.createElement('i');
            deleteIcon.setAttribute("class", "fa-regular fa-trash-can text-danger cursorPointer");
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute("class", "btn m-1 border border-0");
            deleteBtn.setAttribute("data-bs-toggle", "modal");
            deleteBtn.setAttribute("data-bs-target", "#deleteConfirm");
            deleteBtn.appendChild(deleteIcon);
            deleteBtn.setAttribute('data-row-index', i);
            deleteBtn.setAttribute('disabled', true);
            checkCreatted.addEventListener('change', function () {
                // Check if the checkbox is checked
                if (checkCreatted.checked) {
                    // Enable the delete button
                    // deleteBtn.removeAttribute('disabled');
                    deleteBtn.toggleAttribute("disabled")
                } else {
                    deleteBtn.toggleAttribute("disabled")
                    
                }
            });
            deleteBtn.addEventListener('click', function () {
                document.getElementById("deleteRow").addEventListener("click", deleteRow)
            }); //delete button

            lastcreatedtd.appendChild(deleteBtn);
            createdrow.appendChild(lastcreatedtd);
            userTable_tbody.appendChild(createdrow);
        }
    } //end of draw table
    let searchInput = document.getElementById("searchTerm");
    let searchTypeSelect = document.getElementById("searchType");
    searchInput.addEventListener("input", searching);
    function searching() {
        let searchTerm = searchInput.value.toLowerCase();
        let searchType = searchTypeSelect.value;
        let tr = document.querySelectorAll("tbody tr");

        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = "";

            if (searchType === "id") {
                textContent = node.children[1].textContent.toLowerCase(); 
            } else if (searchType === "name") {
                textContent = node.children[2].textContent.toLowerCase(); 
            }

            let show = textContent.indexOf(searchTerm) !== -1;
            node.style.display = show ? "" : "none";
        }
    }
    let deleteAllBtn = document.getElementById("deleteAllBtn");
    deleteAllBtn.addEventListener("click",function(){
        document.getElementById("deleteRow").addEventListener("click", deleteRow)

    });
    var checked = [];
    function deleteRow() {
        let indeces = [];
        // console.log(checked);
        for (let i = 0; i < checked.length-1; i++) {
            indeces.push(checked[i].parentNode.parentNode.getAttribute("data-row-index"));
        }
        for (let i = indeces.length - 1; i >= 0; i--) {
            users.splice(indeces[i], 1);
        }
        localStorage.setItem("users", JSON.stringify(users));
        deleteTable();
        DrawTable(users, rowsNum.value);
        checked = [];
        deleteAllBtn.disabled = true;
    }
    let checkAll = document.getElementById("checkAll");
    checkAll.addEventListener('click', function (e) {
        if (checkAll.checked) {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            allItem.forEach(item => item.checked = true);
            checked=allItem
            deleteAllBtn.removeAttribute("disabled")
        } else {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            allItem.forEach(item => item.checked = false);
            deleteAllBtn.setAttribute("disabled", true);
        }

    })

    function deleteTable() {
        let newTbody = document.querySelectorAll('tbody>tr');
        newTbody.forEach(function (trs) {
            return trs.parentNode.removeChild(trs);
        })
    }
    document.getElementById('tbodyUsers').addEventListener('click', function (event) {
        let target = event.target;
       
        if (target.tagName === 'SPAN' && target.classList.contains('text-bg-success')) {
            let rowIndex = target.parentNode.getAttribute('data-row-index');
            // console.log(rowIndex);
            let seller = users[rowIndex];
            // console.log(seller);
            let sellerProducts = products.filter(product => product.sellerId == seller.id);
            // console.log(sellerProducts);
            displayProductsModal(sellerProducts);
        }
        // let target = event.target;
        else if (target.tagName === 'INPUT' && target.type === 'checkbox' && target.name === 'checkRow') {
            checked = Array.from(document.querySelectorAll("input[name=checkRow]:checked"));
            deleteAllBtn.disabled = checked.length <= 1;
        }else if(target.closest("button")){
            row_id = $(target).parents("tr").attr("data-row-index");
            console.log(row_id);
        }
    });

    document.getElementById("editUser").addEventListener('click', function (e) {
        let allinp = document.querySelectorAll('#editUserModal input');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        console.log(allinp[0].value);
        if (!isvalidvisaname(allinp[0].value)) {
            showToast2("enter a valid First name", 3000, "#ea6060");
        } else if (!isvalidvisaname(allinp[1].value)) {
           // console.log(allinp[1].value);
            showToast2("enter a valid Last name", 3000, "#ea6060");
        } else if (!validateEmail(allinp[2], 'Email is required and must be a valid email address!')) {
            e.preventDefault();
        } else if (!passwordRegex.test(allinp[3].value)) {
            showToast2("enter a valid Password, and must contain(a-z | A-Z | @$!%*?&) and greater than or equal 8 letters or numbers", 3000, "#ea6060");
        } else if (allinp[4].value < 19) {
            showToast2("Enter a valid age, and must be greater than or equal 19 years old", 3000, "#ea6060");
        }else {
            
            let imgarr =allinp[5]? [getfilelocation(allinp[5])]:users[row_id].images;
            users[row_id].fname = allinp[0].value;
            console.log( users[row_id]);
            users[row_id].lname = allinp[1].value;
            users[row_id].email = allinp[2].value;
            users[row_id].password = allinp[3].value;
            users[row_id].age = allinp[4].value;
            users[row_id].images = imgarr;
            users[row_id].role = document.getElementById("user-role").value == "user" ? 2 : 1;

            localStorage.setItem("users", JSON.stringify(users));
            users = JSON.parse(localStorage.getItem("users"));
            console.log(users);
            deleteTable();
            DrawTable(users, rowsNum.value);
            e.target.parentElement.children[0].click();
        }
    })

    function displayProductsModal(products) {
        var tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = "";
        products.forEach(function (product) {
            console.log(product);
            var row = document.createElement('tr');
            row.innerHTML = `
                    <th scope="row">${product.id}</th>
                    <td>${product.productTitle}</td>
                    <td>${product.price}</td>
                    <td>${product.stockQuantity}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.images[0]}" style="max-width: 70px;max-height: 70px;"/> </td>
                `;
            tableBody.appendChild(row);
        });

        // Show the modal
        $('#specifcProductForSpecificSeller').modal('show');
    }


    document.querySelector("button#addUser").addEventListener("click", function (e) {
        let allinp = document.querySelectorAll('#adduser input');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        console.log(allinp[0]);
        if (!isvalidvisaname(allinp[0].value)) {
            showToast("enter a valid First name", 3000, "#ea6060");
        } else if (!isvalidvisaname(allinp[1].value)) {
            showToast("enter a valid Last name", 3000, "#ea6060");
        } else if (!validateEmail(allinp[2], 'Email is required and must be a valid email address!')) {
            e.preventDefault();
        } else if (!passwordRegex.test(allinp[3].value)) {
            showToast("enter a valid Password, and must contain(a-z | A-Z | @$!%*?&) and greater than or equal 8 letters or numbers", 3000, "#ea6060");
        } else if (allinp[4].value < 19) {
            showToast("Enter a valid age, and must be greater than or equal 19 years old", 3000, "#ea6060");
        } else if (allinp[5].value == "") {
            showToast("Enter a valid image", 3000, "#ea6060");
        } else {
            let imgarr = getfilelocation(allinp[5]);
            console.log(allinp[5]);
            let role = document.getElementById("user-role").value == "user" ? 2 :1;
            console.log(imgarr);
            let o = new userClass(allinp[0].value, allinp[1].value, allinp[2].value, allinp[3].value, allinp[4].value, imgarr, role).addjson();
            users.push(o);
            localStorage.setItem("users", JSON.stringify(users));
            users = JSON.parse(localStorage.getItem("users"));
            console.log(users);
            deleteTable();
            DrawTable(users, rowsNum.value);
            e.target.parentElement.children[0].click();
        }


    })

    function isvalidvisaname(input) {
        const usernameRegex = /^[a-zA-Z0-9-' ]{3,30}$/;
        // if(()){}
        return usernameRegex.test(input.trim());
    }

    function validateEmail(input, errorMessage) {
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === '' || !emailRegex.test(value)) {
            showToast(errorMessage, 3000, "#ea6060")
            //displayError(input, errorMessage);
            return false;
        }

        return true;
    }

    function getfilelocation(tar) {
        var input = tar;

        if (input.files && input.files[0]) {
            var selectedFile = input.files[0];
            var fileLocation = URL.createObjectURL(selectedFile);

            return fileLocation;
        }
    }
    /* toast */
    function showToast(message, duration, color) {
        var el = document.createElement('div');
        el.className = "toast";
        // var toast = document.querySelector('.toast');
        el.style.animationName = "animationdropfromtop";
        el.style.display = 'block';
        el.innerText = message;
        el.style.backgroundColor = color;
        document.getElementById('adduser').appendChild(el);
        setTimeout(function () {
            document.querySelector('.toast').remove();
        }, duration);
    }

    function showToast2(message, duration, color) {
        var el = document.createElement('div');
        el.className = "toast";
        // var toast = document.querySelector('.toast');
        el.style.animationName = "animationdropfromtop";
        el.style.display = 'block';
        el.innerText = message;
        el.style.backgroundColor = color;
        document.getElementById('editUser').appendChild(el);
        setTimeout(function () {
            document.querySelector('.toast').remove();
        }, duration);
    }
}); //end of load

///////////////////////////////////////////////////////////////////////
