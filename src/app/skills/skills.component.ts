import { Component } from '@angular/core';
import data from '../../assets/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillCategories: any ;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.skillCategories = data.skillCategories;
  }

  getTitles() : string[] {
    let keys = Object.keys(this.skillCategories);
    return keys;
  }


  getSkills(skillTitle: string): any{
    return this.skillCategories[skillTitle];
  }
}
