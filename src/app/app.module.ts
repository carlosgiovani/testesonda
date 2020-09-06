import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { MenuPrimaryComponent } from './components/menu-primary/menu-primary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    MenuPrimaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MenuPrimaryComponent]
})
export class AppModule { }
