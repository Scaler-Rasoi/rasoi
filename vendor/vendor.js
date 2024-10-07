let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


const navButtons = document.querySelectorAll('.navbar button');
        const pages = document.querySelectorAll('.page');

        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const pageId = button.id.replace('Btn', 'Page');
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById(pageId).classList.add('active');
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Toggle button functionality for menu items
        const menuItems = document.querySelectorAll('#menuPage .item button');
        menuItems.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent === '+') {
                    button.textContent = '-';
                    button.classList.add('remove');
                } else {
                    button.textContent = '+';
                    button.classList.remove('remove');
                }
            });
        });

        // function adjustDivHeights(className) {
        //     // Select all elements with the given class
        //     const elements = document.querySelectorAll(`.${className}`);
            
        //     if (elements.length === 0) return; // Exit if no elements found
            
        //     // Find the maximum height
        //     const maxHeight = Math.max(...Array.from(elements).map(element => element.getBoundingClientRect().height));
            
        //     // Set all elements to the maximum height
        //     elements.forEach(element => {
        //         element.style.height = `${maxHeight}px`;
        //     });
        // }
        
        // // Usage
        // document.addEventListener('DOMContentLoaded', function() {
        //     adjustDivHeights('order');
        // });
        
        // // If content might change after initial load, you can also call it on window resize
        // window.addEventListener('resize', function() {
        //     adjustDivHeights('order');
        // });
        
        // // Call adjustDivHeights more frequently if content changes dynamically
        // // For example, if you're using a library like jQuery, you can use the following code:
        // // $(document).on('DOMSubtreeModified', '.order', function() {
        // //     adjustDivHeights('order');
        // // });