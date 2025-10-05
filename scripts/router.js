// Simple client-side router with hash-based routing
export class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = '/';
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.navigate(this.getPath(), false);
    });
    
    // Intercept link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-route]');
      if (link) {
        e.preventDefault();
        const path = link.getAttribute('href');
        this.navigate(path);
      }
    });
  }
  
  getPath() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
  }
  
  addRoute(path, handler) {
    this.routes[path] = handler;
  }
  
  navigate(path, updateHash = true) {
    if (this.routes[path]) {
      this.currentRoute = path;
      if (updateHash) {
        window.location.hash = path;
      }
      this.routes[path]();
      window.scrollTo(0, 0);
    }
  }
  
  start() {
    // Navigate to current path on load
    const path = this.getPath();
    this.navigate(path, false);
  }
}
