let products = [];
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
let sellerId = "seller2";

let sellerProductsOrders = [];
let ordersByDateObj = {};

window.addEventListener("load", function(){
    products = getProductsFromLocal();
    sellerProductsOrders = getAndFormatOrders();
    //console.log("orders formatted", sellerProductsOrders);
    ordersByDateObj = formatOrdersByDate(sellerProductsOrders);
    //console.log("after formatting by date",ordersByDateObj);
    sortOrdersByDate(ordersByDateObj);
    console.log("after sorting", ordersByDateObj)

    // getting orders for product with id = 3
    let dummyProductObj = getProductOrdersObj(ordersByDateObj, 3);
    
    

    //======= uncomment and see the results =========

    // all the functions work on the bject and extracts the arrays
    // getDateArray extracts the dates for the graph x-axis
    // getProductQuantities and getProducTotaltPrice for the y-axis
    
    console.log("product orders Dates" ,getDateArray(dummyProductObj));
    console.log("product orders quantities " ,getProductQuantities(dummyProductObj));
    console.log("product orders totalPrices" ,getProducTotaltPrice(dummyProductObj, 3));

    

    //======= uncomment and see the results =========
    // getting ORDERS quantities and total prices statistics

    /* console.log("orders Dates" ,getDateArray(ordersByDateObj));
    console.log("orders total quantities", getTotalOrdersQuantities(ordersByDateObj));
    console.log("3 price", getProductPrice(3));
    console.log("orders total prices", getOrderTotalPrice(ordersByDateObj)); */
    
    
})

//==================================================================//
//						orders formatting Functions					//
//==================================================================//
// use these functions for admin to get all the orders 
// or pass the seller id to get his orders
// 1- first we choose all the orders by getAndFormatOrders
// 2- then we format them as obj = {date : {
//    aProductId : aQuantity,
//    bProductId : bQuantity}} using formatOrdersByDate
// 3 -sort the result object by date using sortOrdersByDate
function getAndFormatOrders(roleId = "admin")
{
    let ordersFormatted = [];
    for(let i = 0; i<orders.length; i++)
{
    for(let j=0; j<orders[i].cart.length; j++)
    {
        if(roleId === "admin")
        {
            ordersFormatted.push({
                productId : orders[i].cart[j].productId,
                quantity : orders[i].cart[j].quantity,
                date : orders[i].date.substring(0, 10)
            })
        }
        else
        {
            if(getProductSellerId(+orders[i].cart[j].productId) === sellerId)
            {
                ordersFormatted.push({
                    productId : orders[i].cart[j].productId,
                    quantity : orders[i].cart[j].quantity,
                    date : orders[i].date.substring(0, 10)
                })
            }
        }
    }
}
return ordersFormatted;
}

function formatOrdersByDate(obj)
{
    let dateFormattedObj = {};
    for (let i = 0; i < obj.length; i++) {
        let order = obj[i];
    
        if (order.date in dateFormattedObj) {
            if (order.productId in dateFormattedObj[order.date]) {
                dateFormattedObj[order.date][order.productId] += order.quantity;
            } else {
                dateFormattedObj[order.date][order.productId] = order.quantity;
            }
        } else {
            dateFormattedObj[order.date] = {
                [order.productId]: order.quantity
            };
        }
    }
    return dateFormattedObj;
}

function sortOrdersByDate(obj)
{
    let sortedArray = Object.entries(obj).map(([date, orderProductQuantity]) => ({ date, orderProductQuantity }));

    sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
    obj = Object.fromEntries(sortedArray.map(({ date, orderProductQuantity }) => [date, orderProductQuantity]));

}
//////////////////////////////////////////////////////////////////////


//==================================================================//
//						orders statistics Functions					//
//==================================================================//
// obj passed to these functions must be the result after formatting and
// ordering the orders
export function getTotalOrdersQuantities(obj)
{
    let totalOrderQuantities = [];
    for(let date in obj)
    {
        let totalQuantity = 0;
        for(let product in obj[date])
        {
            totalQuantity += obj[date][product];
        }
        totalOrderQuantities.push(totalQuantity);
    }
    return totalOrderQuantities; 
}

export function getOrderTotalPrice(obj)
{
    let orderTotalPrice = [];
    for(let date in obj)
    {
        let totalPrice = 0;
        for(let product in obj[date])
        {
            totalPrice += getProductPrice(+product) * obj[date][product];
        }
        orderTotalPrice.push(totalPrice);
    }
    return orderTotalPrice
}
//////////////////////////////////////////////////////////////////////

//==================================================================//
//					product statistics Functions				    //
//==================================================================//

// getProductOrdersObj is for formatting the product Obj 
// the object passed to it must be an orders formatted object also
function getProductOrdersObj(obj, productId)
{
    let productOrdersObj = {};
    for(let date in obj)
    {
        productOrdersObj[date] = 0;
        for(let product in obj[date])
        {
            if(+product === productId)
            {
                productOrdersObj[date] += obj[date][product];
            }
        }
    }

    return productOrdersObj;
}
// the obj passed to these two functions must be result from
// getProductOrdersObj
function getProductQuantities(obj)
{
    let quantitiesArr = [];
    for(let date in obj)
    {
        quantitiesArr.push(obj[date]);
    }
    return quantitiesArr;
}

function getProducTotaltPrice(obj, productId)
{
    let pricesArr = [];
    for(let date in obj)
    {
        pricesArr.push(obj[date] * getProductPrice(productId));
    }
    return pricesArr;
}
/////////////////////////////////////////////////////////////////////

//==================================================================//
//						product Info Functions  					//
//==================================================================//

function getProductIndex(productId)
{
    for(let i=0; i<products.length; i++)
    {
        if(products[i].id === productId)
            return i;
    }
    return -1;
}

function getProductPrice(productId)
{
    let product = products[getProductIndex(productId)];
    return product.price;
}

function getProductSellerId(productId)
{
    for(let i=0; i<products.length; i++)
    {
        if(products[i].id === productId)
        {
            return products[i].sellerId;
        }
    }
}

function getProductsFromLocal()
{
    return JSON.parse(localStorage.getItem("products")) || [];
}
/////////////////////////////////////////////////////////////////////

//==================================================================//
//						object formatting Functions					//
//==================================================================//
function getDateArray(obj)
{
    let dateArr = [];
    for(let date in obj)
    {
        dateArr.push(date);
    }
    return dateArr;
}
//////////////////////////////////////////////////////////////////////