import {
    Orders,
    Product,
    user as userClass
} from './modula.js';

window.addEventListener('load', function () {

    let userTable_tbody = document.getElementById('tbodyUsers');
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
                let createdtd = document.createElement('td');
                createdtd.setAttribute("data-row-index", i)
                switch (key) {
                    case "images":
                        let imgTag = document.createElement("img");
                        imgTag.setAttribute("src", `${key}/${users[i][key]}`)
                        createdtd.appendChild(imgTag);
                        break;
                    case "role":
                        if (users[i][key] == 0) {
                            createdtd.innerHTML = `<span class="text-bg-primary p-2 rounded-2  text-center" data-row-index=${i}> User </span>`;

                        } else if (users[i][key] == 1) {

                            createdtd.innerHTML = `<span class=" btn text-bg-success p-2 text-center" data-bs-toggle="modal" data-bs-target="#specifcProductForSpecificSeller" data-row-index=${i}> Seller </span>`
                        }

                        break;
                    case "fname":
                        createdtd.innerText = users[i][key];
                        break;
                    case "lname":
                        createdtd.innerText = users[i][key];
                        break;

                    default:
                        createdtd.innerText = users[i][key];
                        break;
                }

                createdrow.appendChild(createdtd);
            }


            //<i class="fa-regular fa-eye"></i>
            let lastcreatedtd = document.createElement('td');
            // let showIcon = document.createElement('i');
            // showIcon.setAttribute("class", "fa-regular fa-eye text-primary cursorPointer");
            // let showBtn = document.createElement('button');
            // showBtn.setAttribute("class", "btn m-1");
            // showBtn.setAttribute("data-bs-toggle", "modal");
            // showBtn.setAttribute("data-bs-target", "#editViewUser");
            // showBtn.appendChild(showIcon);
            // lastcreatedtd.appendChild(showBtn);
            // showBtn.setAttribute('data-row-index', i);
            // showBtn.addEventListener('click', function () {
            //     // Retrieve the stored index
            //     let index = showBtn.getAttribute('data-row-index');
            //     document.getElementById("fname").value = users[index]["fname"];
            //     document.getElementById("lname").value = users[index]["lname"];
            //     document.getElementById("email").value = users[index]["email"];
            //     document.getElementById("pass").value = users[index]["password"];
            //     document.getElementById("age").value = users[index]["age"];
            //     document.getElementById("fname").setAttribute("disabled", "disabled");
            //     document.getElementById("lname").setAttribute("disabled", "disabled");
            //     document.getElementById("email").setAttribute("disabled", "disabled");
            //     document.getElementById("pass").setAttribute("disabled", "disabled");
            //     document.getElementById("pass").removeAttribute("type");
            //     document.getElementById("pass").setAttribute("type", "text");
            //     document.getElementById("age").setAttribute("disabled", "disabled");
            //     document.getElementById("editUser").style.display = "none";
            //     document.getElementById("editViewUserCancel").innerText = "close";
            //     document.getElementById("editViewUserCancel").classList.remove("btn-danger");
            //     document.getElementById("editViewUserCancel").classList.add("btn-secondary");

            // });


            let editIcon = document.createElement('i');
            //console.log(editIcon);
            editIcon.setAttribute("class", "fa-regular fa-pen-to-square text-info cursorPointer");

            lastcreatedtd.appendChild(editIcon);
            let editBtn = document.createElement('button');
            editBtn.setAttribute("class", "btn m-1");
            editBtn.setAttribute("data-bs-toggle", "modal");
            editBtn.setAttribute("data-bs-target", "#editViewUser");
            editBtn.appendChild(editIcon);

            editBtn.setAttribute('data-row-index', i);
            editBtn.addEventListener('click', function () {
                let index = editBtn.getAttribute('data-row-index');
                // document.getElementById("fname").removeAttribute("disabled");
                // document.getElementById("lname").removeAttribute("disabled");
                // document.getElementById("email").removeAttribute("disabled");
                // document.getElementById("pass").removeAttribute("disabled");
                // document.getElementById("age").removeAttribute("disabled");
                // document.getElementById("editUser").style.display = "block";
                // document.getElementById("editViewUserCancel").innerText = "Cancel";
                // document.getElementById("editViewUserCancel").classList.add("btn-danger");
                // document.getElementById("editViewUserCancel").classList.remove("btn-secondary");
                document.getElementById("fname").value = users[index]["fname"];
                document.getElementById("lname").value = users[index]["lname"];
                document.getElementById("email").value = users[index]["email"];
                document.getElementById("pass").value = users[index]["password"];
                document.getElementById("pass").removeAttribute("type");
                document.getElementById("pass").setAttribute("type", "text");
                document.getElementById("age").value = users[index]["age"];
                document.getElementById("role").value = users[index]["role"] == 0 ? "user" : "seller";
                //let imagepath = document.getElementById("image").value = users[index]["images"];
                document.getElementById("editUser").addEventListener("click", function () {
                    users[index]["fname"] = document.getElementById("fname").value;
                    users[index]["lname"] = document.getElementById("lname").value;
                    users[index]["email"] = document.getElementById("email").value;
                    users[index]["password"] = document.getElementById("pass").value;
                    users[index]["age"] = document.getElementById("age").value;
                    users[index]["role"] = document.getElementById("role").value == "user" ? 0 : 1;
                    //users[index]["images"]=imagepath.value;
                    localStorage.setItem("users", JSON.stringify(users));
                    deleteTable();
                    // Remove the row from the table
                    DrawTable(users, rowsNum.value);

                });
            }); // edit button

            lastcreatedtd.appendChild(editBtn);
            ///////edit icon


            let deleteIcon = document.createElement('i');
            deleteIcon.setAttribute("class", "fa-regular fa-trash-can text-danger cursorPointer");
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute("class", "btn m-1");
            deleteBtn.setAttribute("data-bs-toggle", "modal");
            deleteBtn.setAttribute("data-bs-target", "#deleteConfirm");
            deleteBtn.appendChild(deleteIcon);
            deleteBtn.setAttribute('data-row-index', i);
            deleteBtn.addEventListener('click', function () {
                let index = deleteBtn.getAttribute('data-row-index');
                users.splice(index, 1);
                document.getElementById("deleteRow").addEventListener("click", function () {
                    localStorage.setItem("users", JSON.stringify(users));
                    deleteTable();
                    DrawTable(users, rowsNum.value);

                });

            }); //delete button

            lastcreatedtd.appendChild(deleteBtn);
            createdrow.appendChild(lastcreatedtd);
            userTable_tbody.appendChild(createdrow);
        }
    } //end of draw table

    let search = document.querySelector("input[name=searchByName]");
    search.addEventListener("input", searching);

    function searching(e) {
        //  console.log(e);
        let tr = document.querySelectorAll("tbody tr");
        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = node.children[2].textContent.toLowerCase();
            let show = textContent.indexOf(this.value.toLowerCase()) !== -1;
            node.style.display = show ? "" : "none";
        }
    } //end of search

    let deleteAllBtn = document.getElementById("deleteAllBtn");
    var checked = [];
    document.getElementById("deleteRow").addEventListener("click", function () {
        let indeces = [];
        for (let i = 0; i < checked.length; i++) {
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
    });
    let checkAll = document.getElementById("checkAll");
    checkAll.addEventListener('click', function (e) {
        if (checkAll.checked) {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            allItem.forEach(item => item.checked = true);
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


    //let addNewUser = document.getElementById("addUser");
    // addNewUser.addEventListener("click", display);

    // function display() {
    //     let userFirstName = document.getElementById("user-fname");
    //     let userLastName = document.getElementById("user-lname");
    //     let userEmail = document.getElementById("user-email");
    //     let userPass = document.getElementById("user-pass");
    //     let userAge = document.getElementById("user-age");
    //     let userRole = document.getElementById("user-role");
    //     let userImagePath = document.getElementById("user-image");

    //     let item = new userClass(userFirstName.value, userLastName.value, userEmail.value, userPass.value, userAge.value, userImagePath.value, userRole.value=="user"?0:1).addjson();
    //     item.id = userClass.autoincreaseid();

    //     // usersfullData.push(item);

    //     localStorage.setItem("users", JSON.stringify(usersfullData));
    //     usersfullData = JSON.parse(localStorage.getItem("users"));
    //     deleteTable();
    //     DrawTable(users, rowsNum.value);
    // }

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
        }
    });

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
            showToast("enter a valid Password, and must contain(a-z | A-Z | @$!%*?&)", 3000, "#ea6060");
        } else if (allinp[4].value < 19) {
            showToast("Enter a valid age, and must be greater than or equal 19 years old", 3000, "#ea6060");
        } else if (allinp[5].value == "") {
            showToast("Enter a valid image", 3000, "#ea6060");
        } else {

            let imgarr = [getfilelocation(allinp[5])];
            let role=document.getElementById("user-role").value == "user" ? 0 : 1 ;
            console.log(imgarr);
            allinp = Array.from(allinp);
            let o = new userClass(allinp[0].value, allinp[1].value, allinp[2].value, allinp[3].value, allinp[4].value, imgarr, role);
            //o.id = userClass.autoincreaseid();
          console.log(o);

            // usersfullData.push(item);
            users.push(o.addjson());
            localStorage.setItem("users", JSON.stringify(users));
            users = JSON.parse(localStorage.getItem("users"));
            console.log(users);
            deleteTable();
            DrawTable(users, rowsNum.value);
            // e.target.parentElement.children[0].click();
        }


    })

    // document.getElementById("editUser").addEventListener('click', function (e) {
    //     let allinp = document.querySelectorAll('#editproducts input');
    //     if (!isvalidvisaname(allinp[0].value)) {
    //         showToast2("enter a valid Title", 3000, "#ea6060");
    //     } else if (allinp[1].value <= 0) {
    //         showToast2("enter a number in stock", 3000, "#ea6060");
    //     } else if (allinp[2].value <= 0) {
    //         showToast2("enter a valid price", 3000, "#ea6060");
    //     } else if (document.getElementById('textarea2').value.trim() == "") {
    //         showToast2("enter a description", 3000, "#ea6060");
    //     } else if (!isvalidvisaname(allinp[3].value)) {
    //         showToast2("enter a valid shape name", 3000, "#ea6060");
    //     } else if (!isvalidvisaname(allinp[4].value)) {
    //         showToast2("enter a frame color", 3000, "#ea6060");
    //     } else if (!isvalidvisaname(allinp[5].value)) {
    //         showToast2("enter a valid Lense glasses", 3000, "#ea6060");
    //     } else if (!isvalidvisaname(allinp[6].value)) {
    //         showToast2("enter a enter a valid treatment", 3000, "#ea6060");
    //     } else {
    //         //all_products = getlocal("products");
    //         let ind = searchbyid(all_products, row_id);

    //         if (allinp[7].value) {
    //             products[ind].images[0] = getfilelocation(allinp[7]);
    //         }
    //         if (allinp[8].value) {
    //             products[ind].images[1] = getfilelocation(allinp[8]);
    //         }

    //         products[ind].productTitle = allinp[0].value;
    //         products[ind].stockQuantity = allinp[1].value;
    //         products[ind].price = allinp[2].value;
    //         products[ind].productDescription = document.getElementById('textarea2').value.trim();
    //         products[ind].price = allinp[2].value;
    //         products[ind].shape = allinp[3].value;
    //         products[ind].frameColor = allinp[4].value;
    //         products[ind].lensClass = allinp[5].value;
    //         products[ind].treatment = allinp[6].value;

    //         setlocal(all_products, "products");
    //         current_products = all_products.filter((ele) => {
    //             return ele.sellerId == current_user_id
    //         });

    //         createtablebody(current_products);
    //         document.getElementById('searchByName').value = "";
    //         e.target.parentElement.children[0].click();

    //     }
    // })

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
        document.getElementById('edituser').appendChild(el);
        setTimeout(function () {
            document.querySelector('.toast').remove();
        }, duration);
    }
}); //end of load

///////////////////////////////////////////////////////////////////////