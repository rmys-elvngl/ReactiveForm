import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ReactiveType2Component } from './reactive-type2/reactive-type2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    ReactiveType2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
