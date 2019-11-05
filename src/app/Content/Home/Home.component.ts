import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  images = [1,2,3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false; 
   }

  ngOnInit() {
  }

}
