import { Component, OnInit } from '@angular/core';
import data from '../../assets/experience.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  experiences: any[] = [];

  constructor(){
    
  }

  ngOnInit(): void {
    this.fetchExperiences();
  }

  private fetchExperiences(): void {
    this.experiences = data.experience;
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
