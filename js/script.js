// Typing effect for the typing-text class
const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
const typingSpeed = 50; // Adjust the speed as needed

let i = 0;
typingText.textContent = '';

setInterval(() => {
    if (i < text.length) {
        typingText.textContent += text[i];
        i++;
    }
}, typingSpeed);

// Add event listener to the navlist items
const navlistItems = document.querySelectorAll('.navlist li');

navlistItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navlistItems.forEach((item) => {
            item.classList.remove('active');
        });
        // Add active class to the clicked item
        item.classList.add('active');
    });
});

// Add event listener to the social icons
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Smooth scrolling effect
const scrollLinks = document.querySelectorAll('.navlist a');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        const section = document.querySelector(id);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
