import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaiComponentComponent } from './pai-component/pai-component.component';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponentComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }