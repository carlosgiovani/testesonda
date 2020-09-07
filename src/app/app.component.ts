import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'empresaabc';

  openMenu() {
    $('.menu').animate({ left: '0px' }, 10);
  }
  closeMenu() {
    $('.menu').animate({ left: '-240px' }, 10);
  }
}
