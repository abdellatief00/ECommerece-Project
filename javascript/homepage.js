//import { Cart ,user} from './modula.js';
// let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
// window.localStorage.setItem("current_user",JSON.stringify(one_user));
//console.log(one_user);
/* read more */
document.querySelectorAll("#sectiontwo button")[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#sectiontwo span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#sectiontwo span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})

document.querySelectorAll('#sectionfive button')[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#sectionfive span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#sectionfive span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})
document.querySelectorAll('#div5 button')[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#div5 span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#div5 span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})

/* end of read more */