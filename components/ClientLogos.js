export function ClientLogos() {
  const clients = [
    {
      name: 'Samsung',
      logo: `<img src="https://website2o-development.zohostratus.com/Samsung_Engineering_logo.svg" alt="Samsung" class="w-36 h-14 object-contain logo-scale-up" />`
    },
    {
      name: 'Hyundai',
      logo: `<img src="https://website2o-development.zohostratus.com/Hyundai_Motor_Company_logo.svg" alt="Hyundai" class="w-36 h-14 object-contain" />`
    },
    {
      name: 'Raptee.HV',
      logo: `<img src="https://website2o-development.zohostratus.com/rapteenew.svg" alt="Raptee.HV" class="w-36 h-14 object-contain" />`
    },
    {
      name: 'Daemyoung Engineering',
      logo: `<img src="https://website2o-development.zohostratus.com/ci-black.png" alt="Daemyoung Engineering" class="w-36 h-14 object-contain logo-boost-opacity logo-scale-down" />`
    },
    {
      name: 'Jundo',
      logo: `<img src="https://website2o-development.zohostratus.com/jundo.png" alt="Jundo" class="w-36 h-14 object-contain logo-boost-opacity logo-scale-down" />`
    },
    {
      name: 'Tricolite',
      logo: `<img src="https://website2o-development.zohostratus.com/tricolite.png" alt="Tricolite" class="w-36 h-14 object-contain" />`
    }
  ];

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return `
    <section class="w-full py-4 bg-transparent overflow-hidden relative z-30">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Trusted By Header -->
        <div class="text-center mb-3">
          <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted By</p>
        </div>
        
        <!-- Marquee Container -->
        <div class="relative">
          <!-- Fade overlays -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <!-- Scrolling logos - Keep in color -->
          <div class="marquee-container">
            <div class="marquee-content">
              ${duplicatedClients.map(client => `
                <div class="marquee-item">
                  <div class="logo-wrapper-color">
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

