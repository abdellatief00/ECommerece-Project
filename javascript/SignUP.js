import { user } from "./modula.js";
/* validation part */


let newUserfName,newUserlName,newUseremail,newUserpassword,newUserage,newUserImag,newUserRole;
const fName= document.querySelectorAll(".leftcontent form input")[0];//get the first name input
const lName= document.querySelectorAll(".leftcontent form input")[1];//get the last name input
const email= document.querySelectorAll(".leftcontent form input")[2];//get the email input
const password= document.querySelectorAll(".leftcontent form input")[3];//get the password input
const confirmPassword= document.querySelectorAll(".leftcontent form input")[4];//get the confirm password input
const age= document.querySelectorAll(".leftcontent form input")[5];//get the age input
const userImag= document.querySelectorAll(".leftcontent form input")[6];//get the image input
const role_noramlUser= document.querySelectorAll(".leftcontent form input")[7];//get the role input
const role_sellerUser= document.querySelectorAll(".leftcontent form input")[8];//get the role input
var submitbutton= document.querySelector("#content button[type =submit]");//get the submit button
var signUpForm=document.querySelector("#content form");//get the form
submitbutton.disabled  = true;//disable the submit button

signUpForm.addEventListener("change",function(e){
    if((role_noramlUser.checked!=role_sellerUser.checked)){
        submitbutton.disabled  = false;
       
      }else{
       
      }
});//enable the submit button if the user choose a role





 /* for first  and last name */
  function isValidInputName(input)//function to check if the input is valid or not
   {
    const usernameRegex = /^[a-zA-Z_-]{3,16}$/;
    return usernameRegex.test(input);
  }

  fName.addEventListener("input",
  function(e){
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
  })//add event listener to the first name input

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
  })//add event listener to the last name input

//Email validation
  function isValidEmail(input)//function to check if the email is valid or not
   {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  emailRegex.test(input);
  }



function isEmailAvailable(email) //function to check if the email is available or not
{
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].email === email) {
            return false; // Email is already used
        }
    }
    return true; // Email is available
}

email.addEventListener("input",
 function (e) {
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
});//add event listener to the email input
  

  // password and confirmPassword validation
  function isValidPassword(input)
   {
    // Password must contain at least 8 characters, including at least one uppercase letter, one number, and one special character.
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(input);
}//function to check if the password is valid or not

function arePasswordsMatching(password, confirmPassword) {
    return password === confirmPassword;
}//function to check if the password and confirm password are matching or not


password.addEventListener("input", 
function (e) {
    let passwordInput = e.target.value;

    if (isValidPassword(passwordInput)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add("is-valid");
    } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove("is-valid");
    }
});//add event listener to the password input

confirmPassword.addEventListener("input", 
function (e) {
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
});//add event listener to the confirm password input


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











  
var userArray=JSON.parse(localStorage.getItem('Users'));

// document.getElementsByTagName("body")[0].innerHTML+=`<img src=${userArray[2].images[0]}  >`;//getting the image from the array of images in the user object

var newUserArray = [];

if (userArray) {
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
}


  /*validation for submition */
  document.querySelector("#content button[type =submit]").addEventListener("click",
  function(e){
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
    

    
     localStorage.setItem('Users', JSON.stringify(newUserArray));

      e.target.disabled  = false;
       document.querySelectorAll('#content form')[0].submit();
      
    }
  });//add event listener to the submit button


  