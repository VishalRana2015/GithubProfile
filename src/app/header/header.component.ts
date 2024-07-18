import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menu = [
    { link: '#home', menu: 'Home' },
    { link: '#profile', menu: 'Profile' },
    { link: '#portfolio', menu: 'Portfolio' },
    { link: '#projects', menu: 'Projects' },
    { link: '#why-me', menu: 'Why Me' },
    { link: '#skills', menu: 'Skills' },
    { link: '#contact', menu: 'Contact' },
  ];

  isMenuOpen = false;
  activeSection = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveSection();
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(link: string) {
    this.isMenuOpen = false;
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isActive(link: string): boolean {
    return this.activeSection === link.replace('#', '');
  }

  setActiveSection() {
    const sections = this.menu.map((item) => item.link);
    for (const section of sections) {
      const element = document.querySelector(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          this.activeSection = section.slice(1); // remove '#' from section ID
          break;
        }
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.setActiveSection();
  }
}
