import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSection: string = 'home'; // Default active section, change as needed

  menu = [
    {
      menu: "Home",
      link: "#home"
    },
    {
      menu: "Profile",
      link: "#profile"
    },
    {
      menu: "Skills",
      link: "#skills"
    },
    {
      menu: "Portfolio",
      link: "#portfolio"
    },
    {
      menu: "Why me",
      link: "#why-me"
    },
    {
      menu: "Contact",
      link: "#contact"
    },
  ];

  constructor(private router: Router) {
    // Close menu on route change (for mobile view)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMenuOpen) {
        this.toggleMenu();
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(link: string) {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.toggleMenu(); // Close menu after scrolling to the section
    }
  }

  isActive(link: string): boolean {
    return this.router.isActive(link, true);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const sections = ['home', 'profile', 'skills', 'portfolio', 'why-me', 'contact']; // IDs of your sections
    let currentSection = 'home'; // Default to home if no section is active

    // Find the section currently in view
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
          currentSection = section;
          break;
        }
      }
    }

    // Update active section
    this.activeSection = currentSection;
  }
}
