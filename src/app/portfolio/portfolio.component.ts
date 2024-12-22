import { Component, OnInit } from '@angular/core';
import data from '../../assets/experience.json';

interface Designation{ 
  title: String; 
  timeline: String; 
  experiences: Experience[]
}

interface Link {
  href : String;
  text: String;
}

interface Experience {
  title: String; 
  role: String; 
  timeline ?: String; 
  data : String[];
  links ?: Link[]
}


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  designations: Designation[] = [];

  constructor(){
    
  }

  ngOnInit(): void {
    this.fetchExperiences();
  }

  private fetchExperiences(): void {
    this.designations = data.designations;

    // this.service.getExperiences().subscribe(
    //   (data: any) => {
    //     console.log("Data from JSON file:", data);
    //     this.experiences = data.experience; // Assuming "experience" is the key in your JSON structure
    //     console.log("Retrieved data:", this.experiences);
    //   },
    //   (error: any) => {
    //     console.error("Error fetching experiences:", error);
    //   }
    // );
  }
}
