import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`
    .sidebar-top{
        position:absolute;
        top: 0;
    }
    .sidebar-bottom{
        position:absolute;
        bottom: 0;
    }
    .logo-expand{
      display:inline;
      color:#FF2019;
      font-size:2em
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scan() {

  }
  about() {

  }
  faq() {

  }
  advice() {

  }
}
