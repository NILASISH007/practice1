import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-child-route',
  templateUrl: './child-route.component.html',
  styleUrls: ['./child-route.component.css']
})
export class ChildRouteComponent implements OnInit {
 text:any;

 constructor(
  private route:ActivatedRoute
 )
 {

 }
  ngOnInit() {
   this.text=this.route.snapshot.paramMap.get('text')
  }


}
