const res_navItems = document.querySelector(".res_navItems")
const navButton    = document.querySelector('.navButton');
const openIcon     = document.querySelector('.open_nav');
const closeIcon    = document.querySelector('.close_nav');

// default form of navbutton 
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.open_nav').style.display = 'inline';
    document.querySelector('.close_nav').style.display = 'none';
});

// nav button click event 
navButton.addEventListener('click', () => {
    res_navItems.classList.toggle('active');
    const isOpen = res_navItems.classList.contains('active');

    openIcon.style.display = isOpen ? 'none' : 'inline';
    closeIcon.style.display = isOpen ? 'inline' : 'none';
    res_navItems.style.display = isOpen ? "flex" : "none";
});
