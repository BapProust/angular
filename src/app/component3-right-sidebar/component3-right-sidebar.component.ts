import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3-right-sidebar',
  templateUrl: './component3-right-sidebar.component.html',
  styleUrls: ['./component3-right-sidebar.component.less']
})
export class Component3RightSidebarComponent implements OnInit {

  flower: any = 'assets/flower.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
