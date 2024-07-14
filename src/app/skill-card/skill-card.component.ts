import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input() src: string;
  @Input() level: number;
  @Input() alt: string;
  @Input() height: string = '70px';
  @Input() width: string = '70px';

  constructor() {}

  getHeight(): string {
    return this.height;
  }
  getWidth(): string {
    return this.width;
  }
  getLevel(): number {
    return this.level;
  }
  getSrc(): string {
    return this.src;
  }
  getAlt(): string {
    return this.alt;
  }
}
