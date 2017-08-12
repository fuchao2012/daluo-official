import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: any;
  constructor() { }

  ngOnInit() {
    this.name = window.location.host.split('.')[1] || 'tech'
  }

}
