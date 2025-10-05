import { Badge } from './Badge.js';
import { ClientLogos } from './ClientLogos.js';
import { HeroSection } from './HeroSection.js';

export function HomePage() {
  // Initialize interactions after DOM loads
  setTimeout(() => {
    initializeHomeAnimations();
    initializeScrollEffects();
    initializeCounterAnimations();
    initializeProductShowcase();
    initializeBadgeScroll();
    initializeCTAMicroAnimations();
    initializeLocationCards();
  }, 100);

  return `
    <div class="bg-white min-h-screen overflow-hidden relative">
      
      <!-- Hero Section with Integrated Logos -->
      <section class="relative min-h-screen flex flex-col">
        ${HeroSection()}
        
        <!-- Client Logos - Integrated into Landing Screen -->
        <div class="mt-auto pb-16">
          <div class="max-w-7xl mx-auto px-6">
            ${ClientLogos()}
          </div>
        </div>
      </section>

      <!-- About Section - Split Screen with Reveal -->
      <section class="relative px-6 py-32 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Left: Content -->
            <div class="space-y-8 reveal-on-scroll">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <span>About Office Buddy</span>
              </div>
              
              <h2 class="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                The New Gen of
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block">
                  Workspace Solutions
                </span>
              </h2>
              
              <p class="text-xl text-gray-600 leading-relaxed">
                We start your journey as a trusted vendor and grow with you into a friendly partner. From startups to enterprises, we simplify your workspace with smart solutions for products, rentals, pantry, and events.
              </p>

              <div class="flex flex-wrap gap-4 pt-4">
                ${['Products', 'Rentals', 'Pantry', 'IT Setup', 'Events'].map(tag => `
                  <div class="px-5 py-2.5 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer">
                    ${tag}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Right: Visual with floating elements -->
            <div class="relative h-[500px] reveal-on-scroll" style="animation-delay: 0.2s;">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl">
                <!-- Floating office elements -->
                <div class="absolute top-10 left-10 w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl transform hover:scale-110 transition-all cursor-pointer floating-card" style="animation: float-smooth 6s ease-in-out infinite;">
                  📝
                </div>
                <div class="absolute top-20 right-10 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center text-6xl transform hover:scale-110 transition-all cursor-pointer floating-card" style="animation: float-smooth 5s ease-in-out infinite; animation-delay: 0.5s;">
                  💻
                </div>
                <div class="absolute bottom-32 left-16 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl transform hover:scale-110 transition-all cursor-pointer floating-card" style="animation: float-smooth 7s ease-in-out infinite; animation-delay: 1s;">
                  ☕
                </div>
                <div class="absolute bottom-16 right-16 w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl transform hover:scale-110 transition-all cursor-pointer floating-card" style="animation: float-smooth 6s ease-in-out infinite; animation-delay: 1.5s;">
                  🎉
                </div>
                
                <!-- Central hub -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white text-7xl" style="animation: float-smooth 8s ease-in-out infinite; animation-delay: 0.3s;">
                  🏢
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Metrics Section - ULTRA MODERN ANIMATED CARDS -->
      <section class="relative px-6 py-20 pb-12 bg-gradient-to-b from-white via-purple-50/10 to-white overflow-hidden">
        <!-- Floating background orbs -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-blob"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-16 reveal-on-scroll">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100/80 backdrop-blur-sm text-purple-700 rounded-full text-xs font-semibold mb-4">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Why Choose Office Buddy
            </div>
            <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
              What Makes Us
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 block">
                Different
              </span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600">Trusted by enterprises, loved by teams</p>
          </div>

          <!-- Modern Bento Grid Layout with Glass Morphism -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 reveal-on-scroll" style="animation-delay: 0.2s;">
            ${[
              { metric: '10K+', label: 'Products', icon: '📦', gradient: 'from-purple-500 via-purple-600 to-purple-700', color: 'purple' },
              { metric: '40+', label: 'Services', icon: '⚡', gradient: 'from-blue-500 via-blue-600 to-blue-700', color: 'blue' },
              { metric: '150+', label: 'Brands', icon: '🏆', gradient: 'from-indigo-500 via-indigo-600 to-indigo-700', color: 'indigo' },
              { metric: '6+', label: 'Years', icon: '🎯', gradient: 'from-pink-500 via-pink-600 to-pink-700', color: 'pink' },
              { metric: '80+', label: 'Smiles', icon: '😊', gradient: 'from-orange-500 via-orange-600 to-orange-700', color: 'orange' }
            ].map((stat, idx) => `
              <div class="metric-card-modern group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 hover:border-${stat.color}-300/50 shadow-sm hover:shadow-md transition-all duration-700 cursor-pointer overflow-hidden" data-index="${idx}">
                <!-- Animated gradient orb background -->
                <div class="absolute -inset-1 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl"></div>
                
                <!-- Shimmer effect -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-premium"></div>
                </div>

                <!-- Content -->
                <div class="relative z-10 text-center space-y-3">
                  <!-- Icon with 3D effect -->
                  <div class="relative inline-block">
                    <div class="absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 rounded-2xl"></div>
                    <div class="relative text-5xl md:text-6xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">
                      ${stat.icon}
                    </div>
                  </div>
                  
                  <!-- Counter with gradient -->
                  <div class="counter-number text-3xl md:text-5xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500" data-target="${stat.metric}">
                    0
                  </div>
                  
                  <!-- Label -->
                  <div class="text-xs md:text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-500 tracking-wide uppercase">
                    ${stat.label}
                  </div>
                </div>

                <!-- Decorative elements -->
                <div class="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-700"></div>
                <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-700"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Quality Badge - Apple Glass Effect with Calm Colors -->
      <div id="quality-badge" class="quality-badge-container sticky top-20 z-20 px-6 py-6">
        <div class="max-w-7xl mx-auto text-center">
          <div class="quality-badge inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-2xl border">
            <div class="quality-badge-icon w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg backdrop-blur-xl">
              ✓
            </div>
            <span class="quality-badge-text font-semibold text-base">
              We never compromise on quality — it's not just a rule, it's our motto.
            </span>
          </div>
        </div>
      </div>

      <!-- Location Section - ULTRA MODERN NETWORK VISUALIZATION -->
      <section class="relative px-6 py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        <!-- Animated Background Pattern -->
        <div class="absolute inset-0 opacity-[0.02]">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 1px); background-size: 40px 40px;"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <!-- Header with Progress Badge -->
          <div class="text-center mb-20 reveal-on-scroll">
            <div class="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-xl border border-purple-200/50 text-purple-700 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
              </span>
              <span>Growing Network</span>
              <span class="px-2 py-0.5 bg-white/50 rounded-full text-xs">4 Cities, 23+ Areas</span>
            </div>
            
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Your Partner
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                Across Tamil Nadu
              </span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From Chennai to Coimbatore, we're right where you need us
            </p>
          </div>

          <!-- Interactive Network Grid -->
          <div class="relative mb-12 reveal-on-scroll" style="animation-delay: 0.2s;">
            <!-- Connection Lines SVG Background -->
            <div class="absolute inset-0 pointer-events-none" style="z-index: 1;">
              <svg class="w-full h-full" style="position: absolute; top: 0; left: 0;">
                <defs>
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.2" />
                    <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.2" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <!-- Animated connection lines -->
                ${Array(6).fill(0).map((_, idx) => `
                  <line class="connection-line" x1="${10 + idx * 15}%" y1="20%" x2="${30 + idx * 12}%" y2="80%" 
                        stroke="url(#lineGradient1)" stroke-width="2" opacity="0.3" filter="url(#glow)"
                        style="animation: pulse-line 3s ease-in-out infinite; animation-delay: ${idx * 0.3}s;">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="${3 + idx * 0.5}s" repeatCount="indefinite"/>
                  </line>
                `).join('')}
              </svg>
            </div>

            <!-- City Cards Grid with Glass Morphism -->
            <div class="grid md:grid-cols-2 gap-8 relative z-10">
              ${[
                {
                  city: 'Chennai',
                  imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=400&fit=crop',
                  towns: ['Ambattur', 'Avadi', 'Guindy', 'Nungambakkam', 'Kilpauk', 'Porur', 'Velachery', 'T.Nagar', 'Adyar', 'Chrompet', 'Tambaram'],
                  gradient: 'from-purple-500 to-purple-700',
                  bgGradient: 'from-purple-500/10 to-purple-600/5',
                  status: 'Active',
                  statusColor: 'text-green-600 bg-green-100',
                  delivery: 'Same-day delivery',
                  support: '24/7 Support'
                },
                {
                  city: 'Kanchipuram',
                  imageUrl: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&h=400&fit=crop',
                  towns: ['Irrugatukottai', 'Kanchipuram', 'Maraimalai Nagar', 'Oragadam', 'Sriperumbudur', 'Padappai', 'Singaperumal Koil'],
                  gradient: 'from-blue-500 to-blue-700',
                  bgGradient: 'from-blue-500/10 to-blue-600/5',
                  status: 'Active',
                  statusColor: 'text-green-600 bg-green-100',
                  delivery: 'Same-day delivery',
                  support: '24/7 Support'
                },
                {
                  city: 'Thiruvallur',
                  imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=400&fit=crop',
                  towns: ['Kadambathur', 'Mannur', 'Poonamalee', 'Thiruvallur', 'Thirumozhisai', 'Gummidipoondi', 'Minjur', 'Ponneri'],
                  gradient: 'from-indigo-500 to-indigo-700',
                  bgGradient: 'from-indigo-500/10 to-indigo-600/5',
                  status: 'Active',
                  statusColor: 'text-green-600 bg-green-100',
                  delivery: 'Next day delivery',
                  support: 'Dedicated Support'
                },
                {
                  city: 'Coimbatore',
                  imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=400&fit=crop',
                  towns: ['Eachanari', 'Kalapatti', 'Kuruchi', 'Mopperipalayam', 'Saravanampatti', 'Peelamedu', 'Gandhipuram', 'RS Puram'],
                  gradient: 'from-pink-500 to-pink-700',
                  bgGradient: 'from-pink-500/10 to-pink-600/5',
                  status: 'Active',
                  statusColor: 'text-green-600 bg-green-100',
                  delivery: 'Next day delivery',
                  support: 'Dedicated Support'
                }
              ].map((location, idx) => `
                <div class="location-card-modern group relative" data-city="${location.city.toLowerCase()}" data-index="${idx}">
                  <!-- Glow effect on hover -->
                  <div class="absolute -inset-1 bg-gradient-to-r ${location.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
                  
                  <!-- Card content -->
                  <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden">
                    <!-- Animated background gradient -->
                    <div class="absolute inset-0 bg-gradient-to-br ${location.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <!-- Shimmer effect -->
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-premium"></div>
                    </div>

                    <!-- Content -->
                    <div class="relative z-10">
                      <!-- Header -->
                      <div class="flex items-start justify-between mb-6">
                        <div class="flex items-center gap-4">
                          <!-- City Image with 3D Effect -->
                          <div class="relative">
                            <div class="absolute inset-0 bg-gradient-to-br ${location.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-2xl"></div>
                            <div class="relative w-16 h-16 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg ring-2 ring-white group-hover:ring-4 group-hover:ring-offset-2">
                              <img src="${location.imageUrl}" alt="${location.city}" class="w-full h-full object-cover" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2240%22%3E${location.city.charAt(0)}%3C/text%3E%3C/svg%3E'" />
                              <div class="absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 class="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-gray-900 transition-colors mb-1">
                              ${location.city}
                            </h3>
                            <p class="text-sm text-gray-500 font-medium">${location.towns.length} areas covered</p>
                          </div>
                        </div>
                        
                        <!-- Status Badge -->
                        <div class="flex items-center gap-2 px-3 py-1.5 ${location.statusColor} rounded-full text-xs font-bold">
                          <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                          </span>
                          ${location.status}
                        </div>
                      </div>

                      <!-- Areas Grid -->
                      <div class="space-y-4">
                        <div class="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          Service Areas
                        </div>
                        <div class="flex flex-wrap gap-2">
                          ${location.towns.map((town, townIdx) => `
                            <span class="location-pill px-3 py-1.5 bg-white/60 backdrop-blur-sm border border-gray-200 group-hover:bg-white group-hover:border-gray-300 text-gray-700 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default" style="animation-delay: ${townIdx * 0.05}s;">
                              ${town}
                            </span>
                          `).join('')}
                          <span class="location-pill px-3 py-1.5 bg-purple-50 backdrop-blur-sm border border-purple-200 text-purple-700 rounded-xl text-xs font-bold transition-all duration-300 cursor-default italic">
                            and many more...
                          </span>
                        </div>
                      </div>

                      <!-- Stats Bar -->
                      <div class="mt-6 pt-6 border-t border-gray-200 group-hover:border-gray-300 transition-colors">
                        <div class="flex items-center justify-between text-sm">
                          <div class="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span class="font-medium">${location.delivery}</span>
                          </div>
                          <div class="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span class="font-medium">${location.support}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bangalore Coming Soon - Full Width Card (Matches City Cards) -->
          <div class="relative reveal-on-scroll" style="animation-delay: 0.4s;">
            <div class="location-card-bangalore group relative">
              <!-- Glow effect on hover -->
              <div class="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
              
              <!-- Animated rays background -->
              <div class="absolute inset-0 overflow-hidden rounded-3xl">
                <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 animate-gradient-x"></div>
                ${Array(8).fill(0).map((_, idx) => `
                  <div class="absolute top-1/2 left-1/2 w-1 opacity-8 origin-top-left" style="
                    height: 500px;
                    background: linear-gradient(to bottom, transparent, #f59e0b, transparent);
                    transform: rotate(${idx * 45}deg);
                    animation: rotate-ray ${12 + idx}s linear infinite;
                  "></div>
                `).join('')}
              </div>

              <!-- Card Content with 3D effect -->
              <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-orange-200/50 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden">
                <!-- Animated background gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <!-- Shimmer effect -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-premium"></div>
                </div>

                <!-- Floating particles (reduced) -->
                ${Array(10).fill(0).map((_, idx) => `
                  <div class="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-20" style="
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    animation: float-smooth ${4 + Math.random() * 4}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                  "></div>
                `).join('')}

                <div class="relative z-10">
                  <div class="flex items-center justify-between gap-8">
                    <!-- Left: Bangalore Image -->
                    <div class="flex-shrink-0">
                      <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-2xl"></div>
                        <div class="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg ring-2 ring-white group-hover:ring-4 group-hover:ring-offset-2">
                          <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=400&fit=crop" alt="Bangalore" class="w-full h-full object-cover" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23fed7aa%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23ea580c%22 font-size=%2240%22%3EB%3C/text%3E%3C/svg%3E'" />
                          <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>

                    <!-- Right: Content -->
                    <div class="flex-1 text-left">
                    <!-- Coming Soon Badge -->
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full text-xs font-bold mb-4 shadow-lg transform hover:scale-105 transition-transform">
                      <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span>COMING SOON</span>
                      <svg class="w-4 h-4 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>

                    <!-- Main Content -->
                    <div class="mb-4">
                      <h3 class="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-3 leading-tight">
                        Expanding to <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-[length:200%_auto] animate-gradient-x">Bangalore</span>
                      </h3>
                      <p class="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                        Get ready for the same exceptional service in India's tech capital!
                      </p>
                    </div>

                    <!-- Progress Indicator with Loading Animation -->
                    <div class="mb-4">
                      <div class="flex justify-between text-xs font-semibold text-gray-700 mb-2">
                        <span>Launch Progress</span>
                        <span id="progress-percentage">0%</span>
                      </div>
                      <div class="h-2.5 bg-gray-200 rounded-full overflow-hidden shadow-inner relative">
                        <div id="progress-bar" class="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg relative overflow-hidden" style="width: 0%;">
                          <!-- Animated shimmer effect -->
                          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-progress"></div>
                        </div>
                      </div>
                    </div>

                    <!-- Notify Button & Timeline -->
                    <div class="flex items-center gap-4">
                      <a href="tel:+919884989466" class="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold text-sm rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        Notify Me When Live
                        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </a>
                      
                      <div class="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <span>🎯 Expected Launch:</span>
                        <span class="text-gray-900 font-bold">Q1 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Products & Services - EXPANDABLE HOVER SHOWCASE -->
      <section id="products" class="relative py-32 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-20 reveal-on-scroll">
            <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              From Desk to Data —
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block">
                Everything You Need
              </span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              10K+ products and 40+ services designed to simplify every aspect of your workspace
            </p>
          </div>
        </div>

        <!-- Interactive Expandable Showcase Grid -->
        <div class="max-w-7xl mx-auto px-6">
          <div id="expandable-showcase" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll" style="animation-delay: 0.2s;">
            ${[
              { 
                title: 'Stationery & Supplies', 
                icon: '📝', 
                desc: 'From pens to papers, complete office essentials',
                expandedDesc: 'Get everything from premium notebooks and pens to specialized office supplies. We stock 5000+ SKUs from top brands, ensuring your team never runs out of essentials.',
                items: ['Papers', 'Files', 'Writables', 'Notebooks', 'Markers', 'Staplers'],
                gradient: 'from-purple-500 to-purple-700',
                bgColor: 'purple',
                link: '/products#stationery'
              },
              { 
                title: 'Electronics & IT', 
                icon: '⚡', 
                desc: 'Hardware, peripherals, and IT solutions',
                expandedDesc: 'Complete IT infrastructure from computers to networking equipment. Enterprise-grade hardware with warranty support and installation services included.',
                items: ['Computers', 'Printers', 'Networks', 'Storage', 'Servers', 'Cables'],
                gradient: 'from-blue-500 to-blue-700',
                bgColor: 'blue',
                link: '/products#electronics'
              },
              { 
                title: 'Pantry Solutions', 
                icon: '🥤', 
                desc: 'Smart vending and refreshment services',
                expandedDesc: 'Smart RFID-based vending machines with auto-refill monitoring. Keep your team energized with premium coffee, tea, snacks, and beverages—managed seamlessly.',
                items: ['Beverages', 'Snacks', 'RFID Vending', 'Auto-Refill', 'Coffee Machines', 'Water Coolers'],
                gradient: 'from-green-500 to-green-700',
                bgColor: 'green',
                link: '/products#snacks'
              },
              { 
                title: 'IT Rentals', 
                icon: '💻', 
                desc: 'Flexible equipment rental plans',
                expandedDesc: 'Scale up or down with flexible rental plans for laptops, desktops, and office equipment. Perfect for temporary projects, events, or growing teams.',
                items: ['Laptops', 'Desktops', 'Copiers', 'Servers', 'Projectors', 'Scanners'],
                gradient: 'from-indigo-500 to-indigo-700',
                bgColor: 'indigo',
                link: '/services#rentals'
              },
              { 
                title: 'Workspace Setup', 
                icon: '🏢', 
                desc: 'End-to-end office design and installation',
                expandedDesc: 'Complete workspace transformation from furniture to IT infrastructure. We handle design, procurement, installation, and ongoing support—all from one partner.',
                items: ['Furniture', 'IT Setup', 'Pantry', 'Operations', 'Design', 'Support'],
                gradient: 'from-pink-500 to-pink-700',
                bgColor: 'pink',
                link: '/services#workspace-setup'
              },
              { 
                title: 'Events & Meetings', 
                icon: '🎉', 
                desc: 'Complete event management and coordination',
                expandedDesc: 'From intimate team meetings to large conferences and celebrations. We manage logistics, catering, venue coordination, and real-time tracking via Zoho Backstage.',
                items: ['Team Meets', 'Conferences', 'Dinners', 'Celebrations', 'Logistics', 'Catering'],
                gradient: 'from-orange-500 to-orange-700',
                bgColor: 'orange',
                link: '/services#events'
              }
            ].map((category, idx) => `
              <div class="expandable-showcase-card group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg transition-all duration-700 overflow-hidden cursor-pointer" data-index="${idx}" data-color="${category.bgColor}">
                <!-- Animated gradient background - reduced opacity -->
                <div class="card-bg-gradient absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-all duration-700"></div>
                
                <!-- Decorative circle - lighter -->
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-[0.03] rounded-full transition-all duration-700"></div>
                
                <!-- Content Container -->
                <div class="relative z-10 flex flex-col h-full">
                  <!-- Icon -->
                  <div class="card-icon w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-90 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-700 shadow-lg">
                    ${category.icon}
                  </div>
                  
                  <!-- Title -->
                  <h3 class="card-title text-2xl font-bold text-gray-900 mb-3 transition-colors duration-500">
                    ${category.title}
                  </h3>
                  
                  <!-- Short Description (visible by default) -->
                  <p class="card-short-desc text-gray-600 mb-4 transition-all duration-500">
                    ${category.desc}
                  </p>
                  
                  <!-- Expanded Description (visible on hover) -->
                  <p class="card-expanded-desc text-white/90 mb-6 opacity-0 max-h-0 overflow-hidden transition-all duration-500">
                    ${category.expandedDesc}
                  </p>
                  
                  <!-- Feature Pills -->
                  <div class="card-pills flex flex-wrap gap-2 mb-6 transition-all duration-500">
                    ${category.items.slice(0, 4).map(item => `
                      <span class="pill-item px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full transition-all duration-500">
                        ${item}
                      </span>
                    `).join('')}
                  </div>
                  
                  <!-- Additional Pills (visible on hover) -->
                  <div class="card-pills-extra flex flex-wrap gap-2 mb-6 opacity-0 max-h-0 overflow-hidden transition-all duration-500">
                    ${category.items.slice(4).map(item => `
                      <span class="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                        ${item}
                      </span>
                    `).join('')}
                  </div>
                  
                  <!-- CTA -->
                  <a href="${category.link}" data-route class="card-cta inline-flex items-center text-${category.bgColor}-600 font-semibold gap-2 mt-auto transition-all duration-500">
                    <span class="cta-text">Explore More</span>
                    <svg class="w-5 h-5 transform transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Event & Workspace Setup - Split Sections -->
      <section class="relative px-6 py-32 bg-white">
        <div class="max-w-7xl mx-auto space-y-32">
          <!-- Events -->
          <div class="grid lg:grid-cols-2 gap-16 items-center reveal-on-scroll">
            <div class="order-2 lg:order-1">
              <div class="relative h-[500px] bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-9xl animate-bounce-slow">🎉</div>
                </div>
                ${Array(12).fill(0).map((_, idx) => `
                  <div class="absolute w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full" style="
                    top: ${10 + Math.random() * 80}%; 
                    left: ${10 + Math.random() * 80}%; 
                    animation: float-smooth ${4 + Math.random() * 3}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 2}s;
                  ">
                    ${['🎊', '🎈', '✨'][Math.floor(Math.random() * 3)]}
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="space-y-6 order-1 lg:order-2">
              <h2 class="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Meet. Present.
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 block">
                  Celebrate.
                </span>
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed">
                From small team meetings to curated roundtable dinners, Office Buddy handles complete logistics, guest coordination, and real-time tracking via Zoho Backstage.
              </p>
              <a href="/services#events" data-route class="inline-flex items-center gap-3 px-8 py-4 bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-pink-700 transition-all duration-300 group">
                Plan Your Event
                <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Workspace Setup -->
          <div class="grid lg:grid-cols-2 gap-16 items-center reveal-on-scroll">
            <div class="space-y-6">
              <h2 class="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Workspace Setup —
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block">
                  New or Expanding
                </span>
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed">
                Setting up a new office or scaling existing space? We manage furniture, equipment, pantry, IT, and operations — all delivered, installed, and supported by one trusted partner.
              </p>
              <a href="/services#workspace-setup" data-route class="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 group">
                Start Your Setup
                <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
            <div>
              <div class="relative h-[500px] bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                <div class="absolute inset-0 p-12">
                  <div class="relative w-full h-full">
                    ${[
                      { icon: '🪑', top: '10%', left: '15%', delay: '0s' },
                      { icon: '💻', top: '15%', right: '15%', delay: '0.2s' },
                      { icon: '☕', bottom: '15%', left: '20%', delay: '0.4s' },
                      { icon: '🖨️', bottom: '20%', right: '20%', delay: '0.6s' },
                      { icon: '🏢', top: '50%', left: '50%', delay: '0.8s', large: true }
                    ].map(item => `
                      <div class="absolute ${item.large ? 'w-24 h-24 text-6xl' : 'w-16 h-16 text-4xl'} bg-white rounded-2xl shadow-xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all cursor-pointer" style="
                        ${item.top ? `top: ${item.top};` : ''}
                        ${item.bottom ? `bottom: ${item.bottom};` : ''}
                        ${item.left ? `left: ${item.left};` : ''}
                        ${item.right ? `right: ${item.right};` : ''}
                        animation: float-smooth 6s ease-in-out infinite;
                        animation-delay: ${item.delay};
                      ">
                        ${item.icon}
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section - WITH MICROANIMATIONS (Scaled to 85%) -->
      <section class="relative px-6 py-32 overflow-hidden">
        <!-- Animated gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600"></div>
        <div class="absolute inset-0 opacity-30">
          <div class="cta-blob cta-blob-1 absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div class="cta-blob cta-blob-2 absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <!-- Floating particles with microanimation -->
        <div class="absolute inset-0 overflow-hidden">
          ${Array(30).fill(0).map((_, idx) => `
            <div class="cta-particle absolute w-2 h-2 bg-white rounded-full" data-index="${idx}" style="
              top: ${Math.random() * 100}%; 
              left: ${Math.random() * 100}%;
            "></div>
          `).join('')}
        </div>

        <div class="max-w-5xl mx-auto text-center relative z-10 reveal-on-scroll" style="transform: scale(0.75); transform-origin: center;">
          <!-- Premium badge with microanimation -->
          <div class="cta-badge inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-xs font-semibold mb-6">
            <span class="cta-pulse relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            Ready to Transform Your Workspace?
          </div>

          <h2 class="cta-title text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <div class="inline-flex flex-col items-center gap-3 mb-3">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-xl border border-white/25 rounded-full text-white text-sm md:text-base font-semibold">
                <span class="text-xl">✨</span>
                <span>Workspace Simplified</span>
              </div>
            </div>
            <div class="block">Your Workspace.</div>
            <span class="cta-gradient-text block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-[length:200%_auto]">
              Fully Simplified.
            </span>
          </h2>
          
          <p class="cta-description text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Office Buddy provides everything from supplies to rentals, pantry solutions, IT, and events. Onboard with us and experience seamless office management.
          </p>

          <!-- CTA Buttons with microanimation -->
          <div class="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <a href="#products" class="cta-button-primary group px-10 py-4 bg-white text-purple-600 font-bold text-base rounded-2xl hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
              Get Started
              <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            
            <a href="tel:+919884989466" class="cta-button-secondary group px-10 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-base rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 98849 89466
            </a>
          </div>

          <!-- Trust indicators with stagger animation -->
          <div class="cta-stats grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            ${[
              { number: '6+', label: 'Years Experience', icon: '🏆' },
              { number: '50+', label: 'Happy Clients', icon: '😊' },
              { number: '24/7', label: 'Support', icon: '🚀' },
              { number: '100%', label: 'Quality', icon: '✓' }
            ].map((stat, idx) => `
              <div class="cta-stat text-center" data-index="${idx}">
                <div class="text-4xl mb-2 cta-stat-icon">${stat.icon}</div>
                <div class="text-3xl font-black text-white mb-1.5 cta-stat-number">
                  ${stat.number}
                </div>
                <div class="text-xs text-white/80 font-medium">${stat.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Footer -->
      ${renderHomeFooter()}
    </div>
  `;
}

// Helper function to render footer
function renderHomeFooter() {
  return `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div class="md:col-span-1">
            <div class="flex items-center mb-4">
              <img src="https://i.ibb.co/KxXjchyb/Chat-GPT-Image-Apr-20-2025-08-53-58-AM.png" alt="Office Buddy" class="w-10 h-10" />
              <span class="ml-3 text-2xl font-bold">OfficeBuddy</span>
            </div>
            <p class="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for complete workspace solutions across Tamil Nadu.
            </p>
            <div class="flex gap-4">
              ${['facebook', 'twitter', 'linkedin'].map(social => `
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                  <span class="sr-only">${social}</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
              `).join('')}
            </div>
          </div>

          <!-- Products -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider mb-4">Products</h4>
            <ul class="space-y-3">
              ${['Stationery', 'Electronics', 'Housekeeping', 'Snacks & Beverages', 'Corporate Gifts'].map(item => `
                <li><a href="/products" data-route class="text-gray-400 hover:text-white transition-colors">${item}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider mb-4">Services</h4>
            <ul class="space-y-3">
              ${['Workspace Rentals', 'Smart Pantry', 'Events & Meetings', 'Workspace Setup', 'IT Solutions'].map(item => `
                <li><a href="/services" data-route class="text-gray-400 hover:text-white transition-colors">${item}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+919884989466" class="text-gray-400 hover:text-white transition-colors">+91 98849 89466</a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:hello@officebuddy.in" class="text-gray-400 hover:text-white transition-colors">hello@officebuddy.in</a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-gray-400">Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-800">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-400 text-sm">
              © ${new Date().getFullYear()} OfficeBuddy. All rights reserved.
            </p>
            <div class="flex gap-6">
              ${['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => `
                <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">${item}</a>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Initialize all home page animations
function initializeHomeAnimations() {
  // Reveal on scroll
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
    el.style.transform = 'translateY(60px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}

function initializeScrollEffects() {
  // Parallax effect for floating elements
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, idx) => {
      const speed = 0.3 + (idx * 0.1);
      card.style.transform = `translateY(${scrolled * speed * 0.01}px)`;
    });
  });
}

function initializeLocationCards() {
  // Modern location card interactions with enhanced effects
  const locationCards = document.querySelectorAll('.location-card-modern');
  
  locationCards.forEach((card, index) => {
    // Add stagger animation
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Enhanced hover effect with FASTER and SMOOTHER 3D tilt
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Increased sensitivity (divided by 20 instead of 30) for faster response
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      const cardContent = this.querySelector('.relative.bg-white\\/80');
      if (cardContent) {
        cardContent.style.transition = 'transform 0.1s ease-out'; // Much faster transition
        cardContent.style.transform = 
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const cardContent = this.querySelector('.relative.bg-white\\/80');
      if (cardContent) {
        cardContent.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Smooth spring back
        cardContent.style.transform = 
          'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      }
    });
    
    // Animate location pills on card hover with faster stagger
    card.addEventListener('mouseenter', function() {
      const pills = this.querySelectorAll('.location-pill');
      pills.forEach((pill, pillIdx) => {
        setTimeout(() => {
          pill.style.transform = 'translateY(-2px)';
          pill.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }, pillIdx * 20); // Reduced from 30ms to 20ms for faster effect
      });
    });
    
    card.addEventListener('mouseleave', function() {
      const pills = this.querySelectorAll('.location-pill');
      pills.forEach(pill => {
        pill.style.transform = 'translateY(0)';
        pill.style.boxShadow = 'none';
      });
    });
  });
  
  // Animate progress bar loading when section comes into view
  animateProgressBar();
  
  // Add 3D tilt to Bangalore card
  initializeBangaloreCard();
}

function initializeBangaloreCard() {
  const bangaloreCard = document.querySelector('.location-card-bangalore');
  
  if (!bangaloreCard) return;
  
  // Enhanced hover effect with FASTER and SMOOTHER 3D tilt (same as city cards)
  bangaloreCard.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Increased sensitivity (divided by 20 instead of 30) for faster response
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    const cardContent = this.querySelector('.relative.bg-white\\/80');
    if (cardContent) {
      cardContent.style.transition = 'transform 0.1s ease-out'; // Much faster transition
      cardContent.style.transform = 
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }
  });
  
  bangaloreCard.addEventListener('mouseleave', function() {
    const cardContent = this.querySelector('.relative.bg-white\\/80');
    if (cardContent) {
      cardContent.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Smooth spring back
      cardContent.style.transform = 
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
  });
}

function animateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressPercentage = document.getElementById('progress-percentage');
  
  if (!progressBar || !progressPercentage) return;
  
  // Observe when Bangalore section comes into view
  const observerOptions = {
    threshold: 0.3
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate from 0% to 75%
        let currentProgress = 0;
        const targetProgress = 75;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetProgress / steps;
        const stepDuration = duration / steps;
        
        const interval = setInterval(() => {
          currentProgress += increment;
          if (currentProgress >= targetProgress) {
            currentProgress = targetProgress;
            clearInterval(interval);
          }
          
          progressBar.style.width = currentProgress + '%';
          progressPercentage.textContent = Math.round(currentProgress) + '%';
        }, stepDuration);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const bangaloreSection = progressBar.closest('.relative.reveal-on-scroll');
  if (bangaloreSection) {
    observer.observe(bangaloreSection);
  }
}

function initializeCounterAnimations() {
  const counters = document.querySelectorAll('.counter-number');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('data-target');
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  const isPlus = target.includes('+');
  const hasK = target.includes('K');
  let numericValue = parseInt(target.replace(/[^0-9]/g, ''));
  
  // For values with K, work with actual number
  if (hasK) {
    numericValue = numericValue; // 10K stays as 10
  }
  
  const duration = 2000;
  const steps = 60;
  const stepValue = numericValue / steps;
  const stepDuration = duration / steps;
  
  let current = 0;
  const interval = setInterval(() => {
    current += stepValue;
    if (current >= numericValue) {
      current = numericValue;
      clearInterval(interval);
    }
    
    let displayValue = Math.floor(current);
    if (hasK) {
      element.textContent = displayValue + 'K' + (isPlus ? '+' : '');
    } else {
      element.textContent = displayValue + (isPlus ? '+' : '');
    }
  }, stepDuration);
}

function initializeTestimonialCarousel() {
  const track = document.querySelector('.testimonial-track-fixed');
  const dots = document.querySelectorAll('.testimonial-dot-fixed');
  if (!track || dots.length === 0) return;
  
  let currentIndex = 0;
  
  // Auto-rotate
  let autoRotate = setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateTestimonialCarousel();
  }, 5000);
  
  // Manual controls
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(autoRotate);
      currentIndex = index;
      updateTestimonialCarousel();
      autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateTestimonialCarousel();
      }, 5000);
    });
  });
  
  function updateTestimonialCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('bg-purple-600', 'w-8');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.remove('bg-purple-600', 'w-8');
        dot.classList.add('bg-gray-300');
      }
    });
  }
}

