import { Navbar } from '../components/Navbar.js';
import { HeroSection } from '../components/HeroSection.js';
import { ClientLogos } from '../components/ClientLogos.js';

document.getElementById('app').innerHTML = `
  ${Navbar()}
  ${HeroSection()}
  ${ClientLogos()}
`;

// Mobile Menu Toggle
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  let isMenuOpen = false;

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        // Open menu
        mobileMenu.style.transform = 'translateY(0)';
        mobileMenu.style.opacity = '1';
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        // Close menu
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.opacity = '0';
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    // Close menu when clicking on a menu item
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.opacity = '0';
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
}

// Dynamic Text Carousel - Initialize after content is rendered
function initDynamicTextCarousel() {
  const dynamicText = document.getElementById('dynamicText');
  if (dynamicText) {
    const phrases = ['Handled Effortlessly', 'On Time', 'At Scale'];
    let currentIndex = 1; // Start at index 1 since first phrase is already displayed
    
    function updateText() {
      dynamicText.style.opacity = '0';
      dynamicText.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        dynamicText.textContent = phrases[currentIndex];
        dynamicText.style.opacity = '1';
        dynamicText.style.transform = 'translateY(0)';
        currentIndex = (currentIndex + 1) % phrases.length;
      }, 300);
    }
    
    // Set initial styles for perfect alignment
    dynamicText.style.transition = 'all 0.3s ease-in-out';
    dynamicText.style.display = 'inline';
    dynamicText.style.verticalAlign = 'baseline';
    dynamicText.style.lineHeight = 'inherit';
    dynamicText.style.fontSize = 'inherit';
    dynamicText.style.fontWeight = 'inherit';
    
    // Start the carousel after initial delay
    setInterval(updateText, 2000); // Change every 2 seconds
  }
}

// Initialize everything after a short delay to ensure DOM is ready
setTimeout(() => {
  initMobileMenu();
  initDynamicTextCarousel();
}, 100);