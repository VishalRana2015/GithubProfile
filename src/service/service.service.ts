// src/service/service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private jsonUrl = '../assets/experience.json'
; // Correct path

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<any> {
    console.log("I am called");
    return this.http.get(this.jsonUrl);
  }
}
