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
    this.document.querySelector('#content .formcontent .rightcontent .accordion button').classList.add("collapsed");
    this.document.querySelector('#content .formcontent .rightcontent .accordion button').setAttribute("aria-expanded",'False');
    
    }
    else{
        this.document.querySelector('#content .formcontent .rightcontent #collapseOne').classList.add("show");
    }

})

/* validation part */

function isValidInput(input) {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return usernameRegex.test(input) || emailRegex.test(input);
  }
  
  document.querySelectorAll(".leftcontent form input")[0].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidInput(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
 /* for first  and last name */
  function isValidInputName(input) {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(input);
  }
  document.querySelectorAll(".leftcontent form input")[1].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidInput(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  document.querySelectorAll(".leftcontent form input")[2].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidInput(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  /*valid country */

  function isValidCountry(value) {
    const dataList = document.getElementById('browsers');
    const options = Array.from(dataList.options).map(option => option.value);
    return options.includes(value);
  }
  
  document.querySelectorAll(".leftcontent form input")[4].addEventListener('input', function (e) {
    let enteredValue = e.target.value.trim();
    if (isValidCountry(enteredValue)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  });
/* street address */
  function isValidStreetAddress(address) {
    const streetAddressRegex = /^[a-zA-Z0-9\s,'-]+$/;
    return streetAddressRegex.test(address);
  }
  document.querySelectorAll(".leftcontent form input")[5].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidStreetAddress(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })

  /*zip code */
  function isValidUSZipCode(zipCode) {
    const usZipCodeRegex = /^\d{5}(?:-\d{4})?$/;
    return usZipCodeRegex.test(zipCode);
  }
  document.querySelectorAll(".leftcontent form input")[9].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidUSZipCode(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })

  /* valid phone number */
  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  }
  document.querySelectorAll(".leftcontent form input")[10].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidPhoneNumber(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })