import { Navbar } from '../components/Navbar.js';
import { HeroSection } from '../components/HeroSection.js';
import { ClientLogos } from '../components/ClientLogos.js';

document.getElementById('app').innerHTML = `
  ${Navbar()}
  ${HeroSection()}
  ${ClientLogos()}
`;

// Dynamic Text Carousel - Initialize after content is rendered
function initDynamicTextCarousel() {
  const dynamicText = document.getElementById('dynamicText');
  if (dynamicText) {
    const phrases = ['Handled Effortlessly', 'On Time', 'At Scale'];
    let currentIndex = 0;
    
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
    
    // Start the carousel
    setInterval(updateText, 2000); // Change every 2 seconds
  }
}

// Initialize the carousel after a short delay to ensure DOM is ready
setTimeout(initDynamicTextCarousel, 100);