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
                "productId": 15,
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
                "productId": 15,
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
let currentUser;
let productsChart = document.getElementById('productChart').getContext('2d');
let totalOrdersChart = document.getElementById('ordersChart').getContext('2d');
let selectedProduct = document.getElementById("productsOptions");

window.addEventListener("load", function(){
    currentUser = getUserFromLocal();
    products = getProductsFromLocal();
    //orders = getOrdersFromLocal();
    //currentUser.role = "Seller";
    currentUser = {
        "id": 1,
        "fname": "Abdellatif",
        "lname": "Hamed",
        "email": "tefa@Gmail.com",
        "password": "123",
        "age": 24,
        "images": [
            "images/tefa.png"
        ],
        "role": "Admin",
        "orders": [
            1,
            2,
            3
        ],
        "favorites": [
            ""
        ]
    }
    console.log(products);
    createOptions(selectedProduct);
    if(currentUser.role === "Admin")
        sellerProductsOrders = getAndFormatOrders();
    else if(currentUser.role == "Seller")
        sellerProductsOrders = getAndFormatOrders(sellerId);
    //sellerProductsOrders = getAndFormatOrders(currentUser.id);
    
    //console.log("orders formatted", sellerProductsOrders);
    ordersByDateObj = formatOrdersByDate(sellerProductsOrders);
    ordersByDateObj = sortOrdersByDate(ordersByDateObj);
    /* console.log("after formatting by date",ordersByDateObj);
    console.log(sortOrdersByDate(ordersByDateObj));
    console.log("after sorting", ordersByDateObj) */
    //createOptions(selectedProduct);
    // getting orders for product with id = 3
    let dummyProductObj = getProductOrdersObj(ordersByDateObj, selectedProduct.value);
    console.log("productObject" ,getDateArray(dummyProductObj));
    drawChart(productsChart, getDateArray(dummyProductObj), getProductQuantities(dummyProductObj),
    getProducTotaltPrice(dummyProductObj, +selectedProduct.value),
    `product ${selectedProduct.value}`
    );
    selectedProduct.addEventListener("change", ()=>{
        console.log("value from the dropdown", selectedProduct.value)
        dummyProductObj = getProductOrdersObj(ordersByDateObj, +selectedProduct.value);
        console.log("all products", ordersByDateObj);
        console.log("selected product", dummyProductObj)
        console.log("product orders Dates" ,getDateArray(dummyProductObj));
    console.log("product orders quantities " ,getProductQuantities(dummyProductObj));
    console.log("product orders totalPrices" ,getProducTotaltPrice(dummyProductObj, +selectedProduct.value));
    drawChart(productsChart, getDateArray(dummyProductObj), getProductQuantities(dummyProductObj),
    getProducTotaltPrice(dummyProductObj, +selectedProduct.value),
    `product ${selectedProduct.value}`
    );

    })
    

    //======= uncomment and see the results =========

    // all the functions work on the bject and extracts the arrays
    // getDateArray extracts the dates for the graph x-axis
    // getProductQuantities and getProducTotaltPrice for the y-axis
    
    /* console.log("product orders Dates" ,getDateArray(dummyProductObj));
    console.log("product orders quantities " ,getProductQuantities(dummyProductObj));
    console.log("product orders totalPrices" ,getProducTotaltPrice(dummyProductObj, +selectedProduct.value));
    console.log(selectedProduct.value);
    drawChart(productsChart, getDateArray(dummyProductObj), getProductQuantities(dummyProductObj),
    getProducTotaltPrice(dummyProductObj, +selectedProduct.value),
    `product ${selectedProduct.value}`
    ); */
    

    //======= uncomment and see the results =========
    // getting ORDERS quantities and total prices statistics

    /* console.log("orders Dates" ,getDateArray(ordersByDateObj));
    console.log("orders total quantities", getTotalOrdersQuantities(ordersByDateObj));
    console.log("3 price", getProductPrice(3));
    console.log("orders total prices", getOrderTotalPrice(ordersByDateObj)); */
    console.log("seller products" ,getSelllerProducts(sellerId));
    drawChart(totalOrdersChart, getDateArray(ordersByDateObj), getTotalOrdersQuantities(ordersByDateObj),
    getOrderTotalPrice(ordersByDateObj),
    "total orders"
    );

    
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

    return obj;

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
            //console.log("productId from price", product, typeof(product));
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
        //console.log("productId from Index", productId, typeof(+productId));
        if(+products[i].id === +productId)
            return i;
    }
    return -1;
}

function getProductPrice(productId)
{
    //console.log("productId", productId, typeof(productId))
    if(getProductIndex(productId) === -1)
    {
        console.log("the one that causes the error" ,productId)
    }
    let product = products[getProductIndex(+productId)];
    return +product.price;
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
    console.log("from date array", obj);
    for(let date in obj)
    {
        dateArr.push(date);
        //console.log("after every push", dateArr);
    }
    return dateArr;
}
//////////////////////////////////////////////////////////////////////

function settUserToLocal(user)
{
    localStorage.setItem("current_user", JSON.stringify(user));
}

function getUserFromLocal()
{
    return JSON.parse(localStorage.getItem("current_user"));
}

function drawChart(ctx, xAxisDate, yAxisQuantities, yAxisRevenue, label)
{
    if (ctx.chart) {
        ctx.chart.destroy();
    }
    console.log(xAxisDate);
    console.log(yAxisQuantities);
    console.log(yAxisRevenue);
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Wavy Line Chart with Chart.js'
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        },
        axes: {
            xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      };

      const chartData = {
        labels: xAxisDate,
        datasets: [
          {
            label: `${label} revenue`,
            data: yAxisRevenue,
            borderColor: '#900000', // Red
            borderWidth: 2,
            fill: false,
            pointRadius: 1,
            cubicInterpolationMode: "monotone",
            tension: 0.5 // Adjust waviness as desired
          },
           {
            label: `${label} quantities`,
            data: yAxisQuantities,
            borderColor: '#004590', // Blue
            borderWidth: 2,
            fill: false,
            pointRadius: 1,
            cubicInterpolationMode: "monotone",
            tension: 0.7
          },
        ]
      };

      ctx.chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options
      });
  
}

function createOptions(selectDiv)
{
    selectDiv.innerHTML = "";
    let optionsProducts;
    if(currentUser.role === "Seller")
    {
        //optionsProducts = getSelllerProducts(currentUser.id);
        optionsProducts = getSelllerProducts("seller2");
        console.log("seller options", optionsProducts);
    }
    else if(currentUser.role === "Admin")
        optionsProducts = products;

    for(let i=0; i<optionsProducts.length; i++)
    {
        let option = document.createElement("option");
        option.value = optionsProducts[i].id;
        option.innerText = optionsProducts[i].productTitle;

        selectDiv.appendChild(option);
    }
}

function getSelllerProducts(sellerId)
{
    let sellerProducts = [];
    for(let i =0; i<products.length; i++)
    {
        if(products[i].sellerId === sellerId)
            sellerProducts.push(products[i]);
    }
    return sellerProducts;
}
