import { Component } from '@angular/core';
import { MenuPrimaryComponent } from '../app/components/menu-primary/menu-primary.component';
import * as $ from 'jquery';

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
