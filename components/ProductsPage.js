import { Badge } from './Badge.js';

export function ProductsPage() {
  // Add global functions for visual interactions
  setTimeout(() => {
    window.showVisual = function(categoryId, sectionLabel) {
      const container = document.getElementById(`visual-${categoryId}`);
      if (!container) return;
      
      // Hide default icon
      const defaultIcon = container.querySelector('.visual-default');
      if (defaultIcon) defaultIcon.style.opacity = '0';
      
      // Hide all visual items
      const allItems = container.querySelectorAll('.visual-item');
      allItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
      });
      
      // Show the matching visual item
      const targetItem = container.querySelector(`[data-section="${sectionLabel}"]`);
      if (targetItem) {
        targetItem.style.opacity = '1';
        targetItem.style.transform = 'scale(1)';
      }
    };
    
    window.hideVisual = function(categoryId) {
      const container = document.getElementById(`visual-${categoryId}`);
      if (!container) return;
      
      // Show default icon
      const defaultIcon = container.querySelector('.visual-default');
      if (defaultIcon) defaultIcon.style.opacity = '0.2';
      
      // Hide all visual items
      const allItems = container.querySelectorAll('.visual-item');
      allItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
      });
    };
  }, 100);

  return `
    <div class="bg-white min-h-screen">
      <!-- Hero Section -->
      <section class="relative px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-50/30 to-white">
        <!-- Animated background grid -->
        <div class="absolute inset-0 z-0 opacity-20">
          <div class="absolute inset-0" style="background-image: linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left: Text Content -->
            <div class="space-y-6 fade-slide-in">
              ${Badge({ 
                text: '✨ Now Expanding to Coimbatore', 
                icon: 'sparkles',
                bgColor: 'bg-purple-100',
                textColor: 'text-purple-700',
                iconColor: 'text-purple-600'
              })}
              
              <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Everything an Office Needs — <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">In One Place.</span>
              </h1>
              
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
                From everyday stationery to enterprise servers, we stock, source, and deliver every product that keeps your workspace running. Trusted by leading offices for quality, consistency, and scale.
              </p>
              
              <p class="text-sm text-gray-500 font-medium">
                Explore 10,000+ office products — all handled by one trusted partner.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#categories" class="inline-flex items-center justify-center px-8 py-3.5 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Explore Categories
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </a>
                <a href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                  Get a Quote
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Right: Visual Elements -->
            <div class="relative h-[400px] md:h-[500px] hidden md:block">
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Floating elements with animations -->
                <div class="relative w-full h-full">
                  <div class="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl animate-float" style="animation-delay: 0s;">
                    <div class="flex items-center justify-center h-full text-white text-4xl">✏️</div>
                  </div>
                  <div class="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl animate-float" style="animation-delay: 0.5s;">
                    <div class="flex items-center justify-center h-full text-white text-5xl">💻</div>
                  </div>
                  <div class="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl shadow-2xl animate-float" style="animation-delay: 1s;">
                    <div class="flex items-center justify-center h-full text-white text-4xl">🧼</div>
                  </div>
                  <div class="absolute bottom-16 right-12 w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl shadow-2xl animate-float" style="animation-delay: 1.5s;">
                    <div class="flex items-center justify-center h-full text-white text-3xl">☕</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section id="categories" class="px-6 py-20 bg-white">
        <div class="max-w-7xl mx-auto space-y-24">
          
          <!-- Category 1: Stationery -->
          ${renderCategory({
            id: 'stationery',
            title: 'Stationery & Office Essentials',
            tagline: 'Where Every Detail Matters.',
            description: 'From copier papers to imported Japanese stationery — we bring craftsmanship and utility to every desk.',
            icon: '📝',
            gradient: 'from-purple-600 to-pink-600',
            sections: [
              {
                label: 'Papers',
                items: [
                  'A5 / A4 / A3 / A2 / A1 / A0 Copier Papers',
                  'Plotter & Construction Papers',
                  'Lined Sheets, Ruled Sheets, Graph Papers',
                  'Lamination Sheets, Carbon Papers, Tracing Papers',
                  'Colored Papers, Chart Papers, Art Papers',
                  'Thermal Papers, Fax Papers, NCR Papers'
                ]
              },
              {
                label: 'Files & Folders',
                items: [
                  'Binder Ring Files (2D, 3D, 4D)',
                  'Expanding Files, Display Files, Presentation Files',
                  'L Folders, U Folders, Button Files',
                  'Clear Leaf Folders, Sheet Protectors',
                  'Box Files, Lever Arch Files, Spring Files',
                  'Clip Files, Clipboard, Document Bags'
                ]
              },
              {
                label: 'Writables',
                items: [
                  'Ball Pens, Gel Pens, Ink Pens, Fountain Pens',
                  'Pencils (HB, 2B, 4B), Mechanical Pencils',
                  'Markers, Permanent Markers, Whiteboard Markers',
                  'Highlighters, Sketch Pens, Felt Tip Pens',
                  'Technical Pens, Calligraphy Pens',
                  'Erasers, Sharpeners, Correction Pens/Tapes'
                ]
              },
              {
                label: 'Notebooks',
                items: [
                  'Classmate Notebooks, Long Books, Registers',
                  'Spiral Notebooks, Hardbound Notebooks',
                  'Scribbling Pads, Writing Pads, Memo Pads',
                  'Diaries, Planners, Organizers',
                  'Post-it Notes, Sticky Notes, Index Tabs',
                  'Bill Books, Receipt Books, Invoice Books'
                ]
              },
              {
                label: 'Packing Items',
                items: [
                  'Envelopes (All Sizes), Padded Envelopes',
                  'Staples, Staplers, Staple Removers',
                  'Tapes (Cello, Brown, Double-sided, Masking)',
                  'Glues, Gum, Adhesives, Glue Sticks',
                  'Scissors, Paper Cutters, Guillotines',
                  'Paper Clips, Binder Clips, Bulldog Clips',
                  'Rubber Bands, Pins, Push Pins'
                ]
              },
              {
                label: 'Desk Essentials',
                items: [
                  'Desktop Organizers, Pen Stands, Trays',
                  'File Holders, Magazine Holders, Book Ends',
                  'Calculators (Basic, Scientific, Financial)',
                  'White Boards, Notice Boards, Pin Boards',
                  'Stamp Pads, Stamps, Numbering Machines',
                  'Paper Weights, Desk Calendars, Name Plates',
                  'Rulers, Scales, Geometry Boxes, Protractors'
                ]
              }
            ]
          })}

          <!-- Category 2: Electronics -->
          ${renderCategory({
            id: 'electronics',
            title: 'Electronics & IT Products',
            tagline: 'Powering Work with Technology.',
            description: 'From peripherals to printers, our electronics catalog covers everything your team needs to stay connected and efficient.',
            icon: '⚡',
            gradient: 'from-blue-600 to-cyan-600',
            sections: [
              {
                label: 'Computer Hardware',
                items: [
                  'Motherboards (Intel, AMD, Server)',
                  'Processors (Intel Core, AMD Ryzen, Xeon)',
                  'RAM (DDR3, DDR4, DDR5 - 4GB to 128GB)',
                  'SMPS / Power Supply Units (400W to 1200W)',
                  'Graphics Cards (NVIDIA, AMD)',
                  'CPU Coolers, Thermal Paste, Case Fans'
                ]
              },
              {
                label: 'Computer Accessories',
                items: [
                  'Keyboards (Wired, Wireless, Mechanical)',
                  'Mouse (Wired, Wireless, Gaming, Trackball)',
                  'Headphones, Headsets, Microphones',
                  'Speakers, Soundbars, Audio Systems',
                  'Webcams, Document Cameras',
                  'USB Hubs, Card Readers, Adapters',
                  'Monitor Stands, Laptop Stands, Cooling Pads',
                  'Bluetooth / Wi-Fi Modules, Dongles'
                ]
              },
              {
                label: 'Internet Accessories',
                items: [
                  'Modems, Routers (Dual Band, Tri Band)',
                  'Wi-Fi Repeaters, Range Extenders',
                  'Hotspots, Mobile Routers',
                  'Network Switches, Hubs, Access Points',
                  'Ethernet Cables (Cat5e, Cat6, Cat6a)',
                  'Patch Panels, Cable Testers, Crimping Tools',
                  'PoE Injectors, Network Adapters'
                ]
              },
              {
                label: 'Storage Devices',
                items: [
                  'SSD (SATA, NVMe, M.2 - 128GB to 4TB)',
                  'HDD (Internal, External - 500GB to 18TB)',
                  'Pendrives / USB Drives (8GB to 512GB)',
                  'Memory Cards (SD, MicroSD, CF)',
                  'External Hard Drives, Portable SSDs',
                  'NAS Drives, RAID Storage Systems'
                ]
              },
              {
                label: 'Power & Cables',
                items: [
                  'UPS (600VA to 10KVA, Online, Offline)',
                  'Batteries (A, AA, AAA, 9V, Rechargeable)',
                  'Extension Cords (3, 6, 8 Outlet)',
                  'Surge Protectors, Voltage Stabilizers',
                  'Laptop Chargers (All Brands)',
                  'Mobile Chargers, Fast Chargers, Power Banks',
                  'HDMI, VGA, DVI, DisplayPort Cables',
                  'USB Cables (Type-A, Type-C, Micro USB)',
                  'SATA, Power, Audio Cables'
                ]
              },
              {
                label: 'Printer Supplies',
                items: [
                  'Printer Toner Cartridges (HP, Canon, Epson, Brother)',
                  'Ink Cartridges (Color, Black, Refill Kits)',
                  'Drum Units, Fuser Units, Transfer Belts',
                  'Maintenance Kits, Cleaning Supplies'
                ]
              },
              {
                label: 'Office Electronics',
                items: [
                  'Printers (Inkjet, Laser, All-in-One)',
                  'Scanners (Flatbed, Document, Portable)',
                  'Photocopiers, Multifunction Devices',
                  'Plotter Printers, Large Format Printers',
                  'Shredders (Paper, CD, Credit Card)',
                  'Laminators, Binding Machines',
                  'Label Printers, Barcode Scanners',
                  'Projectors, Screens, Presentation Remotes',
                  'Water Dispensers, Coffee Machines',
                  'Vending Machines, Air Purifiers'
                ]
              }
            ]
          })}

          <!-- Category 3: Housekeeping -->
          ${renderCategory({
            id: 'housekeeping',
            title: 'Housekeeping & Pantry Supplies',
            tagline: 'Clean. Comfortable. Always Ready.',
            description: 'Hygiene and comfort delivered with reliable bulk supply for every facility.',
            icon: '🧹',
            gradient: 'from-green-600 to-teal-600',
            sections: [
              {
                label: 'Categories',
                items: [
                  'Fresheners, Skincare & Cleaning Solutions',
                  'Dispensers, Wipes & Disposables',
                  'Trash Bags, Brushes & Brooms'
                ]
              }
            ]
          })}

          <!-- Category 4: Snacks -->
          ${renderCategory({
            id: 'snacks',
            title: 'Snacks & Beverages',
            tagline: 'Keep the Break Room Buzzing.',
            description: 'Curated snacks, beverages, and refills that keep productivity fueled all day.',
            icon: '🍪',
            gradient: 'from-orange-600 to-red-600',
            sections: [
              {
                label: 'Beverages',
                items: [
                  'Packed Soft Drinks, Juices, Energy Drinks',
                  'Toned Milk, Coffee, Tea, Sugar',
                  'Mineral Water, Flavored Drinks'
                ]
              },
              {
                label: 'Snacks',
                items: [
                  'Chocolates, Candies, Nuts',
                  'Baked Foods, Biscuits, Packaged Snacks',
                  'Chips, Namkeen, Trail Mix'
                ]
              },
              {
                label: 'Pantry Essentials',
                items: [
                  'Disposable Cups, Plates, Cutlery',
                  'Tissues, Napkins, Paper Towels',
                  'Sweeteners, Creamers, Condiments'
                ]
              }
            ]
          })}

          <!-- Category 5: Corporate Gifts -->
          ${renderCategory({
            id: 'corporate-gifts',
            title: 'Corporate Gifting Solutions',
            tagline: 'Thoughtful Gifting Made Easy.',
            description: 'We offer curated corporate gifts with customization options for employee rewards, festive occasions, and client appreciation — designed to make your brand memorable.',
            icon: '🎁',
            gradient: 'from-indigo-600 to-purple-600',
            sections: []
          })}

        </div>
      </section>

      <!-- Trust & Value Proposition Section -->
      <section class="px-6 py-24 bg-white relative overflow-hidden">
        <!-- Subtle background decoration -->
        <div class="absolute inset-0 opacity-[0.03]">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #9333ea 1px, transparent 0); background-size: 48px 48px;"></div>
        </div>
        
        <div class="max-w-7xl mx-auto relative z-10">
          <!-- Main Message -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center justify-center gap-3 mb-6">
              <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-sm font-medium text-gray-600">Serving Offices Since 2019</span>
              <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Focus on Your Business.<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">We'll Handle the Rest.</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stop juggling multiple vendors, delayed deliveries, and procurement headaches. 
              One partner. One invoice. Everything you need.
            </p>
          </div>

          <!-- Unique Benefits Layout -->
          <div class="mb-20">
            <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <!-- Benefit 1 -->
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div class="relative p-8 border-2 border-gray-100 rounded-3xl hover:border-purple-300 transition-all duration-500">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 text-4xl">📦</div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900 mb-2">Single Source, Zero Hassle</h3>
                      <p class="text-gray-600 leading-relaxed line-clamp-2">
                        From pens to printers, get everything from one trusted partner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Benefit 2 -->
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div class="relative p-8 border-2 border-gray-100 rounded-3xl hover:border-blue-300 transition-all duration-500">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 text-4xl">⚡</div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900 mb-2">Fast & Reliable Delivery</h3>
                      <p class="text-gray-600 leading-relaxed line-clamp-2">
                        Quick delivery across Tamil Nadu. Never run out of essentials again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Benefit 3 -->
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div class="relative p-8 border-2 border-gray-100 rounded-3xl hover:border-green-300 transition-all duration-500">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 text-4xl">💰</div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900 mb-2">GST Benefits Upto 28%</h3>
                      <p class="text-gray-600 leading-relaxed line-clamp-2">
                        Maximize your input tax credit with full GST compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Benefit 4 -->
              <div class="relative group">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div class="relative p-8 border-2 border-gray-100 rounded-3xl hover:border-pink-300 transition-all duration-500">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 text-4xl">🤝</div>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900 mb-2">Dedicated Account Manager</h3>
                      <p class="text-gray-600 leading-relaxed line-clamp-2">
                        Your personal contact who knows your office needs. Real support, not automated responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Proof Points - Horizontal Timeline Style -->
          <div class="mb-20">
            <div class="relative max-w-5xl mx-auto">
              <!-- Connection line -->
              <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 hidden md:block"></div>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                <div class="text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-purple-600 rounded-full mb-4 relative z-10">
                    <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">6+</span>
                  </div>
                  <p class="text-sm font-semibold text-gray-900">Years Serving</p>
                  <p class="text-xs text-gray-500 mt-1">Since 2019</p>
                </div>
                
                <div class="text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-blue-600 rounded-full mb-4 relative z-10">
                    <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">10K+</span>
                  </div>
                  <p class="text-sm font-semibold text-gray-900">Products</p>
                  <p class="text-xs text-gray-500 mt-1">Ready to Ship</p>
                </div>
                
                <div class="text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-indigo-600 rounded-full mb-4 relative z-10">
                    <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600">24h</span>
                  </div>
                  <p class="text-sm font-semibold text-gray-900">Delivery</p>
                  <p class="text-xs text-gray-500 mt-1">Same Day Available</p>
                </div>
                
                <div class="text-center">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-purple-600 rounded-full mb-4 relative z-10">
                    <span class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600">TN</span>
                  </div>
                  <p class="text-sm font-semibold text-gray-900">Coverage</p>
                  <p class="text-xs text-gray-500 mt-1">Across Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center">
            <p class="text-gray-600 mb-6 text-lg">Ready to simplify your office procurement?</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919884989466" class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Sarath — Get Quote
              </a>
              <a href="https://wa.me/919884989466" class="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-300 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md">
                <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
            <p class="text-sm text-gray-500 mt-6">
              📍 Based in Chennai | Delivering across Tamil Nadu
            </p>
          </div>
        </div>
      </section>

      <!-- Modern Footer -->
      <footer class="bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <!-- Brand Column -->
            <div class="md:col-span-1">
              <div class="flex items-center mb-4">
                <img
                  src="https://i.ibb.co/KxXjchyb/Chat-GPT-Image-Apr-20-2025-08-53-58-AM.png"
                  alt="Office Buddy Logo"
                  class="w-8 h-8"
                />
                <span class="ml-2 text-xl font-bold text-gray-900">OfficeBuddy</span>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">
                Your trusted partner for complete workspace solutions across Tamil Nadu.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Products Column -->
            <div>
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Products</h4>
              <ul class="space-y-3">
                <li><a href="#stationery" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Stationery</a></li>
                <li><a href="#electronics" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Electronics</a></li>
                <li><a href="#housekeeping" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Housekeeping</a></li>
                <li><a href="#snacks" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Snacks & Beverages</a></li>
                <li><a href="#corporate-gifts" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Corporate Gifts</a></li>
              </ul>
            </div>

            <!-- Company Column -->
            <div>
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
              <ul class="space-y-3">
                <li><a href="/" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">About Us</a></li>
                <li><a href="/service" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Services</a></li>
                <li><a href="/rentals" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Rentals</a></li>
                <li><a href="/contact" data-route class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
                <li><a href="#" class="text-sm text-gray-600 hover:text-purple-600 transition-colors">Careers</a></li>
              </ul>
            </div>

            <!-- Contact Column -->
            <div>
              <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Get in Touch</h4>
              <ul class="space-y-3">
                <li class="text-sm text-gray-600">
                  <div class="flex items-start">
                    <svg class="w-4 h-4 mr-2 mt-0.5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a href="tel:+919884989466" class="hover:text-purple-600 transition-colors">+91 98849 89466</a>
                  </div>
                </li>
                <li class="text-sm text-gray-600">
                  <div class="flex items-start">
                    <svg class="w-4 h-4 mr-2 mt-0.5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:hello@officebuddy.in" class="hover:text-purple-600 transition-colors">hello@officebuddy.in</a>
                  </div>
                </li>
                <li class="text-sm text-gray-600">
                  <div class="flex items-start">
                    <svg class="w-4 h-4 mr-2 mt-0.5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="pt-8 border-t border-gray-200">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p class="text-sm text-gray-500">
                © ${new Date().getFullYear()} OfficeBuddy. All rights reserved.
              </p>
              <div class="flex space-x-6">
                <a href="#" class="text-sm text-gray-500 hover:text-purple-600 transition-colors">Privacy Policy</a>
                <a href="#" class="text-sm text-gray-500 hover:text-purple-600 transition-colors">Terms of Service</a>
                <a href="#" class="text-sm text-gray-500 hover:text-purple-600 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function renderCategory({ id, title, tagline, description, icon, gradient, sections, note }) {
  // Define visual elements for each subcategory
  const visualMap = {
    'stationery': {
      'Papers': '📄',
      'Files & Folders': '📁',
      'Writables': '✏️',
      'Notebooks': '📓',
      'Packing Items': '📦',
      'Desk Essentials': '🗂️'
    },
    'electronics': {
      'Computer Hardware': '🖥️',
      'Computer Accessories': '⌨️',
      'Internet Accessories': '📡',
      'Storage Data': '💾',
      'Battery & Cables': '🔌',
      'Inks & Cartridges': '🖨️',
      'Office Electronics': '🖨️'
    },
    'snacks': {
      'Beverages': '☕',
      'Snacks': '🍪',
      'Pantry Essentials': '🥤'
    }
  };

  const visuals = visualMap[id] || {};
  const hasVisuals = Object.keys(visuals).length > 0;

  return `
    <div class="category-section scroll-fade-in" data-category="${id}">
      <div class="grid md:grid-cols-12 gap-8 items-start">
        <!-- Left: Category Header with Visual Element -->
        <div class="md:col-span-4 md:sticky md:top-24 space-y-4">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl shadow-sm text-3xl">
            ${icon}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ${title}
          </h2>
          <p class="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${gradient}">
            ${tagline}
          </p>
          <p class="text-gray-600 leading-relaxed">
            ${description}
          </p>
          
          <!-- Dynamic Visual Element Container (only for categories with visuals) -->
          ${hasVisuals ? `
          <div id="visual-${id}" class="visual-container mt-8 transition-all duration-700 ease-out">
            <div class="relative w-full h-72 bg-white rounded-3xl overflow-hidden border border-gray-200/60 backdrop-blur-xl">
              <!-- Subtle gradient background -->
              <div class="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30"></div>
              
              <!-- Animated mesh gradient overlay -->
              <div class="absolute inset-0 opacity-40">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradient} opacity-5 blur-3xl"></div>
              </div>
              
              <!-- Default state - modern icon display -->
              <div class="visual-default absolute inset-0 flex flex-col items-center justify-center transition-all duration-700">
                <div class="relative">
                  <!-- Glow effect -->
                  <div class="absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-2xl rounded-full scale-150"></div>
                  <!-- Icon -->
                  <div class="relative text-8xl filter drop-shadow-lg">
                    ${icon}
                  </div>
                </div>
                <p class="mt-6 text-sm font-medium text-gray-400 uppercase tracking-wider">Hover to explore</p>
              </div>
              
              <!-- Active visual elements (will be shown on scroll/hover) -->
              ${Object.keys(visuals).map((key, idx) => `
                <div class="visual-item absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-700 transform scale-95" data-section="${key}">
                  <div class="text-center space-y-6 relative z-10">
                    <!-- Glow effect for active item -->
                    <div class="absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 blur-3xl rounded-full scale-150"></div>
                    
                    <div class="relative text-9xl animate-float filter drop-shadow-2xl" style="animation-delay: ${idx * 0.2}s;">
                      ${visuals[key]}
                    </div>
                    <div class="space-y-2">
                      <p class="text-xl font-bold text-gray-800">${key}</p>
                      <div class="w-12 h-1 bg-gradient-to-r ${gradient} mx-auto rounded-full"></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}
        </div>
        
        <!-- Right: Product Sections -->
        <div class="md:col-span-8 space-y-4">
          ${sections.length > 0 ? sections.map((section, idx) => `
            <div class="product-card bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group" 
                 data-category="${id}" 
                 data-section="${section.label}">
              <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-1.5 h-1.5 bg-gradient-to-r ${gradient} rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                ${section.label}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                ${section.items.map(item => `
                  <div class="flex items-start text-gray-700 text-sm">
                    <svg class="w-4 h-4 text-purple-500 mr-2.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                    </svg>
                    <span class="leading-relaxed">${item}</span>
                  </div>
                `).join('')}
              </div>
              <div class="mt-4 pt-4 border-t border-gray-100">
                <p class="text-xs text-gray-500 italic flex items-center">
                  <svg class="w-4 h-4 mr-1.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  And many more products in this category...
                </p>
              </div>
            </div>
          `).join('') : `
            <div class="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start space-x-4 mb-6">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-2xl">
                  🎁
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">Custom Gifting Solutions</h3>
                  <p class="text-gray-600 leading-relaxed">
                    ${description}
                  </p>
                </div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <p class="text-sm font-semibold text-gray-900">Employee Rewards</p>
                    <p class="text-xs text-gray-500">Recognition & appreciation gifts</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <p class="text-sm font-semibold text-gray-900">Client Appreciation</p>
                    <p class="text-xs text-gray-500">Premium corporate gifts</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <p class="text-sm font-semibold text-gray-900">Festive Occasions</p>
                    <p class="text-xs text-gray-500">Seasonal & celebration gifts</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <p class="text-sm font-semibold text-gray-900">Custom Branding</p>
                    <p class="text-xs text-gray-500">Logo & personalization options</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-6 border-t border-gray-100">
                <p class="text-xs text-gray-500 italic flex items-center">
                  <svg class="w-4 h-4 mr-1.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Contact us for custom quotes and bulk orders
                </p>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}
