const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Optional: Alert for search form submission
document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = this.querySelector('input').value;
    if (query) {
        alert(`Searching for: "${query}"\n(This is a demo and search functionality is not implemented.)`);
    } else {
        alert('Please enter a product to search for.');
    }
});