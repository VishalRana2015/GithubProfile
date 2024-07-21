import { Component, Input } from '@angular/core';
import data from '../../assets/education.json';

class Education {
  icon!: string;
  institutionName!: string;
  institutionLink!: string;
  course!: string;
  field!: string;
  attendedDates!: string;
  achievements!: string[];
  marks!: string;

  constructor(
    icon: string,
    institutionName: string,
    institutionLink: string,
    course: string,
    field: string,
    attendedDates: string,
    achievements: string[],
    marks: string
  ) {
    this.icon = icon;
    this.institutionName = institutionName;
    this.institutionLink = institutionLink;
    this.course = course;
    this.field = field;
    this.attendedDates = attendedDates;
    this.achievements = achievements;
    this.marks = marks;
  }
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  // @Input({ required: true })
  // icon!: string;
  // @Input({ required: true })
  // institutionName!: string;
  // @Input({ required: true })
  // institutionLink!: string;
  // @Input({ required: true })
  // course!: string;
  // @Input({ required: true })
  // field!: string;
  // @Input({ required: true })
  // attendedDates!: string;
  // @Input()
  // achievements!: string[];
  // @Input()
  // marks!: string;
  education!: Education[];
  constructor() {
    var data2 = data.education.filter( item => {
      let value =  (item.icon !== undefined && item.icon !== null)
      && (item.institutionName !== undefined && item.institutionName !== null) &&
      (item.course !== undefined && item.course !== null) &&
      (item.field !== undefined && item.field !== null) &&
      (item.attendedDates !== undefined && item.attendedDates !== null);
      console.log("value : " + value);
      return value;
    });
    console.log("data2: " + data2.length);

    // data2.map( item => {
    //   return new Education(item.icon, item.institutionName, item.institutionLink, item.course, item.field, item.attendedDates, (item.achievements == undefined)?[]:item.achievements, item.marks);
    // });
    //console.log(this.education.length);
  }
}
