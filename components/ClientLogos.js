export function ClientLogos() {
  const clients = [
    {
      name: 'Samsung',
      logo: `<svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" class="w-36 h-14">
        <text x="120" y="38" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="700" letter-spacing="-1" fill="currentColor">SAMSUNG</text>
      </svg>`
    },
    {
      name: 'Hyundai',
      logo: `<img src="https://website2o-development.zohostratus.com/Hyundai_Motor_Company_logo.svg" alt="Hyundai" class="w-36 h-14 object-contain" />`
    },
    {
      name: 'Raptee.HV',
      logo: `<svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" class="w-36 h-14">
        <g transform="translate(15, 30)">
          <path d="M0,-15 L15,-15 L10,-2 L22,-18 L7,-18 L12,-2 Z" fill="currentColor"/>
          <circle cx="7" cy="8" r="3" fill="currentColor"/>
        </g>
        <text x="135" y="38" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" letter-spacing="-0.5" fill="currentColor">Raptee.HV</text>
      </svg>`
    },
    {
      name: 'Panasonic',
      logo: `<svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" class="w-36 h-14">
        <text x="120" y="38" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="600" letter-spacing="1" fill="currentColor">Panasonic</text>
        <line x1="30" y1="45" x2="210" y2="45" stroke="currentColor" stroke-width="1.5"/>
      </svg>`
    }
  ];

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return `
    <section class="w-full py-4 bg-white overflow-hidden relative z-30" style="margin-top: -40px;">
      <div class="max-w-4xl mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-3">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Trusted By</h3>
        </div>

        <!-- Marquee Container -->
        <div class="relative">
          <!-- Fade overlays -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <!-- Scrolling logos -->
          <div class="marquee-container">
            <div class="marquee-content">
              ${duplicatedClients.map(client => `
                <div class="marquee-item">
                  <div class="logo-wrapper">
                    ${client.logo}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

