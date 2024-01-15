$(".copon").click(function(){
    if($(".coponinput").css("display")=="none"){
        $(".coponinput").css("display","block");
    }
    else{
        $(".coponinput").css("display","none");
    }
    
});

/* your details*/
window.addEventListener('load',function(){
    if(this.window.innerWidth<=768){
        this.document.querySelector('#content .formcontent .rightcontent #collapseOne').classList.remove("show");
        this.document.querySelector('#content .formcontent .rightcontent .accordion button').classList.add("collapsed");
        this.document.querySelector('#content .formcontent .rightcontent .accordion button').setAttribute("aria-expanded",'False');
        }
})
window.addEventListener('resize',function(){
    if(this.window.innerWidth<=768){
    this.document.querySelector('#content .formcontent .rightcontent #collapseOne').classList.remove("show");
    }
    else{
        this.document.querySelector('#content .formcontent .rightcontent #collapseOne').classList.add("show");
    }

})
/* end of your details */