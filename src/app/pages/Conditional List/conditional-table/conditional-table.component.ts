import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-conditional-table',
  templateUrl: './conditional-table.component.html',
  styleUrls: ['./conditional-table.component.css']
})
export class ConditionalTableComponent implements OnInit{
  fruitList:any=[];
  constructor(
   private ListService: ListService
  )
  {

  }
  ngOnInit() {
    this.getlist();

  }

getlist()
{
this.fruitList=this.ListService.myFruitList();
}

}
