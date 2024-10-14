document.addEventListener('DOMContentLoaded', function() {    
    const menuElement = document.querySelector('.menu-items');
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total h3');
    const categorySelector = document.getElementById('category-selector');

    let cart = {};
    let total = 0;

    // Add event listener for menu items
    menuElement.addEventListener('click', function(e) {
        if (e.target.id === 'menu') {
            const menuItem = e.target.closest('.item');
            const itemName = menuItem.textContent.trim().replace('+', '');
            addToCart(itemName);
            menuItem.style.display = 'none'; // Hide the item from the menu
        }
    });

    // Add event listener for cart items (increment and decrement)
    cartItems.addEventListener('click', function(e) {
        const cartItem = e.target.closest('.item');
        const itemName = cartItem.querySelector('.item-name').textContent.trim();
        if (e.target.classList.contains('increment')) {
            addToCart(itemName);
        } else if (e.target.classList.contains('decrement')) {
            removeFromCart(itemName);
        }
    });

    // Add event listener for category selector
    categorySelector.addEventListener('change', function() {
        const selectedCategory = this.value;
        filterMenuItems(selectedCategory);
    });

    function addToCart(item) {
        if (cart[item]) {
            cart[item]++;
        } else {
            cart[item] = 1;
        }
        updateCart();
    }

    function removeFromCart(item) {
        if (cart[item]) {
            cart[item]--;
            if (cart[item] === 0) {
                delete cart[item];
                // Add the item back to the menu
                showMenuItem(item);
            }
        }
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        total = 0;

        for (let item in cart) {
            if (cart[item] > 0) {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                itemElement.innerHTML = `
                    <span class="item-name">${item}</span>
                    <div class="quantity">
                        <button class="decrement">-</button>
                        <span class="number">${cart[item]}</span>
                        <button class="increment">+</button>
                    </div>
                `;
                cartItems.appendChild(itemElement);
                total += cart[item] * 5; // Assuming each item costs $5
            }
        }
        totalElement.textContent = `TOTAL: $${total}`;
    }

    function filterMenuItems(category) {
        const items = menuElement.querySelectorAll('.item');
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function showMenuItem(item) {
        const menuItems = menuElement.querySelectorAll('.item');
        menuItems.forEach(menuItem => {
            if (menuItem.textContent.trim().replace('+', '') === item) {
                menuItem.style.display = 'flex';
            }
        });
    }

    // Initially show all items
    filterMenuItems('all');
});
