const data= [
    {
        id : 0,
        img : 'images/redmiK20.jpg',
        name : 'Redmi K20',
        price : 19000,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 1,
        img : 'images/samGalaxynote20.jpg',
        name : 'Samsung Galaxy Note 20',
        price : 30000,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 2,
        img : 'images/oppofindX2.jpg',
        name : 'OPPO Find X2',
        price : 24000,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 3,
        img : 'images/realmeX20pro.jpg',
        name : 'Realme X50 Pro',
        price : 28500,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 4,
        img : 'images/redminote8.jpg',
        name : 'Redmi Note 8',
        price : 20000,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 5,
        img : 'images/redminote9.jpg',
        name : 'Redmi Note 9',
        price : 22000,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 6,
        img : 'images/redmi8.jpg',
        name : 'Redmi 8A Dual',
        price : 16000,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 7,
        img : 'images/redmi9.jpg',
        name : 'Redmi 9',
        price : 10000,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    // Realme Phones
    {
        id : 8,
        img : 'images/realme C11.jpg',
        name : 'Realme C11 (Rich Green, 32 GB) (2 GB RAM)',
        price : 17000,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 9,
        img : 'images/realmeNarzo.jpg',
        name : 'Realme Narzo 20 (Victory Blue, 4 GB RAM, 128 GB Storage)',
        price : 21000,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 10,
        img : '/images/realme7i.jpg',
        name : 'Realme 7i (4 GB RAM /64 GB Storage)',
        price : 33000,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 11,
        img : 'images/realmeC15.jpg',
        name : 'Realme C15 (Power Silver, 4GB RAM, 64GB Storage)',
        price : 35000,
        save : 40,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    // Oppo Phones
    {
        id : 12,
        img : 'images/oppoA31.jpg',
        name : 'Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage)',
        price : 28000,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 13,
        img : 'images/oppA5s.jpg',
        name : 'OPPO A5S (Black, 3GB RAM, 32GB Storage)',
        price : 19000,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 14,
        img : 'images/oppoF17.jpg',
        name : 'OPPO F17 Pro (Matte Black, 8GB RAM, 128GB Storage)',
        price : 30000,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 15,
        img : 'images/oppoA15.jpg',
        name : 'OPPO A15 (Dynamic Black, 3GB RAM, 32GB Storage)',
        price : 27500,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    // Samsung Phones
    {
        id : 16,
        img : 'images/samgalaxyM01.jpg',
        name : 'Samsung Galaxy M01 (Blue, 3GB RAM, 32GB Storage)',
        price : 31000,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 17,
        img : 'images/samGalaxyM21.jpg',
        name : 'Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Storage)',
        price : 40000,
        save : 45,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 18,
        img : 'images/samsGalaxyNote20.jpg',
        name : 'Samsung Galaxy Note 20',
        price : 29000,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    },
    {
        id : 19,
        img : 'images/samGalaxys20+.jpg',
        name : 'Samsung Galaxy S20 +',
        price : 35000,
        save : 40,
        delievery : 'In 3 - 4 days',
        itemInCart: false,
        quantity: 1
    }
];

let cartList=[]; //array to store cart lists

// Create cart counter badge
function createCartBadge() {
    const cartIcon = document.getElementById('cart');
    if (!cartIcon) return;
    
    // Remove existing badge if any
    const existingBadge = cartIcon.querySelector('.cart-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    // Create new badge
    const cartBadge = document.createElement('span');
    cartBadge.className = 'cart-badge';
    cartBadge.textContent = '0';
    cartIcon.appendChild(cartBadge);
    
    // Update badge
    updateCartBadge();
}

// Update cart badge
function updateCartBadge() {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        const totalQuantity = cartList.reduce(
            (total, item) => total + item.quantity, 0
        );

        cartBadge.textContent = totalQuantity;
        cartBadge.style.display = totalQuantity > 0 ? 'block' : 'none';

    }
}


var i;
var detail = document.querySelectorAll('.card-item');
var detailsImg = document.getElementById('details-img');
var detailTitle = document.getElementById('detail-title');
var detailPrice = document.getElementById('detail-price');
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy');

if (back) {
    back.addEventListener('click', refreshPage);
}

var addToCarts = document.querySelectorAll('#add-to-cart');
var cart = document.getElementById('cart');

// click event to display cart page
if (cart) {
    cart.addEventListener('click', displayCart);
}

var carts = document.getElementById('carts');
var currentItemId = null;

//click events to add items to cart from details page
if (carts) {
    carts.addEventListener('click', function() {
        if (currentItemId !== null) {
            addToCart(currentItemId);
        }
    });
}

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
if (home) {
    home.addEventListener('click', hideCart);
}

//events on dynamically created element to remove items from list
document.addEventListener('click', function(e) {
    if(e.target.id === 'remove') {
        var cartItem = e.target.closest('.cart-list');
        if (cartItem) {
            var itemId = cartItem.id;
            removeFromCart(parseInt(itemId));
        }
    }
    
    // Handle quantity increase
    if(e.target.classList.contains('increase-qty')) {
        const cartItem = e.target.closest('.cart-list');
        if (cartItem) {
            const itemId = parseInt(cartItem.id);
            increaseQuantity(itemId);
        }
    }
    
    // Handle quantity decrease
    if(e.target.classList.contains('decrease-qty')) {
        const cartItem = e.target.closest('.cart-list');
        if (cartItem) {
            const itemId = parseInt(cartItem.id);
            decreaseQuantity(itemId);
        }
    }
});

// Initialize event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all add-to-cart buttons
    initAddToCartButtons();
    
    // Initialize product detail clicks
    initProductDetailClicks();
    
    // Create cart badge
    createCartBadge();
    
    // Update prices from $ to ₹
    updatePrices();
});

// Initialize add-to-cart buttons for ALL items
function initAddToCartButtons() {
    // Remove existing event listeners by cloning
    const allButtons = document.querySelectorAll('#add-to-cart');
    allButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });
    
    // Add event listeners to all buttons
    const freshButtons = document.querySelectorAll('#add-to-cart');
    freshButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const itemContainer = this.closest('.item-container');
            if (itemContainer) {
                const itemId = parseInt(itemContainer.id);
                if (!isNaN(itemId)) {
                    addToCart(itemId);
                }
            }
        });
    });
}

