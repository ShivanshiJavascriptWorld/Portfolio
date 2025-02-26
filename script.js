

const customCursor = document.getElementById('custom-cursor');

// Mousemove Event Listener to Move Custom Cursor
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    customCursor.style.left = mouseX + 'px';
    customCursor.style.top = mouseY + 'px';
});

// Custom Cursor Scaling on Hover
document.querySelectorAll('a, .btn, .social-icons a, .home-img, .experience-box, .navbar a, p, h1, h2, h3, h4, h5, span').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.style.transform = 'scale(1.5)'; // Scale up on hover
        
        // Check if the element contains text (for example, <p>, <h1>, <span>, etc.)
        // if (element.innerText.trim().length > 0 || element.tagName === 'SPAN' || element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'H5') {
            customCursor.style.opacity = '0.2'; // Decrease opacity when hovering over text-containing elements
        // } else {
        //     customCursor.style.opacity = '1'; // Full opacity for elements without text
        // }
    });

    element.addEventListener('mouseleave', () => {
        customCursor.style.transform = 'scale(1)'; // Return to normal size
        customCursor.style.opacity = '1'; // Restore full opacity when leaving
    });
});
