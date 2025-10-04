export function HeroSection() {
  return `
    <section class="w-full px-4 pt-28 pb-12 min-h-screen relative overflow-hidden bg-white fade-slide-in">
      <!-- Top-right version tag -->
      <div class="absolute top-4 right-4 text-[8px] text-gray-400 font-medium font-mono z-20">
        v0.0.34
      </div>

      <!-- Background Grid (only upper half) -->
      <div class="absolute top-0 left-0 w-full h-1/2 z-0 pointer-events-none animate-grid">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fadeout" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#cbd5e1" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <g stroke="url(#fadeout)" stroke-width="0.15">
            ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 5}" y1="0" x2="${50 + (i - 10) * 2.5}" y2="100" />`).join('')}
            ${Array.from({ length: 19 }, (_, i) => `<line x1="0" y1="${i * 5}" x2="100" y2="${i * 5}" />`).join('')}
          </g>
        </svg>
      </div>

      <!-- Hero Content -->
      <div class="max-w-3xl mx-auto text-center relative z-10 flex flex-col justify-center h-full mt-4">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight font-inter text-transparent bg-clip-text animated-gradient">
          OfficeBuddy
        </h1>
        <h2 class="mt-4 text-xl md:text-3xl font-semibold text-gray-800 font-inter">
          Put’s your office on <span class="text-[#3c7cfc]">Autopilot</span>
        </h2>
        <p class="mt-4 text-gray-700 font-inter">From stationery to servers — everything your workspace needs, handled <span class="text-[#3c7cfc]">Effortlessly, On Time, At Scale</span>.</p>

        <div class="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#"
            class="bg-[#3c7cfc] text-white text-[15px] px-6 py-2 rounded-lg shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:bg-blue-700 font-semibold"
          >
            Set Up My Office
          </a>
          <a
            href="tel:+919884989466"
            class="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 text-[15px] px-5 py-2 rounded-lg shadow-sm transition-all hover:bg-gray-100 hover:shadow-md font-medium"
          >
            Talk to Sarath
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Metrics Section -->
      <div class="mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6 px-4">
        <div>
          <h3 class="text-4xl font-bold text-gray-900">200<span class="text-xl font-semibold align-top">%</span></h3>
          <p class="text-sm text-gray-500 mt-1">Time Utilization Rate</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-gray-900">12<span class="text-xl font-semibold align-top">hr/m</span></h3>
          <p class="text-sm text-gray-500 mt-1">Save manual tasks</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-gray-900">98<span class="text-xl font-semibold align-top">%</span></h3>
          <p class="text-sm text-gray-500 mt-1">Customer Satisfaction</p>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-gray-900">30<span class="text-xl font-semibold align-top">x</span></h3>
          <p class="text-sm text-gray-500 mt-1">Increase in Productivity</p>
        </div>
      </div>
    
<!-- Zap Banner -->
<div class="mt-16 px-4">
  <section class="w-full px-6 py-8 text-white rounded-2xl max-w-6xl mx-auto shadow-lg"
           style="background-color: #2c2c2c;">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
      <div class="text-center md:text-left md:flex-1">
        <h2 class="text-lg md:text-xl font-semibold text-white">
          🚀 Launching <span class="text-[#3c7cfc] font-bold">Zap</span> India’s First B2B QuickCommerce Soon!!
        </h2>
        <p class="mt-2 text-sm md:text-base text-gray-400">
          Starting in <span class="font-medium text-white">Sriperumbudur</span>, <span class="font-medium text-white">Poonamallee</span> by <span class="font-medium text-white">Q1 FY25</span>.
        </p>
      </div>

      <button class="flex items-center gap-2 px-5 py-2 text-sm text-white border border-gray-400 rounded-full transition hover:bg-[#3c7cfc] hover:border-[#3c7cfc] group">
        <svg class="w-4 h-4 stroke-[2.5] group-hover:animate-ping-once" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        Notify Me
      </button>
    </div>
  </section>
</div>

</section>
  `;
}