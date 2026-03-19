import { Injectable } from '@angular/core';
import { user } from 'src/app/app-settings/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
   public usersList:any=[]
   private users: user[] = [
    { id: 1, Name: 'Nilasish Banerjee', Age: 25 },
    { id: 2, Name: 'Soma Banerjee', Age: 25 },
  ];
  constructor() {}

  getUser():user[] {
    return this.users
  }

  addUser(useritem:user)
  {
    useritem.id = this.users.length + 1;
    this.users.push(useritem);

  }
  deleteUser(id:number){
    this.users=this.users.filter(users=>users.id !==id)
  }
  updateUser(updateUser:user)
  {
    const index = this.users.findIndex((u) => u.id == updateUser.id);
    if(index !== -1)
    {
      this.users[index] = updateUser;
    }
  }
}
