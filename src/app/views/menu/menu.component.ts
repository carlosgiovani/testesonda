import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openMenu1() {
    $('.menu').animate({ left: '0px' }, 7);
  }
  closeMenu1() {
    $('.menu').animate({ left: '-240px' }, 7);
  }
}
