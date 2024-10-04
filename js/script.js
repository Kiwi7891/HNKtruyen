// 1. Live search Test
let searchInput = document.querySelector('.search-input');
let liveSearch = document.querySelector('.livesearch');

searchInput.addEventListener('keyup', function() {
    if(searchInput.value !== '') {
        liveSearch.style.display = 'block';
    } else {
        liveSearch.style.display = 'none';
    }
});

// 2. Mobile menu
let mobileBtn = document.querySelector('.mobile-menu-btn');
let mobileClose = document.querySelector('.mobile-menu-close');
let navBar = document.querySelector('.navbar');
let left = window.getComputedStyle(navBar).getPropertyValue('left');
let mobileUserbtn = document.querySelector('.user');
let mobileUser = document.querySelector('.dropdown-content-user');
let display;

mobileUserbtn.addEventListener('click', function() {
    display = window.getComputedStyle(mobileUser).getPropertyValue('display');
    console.log(display);
    if (display === 'none') {
        mobileUser.style.display = 'flex';
        display = 'flex';
    } else if (display === 'flex') {
        mobileUser.style.display = 'none';
        display = 'none';
    }
});

mobileBtn.addEventListener('click', function() {
    navBar.style.display = 'block';
    navBar.style.left = '0';
    mobileBtn.style.display = 'none';
    mobileClose.style.display = 'block';
});

mobileClose.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
    navBar.style.display = 'block';
    navBar.style.left = '-120%';
    mobileClose.style.display = 'none';
    setTimeout(function() {mobileBtn.style.display = 'block';}, 400);
}
console.log(navBar);
console.log(mobileBtn);
console.log(mobileClose);
console.log(window.screen.width);
console.log(5 * window.screen.width);

// 3. Resize window and hidden the close button (Xử lý nút X trên mobile menu)
window.addEventListener('resize', function(event) {
    // closeMobileMenu();
}, true);

// 4. Slider show 
let nomiationWrapper = document.querySelector('.nomination-wrapper');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let marginLeftMain = 0;
let marginLeft = 0;
let count = 0;

function createMarginLeft() {
    if (window.screen.width >= 870) {
        marginLeft = (5 * window.screen.width) * 0.03;
        count = 5;
    } else if (window.screen.width <= 380) {
        marginLeft = (5 * window.screen.width) * 0.05;
        count = 10;
    } else if (window.screen.width <= 500) {
        marginLeft = (5 * window.screen.width) * 0.06;
        count = 8;
    } else if (window.screen.width <= 869) {
        marginLeft = (5 * window.screen.width) * 0.05;
        count = 8;
    }
    marginLeft = - marginLeft;
    return marginLeft;
}

marginLeft = createMarginLeft();

window.addEventListener('resize', function(event) {
    // marginLeft = createMarginLeft();
    nomiationWrapper.style.marginLeft = 0;
});

next.addEventListener('click', function(event) {
    marginLeftMain = Number(parseFloat(window.getComputedStyle(nomiationWrapper).getPropertyValue('margin-left')));
    if (marginLeftMain <= (marginLeft * count) && marginLeftMain != 0) {
        nomiationWrapper.style.marginLeft = 0;
    } else {
        nomiationWrapper.style.marginLeft = marginLeftMain + marginLeft + 'px';
    }  
});

prev.addEventListener('click', function(event) {
    marginLeftMain = Number(parseFloat(window.getComputedStyle(nomiationWrapper).getPropertyValue('margin-left')));
    if (marginLeftMain < 0) {
        nomiationWrapper.style.marginLeft = marginLeftMain - marginLeft + 'px';
    }
});

setInterval(function() {
    marginLeftMain = Number(parseFloat(window.getComputedStyle(nomiationWrapper).getPropertyValue('margin-left')));
    if (marginLeftMain <= (marginLeft * count) && marginLeftMain != 0) {
        nomiationWrapper.style.marginLeft = 0;
    } else {
        nomiationWrapper.style.marginLeft = marginLeftMain + marginLeft + 'px';
    } 
}, 3000);