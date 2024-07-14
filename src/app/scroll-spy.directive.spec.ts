import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input('appScrollSpy') sections: string[] = [];
  @Input() activeClass: string = 'active';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of this.sections) {
      const sectionElement = document.querySelector(section);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionElement.getBoundingClientRect().height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.updateActiveLink(section);
          break;
        }
      }
    }
  }

  private updateActiveLink(activeSection: string) {
    const links = this.el.nativeElement.querySelectorAll('a');
    links.forEach((link: any) => {
      this.renderer.removeClass(link, this.activeClass);
      if (link.getAttribute('href') === activeSection) {
        this.renderer.addClass(link, this.activeClass);
      }
    });
  }
}
