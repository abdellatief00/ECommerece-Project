

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