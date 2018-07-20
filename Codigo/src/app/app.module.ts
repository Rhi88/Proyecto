import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PilasComponent } from './pilas/pilas.component';
import { AppRoutingModule } from './/app-routing.module';
import { AceitecomComponent } from './aceitecom/aceitecom.component';
import { AceiteautoComponent } from './aceiteauto/aceiteauto.component';
import { ElectronicosComponent } from './electronicos/electronicos.component';


@NgModule({
  declarations: [
    AppComponent,
    
    PilasComponent,
    AceitecomComponent,
    AceiteautoComponent,
    ElectronicosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
