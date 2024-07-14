import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


interface DialogData{ 
  src: string ;
}
@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.css'
})
export class ReadmeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
} 
