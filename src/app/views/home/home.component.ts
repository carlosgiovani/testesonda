import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
