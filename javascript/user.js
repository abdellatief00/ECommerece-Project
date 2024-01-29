import {user} from './modula.js';

let item = [];
//_fname,_lname,_email,_pass,_age,_img,_role
item.push(new user("mahmoud","mohamed","addddd@gmail.com","222222",28,"admin-img.jpg",2).addjson()); //1
item.push(new user("ayman","mohamed","ayman1234@gmail.com","12345",20,"admin-img.jpg",1).addjson());//2
item.push(new user("ali","mohamed","ahkddkdk@gmail.com","2154",20,"admin-img.jpg",1).addjson());//3
item.push(new user("ahmed","mohamed","ahmed222@gmail.com","7854",20,"admin-img.jpg",2).addjson());//4
item.push(new user("donya","khaled","donya234@gmail.com","5478",20,"admin-img.jpg",2).addjson());//5
item.push(new user("ali","khaled","ahkddkdk@gmail.com","8457",20,"admin-img.jpg",1).addjson());//6
item.push(new user("ali","khaled","aly25@gmail.com","7584",20,"admin-img.jpg",2).addjson());//7
item.push(new user("ali","khaled","ali326@gmail.com","9632",20,"admin-img.jpg",2).addjson());//8
item.push(new user("ali","samir","ali908@gmail.com","2365",20,"admin-img.jpg",1).addjson());//9
item.push(new user("nasr","samir","naser223@gmail.com","32658",20,"admin-img.jpg",1).addjson());//10
item.push(new user("nadia","samir","nadia889@gmail.com","2568",20,"admin-img.jpg",1).addjson());//11
item.push(new user("ali","samir","ahkddkdk@gmail.com","9658",20,"admin-img.jpg",1).addjson());//12
item.push(new user("ayman","eyad","ayman@gmail.com","5896",20,"admin-img.jpg",1).addjson());//13
item.push(new user("sara","eyad","sara223@gmail.com","8965",20,"admin-img.jpg",2).addjson());//14
item.push(new user("eman","eyad","eman@gmail.com","9658",20,"admin-img.jpg",1).addjson());//15
item.push(new user("ali","eyad","alidkdk@gmail.com","9586",20,"admin-img.jpg",1).addjson());//16
item.push(new user("abdullah","ali","ahkddkdk@gmail.com","9173",20,"admin-img.jpg",1).addjson());//17
item.push(new user("ali","ali","ahkddkdk@gmail.com","3791",20,"admin-img.jpg",2).addjson());//18
item.push(new user("ali","ali","ali345@gmail.com","56248",20,"admin-img.jpg",1).addjson());//19


localStorage.setItem("users",JSON.stringify(item));
let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
window.localStorage.setItem("current_user",JSON.stringify(one_user));
let orders =
[
    {
        "orderNumber": 177,
        "date": "2024-01-03T18:51:12.911Z",
        "total": 66.78610152647282,
        "paymentMethod": "Credit Card",
        "cart": [
            {
                "productId": 12,
                "quantity": 3
            },
            {
                "productId": 6,
                "quantity": 2
            },
            {
                "productId": 15,
                "quantity": 3
            },
            {
                "productId": 14,
                "quantity": 4
            }
        ],
        "userId": 503
    },
    {
        "orderNumber": 489,
        "date": "2023-02-10T18:51:12.912Z",
        "total": 51.24107419954016,
        "paymentMethod": "Credit Card",
        "cart": [
            {
                "productId": 13,
                "quantity": 2
            },
            {
                "productId": 6,
                "quantity": 3
            },
            {
                "productId": 3,
                "quantity": 1
            },
            {
                "productId": 3,
                "quantity": 3
            }
        ],
        "userId": 264
    },
    {
        "orderNumber": 751,
        "date": "2023-12-15T18:51:12.912Z",
        "total": 16.800541146849234,
        "paymentMethod": "PayPal",
        "cart": [
            {
                "productId": 14,
                "quantity": 3
            },
            {
                "productId": 8,
                "quantity": 2
            }
        ],
        "userId": 702
    },
    {
        "orderNumber": 750,
        "date": "2023-09-07T17:51:12.912Z",
        "total": 17.0898882484283,
        "paymentMethod": "Credit Card",
        "cart": [
            {
                "productId": 10,
                "quantity": 2
            },
            {
                "productId": 5,
                "quantity": 4
            }
        ],
        "userId": 825
    },
    {
        "orderNumber": 858,
        "date": "2024-02-22T18:51:12.912Z",
        "total": 6.883951274391054,
        "paymentMethod": "PayPal",
        "cart": [
            {
                "productId": 8,
                "quantity": 4
            },
            {
                "productId": 7,
                "quantity": 3
            },
            {
                "productId": 5,
                "quantity": 1
            },
            {
                "productId": 8,
                "quantity": 4
            }
        ],
        "userId": 190
    },
    {
        "orderNumber": 800,
        "date": "2023-05-04T17:51:12.912Z",
        "total": 57.682764030949784,
        "paymentMethod": "PayPal",
        "cart": [
            {
                "productId": 2,
                "quantity": 1
            },
            {
                "productId": 3,
                "quantity": 4
            },
            {
                "productId": 3,
                "quantity": 3
            },
            {
                "productId": 3,
                "quantity": 5
            },
            {
                "productId": 8,
                "quantity": 2
            }
        ],
        "userId": 310
    },
    {
        "orderNumber": 962,
        "date": "2023-02-13T18:51:12.913Z",
        "total": 2.3060128672778513,
        "paymentMethod": "PayPal",
        "cart": [
            {
                "productId": 16,
                "quantity": 2
            },
            {
                "productId": 8,
                "quantity": 1
            },
            {
                "productId": 3,
                "quantity": 1
            },
            {
                "productId": 8,
                "quantity": 2
            }
        ],
        "userId": 999
    },
    {
        "orderNumber": 591,
        "date": "2023-05-21T17:51:12.913Z",
        "total": 41.48830848925671,
        "paymentMethod": "PayPal",
        "cart": [
            {
                "productId": 14,
                "quantity": 4
            },
            {
                "productId": 16,
                "quantity": 3
            },
            {
                "productId": 3,
                "quantity": 2
            },
            {
                "productId": 3,
                "quantity": 2
            }
        ],
        "userId": 495
    },
    {
        "orderNumber": 677,
        "date": "2024-08-14T17:51:12.913Z",
        "total": 19.746920910764977,
        "paymentMethod": "Credit Card",
        "cart": [
            {
                "productId": 13,
                "quantity": 3
            },
            {
                "productId": 2,
                "quantity": 3
            },
            {
                "productId": 4,
                "quantity": 2
            },
            {
                "productId": 3,
                "quantity": 2
            },
            {
                "productId": 10,
                "quantity": 4
            }
        ],
        "userId": 714
    }
]
// console.log(item);

// item[0].images.push("lol");
 localStorage.setItem("orders",JSON.stringify(orders));
// console.log(item);
// item = JSON.parse(window.localStorage.getItem("users"))
// console.log(item)
