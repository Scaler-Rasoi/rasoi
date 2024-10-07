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