import { user } from "./modula.js";
/* validation part */


let newUserfName,newUserlName,newUseremail,newUserpassword,newUserage,newUserImag,newUserRole;
const fName= document.querySelectorAll(".leftcontent form input")[0];
const lName= document.querySelectorAll(".leftcontent form input")[1];
const email= document.querySelectorAll(".leftcontent form input")[2];
const password= document.querySelectorAll(".leftcontent form input")[3];
const confirmPassword= document.querySelectorAll(".leftcontent form input")[4];
const age= document.querySelectorAll(".leftcontent form input")[5];
const userImag= document.querySelectorAll(".leftcontent form input")[6];
const role_noramlUser= document.querySelectorAll(".leftcontent form input")[7];
const role_sellerUser= document.querySelectorAll(".leftcontent form input")[8];
var submitbutton= document.querySelector("#content button[type =submit]");
var signUpForm=document.querySelector("#content form");
console.log(signUpForm);
submitbutton.disabled  = true;

signUpForm.addEventListener("change",function(e){
    if((role_noramlUser.checked!=role_sellerUser.checked)){
        submitbutton.disabled  = false;
       
      }else{
       
      }
});
// var submitbutton= document.querySelector("#content button[type =submit]");

// isValidInputForm(submitbutton);




 /* for first  and last name */
  function isValidInputName(input) {
    const usernameRegex = /^[a-zA-Z_-]{3,16}$/;
    return usernameRegex.test(input);
  }
  fName.addEventListener("input",function(e){
    let userInput = e.target.value;
   


    if (isValidInputName(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
        newUserfName=userInput;
        console.log("the inputvalue:"+userInput);
        console.log("the userdata:"+newUserfName);
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })
  lName.addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidInputName(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
        newUserlName=userInput
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })

//Email validation
  function isValidEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  emailRegex.test(input);
  }
function isEmailAvailable(email) {
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].email === email) {
            return false; // Email is already used
        }
    }
    return true; // Email is available
}

email.addEventListener("input", function (e) {
    let userInput = e.target.value;
    if (isValidEmail(userInput)) {
        if (isEmailAvailable(userInput)) {
            e.target.classList.remove('is-invalid');
            e.target.classList.add("is-valid");
            newUseremail = userInput;
        } else {
            e.target.classList.add('is-invalid');
            e.target.classList.remove("is-valid");
            e.target.nextElementSibling.nextElementSibling.innerText = "Email is already used";
        }
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
        e.target.nextElementSibling.nextElementSibling.innerText = "Invalid email format";
    }
});
  

  // password and confirmPassword validation
  function isValidPassword(input) {
    // Password must contain at least 8 characters, including at least one uppercase letter, one number, and one special character.
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(input);
}

function arePasswordsMatching(password, confirmPassword) {
    return password === confirmPassword;
}


password.addEventListener("input", function (e) {
    let passwordInput = e.target.value;

    if (isValidPassword(passwordInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
});

confirmPassword.addEventListener("input", function (e) {
    let confirmPasswordInput = e.target.value;
    let passwordInput = document.querySelectorAll(".leftcontent form input")[3].value;

    if (arePasswordsMatching(passwordInput, confirmPasswordInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
        newUserpassword=confirmPasswordInput;
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
});


//Age Validation
function isValidAge(value) {
    return value>=16;
  }
  age.addEventListener("input",function(e){
    let userInput = e.target.value;
    if (isValidAge(userInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
        newUserage=userInput;
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
  })

  // validation for city and state name

  function isValidImage(fileName) {
    
        // Define a regular expression for allowed image file names
        const allowedFileNameRegex = /^[a-zA-Z0-9_\u0600-\u06FF-]+\.(jpg|jpeg|png)$/i;
        return allowedFileNameRegex.test(fileName);

    
}

userImag.addEventListener("change", function (e) {
    const fileInput = e.target;
    const file = fileInput.files[0];
    console.log(file)

    if (file) {
        if (isValidImage(file.name)) {
            e.target.classList.remove('is-invalid');
            e.target.classList.add("is-valid");
            newUserImag=file.name;
            
            if (file.size < 30000000 && isValidImage(file.name)) {
                const reader = new FileReader();
    
                reader.onload = () => {
                    const userImgArea = document.getElementById('userImgArea'); // replace 'userImgArea' with the actual ID of your image area
                    const existingImage = userImgArea.querySelector('img');
    
                    if (existingImage) {
                        existingImage.remove();
                    }
    
                    const imgUrl = reader.result;
                    const img = document.createElement('img');
                    img.src = imgUrl;
                    newUserImag=imgUrl;
                    
                    userImgArea.appendChild(img);
                };
    
                reader.readAsDataURL(file);}

        } else {
            e.target.classList.add('is-invalid');
            e.target.classList.remove("is-valid");
        }
    } 
    else
     {
        // No file selected
        fileInput.classList.remove('is-valid');
        fileInput.classList.remove('is-invalid');
    }
});











  
var userArray=JSON.parse(localStorage.getItem('users'));

// document.getElementsByTagName("body")[0].innerHTML+=`<img src=${userArray[2].images[0]}  >`;//getting the image from the array of images in the user object

var newUserArray = userArray || [];

/* if (userArray) {
  userArray.forEach((existingUser) => {
    // Create a new user object by copying and modifying each existing user
    const newUser = new user(
      existingUser.fname,
      existingUser.lname,
      existingUser.email,
      existingUser.password,
      existingUser.age,
      existingUser.images,
      existingUser.role
    );

    // Add the modified user to the new array
    newUserArray.push(newUser.addjson());
  });
} */

// function isValidInputForm(e)
// {
//     console.log(e);
//     if((document.querySelectorAll('#content form input[required].is-valid').length != document.querySelectorAll('#content form input[required]').length)||(role_noramlUser.checked==role_sellerUser.checked)){
//         e.target.disabled  = true;
  
//       }else{
//         e.target.disabled  = false;
//       }
// }

  /*validation for submition */
  document.querySelector("#content button[type =submit]").addEventListener("click",function(e){
    //debugger;
    if((document.querySelectorAll('#content form input[required].is-valid').length != document.querySelectorAll('#content form input[required]').length)||(role_noramlUser.checked==role_sellerUser.checked)){
      e.target.disabled  = true;

    }
    else{
if(role_noramlUser.checked)
{      
    newUserArray.push(
        new user(
          newUserfName,newUserlName,
          newUseremail,
          newUserpassword,
          newUserage,
          newUserImag,
          "2"
      
        )
        .addjson()
      );
}
    else if(role_sellerUser.checked)
   
    {    
        
        newUserArray.push(
            new user(
              newUserfName,newUserlName,
              newUseremail,
              newUserpassword,
              newUserage,
              newUserImag,
              "1"
          
            )
            .addjson()
          );
    }
    

    
     localStorage.setItem('users', JSON.stringify(newUserArray));

      e.target.disabled  = false;
       document.querySelectorAll('#content form')[0].submit();
      
    }
  });


  