// export class user{
//     #id;
//     static current_id = 0;
//     #name;
//     #email;
//     #password;
//     #images =[];
//     #age;

//     set name(_name){
//         this.#name = _name;
//     }
//     get name(){
//         return this.#name;
//     }

//     set email(_email){
//         this.#email = _email;
//     }
//     get email(){
//         return this.#email;
//     }

//     set password(_pass){
//         this.#password = _pass;
//     }
//     get password(){
//         return this.#password;
//     }

//     set age(_age){
//         this.#age = _age;
//     }
//     get age(){
//         return this.#age;
//     }

//     get id(){
//         return this.#id;
//     }

//     set images(_img){
//         this.#images.push(_img);
//     }
//     get images(){
//         return this.#images;
//     }

//     constructor(_name,_email,_pass,_age,_img){
//         this.name = _name;
//         this.email = _email;
//         this.password = _pass;
//         this.age = _age;
//         this.images = _img;
//         this.#id = ++user.current_id;
//     }
//     addjson(){
//         return{
//             id : this.id,
//             name : this.name,
//             email: this.email,
//             password: this.password,
//             age : this.age,
//             images : this.images
//         }
//     }

//     static IdIncreament(){
//         let lastId;
//         let LastUser= JSON.parse(window.localStorage.getItem("users")) || [];
//         if(LastUser.length > 0){
//             lastId = LastUser[LastUser.length -1].id;
//         }
//         else{lastId=0;}
//         return ++lastId;
//     }
// }


export class user{
    #id;
    static current_id = 0;
    #fname; #lname;
    #email;
    #password;
    #images =[];
    #age;
    #role;
  
    set fname(_fname){
      this.#fname = _fname;
  }
  get fname(){
      return this.#fname;
  }
  set lname(_lname){
      this.#lname = _lname;
  }
  get lname(){
      return this.#lname;
  }
  
    set email(_email){
        this.#email = _email;
    }
    get email(){
        return this.#email;
    }
  
    set password(_pass){
        this.#password = _pass;
    }
    get password(){
        return this.#password;
    }
  
    set age(_age){
        this.#age = _age;
    }
    get age(){
        return this.#age;
    }
  
    get id(){
        return this.#id;
    }
  
    set images(_img){
        this.#images.push(_img);
    }
    get images(){
        return this.#images;
    }
  
    set role(_role) {
        this.#role = _role;
    }
    get role() {
        return this.#role;
    }
    constructor(_fname,_lname,_email,_pass,_age,_img,_role){
      this.fname = _fname;
      this.lname = _lname;
      this.email = _email;
        this.password = _pass;
        this.age = _age;
        this.images = _img;
        //this.#id = user.autoincreaseid(); 
        this.#id = ++user.current_id;
        this.#role = _role;
    }
    addjson(){
        return{
            id : this.id,
            fname : this.fname,
            lname : this.lname,
            email: this.email,
            password: this.password,
            age : this.age,
            images: this.images,
            role: this.role
  
        };
    }
    static autoincreaseid(){
      let lastid;
      let user = JSON.parse(window.localStorage.getItem("users")) ||[]; // u can chage the name of the user how ever u want
      if(user.length > 0){
        lastid = user[user.length-1].id;
      }
      else {lastid =0}
      return ++lastid;
    }
  
  }    