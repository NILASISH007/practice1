import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()searchTerm:any;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.furitlist();
    console.log( this.furitlist());
  }


  furitlist(){
   return this.listService.myFruitList().filter((item:any)=>
   {
    return item.name.toLowerCase().startsWith(this.searchTerm.toLowerCase());
   }
   );
  }



}
