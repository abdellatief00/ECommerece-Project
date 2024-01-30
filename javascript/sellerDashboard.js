let products = [];
let orders =JSON.parse(window.localStorage.getItem("orders")) || [];

let sellerProductsOrders = [];
let ordersByDateObj = {};
let currentUser;
let productsChart = document.getElementById('productChart').getContext('2d');
let totalOrdersChart = document.getElementById('ordersChart').getContext('2d');
let selectedProduct = document.getElementById("productsOptions");

window.addEventListener("load", function(){
    currentUser = getUserFromLocal();
    if(currentUser.role !== 1)
    {
        console.log("not allowed");
        return;
    }
    document.querySelector('.adminImgANDNot').children[1].children[0].src  = currentUser.images;
    document.querySelector('.adminImgANDNot').children[1].children[1].innerText =currentUser.fname+" "+currentUser.lname;

        
    products = getProductsFromLocal();
    let sellerid = JSON.parse(this.window.localStorage.getItem('current_user'));
    let sellerprod = getSelllerProducts(sellerid.id);

    this.document.getElementById('productnum').innerText = sellerprod.length;
    let cou = 0;
    for(let i = 0 ; i < sellerprod.length ; i++){
        cou +=sellerprod[i].stockQuantity;
    }
    this.document.getElementById('itemsinstock').innerText = cou.toFixed(0);
   
    if(currentUser.role === 1)
    {
        let allord = getAndFormatOrders(currentUser.id);
        
        this.document.getElementById('allorders').innerText = allord.length;
    }


   
    //currentUser.role = "Seller";
    // currentUser = {
    //     "id": 1,
    //     "fname": "Abdellatif",
    //     "lname": "Hamed",
    //     "email": "tefa@Gmail.com",
    //     "password": "123",
    //     "age": 24,
    //     "images": [
    //         "images/tefa.png"
    //     ],
    //     "role": "Admin",
    //     "orders": [
    //         1,
    //         2,
    //         3
    //     ],
    //     "favorites": [
    //         ""
    //     ]
    // }
    // console.log(products);
    createOptions(selectedProduct);
    if(currentUser.role === 0)
        sellerProductsOrders = getAndFormatOrders();
    else if(currentUser.role == 1)
        sellerProductsOrders = getAndFormatOrders(currentUser.id);
    //sellerProductsOrders = getAndFormatOrders(currentUser.id);
    
    
    ordersByDateObj = formatOrdersByDate(sellerProductsOrders);
    ordersByDateObj = sortOrdersByDate(ordersByDateObj);
    
    let dummyProductObj = getProductOrdersObj(ordersByDateObj, selectedProduct.value);
    
    drawChart(productsChart, getDateArray(dummyProductObj), getProductQuantities(dummyProductObj),
    getProducTotaltPrice(dummyProductObj, +selectedProduct.value),
    `product ${selectedProduct.value}`
    );
    selectedProduct.addEventListener("change", ()=>{
        
        dummyProductObj = getProductOrdersObj(ordersByDateObj, +selectedProduct.value);
    drawChart(productsChart, getDateArray(dummyProductObj), getProductQuantities(dummyProductObj),
    getProducTotaltPrice(dummyProductObj, +selectedProduct.value),
    `product ${selectedProduct.value}`
    );

    })
    

    
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
function getAndFormatOrders(roleId = 0)
{
    let ordersFormatted = [];
    for(let i = 0; i<orders.length; i++)
{
    for(let j=0; j<orders[i].cart.length; j++)
    {
        if(roleId === 0)
        {
            ordersFormatted.push({
                productId : orders[i].cart[j].productId,
                quantity : orders[i].cart[j].quantity,
                date : orders[i].date.substring(0, 10)
            })
        }
        else
        {
            if(getProductSellerId(+orders[i].cart[j].productId) === roleId)
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
        if(+products[i].id === +productId)
            return i;
    }
    return -1;
}

function getProductPrice(productId)
{
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
            borderColor: '#900000', 
            borderWidth: 2,
            fill: false,
            pointRadius: 1,
            cubicInterpolationMode: "monotone",
            tension: 0.5 
          },
           {
            label: `${label} quantities`,
            data: yAxisQuantities,
            borderColor: '#004590', 
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
    if(products.length==0){return;}
    if(currentUser.role === 1)
    {
        //optionsProducts = getSelllerProducts(currentUser.id);
        optionsProducts = getSelllerProducts(currentUser.id);
    }
    else if(currentUser.role ===0)
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


