import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }
  
  user: IUser;
  ngOnInit() {
    this.getUserDetails();  
  }

  getUserDetails(){
    //get id from router
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
        .subscribe(data => this.user = data);
  }

  goBack(): void {
    this.location.back();
  }

}
