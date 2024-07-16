import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input() src: string = 'no image';
  @Input() level: number = 0;
  @Input() alt: string = 'Alternate text';
  @Input() height: number = 70;
  @Input() width: number = 70;

  constructor() {}

  getHeight(): number {
    return this.height;
  }
  getWidth(): number {
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
