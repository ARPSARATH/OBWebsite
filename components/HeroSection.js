import { getVersion } from '../scripts/version.js';
import { Badge } from './Badge.js';

export function HeroSection() {
  return `
    <section class="w-full px-4 pt-20 pb-4 relative overflow-hidden bg-white fade-slide-in" style="min-height: calc(100vh - 180px);">
      <!-- Top-right version tag -->
      <div class="absolute top-4 right-4 text-[8px] text-gray-400 font-medium font-mono z-20">
        v${getVersion()}
      </div>

      <!-- Badge between navbar and content -->
      <div class="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-20">
        ${Badge({ 
          text: 'New Gen Workspace Solutions', 
          icon: 'sparkles',
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-700',
          iconColor: 'text-purple-600'
        })}
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
      <div class="max-w-3xl mx-auto text-center relative z-10 flex flex-col justify-center h-full px-2 md:px-4 pt-8 md:pt-12">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold tracking-tight font-inter text-transparent bg-clip-text animated-gradient">
          OfficeBuddy
        </h1>
        <h2 class="mt-6 text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 font-inter px-2">
          Put's your office on <span class="text-[#3c7cfc]">Autopilot</span>
        </h2>
        <p class="mt-2 text-sm sm:text-base text-gray-700 font-inter px-2">From stationery to servers everything your workspace needs <span class="text-[#3c7cfc] dynamic-text-container" id="dynamicText">Handled Effortlessly</span>.</p>

        <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
          <a
            href="#"
            class="w-full sm:w-auto bg-[#3c7cfc] text-white text-[15px] px-6 py-3 md:py-2 rounded-lg shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:bg-blue-700 font-semibold text-center"
          >
            Set Up My Office
          </a>
          <a
            href="tel:+919884989466"
            class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 text-[15px] px-5 py-3 md:py-2 rounded-lg shadow-sm transition-all hover:bg-gray-100 hover:shadow-md font-medium"
          >
            Talk to Sarath
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

</section>
  `;
}