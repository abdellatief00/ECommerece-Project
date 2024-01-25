import {user} from './modula.js';


let item = [];
//_fname,_lname,_email,_pass,_age,_img,_role
item.push(new user("mahmoud","mohamed","addddd@gmail.com","222222",28,"admin-img.jpg",1).addjson()); 
setlocal(item);
item.push(new user("ayman","mohamed","ayman1234@gmail.com","12345",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ali","mohamed","ahkddkdk@gmail.com","2154",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ahmed","mohamed","ahmed222@gmail.com","7854",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("donya","khaled","donya234@gmail.com","5478",20,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("ali","khaled","ahkddkdk@gmail.com","8457",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ali","khaled","aly25@gmail.com","7584",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ali","khaled","ali326@gmail.com","9632",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ali","samir","ali908@gmail.com","2365",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("nasr","samir","naser223@gmail.com","32658",20,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("nadia","samir","nadia889@gmail.com","2568",20,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("ali","samir","ahkddkdk@gmail.com","9658",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ayman","eyad","ayman@gmail.com","5896",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("sara","eyad","sara223@gmail.com","8965",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("eman","eyad","eman@gmail.com","9658",20,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("ali","eyad","alidkdk@gmail.com","9586",20,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("abdullah","ali","ahkddkdk@gmail.com","9173",20,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("ali","ali","ahkddkdk@gmail.com","3791",20,"admin-img.jpg",0).addjson());
setlocal(item);
item.push(new user("ali","ali","ali345@gmail.com","56248",20,"admin-img.jpg",0).addjson());
setlocal(item);



// item[0].images.push("lol");
// localStorage.setItem("users",JSON.stringify(item));
// console.log(item);
// item = JSON.parse(window.localStorage.getItem("users"))
// console.log(item)
function setlocal(arr , key = "users"){
    window.localStorage.setItem(key,JSON.stringify(arr));
}