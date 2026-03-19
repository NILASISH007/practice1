import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  // imports:[]
})
export class ReactiveFormsComponent implements OnInit {
  reactiveFrom:any;
constructor(
  private fb: FormBuilder
)
{

}
  ngOnInit() {

    this.reactiveFrom=this.fb.group({

      name:['',Validators.required],
     email:['',[Validators.required,Validators.email]]

    })
  }

submit()
{
 if(this.reactiveFrom.invalid)
 {
  this.reactiveFrom.markAllAsTouched();
 }
  console.log("From data ",this.reactiveFrom.value)
}
}
