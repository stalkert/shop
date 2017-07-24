import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'app-header',
  host: {
    class: 'header-content'
  },
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
