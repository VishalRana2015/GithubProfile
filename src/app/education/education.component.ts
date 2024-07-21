import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  @Input({ required: true })
  icon!: string;
  @Input({ required: true })
  institutionName!: string;
  @Input({ required: true })
  institutionLink!: string;
  @Input({ required: true })
  course!: string;
  @Input({ required: true })
  field!: string;
  @Input({ required: true })
  attendedDates!: string;
  @Input()
  achievements!: string[];
  @Input()
  marks!: string;
}
