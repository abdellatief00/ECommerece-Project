 export class Review {
    #userId;
    #reviewBody;
  
    constructor(userId, reviewBody) {
      this.#userId = userId;
      this.#reviewBody = reviewBody;
    }
  
    get userId() {
      return this.#userId;
    }
  
    get reviewBody() {
      return this.#reviewBody;
    }
  
    toJSON() {
      return {
         [this.#userId]: this.#reviewBody
      };
    }
  }
  export class Rating {
    #userId;
    #rating;
  
    constructor(userId, rating) {
      this.#userId = userId;
      this.#rating = rating;
    }
  
    get userId() {
      return this.#userId;
    }
  
    get reviewBody() {
      return this.#rating;
    }
  
    toJSON() {
      return {
         [this.#userId]: this.#rating
      };
    }
  }
  
  export class Product {
    static currentProductId = 0;
  
    #productId;
    #productTitle;
    #productDescription;
    #images = [];
    #stockQuantity;
    #reviews = [new Review()];
    #rating = [new Rating()];
    #price;
    #sellerId;
    #offer;
    #shape;
    #frameColor;
    #material;
    #lensClass;
    #treatment;
    #category;
    set product_title(_product_title){
        this.#productTitle = _product_title;
    }
    get product_title(){
        return this.#productTitle;
    }

    set product_description(product_description){
        this.#productDescription = product_description;
    }
    get product_description(){
        return this.#productDescription;
    }

    set stock_quantity(_stock_quantity){
        this.#stockQuantity = _stock_quantity;
    }
    get stock_quantity(){
        return this.#stockQuantity;
    }   

    set images(_img){
        this.#images.push(_img);
    }
    get images(){
        return this.#images;
    }
    set_review(user_id ,_review_body){
        this.#reviews.push({[user_id]:_review_body});
    }
    get review(){
        return this.#reviews;
    }

    set_rating(user_id ,_rating){
        this.#rating.push({[user_id]:_rating});
    }
    get rating(){
        return this.#rating;
    }
    set price(_price){
        this.#price = _price;
    }
    get price(){
        return this.#price;
    }
    set seller_id(_seller_id){
        this.#sellerId = _seller_id;
    }
    get seller_id(){
        return this.#sellerId;
    }
    set offer(_offer){
        this.#offer = _offer;
    }
    get offer(){
        return this.#offer;
    }
    set shape(_shape){
        this.#shape = _shape;
    }
    get shape(){
        return this.#shape;
    }
    set frame_color(_frame_color){
        this.#frameColor=_frame_color
    }
    get frame_color(){
        return this.#frameColor;
    }
    set material(_material){
        this.#material=_material;
    }
    get material(){
        return this.#material;
    }
    set lens_class(_lens_class){
        this.#lensClass=_lens_class;
    }
    get lens_class(){
        return this.#lensClass;
    }
    set treatment(_treatment){
        this.#treatment=_treatment;
    }
    get treatment(){
        return this.#treatment;
    }
    set category(_category){
        this.#category=_category;
    }
    get category(){
        return this.#category;
    }
  
    constructor(
      productTitle,
      productDescription,
      images,
      stockQuantity,
      reviews,
      rating,
      price,
      sellerId,
      offer,
      shape,
      frameColor,
      material,
      lensClass,
      treatment,
      category
    ) {
      this.#productTitle = productTitle;
      this.#productDescription = productDescription;
      this.#images = images;
      this.#stockQuantity = stockQuantity;
      this.#reviews = reviews;
      this.#rating = rating;
      this.#price = price;
      this.#sellerId = sellerId;
      this.#offer = offer;
      this.#shape = shape;
      this.#frameColor = frameColor;
      this.#material = material;
      this.#lensClass = lensClass;
      this.#treatment = treatment;
      this.#category = category;
      this.#productId = ++Product.currentProductId;
    }
  
    addReview(userId, reviewBody) {
      const review = new Review(userId, reviewBody);
      this.#reviews.push(review);
    }
  
    addJson() {
      return {
        id: this.#productId,
        productTitle: this.#productTitle,
        productDescription: this.#productDescription,
        images: this.#images,
        stockQuantity: this.#stockQuantity,
        offer: this.#offer,
        shape: this.#shape,
        frameColor: this.#frameColor,
        material: this.#material,
        lensClass: this.#lensClass,
        treatment: this.#treatment,
        category: this.#category,
        reviews: this.#reviews,
        rating: this.#rating,
      };
    }
  }
  
 
  /* class for cart  abdellatief */

  export class Cart{
    #productId;
    #productTitle;
    #quantity;
    #price;
    #image;

    set productId(_num){
      this.#productId = _num;
    }
    get productId(){
      return this.#productId;
    }

    set productTitle(_title){
      this.#productTitle = _title;
    }
    get productTitle(){
      return this.#productTitle;
    }

    set quantity(_quantity){
      this.#quantity = _quantity;
    }
    get quantity(){
      return this.#quantity;
    }

    set price(_price){
      this.#price = _price;
    }
    get price(){
      return this.#price;
    }

    set image(_img){
      this.#image = _img;
    }

    get image(){
      return this.#image;
    }

    constructor(_productid , _producttitle , _quantity , _price , _img){
      this.productId = _productid;
      this.productTitle = _producttitle;
      this.quantity = _quantity;
      this.price = _price;
      this.image = _img;
    }

    addJson(){
      return{
        productId : this.productId,
        productTitle : this.productTitle,
        quantity : this.quantity,
        price : this.price,
        image : this.image
      }
    }
  }


  /* class of orders */ 

  export class Orders{
    #orderNumber;
    #date;
    #total;
    #paymentMethod;
    #cart;
    static currentorderid = 0;
    constructor(_total,_pay , _cart){
      this.#orderNumber = Orders.autoincreaseid();
      this.#date = new Date();
      this.#total  = _total;
      this.#paymentMethod = _pay;
      this.#cart = _cart;
    }
    addJson(){
      return{
      orderNumber : this.#orderNumber,
      date : this.#date,
      total : this.#total,
      paymentMethod : this.#paymentMethod,
      cart : this.#cart
      }
    }

    static autoincreaseid(){
      let lastid;
      let order = JSON.parse(window.localStorage.getItem("orders")) ||[];
      if(order.length > 0){
        lastid = order[order.length-1].orderNumber;
      }
      else {lastid =0}
      return ++lastid;
    }
  }



  /* class users */
  //#region  User type

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
      this.#id = user.autoincreaseid();
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

 //#endregion