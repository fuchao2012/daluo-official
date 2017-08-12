import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  name: string = 'tech';
  isScan: boolean = false;
  constructor() { }

  ngOnInit() {
    this.name = window.location.host.split('.')[1] || 'tech';
  }

  ngOnChanges(v) {
    console.log(v);
  }
  scan() {
    this.isScan = !this.isScan
  }
}
