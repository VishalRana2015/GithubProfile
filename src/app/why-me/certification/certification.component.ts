import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Certification, CredlyBadge, Link } from '../achievement';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css',
})
export class CertificationComponent extends Certification {
  public sanitizedUrl: SafeResourceUrl | undefined;
  constructor(private sanitizer: DomSanitizer) {
    super();
    this.sanitizedUrl = undefined
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngOnInit called: certification")
    this.sanitizedUrl =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.credly.com/embedded_badge/' + this.credlyBadge?.dataShareBadgeId);
  }

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

  @Input({ required: true })
  set credlyBadge(credlyBadge: CredlyBadge) {
    this._credlyBadge = credlyBadge;
  }

  @Input({ required: true })
  set links(links: Link[]) {
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

  get credlyBadge(): CredlyBadge | undefined {
    return this._credlyBadge;
  }
  // todo : remove undefined.
  get links(): Link[] | undefined {
    return this._links;
  }

  get badgeLink(): SafeResourceUrl | undefined {
    return this.sanitizedUrl
  }
}
