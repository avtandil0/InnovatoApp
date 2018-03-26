import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  users: IUser[] = [];
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe(data => 
        this.users = data
      );
  }

}
