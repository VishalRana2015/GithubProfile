import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Plural form for styleUrls
})
export class HeaderComponent {
  isMenuOpen = false;

  menu = [
    {
      menu: "About",
      link: "/about"
    },
    {
      menu: "Portfolio",
      link: "/portfolio"
    },
    {
      menu: "Skills",
      link: "/skills"
    },
    {
      menu: "Resume",
      link: "/resume"
    },
    {
      menu: "Why me",
      link: "/why-me"
    },
    {
      menu: "Contact",
      link: "/contact"
    },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
