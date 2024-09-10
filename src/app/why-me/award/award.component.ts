import { Component, Input } from '@angular/core';
import { Award, Link } from '../achievement';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrl: './award.component.css',
})
export class AwardComponent extends Award {
  @Input({ required: true })
  set icon(icon: string) {
    this._icon = icon;
  }

  @Input({ required: true })
  set title(title: string) {
    this._title = title;
  }

  @Input({ required: true })
  set issuedOn(issuedOn: string) {
    this._issuedOn = issuedOn;
  }

  @Input({ required: true })
  set issuedBy(issuedBy: string) {
    this._issuedBy = issuedBy;
  }

  @Input({ required: true })
  set description(description: string) {
    this._description = description;
  }

  @Input()
  set highlights(highlights: string[]) {
    this._highlights = highlights;
  }

  @Input({required: true})
  set links(links: Link[]){
    this._links = links;
  }

  get icon() {
    return this._icon;
  }
  get title() {
    return this._title;
  }
  get issuedOn() {
    return this._issuedOn;
  }
  get issuedBy() {
    return this._issuedBy;
  }
  get description() {
    return this._description;
  }
  get highlights() {
    return this._highlights;
  }

  get links(){
    return this._links;
  }

  openInNewTab(): void {
    console.log("openInNewTab function called");
    if ( this.links.length == 0){
      console.log("There is no primary link available")
    }
    let url : string = this.links[0].url;
    if ( url.trim() !== ''){
      window.open(url, '_blank');
    }
    else{
      console.log("Invalid url");
    }
  }
}
