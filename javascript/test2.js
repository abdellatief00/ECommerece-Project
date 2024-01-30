import {user} from './modula.js';


let item = [];
//_fname,_lname,_email,_pass,_age,_img,_role
if(JSON.parse(localStorage.getItem("users")) === null)
{item.push(new user("mahmoud","mohamed","addddd@gmail.com","222222",28,"images/admin-img.jpg",0).addjson()); 
setlocal(item);
item.push(new user("ayman","mohamed","ayman2234@gmail.com","22345",22,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("ali","mohamed","ahkddkdk@gmail.com","2254",22,"admin-img.jpg",1).addjson());
setlocal(item);
item.push(new user("ahmed","mohamed","ahmed222@gmail.com","7854",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("donya","khaled","donya234@gmail.com","5478",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","khaled","ahkddkdk@gmail.com","8457",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","khaled","aly25@gmail.com","7584",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","khaled","ali326@gmail.com","9632",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","samir","ali928@gmail.com","2365",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("nasr","samir","naser223@gmail.com","32658",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("nadia","samir","nadia889@gmail.com","2568",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","samir","ahkddkdk@gmail.com","9658",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ayman","eyad","ayman@gmail.com","5896",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("sara","eyad","sara223@gmail.com","8965",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("eman","eyad","eman@gmail.com","9658",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","eyad","alidkdk@gmail.com","9586",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("abdullah","ali","ahkddkdk@gmail.com","9273",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","ali","ahkddkdk@gmail.com","3792",22,"admin-img.jpg",2).addjson());
setlocal(item);
item.push(new user("ali","ali","ali345@gmail.com","56248",22,"admin-img.jpg",2).addjson());
setlocal(item);}




// item[2].images.push("lol");
// localStorage.setItem("users",JSON.stringify(item));
// console.log(item);
// item = JSON.parse(window.localStorage.getItem("users"))
// console.log(item)
function setlocal(arr , key = "users"){
    window.localStorage.setItem(key,JSON.stringify(arr));
}






let arr = [
    {
        "id": 1,
        "productTitle": "Product 1",
        "productDescription": "Metalen Ronde Shades Vrouwen Zonnebril Mode Mannen Brillen 2022 Vintage Wit Rood Zonnebril Vrouwelijke Mannen Eyewear Vrouwelijke Oculos",
        "images": [
            "../images/women/product-1-a.jpg",
            "../images/women/product-1-b.jpg"
        ],
        "stockQuantity": 0,
        "offer": "20",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 300.67,
        "sellerId": 2,
        "date": "2024-01-23T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 2,
        "productTitle": "Product 2",
        "productDescription": "Description for Product 2",
        "images": [
            "../images/women/product-2-a.jpg",
            "../images/women/product-2-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "30",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 189,
        "sellerId": 2,
        "date": "2024-01-20T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 3,
        "productTitle": "Product 3",
        "productDescription": "Description for Product 3",
        "images": [
            "../images/women/product-3-a.jpg",
            "../images/women/product-3-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "5",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 49.99,
        "sellerId": 3,
        "date": "2023-01-23T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 4,
        "productTitle": "Product 4",
        "productDescription": "Description for Product 4",
        "images": [
            "../images/women/product-4-a.jpg",
            "../images/women/product-4-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "0",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 50,
        "sellerId": 3,
        "date": "2023-07-23T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 5,
        "productTitle": "Product 5",
        "productDescription": "Description for Product 5",
        "images": [
            "../images/women/product-5-a.png",
            "../images/women/product-5-b.png"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 200.99,
        "sellerId": 3,
        "date": "2023-06-23T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 6,
        "productTitle": "BLOOM",
        "productDescription": "Description for Product 6",
        "images": [
            "../images/women/product-6-a.jpg",
            "../images/women/product-6-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 400.99,
        "sellerId": 3,
        "date": "2023-11-23T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 7,
        "productTitle": "Product 7",
        "productDescription": "Description for Product 7",
        "images": [
            "../images/men/product-7-a.jpg",
            "../images/men/product-7-b.jpg"
        ],
        "stockQuantity": 100.67,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Men",
        "reviews": [],
        "price": 49.99,
        "sellerId": 2,
        "date": "2023-11-25T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 8,
        "productTitle": "Product 8",
        "productDescription": "Description for Product 8",
        "images": [
            "../images/men/product-8-a.jpg",
            "../images/men/product-8-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Men",
        "reviews": [],
        "price": 49.99,
        "sellerId": 2,
        "date": "2024-01-22T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 9,
        "productTitle": "Product 9",
        "productDescription": "Description for Product 9",
        "images": [
            "../images/men/product-9-a.jpg",
            "../images/men/product-9-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Men",
        "reviews": [],
        "price": 49.99,
        "sellerId": 2,
        "date": "2023-11-20T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 10,
        "productTitle": "Product 10",
        "productDescription": "Description for Product 10",
        "images": [
            "../images/men/product-10-a.jpg",
            "../images/men/product-10-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Men",
        "reviews": [],
        "price": 49.99,
        "sellerId": 3,
        "date": "2024-01-11T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 11,
        "productTitle": "Product 11",
        "productDescription": "Description for Product 11",
        "images": [
            "../images/men/product-11-a.jpg",
            "../images/men/product-11-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Men",
        "reviews": [],
        "price": 49.99,
        "sellerId": 3,
        "date": "2023-08-09T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 12,
        "productTitle": "DOLCE GABBANA",
        "productDescription": "Description for Product 12",
        "images": [
            "../images/men/product-12-a.webp",
            "../images/men/product-12-b.webp"
        ],
        "stockQuantity": 0,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Men",
        "reviews": [],
        "price": 49.99,
        "sellerId": 2,
        "date": "2024-01-01T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 13,
        "productTitle": "Product 13",
        "productDescription": "Description for Product 13",
        "images": [
            "../images/women/product-13-a.jpg",
            "../images/women/product-13-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 49.99,
        "sellerId": 2,
        "date": "2023-12-30T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 14,
        "productTitle": "Product 14",
        "productDescription": "Description for Product 14",
        "images": [
            "../images/women/product-14-a.jpg",
            "../images/women/product-14-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 49.99,
        "sellerId": 3,
        "date": "2023-09-23T12:00:00.000Z",
        "sold" : 0
    },
    {
        "id": 15,
        "productTitle": "Product 15",
        "productDescription": "Description for Product 15",
        "images": [
            "../images/women/product-15-a.jpg",
            "../images/women/product-15-b.jpg"
        ],
        "stockQuantity": 100,
        "offer": "10",
        "shape": "Round",
        "frameColor": "Black",
        "material": "Plastic",
        "lensClass": "UV Protection",
        "treatment": "High Index",
        "category": "Women",
        "reviews": [],
        "price": 250,
        "sellerId": 2,
        "date": "2024-01-02T12:00:00.000Z",
        "sold" : 0
    }
]
if(JSON.parse(localStorage.getItem("products"))===null)
window.localStorage.setItem("products",JSON.stringify(arr));

let orders= [
    {
        "orderNumber": 1,
        "date": "2023-01-30T14:03:07.921Z",
        "total": 449.91,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": "4",
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 8,
                "productTitle": "Product 8",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/men/product-8-a.jpg"
            },
            {
                "productId": 7,
                "productTitle": "Product 7",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/men/product-7-a.jpg"
            },
            {
                "productId": 9,
                "productTitle": "Product 9",
                "quantity": "3",
                "price": 49.99,
                "image": "../images/men/product-9-a.jpg"
            }
        ],
        "userId": 7,
        "email": "ahmedelsharkawy747@gmail.com",
        "city": "sfvsfd",
        "country": "Egypt",
        "name": "ahmedelsharkawy fadgsdvas",
        "phone": "01150493843",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 2,
        "date": "2024-01-28T14:04:12.937Z",
        "total": 927.89,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 8,
                "productTitle": "Product 8",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/men/product-8-a.jpg"
            },
            {
                "productId": 9,
                "productTitle": "Product 9",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-9-a.jpg"
            },
            {
                "productId": 10,
                "productTitle": "Product 10",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-10-a.jpg"
            },
            {
                "productId": 11,
                "productTitle": "Product 11",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-11-a.jpg"
            },
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": "2",
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 14,
                "productTitle": "Product 14",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/women/product-14-a.jpg"
            }
        ],
        "userId": 7,
        "email": "addddd@gmail.com",
        "city": "tanta",
        "country": "Egypt",
        "name": "addddd sgdhfg",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 3,
        "date": "2023-01-01T14:07:24.695Z",
        "total": 1856.92,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": 4,
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 4,
                "productTitle": "Product 4",
                "quantity": 1,
                "price": 50,
                "image": "../images/women/product-4-a.jpg"
            },
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 5,
                "productTitle": "Product 5",
                "quantity": 1,
                "price": 200.99,
                "image": "../images/women/product-5-a.png"
            },
            {
                "productId": 7,
                "productTitle": "Product 7",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/men/product-7-a.jpg"
            },
            {
                "productId": 9,
                "productTitle": "Product 9",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/men/product-9-a.jpg"
            },
            {
                "productId": 10,
                "productTitle": "Product 10",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/men/product-10-a.jpg"
            },
            {
                "productId": 14,
                "productTitle": "Product 14",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/women/product-14-a.jpg"
            },
            {
                "productId": 15,
                "productTitle": "Product 15",
                "quantity": 2,
                "price": 250,
                "image": "../images/women/product-15-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fadasv",
        "country": "Egypt",
        "name": "aelsharkawy sgdhfg",
        "phone": "01150493843",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 4,
        "date": "2023-01-03T14:21:14.008Z",
        "total": 1055.97,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": "4",
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 4,
                "productTitle": "Product 4",
                "quantity": "3",
                "price": 50,
                "image": "../images/women/product-4-a.jpg"
            },
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": "3",
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            }
        ],
        "userId": 7,
        "email": "ahmedelsharkawy747@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "ahmedels bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 5,
        "date": "2024-08-30T14:22:36.384Z",
        "total": 927.92,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": "2",
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 4,
                "productTitle": "Product 4",
                "quantity": "3",
                "price": 50,
                "image": "../images/women/product-4-a.jpg"
            },
            {
                "productId": 8,
                "productTitle": "Product 8",
                "quantity": "3",
                "price": 49.99,
                "image": "../images/men/product-8-a.jpg"
            },
            {
                "productId": 10,
                "productTitle": "Product 10",
                "quantity": "3",
                "price": 49.99,
                "image": "../images/men/product-10-a.jpg"
            },
            {
                "productId": 11,
                "productTitle": "Product 11",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-11-a.jpg"
            }
        ],
        "userId": 7,
        "email": "ah.elsharkawyy@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "ahelshark bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 6,
        "date": "2024-01-15T14:24:36.016Z",
        "total": 2309.91,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": 4,
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 5,
                "productTitle": "Product 5",
                "quantity": 4,
                "price": 200.99,
                "image": "../images/women/product-5-a.png"
            },
            {
                "productId": 8,
                "productTitle": "Product 8",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/men/product-8-a.jpg"
            },
            {
                "productId": 14,
                "productTitle": "Product 14",
                "quantity": 3,
                "price": 49.99,
                "image": "../images/women/product-14-a.jpg"
            },
            {
                "productId": 15,
                "productTitle": "Product 15",
                "quantity": 2,
                "price": 250,
                "image": "../images/women/product-15-a.jpg"
            }
        ],
        "userId": 7,
        "email": "ahmedelsharkawy747@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "ahmedelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 7,
        "date": "2024-05-28T14:26:36.896Z",
        "total": 739.92,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": 1,
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 5,
                "productTitle": "Product 5",
                "quantity": 1,
                "price": 200.99,
                "image": "../images/women/product-5-a.png"
            },
            {
                "productId": 7,
                "productTitle": "Product 7",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/men/product-7-a.jpg"
            },
            {
                "productId": 9,
                "productTitle": "Product 9",
                "quantity": 1,
                "price": 49.99,
                "image": "../images/men/product-9-a.jpg"
            },
            {
                "productId": 8,
                "productTitle": "Product 8",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/men/product-8-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "aelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 8,
        "date": "2023-01-11T14:27:52.896Z",
        "total": 3209.78,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": 5,
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 5,
                "productTitle": "Product 5",
                "quantity": 4,
                "price": 200.99,
                "image": "../images/women/product-5-a.png"
            },
            {
                "productId": 7,
                "productTitle": "Product 7",
                "quantity": 4,
                "price": 49.99,
                "image": "../images/men/product-7-a.jpg"
            },
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": 4,
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 9,
                "productTitle": "Product 9",
                "quantity": 4,
                "price": 49.99,
                "image": "../images/men/product-9-a.jpg"
            },
            {
                "productId": 10,
                "productTitle": "Product 10",
                "quantity": 3,
                "price": 49.99,
                "image": "../images/men/product-10-a.jpg"
            },
            {
                "productId": 13,
                "productTitle": "Product 13",
                "quantity": 2,
                "price": 49.99,
                "image": "../images/women/product-13-a.jpg"
            },
            {
                "productId": 15,
                "productTitle": "Product 15",
                "quantity": 3,
                "price": 250,
                "image": "../images/women/product-15-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "aelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 9,
        "date": "2024-01-06T15:29:43.984Z",
        "total": 2379.92,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 2,
                "productTitle": "Product 2",
                "quantity": "2",
                "price": 189,
                "image": "../images/women/product-2-a.jpg"
            },
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": "3",
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 4,
                "productTitle": "Product 4",
                "quantity": "3",
                "price": 50,
                "image": "../images/women/product-4-a.jpg"
            },
            {
                "productId": 13,
                "productTitle": "Product 13",
                "quantity": "3",
                "price": 49.99,
                "image": "../images/women/product-13-a.jpg"
            },
            {
                "productId": 6,
                "productTitle": "BLOOM",
                "quantity": "2",
                "price": 400.99,
                "image": "../images/women/product-6-a.jpg"
            },
            {
                "productId": 15,
                "productTitle": "Product 15",
                "quantity": "3",
                "price": 250,
                "image": "../images/women/product-15-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "aelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 10,
        "date": "2023-03-30T14:30:44.688Z",
        "total": 2154.95,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 5,
                "productTitle": "Product 5",
                "quantity": "3",
                "price": 200.99,
                "image": "../images/women/product-5-a.png"
            },
            {
                "productId": 15,
                "productTitle": "Product 15",
                "quantity": "3",
                "price": 250,
                "image": "../images/women/product-15-a.jpg"
            },
            {
                "productId": 6,
                "productTitle": "BLOOM",
                "quantity": "2",
                "price": 400.99,
                "image": "../images/women/product-6-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "aelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 11,
        "date": "2024-12-30T14:31:30.087Z",
        "total": 499.9,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 11,
                "productTitle": "Product 11",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-11-a.jpg"
            },
            {
                "productId": 9,
                "productTitle": "Product 9",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-9-a.jpg"
            },
            {
                "productId": 8,
                "productTitle": "Product 8",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-8-a.jpg"
            },
            {
                "productId": 10,
                "productTitle": "Product 10",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-10-a.jpg"
            },
            {
                "productId": 7,
                "productTitle": "Product 7",
                "quantity": "2",
                "price": 49.99,
                "image": "../images/men/product-7-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "aelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "2": "pending",
            "3": "pending"
        }
    },
    {
        "orderNumber": 12,
        "date": "2024-03-12T14:32:47.914Z",
        "total": 399.97,
        "paymentMethod": "Cash",
        "cart": [
            {
                "productId": 3,
                "productTitle": "Product 3",
                "quantity": 3,
                "price": 49.99,
                "image": "../images/women/product-3-a.jpg"
            },
            {
                "productId": 4,
                "productTitle": "Product 4",
                "quantity": 5,
                "price": 50,
                "image": "../images/women/product-4-a.jpg"
            }
        ],
        "userId": 7,
        "email": "aelsharkawy56@gmail.com",
        "city": "fsdvb",
        "country": "Egypt",
        "name": "aelsharkawy bfdgfd",
        "phone": "01011849747",
        "state": {
            "3": "pending"
        }
    }
]
if(JSON.parse(localStorage.getItem('orders'))===null)
window.localStorage.setItem("orders",JSON.stringify(orders));
