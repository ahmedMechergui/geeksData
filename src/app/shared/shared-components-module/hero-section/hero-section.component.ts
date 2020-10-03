import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
@Input() imageName;
@Input() image1 ;
@Input() image2 = null;
  constructor() { }

  ngOnInit(): void {
    document.getElementById('hero').style.setProperty('background',
      'linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%), url("assets/images/'
      + this.imageName + '")');
  }

}
