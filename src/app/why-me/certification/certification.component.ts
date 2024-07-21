import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Certification, CredlyBadge, Link } from '../achievement';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css',
})
export class CertificationComponent extends Certification {
  constructor(private sanitizer: DomSanitizer) {
    super();
  }

  @Input({ required: true })
  set icon(icon: string) {
    console.log('setter icon method called');
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
    console.log('getter icon method called');
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

  get badgeLink(): string {
    let safeUrl: any = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.credly.com/embedded_badge/' + this.credlyBadge?.dataShareBadgeId);
    return safeUrl;
  }
}
