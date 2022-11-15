

// Burger handler


(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.add ('.header-nav_active');
    });
}());