// Initialize product detail clicks for ALL items
function initProductDetailClicks() {
    // Remove existing event listeners by cloning
    const allCardItems = document.querySelectorAll('.card-item');
    allCardItems.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
    });
    
    // Add event listeners to all card items
    const freshCardItems = document.querySelectorAll('.card-item');
    freshCardItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemContainer = this.closest('.item-container');
            if (itemContainer) {
                const itemId = parseInt(itemContainer.id);
                if (!isNaN(itemId)) {
                    handleDetail(itemId);
                }
            }
        });
    });
}

// Update prices from $ to ₹
function updatePrices() {
    // Update main page prices
    const priceElements = document.querySelectorAll('#item-price');
    priceElements.forEach(element => {
        if (element.textContent.includes('$')) {
            element.textContent = element.textContent.replace('$', '₹');
        }
    });
    
    // Update details page
    if (detailPrice && detailPrice.textContent.includes('$')) {
        detailPrice.textContent = detailPrice.textContent.replace('$', '₹');
    }
}

// details function
function handleDetail(itemId) {
    if (itemId >= 0 && itemId < data.length) {
        detailsPage.style.display = 'block';
        currentItemId = itemId;
        detailsImg.src = data[itemId].img;
        detailTitle.textContent = data[itemId].name;
        detailPrice.textContent = 'Price : ₹ ' + data[itemId].price;
        youSave.textContent = 'You save : (₹ ' + data[itemId].save + ')';
    }
}

// add item to the cart
function addToCart(id) {
    // Check if item is already in cart
    const existingItemIndex = cartList.findIndex(item => item.id === id);
    
    if (existingItemIndex === -1) {
        // Add new item to cart
        const newItem = {...data[id], quantity: 1};
        cartList.push(newItem);
        data[id].itemInCart = true;
        
        // Update cart badge
        updateCartBadge();
        
        // Show message
        alert(`Item added to your cart!\n\nTotal items in cart: ${cartList.length}`);
    } else {
        // Increase quantity of existing item
        cartList[existingItemIndex].quantity += 1;
        
        // Update cart badge
        updateCartBadge();
        
        // Show message
        alert(`Quantity increased!\n\n${cartList[existingItemIndex].name}\nQuantity: ${cartList[existingItemIndex].quantity}`);
    }
    
    // If cart page is open, update it
    if (document.getElementById('cart-container').style.display === 'block') {
        addItem();
    }
}

