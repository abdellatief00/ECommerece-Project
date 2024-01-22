emailjs.init("bq9JFuZQI5pxqW-8B");

function sendEmail(_name, _from="blank", _message) {
    console.log("hello world");
      emailjs.send("service_g9sjq5h", "template_qpomd8t", {
        name: _name,
        to_name:"ana",
        from_name:_from ,
        message:_message,
        reply_to: 'Check this out!'
    }).then(
        response =>showToast('Email sent succesfuly', 3000 , "#6cb36d"),
        error => console.error("Email failed to send:", error)
      );
    }

// document.getElementById("sendEmailButton").addEventListener("click", sendEmail);
document.querySelector('#formsubmit').addEventListener("click",function(e){
    if(
       isValidInputName( document.querySelector("#firstName").value ) &&
       isValidInputName(document.querySelector("#lastName").value) &&
       isValidtext(document.querySelector("#floatingTextarea2").value) &&
       isValidInput(document.querySelector("#floatingInput").value )
    ){
        e.preventDefault();
        sendEmail(`${document.querySelector("#firstName").value} ${document.querySelector("#lastName").value}`,document.querySelector("#floatingInput").value ,document.querySelector("#lastName").value);
        document.querySelector("#firstName").value = "";
        document.querySelector("#lastName").value = "";
        document.querySelector("#floatingInput").value = "";
        document.querySelector("#floatingTextarea2").value = "";
    }
    else{
        e.preventDefault();
        if(!isValidInputName( document.querySelector("#firstName").value )){showToast('please enter a valid first name', 3000 , "#ea6060");}
        else if(!isValidInputName(document.querySelector("#lastName").value)){showToast('please enter a valid last name', 3000 , "#ea6060");}
        else if(!isValidInput(document.querySelector("#floatingInput").value )){showToast('please enter a valid email', 3000 , "#ea6060");}
        else{showToast('please enter a valid message that range from 1 -500 letter', 3000 , "#ea6060");}
    }
})

/* validation */
function isValidInputName(input) {
    const usernameRegex = /^[a-zA-Z_-]{3,16}$/;
    return usernameRegex.test(input);
  }
  function isValidtext(input) {
    const usernameRegex = /^[a-zA-Z-' ]{1,500}$/;
    return usernameRegex.test(input);
  }
  function isValidInput(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  /* toast */

  function showToast(message, duration , color) {
    var toast = document.getElementById('toast');
    toast.style.animationName = "animationdropfromtop";
    toast.style.display = 'block';
    toast.innerText = message;
    toast.style.backgroundColor = color;
    setTimeout(function () {
        toast.style.display = 'none';
    }, duration);
  }
