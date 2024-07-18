import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import config from '../../assets/emailConfig.json'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import data from '../../assets/contact.json'

class SocialMediaContactInfo {
  iconUrl : string ;
  url !: string | undefined;
  title !: string;

  constructor(iconUrl: string, url: string | undefined, title: string){
    this.iconUrl = iconUrl;
    this.url = url;
    this.title = title;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isLoading: boolean = false;
  emailAddress : string | undefined;
  connectWithMeItems : SocialMediaContactInfo[] = [];
  followMeOnItems: SocialMediaContactInfo[] = [];
  contactForm = new FormGroup({
    name: new FormControl<String>('', [Validators.required]),
    email: new FormControl<String>('', [Validators.required, Validators.email]),
    subject: new FormControl<String>(''),
    message: new FormControl<String>('', [Validators.required, Validators.minLength(10)])
  });

  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.emailAddress = data.emailAddress;
    this.connectWithMeItems= data.connectWithMe.map( item => new SocialMediaContactInfo(item.icon, item.url, item.title));
    this.followMeOnItems = data.followMeOn.map( item => new SocialMediaContactInfo(item.icon, item.url, item.title));
  }

  submit() {
    this.showLoadingIndicator();
    const data = {
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        'user_name': this.contactForm.value.name,
        'user_email': this.contactForm.value.email,
        'message': this.contactForm.value.message,
        'subject': this.contactForm.value.subject ? this.contactForm.value.subject : config.defaultMessage
      }
    };

    fetch(config.mockEndpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('API response wasn\'t OK' + response.statusText);
      }
      return response;
    }).then(data => {
      console.log('Success', data);

      this.snackBar.open('Your message sent', 'Close', {
        duration: 10000
      });
      this.contactForm.reset();
    }).catch(error => {
      console.log("error while sending the message");
      console.log(error);
    }).finally(() => {
      this.stopShowingLoadingIndicator();
    });
  }

  showLoadingIndicator() {
    this.isLoading = true;
  }

  stopShowingLoadingIndicator() {
    this.isLoading = false;
  }
}
