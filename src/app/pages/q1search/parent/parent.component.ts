import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
searchTerm:any='';
  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.getVeggis()
  }
search(event:any){
  this.searchTerm=event.value;
  console.log(event.value);
}

getVeggis(){
  return this.listService.myVeggiesList();
}

}
