import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { KidsprofComponent } from './components/kidsprof/kidsprof.component';
import { WorkersComponent } from './components/workers/workers.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {routing} from './app.routings';
import { HomeComponent } from './components/home/home.component';
import { ContentManagerComponent } from './components/content-manager/content-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    KidsprofComponent,
    WorkersComponent,
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    ContentManagerComponent
  ],
  imports: [routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
