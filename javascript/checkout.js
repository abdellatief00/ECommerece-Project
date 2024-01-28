import { Orders } from "./modula.js";



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
        let arr  = JSON.parse(window.localStorage.getItem("cart")) || [];
        if(arr.length==0){window.open("../homepage.html","_self")}
        createProductTable(arr);
        this.document.querySelector('#content .formcontent .rightcontent #accordionExample h2 button span').innerHTML = ` $${claculatetotal(arr)}`;
        document.querySelector("#content button[type =submit] .ordernumber").innerHTML = `$${claculatetotal(arr)}`;

});


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

/* function create tables */ 

function createProductTable(arr){
  let table = `
  <thead >
      <tr>
          <td>Product</td>
          <td>Subtotal</td>
      </tr>
  </thead>
  <tbody>
      ${createallrows(arr)}
  </tbody>
  <tfoot>
      <tr>
          <td>Total</td>
          <td>$${claculatetotal(arr)}</td>
      </tr>
  </tfoot>
`;

document.querySelector('#content .formcontent .rightcontent #collapseOne .accordion-body table').innerHTML = table;
updatecartnumber(arr);
}

function createrow(product){
let row =`<tr >
<td>
    <div class="d-flex align-items-center">  
        <img src="${product.image}">
        <p class="textfont">${product.productTitle}<strong class="amount">  X ${product.quantity}</strong></p>
    </div>
</td>
<td class="textfont">$${(parseFloat(product.price)*parseFloat(product.quantity)).toFixed(2)}</td>
</tr>`;

return row;
}



function createallrows(arr){
  let rows =``;
  for(let i = 0 ; i < arr.length ; i++){
      rows +=`${createrow(arr[i])}`
  }
  return rows;
}

function claculatetotal(arr){
  let total = 0;
  for(let i = 0 ; i < arr.length ; i++){
      total += parseFloat(arr[i].price)*parseFloat(arr[i].quantity);
  }
  return total.toFixed(2);
}


/* end of create table */
/* validation part */

function isValidInput(input) {
    const usernameRegex = /^[a-zA-Z-']{3,16}$/;
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
    const usernameRegex = /^[a-zA-Z_-]{3,16}$/;
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



  // validation for city and state name

  document.querySelectorAll(".leftcontent form input")[7].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidInput(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  document.querySelectorAll(".leftcontent form input")[8].addEventListener("input",function(e){
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


  /* show the visa card details */
  document.querySelectorAll("#firstinputradio")[0].addEventListener("click",function(e){
    if(e.target.checked){
      document.getElementById("visacarddetails").style.display = "block";
      document.getElementById("visacarddetails").style.animationName = "slidefromtopanimation";
      let allinputs = document.querySelectorAll("#visacarddetails input");
      for(let i = 0 ; i < allinputs.length ; i++){
        document.querySelectorAll("#visacarddetails input")[i].required = true;
      }
    }
  });
  document.querySelectorAll("#secondinputradio")[0].addEventListener("click",function(e){
    if(e.target.checked){
      document.getElementById("visacarddetails").style.display = "none";
      document.getElementById("visacarddetails").style.animationName = "";
      let allinputs = document.querySelectorAll("#visacarddetails input");
      for(let i = 0 ; i < allinputs.length ; i++){
        document.querySelectorAll("#visacarddetails input")[i].required = false;
      }
    }
  });

  /*validation for the visa card  */
 
  /* VALIDATION FOR VISA NAME */

  function isvalidvisaname(input) {
    const usernameRegex = /^[a-zA-Z-' ]{14}$/;
    return usernameRegex.test(input);
  }
  document.querySelectorAll(".leftcontent form #visacarddetails input")[0].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isvalidvisaname(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })

  /* validation for visa number */
  function isvalidvisanumber(input) {
    const usernameRegex = /^\d{16}$/;
    return usernameRegex.test(input);
  }
  document.querySelectorAll(".leftcontent form #visacarddetails input")[1].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isvalidvisanumber(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  /* validation for visa month and year and cvv*/
  function isvalidmonth(input) {
    const usernameRegex = /^\d{2}$/;
    return usernameRegex.test(input);
  }
  document.querySelectorAll(".leftcontent form #visacarddetails input")[2].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isvalidmonth(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  function isvalidyear(input) {
    const usernameRegex = /^\d{4}$/;
    return usernameRegex.test(input);
  }
  document.querySelectorAll(".leftcontent form #visacarddetails input")[3].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isvalidyear(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  function isvalidcvv(input) {
    const usernameRegex = /^\d{3}$/;
    return usernameRegex.test(input);
  }
  document.querySelectorAll(".leftcontent form #visacarddetails input")[4].addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isvalidcvv(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })

  /*validation for submition */
  document.querySelector("#content button[type =submit]").addEventListener("click",function(e){

    let currnet_user = JSON.parse(window.localStorage.getItem("current_user")) || false;
    if(document.querySelectorAll('#content form input[required].is-valid').length != document.querySelectorAll('#content form input[required]').length){
      e.preventDefault();
    }
    else if(currnet_user==false){
      e.preventDefault();
      document.getElementById("loginBtn").click();
    }
    else{
      e.preventDefault();
      let order = JSON.parse(window.localStorage.getItem("orders")) || [];
      let car = JSON.parse(window.localStorage.getItem("cart"));

      let pay = ``;
      if(document.querySelectorAll("#firstinputradio")[0].checked){pay = "Direct Bank Transfer"}
      else{pay = "Cash"}
      let or = new Orders(claculatetotal(car), pay, car,currnet_user.id);
      order.push(or.addJson());
      currnet_user.orders.push(or.addJson());
      window.localStorage.setItem("current_user",JSON.stringify(currnet_user));

      window.localStorage.setItem("orders",JSON.stringify(order));   
      localStorage.removeItem('cart');
      document.querySelectorAll('#content form')[0].submit();
    }
  });
  

/* update cart number */

function updatecartnumber(arr){
  let amount = arr.reduce((sum, product) => sum + product.quantity, 0);
  // document.getElementById("cart-items-count").innerText = amount;
}





/* when he go to order complete he can't go back */ 

//   window.history.forward(); 
//         function noBack() { 
//             window.history.forward(); 
// } 

window.onload = function() {
  // Check if the page was loaded from the browser's forward button
  if (performance.navigation.type === 2) {
    // Reload the page
    location.reload(true);
  }
};



