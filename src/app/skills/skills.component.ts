import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadmeComponent } from '../readme/readme.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  constructor(private dialog: MatDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(ReadmeComponent, {
      src: this.getFile(),
      title: "Mandlebrot Readme"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  getFile(): string {
    return "assets/readme/mandelbrot.md";
  }
}
