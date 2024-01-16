  
        window.addEventListener("load", function(){
            let nextProduct = document.getElementById("nextProduct");
            let prevProduct = document.getElementById("prevProduct");
            let incrementBtn = document.getElementById("incrementBtn");
            let decrementBtn = document.getElementById("decrementBtn");
            let floatingDecrementBtn = document.getElementById("floatingDecrementBtn");
            let floatingIncrementBtn = document.getElementById("floatingIncrementBtn");
            

            prevProduct.addEventListener("mouseenter", toggleProductPreviewDiv);
            nextProduct.addEventListener("mouseenter", toggleProductPreviewDiv);

            prevProduct.addEventListener("mouseleave", toggleProductPreviewDiv);
            nextProduct.addEventListener("mouseleave", toggleProductPreviewDiv);

            incrementBtn.addEventListener("click", incrementCounter);
            decrementBtn.addEventListener("click", decrementCounter);

            floatingIncrementBtn.addEventListener("click", incrementCounter);
            floatingDecrementBtn.addEventListener("click", decrementCounter);

            window.addEventListener("scroll", showOrHideFloatingDiv);
            //dispalyProductInfo();
        });

        

        const products = [
          {
            name: 'Product 1',
            imageSrc: 'images/product1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 29.99,
            size: 'Medium',
            category: 'MEN',
            reviews: [
              { user: 'User1', rating: 4, comment: 'Great product!' },
              { user: 'User2', rating: 5, comment: 'Excellent quality.' }
            ]
          },
          {
            name: 'Product 2',
            imageSrc: 'images/product2.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna        aliqua.',
            price: 49.99,
            size: 'Large',
            category: 'MEN',
            reviews: [
              { user: 'User3', rating: 3, comment: 'Nice design.' },
              { user: 'User4', rating: 4, comment: 'Comfortable to wear.' }
            ]
          },
          {
            name: 'Product 3',
            imageSrc: 'images/product3.jpg',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco        laboris.',
            price: 39.99,
            size: 'Small',
            category: 'MEN',
            reviews: [
              { user: 'User5', rating: 5, comment: 'Perfect fit!' },
              { user: 'User6', rating: 4, comment: 'Durable and stylish.' }
            ]
          }
        ];

        let currentProductIndex = 1;
        let imageContainer = document.querySelector("#product-photo>div");
        let productImage = document.querySelector("#product-photo>div>img");
        let count = 1;

        productImage.addEventListener("mousemove", function(e){

            let xPercent = (e.clientX - imageContainer.offsetLeft) / imageContainer.offsetWidth * 100;

            let yPercent = (e.clientY - imageContainer.offsetTop) / imageContainer.offsetHeight * 100;
            
            productImage.style.transform = 'translate(-' + xPercent + '%, -' + yPercent + '%) scale(2)';
        });

        imageContainer.addEventListener('mouseleave', function () {
            productImage.style.transform = 'translate(0, 0) scale(1)';
    });

    function dispalyProductInfo(){
        let productInfoDiv = document.querySelector("#product-info");
        let category = document.createElement("span");
        let pName = document.createElement("h2");
        let pPrice = document.createElement("h3");
        let pDesc1 = document.createElement("p");
        let pDesc2 = document.createElement("p");
        let buttonsDiv = document.createElement("div");
        let line = document.createElement("hr");
        let line2 = document.createElement("hr");

        category.innerText = products[currentProductIndex].category;
        pName.innerText = products[currentProductIndex].name;
        pPrice.innerText = ` $ ${products[currentProductIndex].price} &free shipping `;
        pDesc1.innerText = products[currentProductIndex].description;
        pDesc2.innerText = products[currentProductIndex].description;
        buttonsDiv.innerHTML = createCountButton();

        productInfoDiv.append(category, pName, pPrice, pDesc1, pDesc2, buttonsDiv, line, category, line2);
    }

    function createCountButton() {
    let incrementButton = document.createElement("button");
    let decrementButton = document.createElement("button");
    let countContainer = document.createElement("input");
    let buttonsDiv = document.createElement("div");


    let counterDiv = `
    <div class="d-flex align-items-center container-fluid">
                <div class="">
                    <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button" id="decrementBtn">-</button>
                        <input type="text" class="form-control text-center" value="0" id="countDisplay" readonly>
                        <button class="btn btn-outline-secondary" type="button" id="incrementBtn">+</button>
                    </div>
                </div>
                
                <div class="mx-4">
                    <button class="btn btn-outline-secondary">
                        Add To Cart
                    </button>
                </div>
            </div>
    
    `;

    

    // Set classes for styling
    buttonsDiv.classList.add("count-container");
    countContainer.classList.add("count-output");

    incrementButton.innerText = "+";
    decrementButton.innerText = "-";
    let counter = 1;

    buttonsDiv.append(decrementButton, countContainer, incrementButton);

    return counterDiv;
}

    function displayFloatingDiv()
    {

    }
    
    function showOrHideFloatingDiv(){
        let triggerElement = document.getElementById("add-to-cart-btn");
        let triggerElementPosition = triggerElement.getBoundingClientRect().bottom;

        if(triggerElementPosition < 0)
        {
            document.getElementById("bottom-product-counter").classList.remove("d-none");
        }
        else
        document.getElementById("bottom-product-counter").classList.add("d-none");
    }

    function toggleProductPreviewDiv(){
        let previewDiv = document.getElementById("product-preview-div");
        previewDiv.classList.toggle("d-none");
    }

    function incrementCounter(){
        if(count < 99)
            count++;
        updateCounterDisplay();
    }

    function decrementCounter(){
        if(count > 1)
            count--;
        updateCounterDisplay();
    }

    function updateCounterDisplay(){
        document.getElementById("countDisplay").value = count;
        document.getElementById("floatingCountDisplay").value = count;
    }
