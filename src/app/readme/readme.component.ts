import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


interface DialogData {
  src: string;
  title: string;
}
@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.css'
})
export class ReadmeComponent {
  constructor(public markdownService: MarkdownService,
    public httpClient: HttpClient,
    public dialogRef: MatDialogRef<ReadmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onClose() {
    this.dialogRef.close();
  }
} 
