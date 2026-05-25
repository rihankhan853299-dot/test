// Selecting DOM Elements
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('theme-toggle');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

/* ==================== 1. STICKY GLASSMORPHISM ON SCROLL ==================== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
});

/* ==================== 2. RIGHT SIDE SLIDE DRAWER TOGGLE ==================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    
    // Drawer open hone par body scrolling block karne ke liye logic
    if (navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Kisi nav item link par click karne par drawer automatically close ho jaye
document.querySelectorAll('.nav-link').forEach(link => {
    if(!link.classList.contains('dropdown-toggle')) {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    }
});

// Agar user drawer ke bahar click kare toh menu band ho jaye
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('open')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

/* ==================== 3. MOBILE DROPDOWN TOGGLE (ACCORDION) ==================== */
dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    }
});

/* ==================== 4. LIGHT / DARK MODE THEME SWAPPER ==================== */
const storedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', storedTheme);

if (storedTheme === 'dark') {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

/* ==================== 5. ACTIVE MENU LINK HIGHLIGHTER ==================== */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});