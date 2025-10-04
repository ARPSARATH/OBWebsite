export function Navbar() {
  return `
    <nav class="bg-white w-full px-4 md:px-6 py-4 flex items-center justify-between font-inter border-b border-gray-100 max-w-full relative z-50">
      <div class="flex items-center">
        <img
          src="https://i.ibb.co/KxXjchyb/Chat-GPT-Image-Apr-20-2025-08-53-58-AM.png"
          alt="Office Buddy Logo"
          class="w-6 h-6"
        />
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-10 text-sm text-gray-700 font-medium tracking-normal">
        ${['Products', 'Service', 'Rentals', 'Contact'].map(
          (item) => `
          <a href="#" class="relative transition-colors hover:text-purple-600 hover:font-semibold">
            <span class="relative z-10">${item}</span>
            <span class="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-purple-500 transition-transform duration-300 origin-left hover:scale-x-100 rounded"></span>
          </a>`
        ).join('')}
      </div>
      
      <!-- Desktop Profile Icon -->
      <a href="#" class="hidden md:block text-gray-700 hover:text-purple-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.387 0 4.604.676 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </a>
      
      <!-- Mobile Hamburger Button -->
      <button id="mobile-menu-button" class="md:hidden text-gray-700 hover:text-purple-600 transition-colors focus:outline-none">
        <svg id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed top-[57px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg transform -translate-y-full opacity-0 transition-all duration-300 ease-in-out z-40 md:hidden">
      <div class="flex flex-col px-4 py-4 space-y-4">
        ${['Products', 'Service', 'Rentals', 'Contact'].map(
          (item) => `
          <a href="#" class="text-gray-700 font-medium text-base py-2 hover:text-purple-600 hover:pl-2 transition-all duration-200">
            ${item}
          </a>`
        ).join('')}
        <a href="#" class="flex items-center gap-2 text-gray-700 font-medium text-base py-2 hover:text-purple-600 hover:pl-2 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.387 0 4.604.676 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Profile
        </a>
      </div>
    </div>
  `;
}