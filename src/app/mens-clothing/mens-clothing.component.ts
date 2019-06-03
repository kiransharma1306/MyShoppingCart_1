import { Component, OnInit } from '@angular/core';
import {MockClothing} from '../Clothing-mock';
import {MOCKS} from '../Mocks';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.css']
})
export class MensClothingComponent implements OnInit {

  menClothings = MOCKS;
  constructor() { }

  ngOnInit() {
    console.log(this.menClothings);
  }

}
