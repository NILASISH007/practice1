import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-parent-route',
  templateUrl: './parent-route.component.html',
  styleUrls: ['./parent-route.component.css'],
})
export class ParentRouteComponent {
  text:any;
  constructor(
    private router:Router
  )
  {

  }

  nextPge()
  {
  this.router.navigate(['/child',this.text]);
  }
}
