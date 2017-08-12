import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent implements OnInit {

  name: string;
  constructor() { }

  ngOnInit() {
    // todo get the right name
    this.name = window.location.host.split('.')[1] || 'tech';
  }

}
