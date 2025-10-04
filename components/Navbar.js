export function Navbar() {
  return `
    <nav class="bg-white w-full px-6 py-4 flex items-center justify-between font-inter border-b border-gray-100 max-w-full">
      <div class="flex items-center">
        <img
          src="https://i.ibb.co/KxXjchyb/Chat-GPT-Image-Apr-20-2025-08-53-58-AM.png"
          alt="Office Buddy Logo"
          class="w-6 h-6"
        />
      </div>
      <div class="flex items-center gap-10 text-sm text-gray-700 font-medium tracking-normal">
        ${['Products', 'Service', 'Rentals', 'Contact'].map(
          (item) => `
          <a href="#" class="relative transition-colors hover:text-purple-600 hover:font-semibold">
            <span class="relative z-10">${item}</span>
            <span class="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-purple-500 transition-transform duration-300 origin-left hover:scale-x-100 rounded"></span>
          </a>`
        ).join('')}
      </div>
      <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.387 0 4.604.676 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </a>
    </nav>
  `;
}