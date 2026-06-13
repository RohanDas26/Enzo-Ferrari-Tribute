// Custom Cursor Logic
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 5 + 'px';
    cursor.style.top = e.clientY - 5 + 'px';
    
    // Slight delay for the blur for a smooth trailing effect
    setTimeout(() => {
        cursorBlur.style.left = e.clientX - 75 + 'px';
        cursorBlur.style.top = e.clientY - 75 + 'px';
    }, 50);
});

// Add hover effect to links and buttons
const interactables = document.querySelectorAll('a, .explore-btn, .stat-box, .timeline-item');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = '1px solid #ff2800';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = '#ff2800';
        cursor.style.border = 'none';
    });
});

// Scroll Reveal Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, observerOptions);

// Observe all elements with the 'hidden' class
document.querySelectorAll('.hidden').forEach((element) => {
    observer.observe(element);
});

// Trigger initial reveal for the hero section
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.hero-section').classList.add('show');
    }, 100);
});
