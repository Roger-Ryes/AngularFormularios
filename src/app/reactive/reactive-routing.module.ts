import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"basicos", component:BasicComponent},
      {path:"dinamicos", component:DinamicsComponent},
      {path:"switches", component:SwitchesComponent},
      {path:"**", redirectTo:"basicos"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
