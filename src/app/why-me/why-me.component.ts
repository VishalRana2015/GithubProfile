import { Component } from '@angular/core';
import data from '../../assets/awards.json';


@Component({
  selector: 'app-why-me',
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.css'
})
export class WhyMeComponent {
  static awardCategory = "award";
  static certificationCategory = "certifications";
  awards !: any;
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.awards = data.awards
  }
  getCategories(): string[]{
    // returns an array of categories from the awards.json file.
    let keys = Object.keys(this.awards)
    return keys
  }

  getItems(category: string): any[]{
    let items = this.awards[category]
    return items
  }
}
