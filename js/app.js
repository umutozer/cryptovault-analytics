document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Sticky Header Logic
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('#navMenu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Basic styling for active menu if not in CSS
        if(navMenu.classList.contains('active')) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = '#fff';
            navMenu.style.padding = '2rem';
            navMenu.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        } else {
            navMenu.style.display = '';
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navMenu.style.display = '';
            }
        });
    });

    // Hero Chart Initialization (Chart.js)
    const ctx = document.getElementById('heroChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'],
            datasets: [{
                label: 'Portföy Değeri ($)',
                data: [12000, 19000, 15000, 25000, 22000, 32000],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { display: false },
                x: { grid: { display: false } }
            }
        }
    });

    // Footer Auto Year Update
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});