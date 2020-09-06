import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-primary',
  templateUrl: './menu-primary.component.html',
  styleUrls: ['./menu-primary.component.scss']
})
export class MenuPrimaryComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  openMenu() {
    $('.menu').animate({ left: '0px' }, 7);
  }
  closeMenu() {
    $('.menu').animate({ left: '-240px' }, 7);
  }
}
