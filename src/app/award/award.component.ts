import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrl: './award.component.css'
})
export class AwardComponent {
  @Input({required: true}) icon !: string ;
  @Input({required: true}) title !: string;
  @Input({required: true}) date !: string;
  @Input({required: true}) issuedBy !: string;
  @Input({required: true}) description !: string;
  @Input() highlights !: string[];
}
