import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { ClassComponent } from './class/class.component';
import { CompletatiComponent } from './completati/completati.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    ClassComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
