import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import {PilasComponent} from './pilas/pilas.component';
import{ElectronicosComponent} from './electronicos/electronicos.component';
import{AceiteautoComponent} from './aceiteauto/aceiteauto.component';
import{AceitecomComponent} from './aceitecom/aceitecom.component';

const routes: Routes=[
  {path:'pilas', component:PilasComponent},
  {path:'electronicos', component:ElectronicosComponent},
  {path:'aceiteauto', component:AceiteautoComponent},
  {path:'aceitecom', component:AceitecomComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule] 
})

export class AppRoutingModule { }
