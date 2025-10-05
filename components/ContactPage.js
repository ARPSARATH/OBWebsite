export function ContactPage() {
  // Initialize interactions after DOM loads
  setTimeout(() => {
    initializeContactForm();
    initializeContactAnimations();
  }, 100);

  return `
    <div class="bg-gradient-to-b from-slate-50 via-cyan-50/20 to-slate-50 min-h-screen overflow-hidden relative">
      
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute bottom-10 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/10 to-teal-100/10 rounded-full blur-3xl"></div>
      </div>

      <!-- Hero Section -->
      <section class="relative px-6 pt-16 pb-8">
        <div class="max-w-6xl mx-auto text-center reveal-on-scroll">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-teal-100 to-emerald-100 backdrop-blur-xl border border-teal-200/60 text-teal-700 rounded-full text-sm font-semibold mb-4 shadow-md">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Let's Connect</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Get in Touch
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-[length:200%_auto] animate-gradient-x">
              We're Here to Help
            </span>
          </h1>

          <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about our products or services? Need a quote? We're just a message away.
          </p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="relative px-6 pb-16">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8 items-start">
            
            <!-- Left: Contact Form -->
            <div class="reveal-on-scroll">
              <div class="bg-gradient-to-br from-white/70 via-white/50 to-teal-50/30 backdrop-blur-2xl rounded-2xl p-6 md:p-7 border border-teal-200/40 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <!-- Decorative elements -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-2xl"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
                
                <!-- Form Header -->
                <div class="mb-6 relative z-10">
                  <h2 class="text-xl md:text-2xl font-black text-gray-900 mb-1.5">Send us a Message</h2>
                  <p class="text-sm text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <!-- Contact Form -->
                <form id="contact-form" class="space-y-4 relative z-10">
                  <!-- Name -->
                  <div class="form-group">
                    <label for="name" class="block text-xs font-bold text-gray-700 mb-1.5">
                      Your Name <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        class="w-full pl-10 pr-4 py-2.5 border border-teal-200/60 bg-white/80 rounded-lg focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="form-group">
                    <label for="email" class="block text-xs font-bold text-gray-700 mb-1.5">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        class="w-full pl-10 pr-4 py-2.5 border border-teal-200/60 bg-white/80 rounded-lg focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <!-- Phone -->
                  <div class="form-group">
                    <label for="phone" class="block text-xs font-bold text-gray-700 mb-1.5">
                      Phone Number <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        pattern="[0-9]{10}"
                        class="w-full pl-10 pr-4 py-2.5 border border-teal-200/60 bg-white/80 rounded-lg focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                        placeholder="9884989466"
                      />
                    </div>
                  </div>

                  <!-- Company (Optional) -->
                  <div class="form-group">
                    <label for="company" class="block text-xs font-bold text-gray-700 mb-1.5">
                      Company Name <span class="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        class="w-full pl-10 pr-4 py-2.5 border border-teal-200/60 bg-white/80 rounded-lg focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <!-- Subject -->
                  <div class="form-group">
                    <label for="subject" class="block text-xs font-bold text-gray-700 mb-1.5">
                      Subject <span class="text-red-500">*</span>
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      required
                      class="w-full px-4 py-2.5 border border-teal-200/60 bg-white/80 rounded-lg focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 transition-all duration-300 outline-none text-gray-900 appearance-none cursor-pointer"
                      style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2314b8a6%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.1em; padding-right: 2.5rem;"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="services">Service Request</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <!-- Message -->
                  <div class="form-group">
                    <label for="message" class="block text-xs font-bold text-gray-700 mb-1.5">
                      Your Message <span class="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      required
                      class="w-full px-4 py-2.5 border border-teal-200/60 bg-white/80 rounded-lg focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Tell us more about how we can help you..."
                    ></textarea>
                    <p class="text-xs text-gray-500 mt-1">Minimum 20 characters</p>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-2">
                    <button 
                      type="submit" 
                      class="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 text-white font-bold text-sm rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                    >
                      <!-- Button shine effect -->
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer-premium"></div>
                      
                      <span class="relative z-10">Send Message</span>
                      <svg class="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </button>
                  </div>

                  <!-- Success/Error Messages -->
                  <div id="form-message" class="hidden p-4 rounded-xl"></div>
                </form>
              </div>
            </div>

            <!-- Right: Contact Information -->
            <div class="reveal-on-scroll space-y-5" style="animation-delay: 0.2s;">
              
              <!-- Contact Cards -->
              <div class="space-y-4">
                <!-- Phone -->
                <div class="contact-info-card group bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-2xl rounded-xl p-5 border border-teal-200/30 shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer">
                  <div class="flex items-start gap-3">
                    <div class="w-11 h-11 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-base font-bold text-gray-900 mb-0.5">Call Us</h3>
                      <p class="text-gray-600 text-xs mb-1.5">Mon-Sat, 9:00 AM - 7:00 PM</p>
                      <a href="tel:+919884989466" class="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                        +91 98849 89466
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div class="contact-info-card group bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-2xl rounded-xl p-5 border border-emerald-200/30 shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer">
                  <div class="flex items-start gap-3">
                    <div class="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-base font-bold text-gray-900 mb-0.5">Email Us</h3>
                      <p class="text-gray-600 text-xs mb-1.5">We'll respond within 24 hours</p>
                      <a href="mailto:hello@officebuddy.in" class="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors">
                        hello@officebuddy.in
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Location -->
                <div class="contact-info-card group bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-2xl rounded-xl p-5 border border-cyan-200/30 shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer">
                  <div class="flex items-start gap-3">
                    <div class="w-11 h-11 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-base font-bold text-gray-900 mb-0.5">Visit Us</h3>
                      <p class="text-gray-600 text-xs mb-1.5">Office Locations</p>
                      <p class="text-cyan-600 font-semibold text-sm">
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Office Hours Card -->
              <div class="bg-gradient-to-br from-teal-50/80 to-emerald-50/80 backdrop-blur-xl rounded-xl p-5 border border-teal-200/40">
                <h3 class="text-base font-black text-gray-900 mb-3">Office Hours</h3>
                <div class="space-y-2">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-700 font-medium">Monday - Friday</span>
                    <span class="text-gray-900 font-bold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-700 font-medium">Saturday</span>
                    <span class="text-gray-900 font-bold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-700 font-medium">Sunday</span>
                    <span class="text-red-600 font-bold">Closed</span>
                  </div>
                </div>
              </div>

              <!-- Quick Response Card -->
              <div class="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-600 rounded-xl p-5 text-white relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                  <h3 class="text-lg font-black mb-2">Quick Response Time</h3>
                  <p class="text-white/90 text-sm mb-3">
                    We typically respond to all inquiries within 2-4 hours during business hours.
                  </p>
                  <div class="flex items-center gap-2 text-xs">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="font-semibold">Average response: 3 hours</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

// Initialize contact form functionality
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');
  
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate
    if (data.message.length < 20) {
      showMessage('Please enter at least 20 characters in your message.', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Sending...</span>
    `;
    
    // Simulate API call (replace with actual API)
    setTimeout(() => {
      showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1500);
  });
  
  function showMessage(message, type) {
    messageDiv.className = `p-4 rounded-xl ${type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`;
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    
    setTimeout(() => {
      messageDiv.classList.add('hidden');
    }, 5000);
  }
}

// Initialize contact page animations
function initializeContactAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
  
  // Add hover effect to contact info cards
  const contactCards = document.querySelectorAll('.contact-info-card');
  contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Form input animations
  const formInputs = document.querySelectorAll('input, select, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.005)';
      this.style.borderColor = '#14b8a6';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
      if (!this.value) {
        this.style.borderColor = 'rgba(45, 212, 191, 0.6)';
      }
    });
  });
}

