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
    #price;
    #sellerId;
    #offer;
    #shape;
    #frameColor;
    #material;
    #lensClass;
    #treatment;
    #category;
    #date; // New property for the product date
    set product_title(_product_title) {
      this.#productTitle = _product_title;
    }
    get product_title() {
        return this.#productTitle;
    }
  
    set product_description(product_description) {
        this.#productDescription = product_description;
    }
    get product_description() {
        return this.#productDescription;
    }
  
    set stock_quantity(_stock_quantity) {
        this.#stockQuantity = _stock_quantity;
    }
    get stock_quantity() {
        return this.#stockQuantity;
    }
  
    set images(_img) {
        this.#images.push(_img);
    }
    get images() {
        return this.#images;
    }
  
    set_review(user_id, _review_body) {
        const review = new Review(user_id, _review_body);
        this.#reviews.push(review);
    }
    get review() {
        return this.#reviews;
    }
  
    set price(_price) {
        this.#price = _price;
    }
    get price() {
        return this.#price;
    }
  
    set seller_id(_seller_id) {
        this.#sellerId = _seller_id;
    }
    get seller_id() {
        return this.#sellerId;
    }
  
    set offer(_offer) {
        this.#offer = _offer;
    }
    get offer() {
        return this.#offer;
    }
  
    set shape(_shape) {
        this.#shape = _shape;
    }
    get shape() {
        return this.#shape;
    }
  
    set frame_color(_frame_color) {
        this.#frameColor = _frame_color;
    }
    get frame_color() {
        return this.#frameColor;
    }
  
    set material(_material) {
        this.#material = _material;
    }
    get material() {
        return this.#material;
    }
  
    set lens_class(_lens_class) {
        this.#lensClass = _lens_class;
    }
    get lens_class() {
        return this.#lensClass;
    }
  
    set treatment(_treatment) {
        this.#treatment = _treatment;
    }
    get treatment() {
        return this.#treatment;
    }
  
    set category(_category) {
        this.#category = _category;
    }
    get category() {
        return this.#category;
    }
    get date() {
      return this.#date;
    }
  
    // Setter for date
    setDate(newDate) {
      this.#date = newDate;
    }
    constructor(
        productTitle,
        productDescription,
        images,
        stockQuantity,
        reviews,
        price,
        sellerId,
        offer,
        shape,
        frameColor,
        material,
        lensClass,
        treatment,
        category,
        date,
    ) {
        this.#productTitle = productTitle;
        this.#productDescription = productDescription;
        this.#images = images;
        this.#stockQuantity = stockQuantity;
        this.#reviews = reviews;
        this.#price = price;
        this.#sellerId = sellerId;
        this.#offer = offer;
        this.#shape = shape;
        this.#frameColor = frameColor;
        this.#material = material;
        this.#lensClass = lensClass;
        this.#treatment = treatment;
        this.#category = category;
        this.#date = date || new Date(); // Default to the current date if not provided
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
            reviews: this.#reviews.map(review => ({
            userId: review.userId,
            reviewBody: review.reviewBody,})),
            price:this.#price,
            sellerId:this.#sellerId,
            date: this.#date.toISOString(), // Convert date to ISO string for serialization
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