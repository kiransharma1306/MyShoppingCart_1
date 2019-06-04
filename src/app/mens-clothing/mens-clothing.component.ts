import { Component, OnInit } from '@angular/core';
import {MockClothing} from '../Clothing-mock';
import {MOCKS} from '../Mocks';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.css']
})
export class MensClothingComponent implements OnInit {
  
  menClothings = MOCKS;
  menClothingForCart : MockClothing;
  menClothingForCartItems:MockClothing[]=[];
  constructor() { }
  dataSource=this.menClothingForCartItems;
  displayedColumns  = ['No','Name','Price'];
  ngOnInit() {
    //console.log(this.menClothings);
  }

  addToCart(id: number){
   // console.log("hellocart");
this.menClothingForCart =this.menClothings.find(a=>a.id===id);
    this.menClothingForCartItems.push(this.menClothingForCart);
}


myCartItems():boolean{
  
  if(!this.menClothingForCartItems)
  {return true};
  console.log("hi");
}
}