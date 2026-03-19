import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

fruits:any[]=[
  {name:'Apple', color:'red', quantity:10,price:15},
  {name:'Banana', color:'yellow', quantity:5,price:10},
  {name:'Orange', color:'orange', quantity:8,price:20},
  {name:'Mango', color:'red', quantity:12,price:25},
  {name:'Pineapple', color:'yellow', quantity:6,price:30},
  {name:'Grapes', color:'purple', quantity:15,price:35},
]

vegetables:any[]=[
  {name:'Carrot', color:'orange', quantity:10,price:15},
  {name:'Broccoli', color:'green', quantity:5,price:10},
  {name:'Spinach', color:'green', quantity:8,price:20},
  {name:'Potato', color:'brown', quantity:12,price:25},
  {name:'Onion', color:'yellow', quantity:6,price:30},
  {name:'Cabbage', color:'green', quantity:15,price:35},
]
constructor() { }

myFruitList(){
  return this.fruits;
}

myVeggiesList(){
  return this.vegetables;
}
}
