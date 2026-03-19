import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css'],
})
export class ChildPageComponent implements OnInit {
  @Input() parentText: any;
@Output() childText= new EventEmitter<any>();

  ngOnInit() {}


  sendMessage(){
    this.childText.emit("hello Nilasish , Nice To meet you.")

  }
}
