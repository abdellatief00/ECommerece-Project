import { Cart ,user} from './modula.js';
import{Orders}from './modula.js';
let user1 = [];

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
        "userId": 1
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
        "userId": 2
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
        "userId": 1
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
localStorage.setItem('Orders', JSON.stringify(orders));

let one_user = new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson();
window.localStorage.setItem("current_user",JSON.stringify(one_user));
console.log(one_user);
user1.push(new user("abdo","hamed","abdellatiefhamed00@gmail.com","1578aaa",50,"images/women/product-1-a.jpg",0).addjson());
localStorage.setItem('user', JSON.stringify(user1));
console.log(one_user);

user1.push(new user("donya","mohamed","donyamohamed@gmail.com","wedfaa",24,"images/women/product-1-a.jpg",0).addjson());
localStorage.setItem('user', JSON.stringify(user1));

console.log(seond);
/* read more */
document.querySelectorAll("#sectiontwo button")[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#sectiontwo span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#sectiontwo span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})

document.querySelectorAll('#sectionfive button')[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#sectionfive span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#sectionfive span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})
document.querySelectorAll('#div5 button')[0].addEventListener("click",function(e){
    if(e.target.innerText.toLowerCase()=="read more"){
        document.querySelectorAll("#div5 span")[0].style.display = "block";
        e.target.innerText  = "read less";
    }
    else{
        document.querySelectorAll("#div5 span")[0].style.display = "none";
        e.target.innerText  = "read more";
    }
})

/* end of read more */