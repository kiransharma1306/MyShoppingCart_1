import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MensClothingComponent} from './mens-clothing/mens-clothing.component';
import {HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [{path: 'MensClothing', component: MensClothingComponent},
{path: 'Home', component: HomeComponentComponent},
{path: '', redirectTo: '/Home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes),], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
