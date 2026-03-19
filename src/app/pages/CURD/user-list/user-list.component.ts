import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { user } from 'src/app/app-settings/interface/interface';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public userList: any = [];
  public userForm: any;
  public item: user = { id: 0, Name: '', Age: 0 };
  isEdit = false;
  constructor(private users: UserServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initianlizeForm();
    this.getUsers();
  }

  getUsers() {
    this.userList = this.users.getUser();
  }
  initianlizeForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  adduser() {
    let formValue = this.userForm.value;
    let data: user = {
      id: 0,
      Name: formValue.name,
      Age: formValue.age,
    };
    this.users.addUser(data);
    this.userForm.reset();
    this.getUsers();
  }
  deleteItem(id: number) {
    this.users.deleteUser(id);
    this.getUsers();
  }

  ediUser(u: user) {
    this.item = { ...u };
    this.isEdit = true;
  }
  updateUser()
  {
    this.users.updateUser(this.item);
    this.isEdit=false;
    this.getUsers();
    }
}
