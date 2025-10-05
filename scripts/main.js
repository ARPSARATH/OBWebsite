import { Navbar } from '../components/Navbar.js';
import { HomePage } from '../components/HomePage.js';
import { HeroSection } from '../components/HeroSection.js';
import { ClientLogos } from '../components/ClientLogos.js';
import { ProductsPage } from '../components/ProductsPage.js';
import { ServicesPage } from '../components/ServicesPage.js';
import { ContactPage } from '../components/ContactPage.js';
import { Router } from './router.js';

// Initialize router
const router = new Router();

// Define routes
router.addRoute('/', renderHomePage);
router.addRoute('/products', renderProductsPage);
router.addRoute('/services', renderServicesPage);
router.addRoute('/service', renderServicesPage); // Redirect old route
router.addRoute('/contact', renderContactPage);

// Route handlers
function renderHomePage() {
  document.getElementById('app').innerHTML = `
    ${Navbar('/')}
    ${HomePage()}
  `;
  // HomePage has its own initialization
}

function renderProductsPage() {
  document.getElementById('app').innerHTML = `
    ${Navbar('/products')}
    ${ProductsPage()}
  `;
  initScrollAnimations();
}

function renderServicesPage() {
  document.getElementById('app').innerHTML = `
    ${Navbar('/services')}
    ${ServicesPage()}
  `;
  // Services page has its own initialization
}

function renderContactPage() {
  document.getElementById('app').innerHTML = `
    ${Navbar('/contact')}
    ${ContactPage()}
  `;
  // Contact page has its own initialization
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

// Scroll animations for products page with Apple-style interactions
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all scroll-fade-in elements
  document.querySelectorAll('.scroll-fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Apple-style scroll-based visual triggering
  initScrollBasedVisuals();
}

function initScrollBasedVisuals() {
  const productCards = document.querySelectorAll('.product-card');
  
  if (productCards.length === 0) return;
  
  // Create intersection observer for product cards
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const categoryId = card.getAttribute('data-category');
        const sectionLabel = card.getAttribute('data-section');
        
        // Trigger visual change when card comes into view
        if (window.showVisual && categoryId && sectionLabel) {
          window.showVisual(categoryId, sectionLabel);
        }
      }
    });
  }, {
    threshold: 0.6, // Trigger when 60% of card is visible
    rootMargin: '-20% 0px -20% 0px' // Center-focused detection
  });
  
  // Observe all product cards
  productCards.forEach(card => {
    cardObserver.observe(card);
  });
  
  // Also keep hover functionality
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const categoryId = this.getAttribute('data-category');
      const sectionLabel = this.getAttribute('data-section');
      if (window.showVisual && categoryId && sectionLabel) {
        window.showVisual(categoryId, sectionLabel);
      }
    });
  });
}

// Start the router
router.start();