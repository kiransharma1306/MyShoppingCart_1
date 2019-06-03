import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MensClothingComponent} from './mens-clothing/mens-clothing.component';

const routes: Routes = [{path: 'MensClothing', component: MensClothingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
