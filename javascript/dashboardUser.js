import {
    user as userClass
} from "./modula.js";

window.addEventListener('load', function () {

    let userTable_tbody = document.getElementById('tbodyUsers');
    var usersfullData = JSON.parse(localStorage.getItem("users"));
    var users = function () {
        const s = [];
        for (let i = 0; i < usersfullData.length; i++) {
            if (usersfullData[i]["role"] == 0) {
                s.push(usersfullData[i]);
            }
        }
        return s;
    }
    // console.log(usersfullData);
    // for (let i = 0; i < usersfullData.length; i++) {
    //     if (usersfullData[i]["role"] == 0) {
    //         users.push(usersfullData[i]);
    //     }
    // }

    // console.log(users.call());

    let rowsNum = document.getElementById("rowsNum");
    DrawTable(users.call(), rowsNum.value);
    rowsNum.addEventListener("change", function () {
        deleteTable();
        DrawTable(users.call(), rowsNum.value);
    })



    function DrawTable(users, rowsNumValue) {
        let n;
        if (rowsNumValue <= users.length) {
            n = rowsNumValue;
        } else {
            n = users.length
        }
        for (let i = 0; i < n; i++) {
            let createdrow = document.createElement('tr');
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
                switch (key) {
                    case "images":
                        let imgTag = document.createElement("img");
                        imgTag.setAttribute("src", `${key}/${users[i][key]}`)
                        createdtd.appendChild(imgTag);
                        break;
                    case "role":
                        continue;
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
            let showIcon = document.createElement('i');
            showIcon.setAttribute("class", "fa-regular fa-eye text-secondary cursorPointer");
            let showBtn = document.createElement('button');
            showBtn.setAttribute("class", "btn m-1");
            showBtn.setAttribute("data-bs-toggle", "modal");
            showBtn.setAttribute("data-bs-target", "#editViewUser");
            showBtn.appendChild(showIcon);
            lastcreatedtd.appendChild(showBtn);
            showBtn.setAttribute('data-row-index', i);
            showBtn.addEventListener('click', function () {
                // Retrieve the stored index
                let index = showBtn.getAttribute('data-row-index');
                // users.splice(index, 1);
                // console.log(index);
                // console.log(users[index]);
                document.getElementById("fname").value = users[index]["fname"];
                document.getElementById("lname").value = users[index]["lname"];
                document.getElementById("email").value = users[index]["email"];
                document.getElementById("pass").value = users[index]["password"];
                document.getElementById("age").value = users[index]["age"];

                document.getElementById("fname").setAttribute("disabled","disabled");
                document.getElementById("lname").setAttribute("disabled","disabled");
                document.getElementById("email").setAttribute("disabled","disabled");
                document.getElementById("pass").setAttribute("disabled","disabled");
                document.getElementById("pass").removeAttribute("type");
                document.getElementById("pass").setAttribute("type","text");
                document.getElementById("age").setAttribute("disabled","disabled");
                document.getElementById("editUser").style.display="none";
                // document.getElementById("editViewUserCancel").innerText="close";
                // document.getElementById("editViewUserCancel").classList.remove("btn-danger");
                // document.getElementById("editViewUserCancel").classList.add("btn-secondary");
            });


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
                document.getElementById("fname").removeAttribute("disabled");
                document.getElementById("lname").removeAttribute("disabled");
                document.getElementById("email").removeAttribute("disabled");
                document.getElementById("pass").removeAttribute("disabled");
                document.getElementById("age").removeAttribute("disabled");
                document.getElementById("editUser").style.display="block";
                // document.getElementById("editViewUserCancel").value="Cancel";
                // document.getElementById("editViewUserCancel").classList.remove("btn-secondary"); 
                // document.getElementById("editViewUserCancel").classList.add("btn-danger");
                document.getElementById("fname").value = users[index]["fname"];
                document.getElementById("lname").value = users[index]["lname"];
                document.getElementById("email").value = users[index]["email"];

                document.getElementById("pass").value = users[index]["password"];
                document.getElementById("pass").removeAttribute("type");
                document.getElementById("pass").setAttribute("type","text");


                document.getElementById("age").value = users[index]["age"];
                //let imagepath = document.getElementById("image").value = users[index]["images"];
                document.getElementById("editUser").addEventListener("click", function () {
                    users[index]["fname"] = document.getElementById("fname").value;
                    users[index]["lname"] = document.getElementById("lname").value;
                    users[index]["email"] = document.getElementById("email").value;
                    users[index]["password"] = document.getElementById("pass").value;
                    users[index]["age"] = document.getElementById("age").value;
                    //users[index]["images"]=imagepath.value;
                    localStorage.setItem("users", JSON.stringify(users));
                    deleteTable();
                    // Remove the row from the table
                    DrawTable(users, rowsNum.value);

                });
            }); // edit button

            lastcreatedtd.appendChild(editBtn);
            ///////edit icon

            // lastcreatedtd.appendChild(document.createElement('hr'));
            let deleteIcon = document.createElement('i');
            deleteIcon.setAttribute("class", "fa-regular fa-trash-can text-danger cursorPointer");
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute("class", "btn m-1");
            deleteBtn.setAttribute("data-bs-toggle", "modal");
            deleteBtn.setAttribute("data-bs-target", "#deleteConfirm");
            deleteBtn.appendChild(deleteIcon);
            // Store the index as a data attribute on the delete button
            deleteBtn.setAttribute('data-row-index', i);
            deleteBtn.addEventListener('click', function () {
                // Retrieve the stored index
                let index = deleteBtn.getAttribute('data-row-index');
                users.splice(index, 1);
                document.getElementById("deleteRow").addEventListener("click", function () {
                    localStorage.setItem("users", JSON.stringify(users));
                    deleteTable();
                    // Remove the row from the table
                    DrawTable(users, rowsNum.value);

                });

            }); //delete button

            lastcreatedtd.appendChild(deleteBtn);
            createdrow.appendChild(lastcreatedtd);
            userTable_tbody.appendChild(createdrow);
        }
    }

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
    }

    let checkAll = this.document.getElementById("checkAll");
    checkAll.addEventListener('click', function (e) {
        if (checkAll.checked) {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            allItem.forEach(item => item.checked = true);
        } else {
            let allItem = document.querySelectorAll("input[type=checkbox]");
            allItem.forEach(item => item.checked = false);
        }

    })

    function deleteTable() {
        let newTbody = document.querySelectorAll('tbody>tr');
        newTbody.forEach(function (trs) {
            return trs.parentNode.removeChild(trs);
        })
    }


    let addNewUser = document.getElementById("addUser");
    addNewUser.addEventListener("click", display);

    function display() {
        let userFirstName = document.getElementById("user-fname");
        let userLastName = document.getElementById("user-lname");
        let userEmail = document.getElementById("user-email");
        let userPass = document.getElementById("user-pass");
        let userAge = document.getElementById("user-age");
        let userImagePath = document.getElementById("user-image");

        let item = new userClass(userFirstName.value, userLastName.value, userEmail.value, userPass.value, userAge.value, userImagePath.value, 0).addjson();
        item.id = userClass.autoincreaseid();

        usersfullData.push(item);

        localStorage.setItem("users", JSON.stringify(usersfullData));
        usersfullData = JSON.parse(localStorage.getItem("users"));
        deleteTable();
        DrawTable(users.call(), rowsNum.value);
    }



    // let userArray=[];
    // for (let i = 0; i < users.length; i++) {
    //     let obj=[];
    //     for (const key in users[i]) {
    //        obj.push(users[i][key].toString())
    //     }
    //     userArray.push(obj);
    // }
    // console.log(userArray);
    // new DataTable('#example', {
    //     columns: [
    //         { title: 'ID' },
    //         { title: 'First Name' },
    //         { title: 'Last Name' },
    //         { title: 'Email' },
    //         { title: 'Password' },
    //         { title: 'Age' },
    //         { title: 'Image' }
    //     ],
    //     data: userArray
    // });

}); //end of load

///////////////////////////////////////////////////////////////////////
