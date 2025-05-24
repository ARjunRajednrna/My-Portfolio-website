
// Video interactions
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
    const hoverSign = video.parentElement.querySelector('.hover-sign');
    video.addEventListener('mouseover', function() {
        video.play();
        if (hoverSign) hoverSign.classList.add("active");
    });
    video.addEventListener('mouseout', function() {
        video.pause();
        if (hoverSign) hoverSign.classList.remove("active");
    });
});

// Sidebar and navigation
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('header ul a, .sidebar ul a');

menu.addEventListener("click", function() {
    sideBar.classList.remove('close-sidebar');
    sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function() {
    sideBar.classList.add("close-sidebar");
    sideBar.classList.remove("open-sidebar");
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        // Close sidebar on link click (for mobile)
        if (sideBar.classList.contains('open-sidebar')) {
            sideBar.classList.add('close-sidebar');
            sideBar.classList.remove("open-sidebar");
        }
    });
});

// Slider continuous loop
const sliderList = document.querySelector('.slider .list');
const sliderItems = document.querySelectorAll('.slider .item');
const totalItems = sliderItems.length / 2;
const itemWidth = 100;
const gap = 20;
const totalWidth = (itemWidth + gap) * totalItems;

function resetSlider() {
    sliderList.style.transition = 'none';
    sliderList.style.transform = 'translateX(0)';
    setTimeout(() => {
        sliderList.style.transition = 'transform 20s linear';
        sliderList.style.transform = `translateX(-${totalWidth}px)`;
    }, 50);
}

sliderList.addEventListener('transitionend', () => {
    if (Math.abs(parseFloat(sliderList.style.transform.replace('translateX(', '').replace('px)', ''))) >= totalWidth) {
        resetSlider();
    }
});

resetSlider();

// Contact Me button in hero section
const contactButton = document.querySelector('.hero-info button');
contactButton.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector('.contact-box');
    if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});