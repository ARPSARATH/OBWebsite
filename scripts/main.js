import { Navbar } from '../components/Navbar.js';
import { HeroSection } from '../components/HeroSection.js';

document.getElementById('app').innerHTML = `
  ${Navbar()}
  ${HeroSection()}
`;