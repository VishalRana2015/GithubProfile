import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadmeComponent } from './readme/readme.component';
import data from '../../assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: any[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.projects = data.projects;
  }

  openDialog(fileUrl: string, title: string) {
    let dialogRef = this.dialog.open(ReadmeComponent, {
      data: {
        src: fileUrl,
        title: title,
      },
      panelClass: 'readme-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed');
    });
  }
}
