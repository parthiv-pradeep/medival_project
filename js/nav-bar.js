const xmark = document.getElementById('nav-bar-xmark');
const navBar = document.getElementById('nav-bar-respo');
const hamMenu = document.getElementById('hamburger-menu');


hamMenu.addEventListener('click',
    function() {
        navBar.style.display = 'block'
    }
)


xmark.addEventListener('click', 
    function() {
        navBar.style.display = 'none';
    }
)