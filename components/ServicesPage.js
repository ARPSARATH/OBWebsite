import { Badge } from './Badge.js';

export function ServicesPage() {
  // Initialize interactive elements after DOM loads
  setTimeout(() => {
    initializeServiceAnimations();
    initializeScrollEffects();
    initializeInteractiveCards();
  }, 100);

  return `
    <div class="bg-white min-h-screen overflow-hidden">
      <!-- Premium Hero Section - Split Layout with Advanced Visuals -->
      <section class="relative px-6 py-24 md:py-32 overflow-hidden">
        <!-- Animated gradient background with mesh effect -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
          <div class="absolute inset-0 opacity-30">
            <div class="absolute top-0 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div class="absolute top-0 -right-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-40 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <!-- Left: Content -->
            <div class="space-y-8 hero-content">
              ${Badge({ 
                text: '✨ Expanding to Coimbatore', 
                icon: 'sparkles',
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-700',
                iconColor: 'text-purple-600'
              })}
              
              <div class="space-y-6">
                <h1 class="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  Your Office.<br/>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                    Fully Managed.
                  </span>
                </h1>
                
                <p class="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  From workspace rentals to pantry automation — Office Buddy delivers everything your business needs to run effortlessly.
                </p>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#rentals" class="inline-flex items-center justify-center px-8 py-3.5 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Explore Rentals
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
                
                <a href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                  Talk to Us
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Right: Premium 3D-style Visual Elements -->
            <div class="relative h-[500px] hidden md:block">
              <div class="absolute inset-0">
                <!-- Floating interactive elements with depth -->
                <div class="floating-element absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-6 cursor-pointer" style="animation: float 8s ease-in-out infinite;">
                  <div class="flex flex-col items-center justify-center h-full text-white p-4">
                    <div class="text-5xl mb-2">🖨️</div>
                    <div class="text-sm font-semibold text-center">Copiers</div>
                  </div>
                </div>
                
                <div class="floating-element absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-6 cursor-pointer" style="animation: float 7s ease-in-out infinite; animation-delay: 1s;">
                  <div class="flex flex-col items-center justify-center h-full text-white p-4">
                    <div class="text-6xl mb-2">💻</div>
                    <div class="text-sm font-semibold text-center">IT Setup</div>
                  </div>
                </div>
                
                <div class="floating-element absolute bottom-32 left-16 w-36 h-36 bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-6 cursor-pointer" style="animation: float 6s ease-in-out infinite; animation-delay: 2s;">
                  <div class="flex flex-col items-center justify-center h-full text-white p-4">
                    <div class="text-5xl mb-2">🥤</div>
                    <div class="text-sm font-semibold text-center">Pantry</div>
                  </div>
                </div>
                
                <div class="floating-element absolute bottom-20 right-16 w-32 h-32 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-6 cursor-pointer" style="animation: float 9s ease-in-out infinite; animation-delay: 0.5s;">
                  <div class="flex flex-col items-center justify-center h-full text-white p-4">
                    <div class="text-4xl mb-2">📅</div>
                    <div class="text-xs font-semibold text-center">Events</div>
                  </div>
                </div>
                
                <!-- Connecting lines with glow -->
                <svg class="absolute inset-0 w-full h-full opacity-20" style="z-index: -1;">
                  <line x1="30%" y1="35%" x2="70%" y2="25%" stroke="url(#gradient1)" stroke-width="2" stroke-dasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="70%" y1="25%" x2="75%" y2="65%" stroke="url(#gradient2)" stroke-width="2" stroke-dasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="30%" y1="65%" x2="30%" y2="35%" stroke="url(#gradient3)" stroke-width="2" stroke-dasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Overview - Grid of 4 Cards -->
      <section class="px-6 py-20 bg-white relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 scroll-reveal">
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Complete Workspace Solutions
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your business needs to operate at peak efficiency, delivered seamlessly
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${renderServiceCard({
              title: 'Workspace Rentals',
              description: 'Enterprise-grade equipment with flexible rental terms and comprehensive support.',
              gradient: 'from-purple-600 to-purple-800',
              delay: '0s',
              target: '#rentals',
              ctaText: 'View Equipment'
            })}
            
            ${renderServiceCard({
              title: 'Smart Pantry',
              description: 'RFID-enabled vending solutions with automated inventory management.',
              gradient: 'from-blue-600 to-blue-800',
              delay: '0.1s',
              target: '#pantry',
              ctaText: 'Setup Pantry'
            })}
            
            ${renderServiceCard({
              title: 'Events & Meetings',
              description: 'Complete event management from intimate meetings to large conferences.',
              gradient: 'from-pink-600 to-pink-800',
              delay: '0.2s',
              target: '#events',
              ctaText: 'Plan Event'
            })}
            
            ${renderServiceCard({
              title: 'Workspace Setup',
              description: 'End-to-end office setup for new spaces or expansions — fully managed.',
              gradient: 'from-indigo-600 to-indigo-800',
              delay: '0.3s',
              target: '#workspace-setup',
              ctaText: 'Start Setup'
            })}
          </div>
        </div>
      </section>

      <!-- Workspace Rentals - Premium Showcase Section -->
      <section id="rentals" class="px-6 py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0 opacity-[0.03]">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0); background-size: 48px 48px;"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <!-- Left: Content -->
            <div class="space-y-8 scroll-reveal">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <span class="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                Most Popular Service
              </div>
              
              <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Workspace Rentals.<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Delivered, Installed, Supported.
                </span>
              </h2>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                From copiers to complete IT setups, Office Buddy offers flexible rental plans with delivery, installation, and ongoing support — so your workspace scales when you do.
              </p>

              <!-- Category Pills -->
              <div class="flex flex-wrap gap-3">
                ${['Copier Machines', 'Water Dispensers', 'IT & Electronics', 'Pantry Appliances', 'Admin Essentials'].map((cat, idx) => `
                  <div class="rental-pill px-5 py-2.5 bg-white border-2 border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-purple-600 hover:text-purple-600 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105" data-category="${cat}" style="animation-delay: ${idx * 0.1}s;">
                    ${cat}
                  </div>
                `).join('')}
              </div>

              <div class="pt-4">
                <a href="#contact" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group">
                  View Rental Plans
                  <svg class="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Right: Interactive Visual Gallery -->
            <div class="relative scroll-reveal" style="animation-delay: 0.2s;">
              <div id="rental-display" class="rental-gallery-container relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 shadow-xl">
                <!-- Main display card -->
                <div class="rental-card active absolute inset-0 rounded-3xl p-12 flex flex-col items-center justify-center transition-all duration-700">
                  <div class="text-9xl mb-6 animate-float rental-icon">🖨️</div>
                  <h3 class="text-3xl font-bold mb-3 text-gray-900 rental-title">Copier Machines</h3>
                  <p class="text-center text-gray-600 text-base max-w-md rental-description">
                    High-speed color A3 or compact B/W models with flexible quota-based pricing. Extra prints billed per page.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Smart Pantry Section -->
      <section id="pantry" class="px-6 py-24 bg-white relative">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <!-- Left: 3D-style Visual -->
            <div class="relative scroll-reveal order-2 md:order-1">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                <span class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                Most Loved by Teams
              </div>
              <div class="relative h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-2xl">
                <div class="absolute inset-0 flex items-center justify-center">
                  <!-- Vending Machine Illustration -->
                  <div class="relative">
                    <div class="w-64 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                      <!-- Screen -->
                      <div class="w-full h-32 bg-white/20 backdrop-blur-xl rounded-2xl mb-4 flex items-center justify-center">
                        <div class="text-white text-center">
                          <div class="text-4xl mb-2">🥤</div>
                          <div class="text-xs font-semibold">RFID Enabled</div>
                        </div>
                      </div>
                      
                      <!-- Slots Grid -->
                      <div class="grid grid-cols-3 gap-3">
                        ${Array(9).fill(0).map((_, idx) => `
                          <div class="pantry-item aspect-square bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl hover:bg-white/20 transition-all cursor-pointer" 
                               data-item="${['🍫', '🥤', '🍪', '☕', '🧃', '🍿', '🥨', '🧋', '🍩'][idx]}" 
                               style="animation: float ${5 + idx * 0.3}s ease-in-out infinite; animation-delay: ${idx * 0.1}s;">
                            ${['🍫', '🥤', '🍪', '☕', '🧃', '🍿', '🥨', '🧋', '🍩'][idx]}
                          </div>
                        `).join('')}
                      </div>
                      
                      <!-- Dispenser -->
                      <div class="mt-4 w-full h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                        <div class="text-white text-xs font-semibold">↓ Collect Here</div>
                      </div>
                    </div>
                    
                    <!-- Floating stats -->
                    <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                      <div class="text-xs text-gray-500 mb-1">Daily Refills</div>
                      <div class="text-2xl font-bold text-purple-600">24/7</div>
                    </div>
                    
                    <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                      <div class="text-xs text-gray-500 mb-1">Analytics</div>
                      <div class="text-2xl font-bold text-blue-600">Live</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Content -->
            <div class="space-y-6 scroll-reveal order-1 md:order-2">
              <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Smart Pantry.<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Smarter Refills.
                </span>
              </h2>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                RFID-enabled vending machines that keep your employees energized — restocked daily with snacks and beverages of your choice. From chips to protein bars, everything runs on refill cycles and consumption analytics.
              </p>

              <!-- Features List -->
              <div class="space-y-4 pt-4">
                ${[
                  { icon: '🎯', title: 'Customized Selection', desc: 'Choose snacks that match your team\'s preferences' },
                  { icon: '🔄', title: 'Automated Refills', desc: 'Never run out with our daily restocking service' },
                  { icon: '💳', title: 'RFID Payments', desc: 'Seamless cashless transactions for employees' }
                ].map(feature => `
                  <div class="flex items-start gap-4 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 p-4 rounded-xl transition-all duration-300">
                    <div class="text-3xl group-hover:scale-110 transition-transform">${feature.icon}</div>
                    <div>
                      <div class="font-semibold text-gray-900">${feature.title}</div>
                      <div class="text-sm text-gray-600">${feature.desc}</div>
                    </div>
                  </div>
                `).join('')}
              </div>

                <div class="pt-4">
                  <a href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    Setup Smart Pantry
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Events & Meetings Section -->
      <section id="events" class="px-6 py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <!-- Left: Content -->
            <div class="space-y-6 scroll-reveal">
              <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Meet. Present.<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Celebrate.
                </span>
              </h2>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                From small team meetings to curated roundtable dinners, Office Buddy manages your events end-to-end — logistics, guest coordination, hospitality, and real-time tracking via Zoho Backstage.
              </p>

              <!-- Event Types -->
              <div class="grid grid-cols-2 gap-4 pt-4">
                ${[
                  { emoji: '👥', title: 'Team Meetings', count: '10-30 members', type: 'team' },
                  { emoji: '🎤', title: 'Conferences', count: '50-200 members', type: 'conference' },
                  { emoji: '🍽️', title: 'Corporate Dinners', count: '20-100 members', type: 'dinner' },
                  { emoji: '🎉', title: 'Celebrations', count: '20-100 members', type: 'celebration' }
                ].map(type => `
                  <div class="event-type-card bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-600 hover:shadow-xl transition-all duration-300 cursor-pointer group" data-event-type="${type.type}">
                    <div class="text-4xl mb-3 group-hover:scale-110 transition-transform">${type.emoji}</div>
                    <div class="font-semibold text-gray-900">${type.title}</div>
                    <div class="text-xs text-gray-500 mt-1">${type.count}</div>
                  </div>
                `).join('')}
              </div>

              <div class="flex items-center gap-4 pt-6 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsBE9KBGIjuRN29zX2boWUoP6PdU-GGZjgw&s" alt="Zoho Backstage" class="w-10 h-10 rounded-lg" />
                  <span>Powered by Zoho Backstage</span>
                </div>
              </div>
            </div>

            <!-- Right: Visual -->
            <div class="relative scroll-reveal" style="animation-delay: 0.2s;">
              <div id="event-visual" class="relative h-[500px] bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden shadow-2xl p-12">
                <!-- Default: Team Meeting View -->
                <div class="event-scene active" data-scene="team">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative">
                      <!-- Modern Conference Table -->
                      <div class="w-64 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl shadow-xl relative overflow-hidden">
                        <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <!-- Laptop icons on table -->
                        <div class="absolute top-2 left-4 w-8 h-5 bg-white/30 rounded flex items-center justify-center text-xs">💻</div>
                        <div class="absolute top-2 right-4 w-8 h-5 bg-white/30 rounded flex items-center justify-center text-xs">📱</div>
                        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-white/30 rounded flex items-center justify-center text-xs">📊</div>
                      </div>
                      <!-- People around table with better positioning -->
                      ${Array(8).fill(0).map((_, idx) => {
                        const positions = [
                          { top: '-20%', left: '15%' },
                          { top: '-20%', left: '45%' },
                          { top: '-20%', right: '15%' },
                          { left: '-15%', top: '30%' },
                          { right: '-15%', top: '30%' },
                          { bottom: '-20%', left: '15%' },
                          { bottom: '-20%', left: '45%' },
                          { bottom: '-20%', right: '15%' }
                        ];
                        return `
                          <div class="absolute w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white" 
                               style="${Object.entries(positions[idx]).map(([k,v]) => `${k}: ${v}`).join('; ')}; animation: float ${4 + idx * 0.2}s ease-in-out infinite; animation-delay: ${idx * 0.1}s;">
                            👤
                          </div>
                        `;
                      }).join('')}
                      <!-- Presentation screen -->
                      <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-xl flex items-center justify-center">
                        <div class="text-white text-xs">📈</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Workspace Setup Section -->
      <section id="workspace-setup" class="px-6 py-24 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 scroll-reveal">
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Complete Workspace Setup.
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold">
                Whether New Office or Expanding — We're Here.
              </span>
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            ${[
              {
                step: '01',
                title: 'Consultation',
                description: 'We understand your needs, team size, and workspace requirements',
                gradient: 'from-purple-600 to-blue-600',
                badge: 'FREE'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Custom workspace plan with furniture, equipment, and technology setup',
                gradient: 'from-blue-600 to-indigo-600',
                badge: null
              },
              {
                step: '03',
                title: 'Delivery & Support',
                description: 'Complete installation, configuration, and ongoing maintenance',
                gradient: 'from-indigo-600 to-purple-600',
                badge: null
              }
            ].map((step, idx) => `
              <div class="scroll-reveal relative group" style="animation-delay: ${idx * 0.1}s;">
                <div class="absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                <div class="relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                  ${step.badge ? `
                    <div class="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                      ✓ ${step.badge}
                    </div>
                  ` : ''}
                  <div class="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} mb-2">STEP ${step.step}</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">${step.title}</h3>
                  <p class="text-gray-600 leading-relaxed flex-grow">${step.description}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Full service showcase -->
          <div class="mt-16 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl border-2 border-purple-200 scroll-reveal">
            <div class="grid md:grid-cols-2">
              <div class="p-12 space-y-6">
                <h3 class="text-3xl font-bold text-gray-900">Everything You Need, One Trusted Partner</h3>
                <p class="text-gray-600 leading-relaxed">
                  Setting up a new office or scaling your existing space? Office Buddy handles every operational element — furniture, equipment, pantry, and technology — all configured, delivered, and supported.
                </p>
                <div class="flex flex-wrap gap-3">
                  ${['Furniture', 'IT Setup', 'Pantry', 'Equipment', 'Maintenance'].map(item => `
                    <div class="px-4 py-2 bg-white border-2 border-purple-200 rounded-full text-sm font-semibold text-gray-700">
                      ${item}
                    </div>
                  `).join('')}
                </div>
                <div class="pt-4">
                  <a href="#contact" class="inline-flex items-center px-8 py-3.5 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Start Your Setup
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="relative h-96 md:h-auto p-12">
                <div class="absolute inset-0 flex items-center justify-center">
                  <!-- Office Layout Visualization -->
                  <div class="relative w-full h-full max-w-md">
                    <!-- Office Floor -->
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border-2 border-white shadow-inner"></div>
                    
                    <!-- Furniture Elements -->
                    <div class="absolute top-4 left-4 w-16 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform cursor-pointer" style="animation: float 6s ease-in-out infinite; animation-delay: 0s;">
                      <div class="flex items-center justify-center h-full text-white text-xl">🪑</div>
                    </div>
                    
                    <div class="absolute top-4 right-4 w-16 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform cursor-pointer" style="animation: float 5.5s ease-in-out infinite; animation-delay: 0.5s;">
                      <div class="flex items-center justify-center h-full text-white text-xl">💻</div>
                    </div>
                    
                    <div class="absolute bottom-4 left-4 w-16 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform cursor-pointer" style="animation: float 6.5s ease-in-out infinite; animation-delay: 1s;">
                      <div class="flex items-center justify-center h-full text-white text-xl">☕</div>
                    </div>
                    
                    <div class="absolute bottom-4 right-4 w-16 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg transform hover:scale-110 transition-transform cursor-pointer" style="animation: float 5s ease-in-out infinite; animation-delay: 1.5s;">
                      <div class="flex items-center justify-center h-full text-white text-xl">🖨️</div>
                    </div>
                    
                    <!-- Central Hub -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-xl transform hover:scale-110 transition-transform cursor-pointer" style="animation: float 7s ease-in-out infinite; animation-delay: 2s;">
                      <div class="flex items-center justify-center h-full text-white text-2xl">🏢</div>
                    </div>
                    
                    <!-- Connection Lines -->
                    <svg class="absolute inset-0 w-full h-full opacity-20">
                      <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="3,3">
                        <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="3,3">
                        <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="3,3">
                        <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="3,3">
                        <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite" />
                      </line>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Premium CTA Section -->
      <section id="contact" class="px-6 py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div class="max-w-4xl mx-auto text-center relative z-10 scroll-reveal">
          <h2 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Your Workspace.<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
              Simplified. Scalable. Supported.
            </span>
          </h2>
          
          <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your office experience? Let's talk about how Office Buddy can help your business run effortlessly.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:+919884989466" class="inline-flex items-center justify-center px-8 py-3.5 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Sarath — Get Quote
            </a>
            
            <a href="https://wa.me/919884989466" class="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md">
              <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          <!-- Trust indicators -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            ${[
              { number: '6+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map(stat => `
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 mb-2">
                  ${stat.number}
                </div>
                <div class="text-sm text-gray-600 font-medium">${stat.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Footer -->
      ${renderFooter()}
    </div>
  `;
}

// Helper function to render service cards
function renderServiceCard({ title, description, gradient, delay, target, ctaText }) {
  return `
    <a href="${target}" class="service-card scroll-reveal group relative block" style="animation-delay: ${delay};">
      <div class="absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
      <div class="relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-transparent transition-all duration-500 h-full flex flex-col">
        <h3 class="text-2xl font-bold text-gray-900 mb-3">${title}</h3>
        <p class="text-gray-600 leading-relaxed flex-grow">${description}</p>
        <div class="mt-6 inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${gradient} font-semibold group-hover:gap-2 transition-all">
          ${ctaText}
          <svg class="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </div>
      </div>
    </a>
  `;
}

// Helper function to render rental detail cards
function renderRentalDetailCard({ icon, title, description, gradient }) {
  return `
    <div class="scroll-reveal group">
      <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-200 h-full">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            ${icon}
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-gray-900 mb-2 text-lg">${title}</h4>
            <p class="text-sm text-gray-600 leading-relaxed">${description}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Helper function to render footer
function renderFooter() {
  return `
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div class="md:col-span-1">
            <div class="flex items-center mb-4">
              <img src="https://i.ibb.co/KxXjchyb/Chat-GPT-Image-Apr-20-2025-08-53-58-AM.png" alt="Office Buddy" class="w-8 h-8" />
              <span class="ml-2 text-xl font-bold text-gray-900">OfficeBuddy</span>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">
              Your trusted partner for complete workspace solutions across Tamil Nadu.
            </p>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h4>
            <ul class="space-y-3">
              <li><a href="#rentals" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Workspace Rentals</a></li>
              <li><a href="#pantry" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Smart Pantry</a></li>
              <li><a href="#events" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Events & Meetings</a></li>
              <li><a href="#workspace-setup" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Workspace Setup</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul class="space-y-3">
              <li><a href="/" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Home</a></li>
              <li><a href="/products" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Products</a></li>
              <li><a href="/services" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Services</a></li>
              <li><a href="#contact" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul class="space-y-3">
              <li class="text-sm text-gray-600">
                <a href="tel:+919884989466" class="hover:text-purple-600 transition-colors">+91 98849 89466</a>
              </li>
              <li class="text-sm text-gray-600">
                <a href="mailto:hello@officebuddy.in" class="hover:text-purple-600 transition-colors">hello@officebuddy.in</a>
              </li>
              <li class="text-sm text-gray-600">Coimbatore, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="pt-8 border-t border-gray-200 text-center">
          <p class="text-sm text-gray-500">
            © ${new Date().getFullYear()} OfficeBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `;
}

// Initialize all animations and interactions
function initializeServiceAnimations() {
  // Scroll reveal animations
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

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });

  // Hero content animation
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
}

function initializeScrollEffects() {
  // Add parallax effect to floating elements
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((el, idx) => {
      const speed = 0.5 + (idx * 0.1);
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

function initializeInteractiveCards() {
  // Rental pills interaction with visual updates (HOVER instead of CLICK)
  const rentalData = {
    'Copier Machines': {
      icon: '🖨️',
      title: 'Copier Machines',
      description: 'High-speed color A3 or compact B/W models with flexible quota-based pricing. Extra prints billed per page.'
    },
    'Water Dispensers': {
      icon: '💧',
      title: 'Water Dispensers',
      description: 'Hot, cold, or normal units — with or without refrigerator — serviced regularly for your team.'
    },
    'IT & Electronics': {
      icon: '💻',
      title: 'IT & Electronics',
      description: 'Laptops, desktops, monitors, projectors, and more — fully maintained and supported by our team.'
    },
    'Pantry Appliances': {
      icon: '🍳',
      title: 'Pantry Appliances',
      description: 'Microwaves, refrigerators, and coolers for a fully equipped break zone that keeps employees happy.'
    },
    'Admin Essentials': {
      icon: '📋',
      title: 'Admin Essentials',
      description: 'Paper shredders, laminators, and binding machines — on flexible rental terms that work for you.'
    }
  };

  const rentalPills = document.querySelectorAll('.rental-pill');
  rentalPills.forEach(pill => {
    pill.addEventListener('mouseenter', function() {
      // Update rental display on hover
      const category = this.getAttribute('data-category');
      const data = rentalData[category];
      
      if (data) {
        const iconEl = document.querySelector('.rental-icon');
        const titleEl = document.querySelector('.rental-title');
        const descEl = document.querySelector('.rental-description');
        
        if (iconEl && titleEl && descEl) {
          // Fade out
          iconEl.style.opacity = '0';
          titleEl.style.opacity = '0';
          descEl.style.opacity = '0';
          
          setTimeout(() => {
            iconEl.textContent = data.icon;
            titleEl.textContent = data.title;
            descEl.textContent = data.description;
            
            // Fade in
            iconEl.style.opacity = '1';
            titleEl.style.opacity = '1';
            descEl.style.opacity = '1';
          }, 300);
        }
      }
    });
  });

  // Pantry gamification
  const pantryItems = document.querySelectorAll('.pantry-item');
  pantryItems.forEach(item => {
    item.addEventListener('click', function() {
      const itemType = this.getAttribute('data-item');
      const itemNames = {
        '🍫': 'Chocolate',
        '🥤': 'Soda',
        '🍪': 'Cookie',
        '☕': 'Coffee',
        '🧃': 'Juice',
        '🍿': 'Popcorn',
        '🥨': 'Pretzel',
        '🧋': 'Bubble Tea',
        '🍩': 'Donut'
      };
      
      const itemName = itemNames[itemType] || 'Item';
      
      // Create notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
      notification.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-xl">${itemType}</span>
          <span class="font-semibold">${itemName} added to cart!</span>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      // Animate in
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 100);
      
      // Remove after 3 seconds
      setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
      
      // Add visual feedback to the clicked item
      this.style.transform = 'scale(1.2)';
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      }, 200);
    });
  });

  // Event type cards interaction
  const eventScenes = {
    'team': `
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative">
          <!-- Modern Conference Table -->
          <div class="w-64 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl shadow-xl relative overflow-hidden">
            <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <!-- Laptop icons on table -->
            <div class="absolute top-2 left-4 w-8 h-5 bg-white/30 rounded flex items-center justify-center text-xs">💻</div>
            <div class="absolute top-2 right-4 w-8 h-5 bg-white/30 rounded flex items-center justify-center text-xs">📱</div>
            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-white/30 rounded flex items-center justify-center text-xs">📊</div>
          </div>
          <!-- People around table with better positioning -->
          ${Array(8).fill(0).map((_, idx) => {
            const positions = [
              { top: '-20%', left: '15%' },
              { top: '-20%', left: '45%' },
              { top: '-20%', right: '15%' },
              { left: '-15%', top: '30%' },
              { right: '-15%', top: '30%' },
              { bottom: '-20%', left: '15%' },
              { bottom: '-20%', left: '45%' },
              { bottom: '-20%', right: '15%' }
            ];
            return `
              <div class="absolute w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white" 
                   style="${Object.entries(positions[idx]).map(([k,v]) => `${k}: ${v}`).join('; ')}; animation: float ${4 + idx * 0.2}s ease-in-out infinite; animation-delay: ${idx * 0.1}s;">
                👤
              </div>
            `;
          }).join('')}
          <!-- Presentation screen -->
          <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-xl flex items-center justify-center">
            <div class="text-white text-xs">📈</div>
          </div>
        </div>
      </div>
    `,
    'conference': `
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative w-full h-full flex">
          <div class="w-1/2 flex flex-wrap items-center justify-center gap-2 p-4">
            ${Array(24).fill(0).map((_, idx) => `
              <div class="w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-sm shadow-md" 
                   style="animation: float ${3 + (idx % 4) * 0.5}s ease-in-out infinite; animation-delay: ${(idx % 4) * 0.2}s;">
                👤
              </div>
            `).join('')}
          </div>
          <div class="w-1/2 flex items-center justify-center">
            <div class="w-48 h-40 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div class="relative text-white text-center">
                <div class="text-5xl mb-2">🎤</div>
                <div class="text-xs font-semibold">Stage</div>
              </div>
              <!-- Stage lights -->
              <div class="absolute -top-2 left-4 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
              <div class="absolute -top-2 right-4 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    'dinner': `
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative">
          <!-- Elegant dining table -->
          <div class="w-72 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-2xl relative overflow-hidden">
            <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <!-- Table decorations -->
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full shadow-lg flex items-center justify-center">
              <div class="text-white text-xs">🍷</div>
            </div>
            <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg flex items-center justify-center">
              <div class="text-white text-xs">🥗</div>
            </div>
          </div>
          <!-- People around table in perfect circle -->
          ${Array(12).fill(0).map((_, idx) => {
            const angle = (idx / 12) * Math.PI * 2;
            const radius = 180;
            const centerX = 50;
            const centerY = 50;
            const x = centerX + Math.cos(angle) * (radius / 400) * 100;
            const y = centerY + Math.sin(angle) * (radius / 400) * 100;
            return `
              <div class="absolute w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white" 
                   style="left: ${x}%; top: ${y}%; transform: translate(-50%, -50%); animation: float ${4 + idx * 0.1}s ease-in-out infinite; animation-delay: ${idx * 0.05}s;">
                👤
              </div>
            `;
          }).join('')}
          <!-- Ambient lighting -->
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-60 blur-sm"></div>
        </div>
      </div>
    `,
    'celebration': `
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative w-full h-full">
          <!-- Party backdrop -->
          <div class="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl"></div>
          
          <!-- People celebrating -->
          ${Array(12).fill(0).map((_, idx) => {
            const positions = [
              { top: '10%', left: '20%' },
              { top: '15%', left: '50%' },
              { top: '10%', right: '20%' },
              { top: '30%', left: '10%' },
              { top: '35%', left: '30%' },
              { top: '35%', right: '30%' },
              { top: '30%', right: '10%' },
              { bottom: '10%', left: '20%' },
              { bottom: '15%', left: '50%' },
              { bottom: '10%', right: '20%' },
              { bottom: '30%', left: '30%' },
              { bottom: '30%', right: '30%' }
            ];
            return `
              <div class="absolute w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white" 
                   style="${Object.entries(positions[idx]).map(([k,v]) => `${k}: ${v}`).join('; ')}; animation: float ${3 + idx * 0.1}s ease-in-out infinite; animation-delay: ${idx * 0.1}s;">
                👤
              </div>
            `;
          }).join('')}
          
          <!-- Confetti and decorations -->
          ${Array(20).fill(0).map((_, idx) => {
            const confettiTypes = ['🎉', '🎊', '🎈', '✨', '⭐'];
            const x = 10 + Math.random() * 80;
            const y = 10 + Math.random() * 80;
            const type = confettiTypes[idx % confettiTypes.length];
            return `
              <div class="absolute text-2xl opacity-80" 
                   style="left: ${x}%; top: ${y}%; animation: float ${2 + Math.random() * 2}s ease-in-out infinite; animation-delay: ${Math.random() * 2}s;">
                ${type}
              </div>
            `;
          }).join('')}
          
          <!-- Central celebration element -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-2xl flex items-center justify-center">
            <div class="text-3xl">🎂</div>
          </div>
        </div>
      </div>
    `
  };

  const eventCards = document.querySelectorAll('.event-type-card');
  eventCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const eventType = this.getAttribute('data-event-type');
      const eventVisual = document.getElementById('event-visual');
      
      if (eventVisual && eventScenes[eventType]) {
        eventVisual.style.opacity = '0';
        setTimeout(() => {
          eventVisual.innerHTML = eventScenes[eventType];
          eventVisual.style.opacity = '1';
        }, 300);
      }
    });
  });

  // Service cards hover effect
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}
