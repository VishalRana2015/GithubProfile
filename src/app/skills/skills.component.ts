import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadmeComponent } from '../readme/readme.component';
import data from '../../assets/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillCategories: any ;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.skillCategories = data.skillCategories;
  }

  openDialog() {
    let dialogRef = this.dialog.open(ReadmeComponent, {
      data: {
        src: this.getFile(),
        title: 'MandleBrot Readme',
      },
      panelClass: 'readme-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getFile(): string {
    return 'assets/readme/mandelbrot.md';
  }

  getTitles() : string[] {
    let keys = Object.keys(this.skillCategories);
    return keys;
  }


  getSkills(skillTitle: string): any{
    return this.skillCategories[skillTitle];
  }
}
