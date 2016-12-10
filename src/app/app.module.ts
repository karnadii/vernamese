import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConverterComponent } from './converter/converter.component';
import { DocComponent } from './doc/doc.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { MenuComponent } from './menu/menu.component';


//Routing
const appRoutes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'converter',
    component:ConverterComponent,
    data: {
      title: 'Converter'
    }
  },
  {
    path:'doc',
    component: DocComponent,
    data: {
      title: 'Documentation'
    }
  },
  {
    path:'about',
    component:AboutComponent,
    data: {
      title: 'About'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConverterComponent,
    DocComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