function initializeProductShowcase() {
  const showcase = document.getElementById('expandable-showcase');
  if (!showcase) return;
  
  const cards = document.querySelectorAll('.expandable-showcase-card');
  let currentExpandedCard = null;
  
  // Add stagger animation
  cards.forEach((card, idx) => {
    card.style.animation = `fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
    card.style.animationDelay = `${idx * 0.1}s`;
    card.style.opacity = '0';
  });
  
  // Function to reset all cards
  function resetAllCards() {
    cards.forEach(card => {
      card.classList.remove('collapsed', 'expanded');
      
      const bgGradient = card.querySelector('.card-bg-gradient');
      const icon = card.querySelector('.card-icon');
      const title = card.querySelector('.card-title');
      const shortDesc = card.querySelector('.card-short-desc');
      const expandedDesc = card.querySelector('.card-expanded-desc');
      const pills = card.querySelector('.card-pills');
      const pillsExtra = card.querySelector('.card-pills-extra');
      const cta = card.querySelector('.card-cta');
      
      if (bgGradient) bgGradient.style.opacity = '0';
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.opacity = '0.9';
      }
      if (title) title.style.color = '#111827';
      if (shortDesc) {
        shortDesc.style.opacity = '1';
        shortDesc.style.maxHeight = '100px';
      }
      if (expandedDesc) {
        expandedDesc.style.opacity = '0';
        expandedDesc.style.maxHeight = '0';
      }
      if (pills) {
        const pillItems = pills.querySelectorAll('.pill-item');
        pillItems.forEach(pill => {
          pill.style.backgroundColor = '#f3f4f6';
          pill.style.color = '#374151';
        });
      }
      if (pillsExtra) {
        pillsExtra.style.opacity = '0';
        pillsExtra.style.maxHeight = '0';
      }
      if (cta) {
        cta.style.color = '';
        const ctaText = cta.querySelector('.cta-text');
        if (ctaText) ctaText.textContent = 'Explore More';
        const svg = cta.querySelector('svg');
        if (svg) svg.style.transform = 'translateX(0)';
      }
    });
    currentExpandedCard = null;
  }
  
  // Function to expand a card
  function expandCard(card) {
    // First reset all cards
    resetAllCards();
    
    // Then collapse all except this one
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.add('collapsed');
      }
    });
    
    // Expand this card
    card.classList.add('expanded');
    currentExpandedCard = card;
    
    // Update card styles
    const bgGradient = card.querySelector('.card-bg-gradient');
    const icon = card.querySelector('.card-icon');
    const title = card.querySelector('.card-title');
    const shortDesc = card.querySelector('.card-short-desc');
    const expandedDesc = card.querySelector('.card-expanded-desc');
    const pills = card.querySelector('.card-pills');
    const pillsExtra = card.querySelector('.card-pills-extra');
    const cta = card.querySelector('.card-cta');
    
    if (bgGradient) bgGradient.style.opacity = '0.95';
    if (icon) {
      icon.style.transform = 'scale(1.2) rotate(-12deg)';
      icon.style.opacity = '1';
    }
    if (title) title.style.color = '#ffffff';
    if (shortDesc) {
      shortDesc.style.opacity = '0';
      shortDesc.style.maxHeight = '0';
    }
    if (expandedDesc) {
      expandedDesc.style.opacity = '1';
      expandedDesc.style.maxHeight = '200px';
    }
    if (pills) {
      const pillItems = pills.querySelectorAll('.pill-item');
      pillItems.forEach(pill => {
        pill.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        pill.style.color = '#ffffff';
      });
    }
    if (pillsExtra) {
      pillsExtra.style.opacity = '1';
      pillsExtra.style.maxHeight = '100px';
    }
    if (cta) {
      cta.style.color = '#ffffff';
      const ctaText = cta.querySelector('.cta-text');
      if (ctaText) ctaText.textContent = 'Learn More';
      const svg = cta.querySelector('svg');
      if (svg) svg.style.transform = 'translateX(8px)';
    }
  }
  
  // Expandable hover effect
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      expandCard(this);
    });
  });
  
  // Reset on mouse leave from showcase
  showcase.addEventListener('mouseleave', function() {
    resetAllCards();
  });
}

function initializeBadgeScroll() {
  const badge = document.querySelector('.quality-badge');
  const badgeIcon = document.querySelector('.quality-badge-icon');
  const badgeText = document.querySelector('.quality-badge-text');
  
  if (!badge) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const triggerPoint = 800;
    const maxScroll = 1200;
    
    if (scrolled > triggerPoint && scrolled < maxScroll) {
      const progress = (scrolled - triggerPoint) / (maxScroll - triggerPoint);
      
      // Calm color transition with glass effect
      const purpleOpacity = 0.25 + (progress * 0.15); // 0.25 → 0.4
      const blueOpacity = 0.15 + (progress * 0.15); // 0.15 → 0.3
      const iconOpacity = 0.6 + (progress * 0.2); // 0.6 → 0.8
      
      badge.style.background = `linear-gradient(135deg, rgba(139, 92, 246, ${purpleOpacity}), rgba(59, 130, 246, ${blueOpacity}))`;
      badge.style.borderColor = `rgba(139, 92, 246, ${0.3 + progress * 0.2})`;
      badge.style.boxShadow = `0 8px 32px 0 rgba(139, 92, 246, ${0.1 + progress * 0.15}), inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)`;
      badgeIcon.style.background = `linear-gradient(135deg, rgba(139, 92, 246, ${iconOpacity}), rgba(59, 130, 246, ${iconOpacity - 0.1}))`;
      badgeText.style.color = `rgba(31, 41, 55, ${0.85 + progress * 0.15})`;
    } else if (scrolled <= triggerPoint) {
      // Reset to initial calm glass state
      badge.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))';
      badge.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      badge.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)';
      badgeIcon.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.5))';
      badgeText.style.color = 'rgba(31, 41, 55, 0.85)';
    } else {
      // Maintain final calm state
      badge.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.3))';
      badge.style.borderColor = 'rgba(139, 92, 246, 0.5)';
      badge.style.boxShadow = '0 8px 32px 0 rgba(139, 92, 246, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)';
      badgeIcon.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.7))';
      badgeText.style.color = 'rgba(31, 41, 55, 1)';
    }
  });
}

function initializeCTAMicroAnimations() {
  // Animate blobs
  const blob1 = document.querySelector('.cta-blob-1');
  const blob2 = document.querySelector('.cta-blob-2');
  
  if (blob1 && blob2) {
    blob1.style.animation = 'blob-move-1 20s ease-in-out infinite';
    blob2.style.animation = 'blob-move-2 25s ease-in-out infinite';
  }
  
  // Animate particles
  const particles = document.querySelectorAll('.cta-particle');
  particles.forEach((particle, idx) => {
    particle.style.animation = `particle-float ${8 + Math.random() * 8}s ease-in-out infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
  });
  
  // Animate stats with stagger
  const stats = document.querySelectorAll('.cta-stat');
  stats.forEach((stat, idx) => {
    stat.style.animation = `fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
    stat.style.animationDelay = `${idx * 0.1 + 0.5}s`;
    stat.style.opacity = '0';
  });
  
  // Pulse animation for badge
  const badge = document.querySelector('.cta-badge');
  if (badge) {
    badge.style.animation = 'pulse-glow 3s ease-in-out infinite';
  }
  
  // Gradient text animation
  const gradientText = document.querySelector('.cta-gradient-text');
  if (gradientText) {
    gradientText.style.animation = 'gradient-shift 3s ease infinite';
  }
}