// Increase quantity
function increaseQuantity(itemId) {
    const itemIndex = cartList.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cartList[itemIndex].quantity += 1;
        updateCartBadge();
        addItem();
    }
}

// Decrease quantity
function decreaseQuantity(itemId) {
    const itemIndex = cartList.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        if (cartList[itemIndex].quantity > 1) {
            cartList[itemIndex].quantity -= 1;
            updateCartBadge();
            addItem();
        } else {
            // If quantity is 1, remove the item
            removeFromCart(itemId);
        }
    }
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none';
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display = "block";
    document.getElementById('cart-container').style.display = "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display = "none";
    document.getElementById('details-page').style.display = "none";
    document.getElementById('cart-container').style.display = "block";
    
    if(cartList.length === 0){
        document.getElementById('cart-with-items').style.display = "none";
        document.getElementById('empty-cart').style.display = "block";
    }
    else{
        document.getElementById('empty-cart').style.display = "none";
        document.getElementById('cart-with-items').style.display = "block";
        addItem();
    }
}

//add item to the cart display
function addItem(){
    let totalAmount = 0;
    let totalItems = 0;
    let totalSaving = 0;
    
    var clrNode = document.getElementById('item-body');
    if (clrNode) {
        clrNode.innerHTML = '';
        
        cartList.forEach((cart) => {
            const itemTotal = cart.price * cart.quantity;
            const saveTotal = cart.save * cart.quantity;
            
            totalAmount += itemTotal;
            totalSaving += saveTotal;
            totalItems += cart.quantity;

            var tempCart = document.createElement('div');
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img;
            tempCart.appendChild(listImg);

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName);

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = '₹ ' + cart.price + ' × ' + cart.quantity + ' = ₹ ' + (cart.price * cart.quantity);
            tempCart.appendChild(listPay);

            // Quantity controls
            var quantityContainer = document.createElement('div');
            quantityContainer.setAttribute('class','quantity-container');
            
            var decreaseBtn = document.createElement('button');
            decreaseBtn.setAttribute('class','decrease-qty');
            decreaseBtn.innerHTML = '-';
            
            var quantityDisplay = document.createElement('span');
            quantityDisplay.setAttribute('class','quantity-display');
            quantityDisplay.innerHTML = cart.quantity;
            
            var increaseBtn = document.createElement('button');
            increaseBtn.setAttribute('class','increase-qty');
            increaseBtn.innerHTML = '+';
            
            quantityContainer.appendChild(decreaseBtn);
            quantityContainer.appendChild(quantityDisplay);
            quantityContainer.appendChild(increaseBtn);
            
            tempCart.appendChild(quantityContainer);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            clrNode.appendChild(tempCart);
        });
        
        // Update totals display
        document.getElementById('total-amount').innerHTML = 'Total Amount : ₹ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : ₹ ' + totalSaving;
        document.getElementById('total').style.display = "block";
    }
}

//remove item from the cart
function removeFromCart(itemId){
    if (data[itemId]) {
        data[itemId].itemInCart = false;
    }
    
    cartList = cartList.filter((list) => list.id != itemId);
    
    // Update cart badge
    updateCartBadge();
    
    // Update cart display
    addItem();
    
    if(cartList.length === 0){
        document.getElementById('cart-with-items').style.display = "none";
        document.getElementById('empty-cart').style.display = "block";
        document.getElementById('total').style.display = "none";
    }
    
    // Show message
    alert('Item removed from cart!\n\nRemaining items in cart: ' + cartList.length);
}












// Add these variables at the top with other variables (after cartList declaration)
let orderHistory = [];

