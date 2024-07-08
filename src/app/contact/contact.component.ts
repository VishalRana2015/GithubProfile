import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactForm = new FormGroup({
      name: new FormControl<String>('' , [Validators.required]),
      email: new FormControl<String>('', [Validators.required, Validators.email]),
      subject: new FormControl<String>(''),
      message: new FormControl<String>('', [Validators.required, Validators.minLength(10)])
    });
    isLoading: boolean = false;
    constructor(){
      console.log("ContactComponent Constructor called");
    }


    submit(){
      console.log("submit button clicked");
      console.log(this.contactForm.value);
    }
}
