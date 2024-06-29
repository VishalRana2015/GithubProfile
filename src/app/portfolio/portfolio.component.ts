import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent  implements OnInit{

  constructor(private service: ServiceService) { }
  experiences: any = [];
  ngOnInit(): void {
    this.service.getExperiences().subscribe(data => {
      console.log("Data from JSON file:", data);
      this.experiences = data.experiences;
      console.log("Retrieved data:", this.experiences);
    });
  }
}