// Add this function to show order confirmation
function showOrderConfirmation() {
    if (cartList.length === 0) {
        alert('Your cart is empty! Please add items to place an order.');
        return;
    }
    
    // Calculate order summary
    const totalQuantity = cartList.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartList.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalSave = cartList.reduce((total, item) => total + (item.save * item.quantity), 0);
    
    // Create order object
    const order = {
        items: [...cartList],
        totalAmount: totalAmount,
        totalQuantity: totalQuantity,
        totalSave: totalSave,
        orderId: 'ORD' + Date.now(),
        date: new Date().toLocaleString()
    };
    
    // Save to order history
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    // Update order details in modal
    document.getElementById('order-summary').textContent = 
        `Order #${order.orderId} - ${totalQuantity} item${totalQuantity !== 1 ? 's' : ''} ordered`;
    document.getElementById('order-total-display').textContent = 
        `Total Amount: ₹ ${totalAmount}`;
    document.getElementById('order-savings').textContent = 
        `You saved: ₹ ${totalSave}`;
    
    // Show confirmation modal
    document.getElementById('order-confirmation').style.display = 'flex';
    
    // Clear the cart after order
    cartList = [];
    
    // Update all item states
    data.forEach(item => {
        item.itemInCart = false;
        item.quantity = 1;
    });
    
    // Update cart display
    updateCartBadge();
    
    // Hide cart and show empty cart message
    if (document.getElementById('cart-container').style.display === 'block') {
        document.getElementById('cart-with-items').style.display = 'none';
        document.getElementById('empty-cart').style.display = 'block';
        document.getElementById('total').style.display = 'none';
    }
}

// Add this function to close confirmation modal
function closeOrderConfirmation() {
    document.getElementById('order-confirmation').style.display = 'none';
    hideCart(); // Go back to main page
}

// Update the addItem function to include order button
function addItem(){
    let totalAmount = 0;
    let totalItems = 0;
    let totalSaving = 0;
    
    var clrNode = document.getElementById('item-body');
    if (clrNode) {
        clrNode.innerHTML = '';
        
        cartList.forEach((cart) => {
            const itemTotal = cart.price * cart.quantity;
            const saveTotal = cart.save * cart.quantity;
            
            totalAmount += itemTotal;
            totalSaving += saveTotal;
            totalItems += cart.quantity;

            var tempCart = document.createElement('div');
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img;
            tempCart.appendChild(listImg);

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName);

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = '₹ ' + cart.price + ' × ' + cart.quantity + ' = ₹ ' + (cart.price * cart.quantity);
            tempCart.appendChild(listPay);

            // Quantity controls
            var quantityContainer = document.createElement('div');
            quantityContainer.setAttribute('class','quantity-container');
            
            var decreaseBtn = document.createElement('button');
            decreaseBtn.setAttribute('class','decrease-qty');
            decreaseBtn.innerHTML = '-';
            
            var quantityDisplay = document.createElement('span');
            quantityDisplay.setAttribute('class','quantity-display');
            quantityDisplay.innerHTML = cart.quantity;
            
            var increaseBtn = document.createElement('button');
            increaseBtn.setAttribute('class','increase-qty');
            increaseBtn.innerHTML = '+';
            
            quantityContainer.appendChild(decreaseBtn);
            quantityContainer.appendChild(quantityDisplay);
            quantityContainer.appendChild(increaseBtn);
            
            tempCart.appendChild(quantityContainer);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            clrNode.appendChild(tempCart);
        });
        
        // Update totals display
        document.getElementById('total-amount').innerHTML = 'Total Amount : ₹ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : ₹ ' + totalSaving;
        document.getElementById('total').style.display = "block";
        
        // Add order button if it doesn't exist
        if (!document.getElementById('order-btn')) {
            const orderBtn = document.createElement('button');
            orderBtn.id = 'order-btn';
            orderBtn.textContent = 'Place Order';
            orderBtn.addEventListener('click', showOrderConfirmation);
            document.getElementById('total').appendChild(orderBtn);
        }
    }
}

// Update the DOMContentLoaded function to include order history loading
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Load order history from localStorage
    const savedHistory = localStorage.getItem('orderHistory');
    if (savedHistory) {
        orderHistory = JSON.parse(savedHistory);
    }
    
    // Add event listener for close confirmation button
    document.getElementById('close-confirmation').addEventListener('click', closeOrderConfirmation);
    
    // ... rest of existing code ...
});

// Add keyboard event listener for Escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeOrderConfirmation();
    }
    
    // Ctrl+Enter to place order when cart is open
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (document.getElementById('cart-container').style.display === 'block' && 
            document.getElementById('order-confirmation').style.display !== 'flex') {
            e.preventDefault();
            showOrderConfirmation();
        }
    }
});











