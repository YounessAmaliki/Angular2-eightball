import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent }  from './app.component';
import { AnswerService } from './answer.service';

const appRoutes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent ],
  providers:    [ AnswerService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
