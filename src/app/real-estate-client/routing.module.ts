import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealEstateClientComponent } from './component';

const routes: Routes = [
  { path: 'real-estate-client', component: RealEstateClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RealEstateClientRoutingModule { }
