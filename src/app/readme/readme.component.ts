import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData{
  src:string ;
}

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.css'
})
export class ReadmeComponent {
    src: string =""
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}
}
