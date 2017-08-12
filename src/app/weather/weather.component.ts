import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherPics = []
  constructor() { }

  ngOnInit() {
    this.weatherPics = [
      { src: "../../assets/images/weather1.png", alt: "能源", active: true },
      { src: "../../assets/images/weather2.png", alt: "农业", active: false },
      { src: "../../assets/images/weather3.png", alt: "交通", active: false },
      { src: "../../assets/images/weather4.png", alt: "旅游", active: false },
    ]
  }
  active(img){
    this.weatherPics.filter((image)=>image.alt===img.alt ? image.active = true :image.active = false );
  }
}
