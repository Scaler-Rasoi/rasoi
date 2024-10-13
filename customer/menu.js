const incrementButtons = document.querySelectorAll(".increment");
        const decrementButtons = document.querySelectorAll(".decrement");

        // Attach event listeners to each increment button
        incrementButtons.forEach((button) => {
            button.addEventListener("click", () => {
                // Get the sibling span element that displays the current number
                const numberDisplay = button.previousElementSibling;
                let currentNumber = parseInt(numberDisplay.textContent);
                currentNumber += 1;  // Increment the number
                numberDisplay.textContent = currentNumber;  // Update the display
            });
        });

        // Attach event listeners to each decrement button
        decrementButtons.forEach((button) => {
            button.addEventListener("click", () => {
                // Get the sibling span element that displays the current number
                const numberDisplay = button.nextElementSibling;
                let currentNumber = parseInt(numberDisplay.textContent);
                if (currentNumber > 1) {
                    currentNumber -= 1;  // Decrement the number, ensuring it stays >= 1
                    numberDisplay.textContent = currentNumber;  // Update the display
                }
            });
        });


// open items by their category
document.addEventListener('DOMContentLoaded', function() {
    const categorySelector = document.getElementById('category-selector');
    const menuItems = document.querySelectorAll('.menu-items .item');

    function filterItems(category) {
        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    categorySelector.addEventListener('change', function() {
        filterItems(this.value);
    });

    // Initially show all items
    filterItems('all');
});