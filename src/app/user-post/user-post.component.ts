import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IPost } from '../models/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) { }

  posts: IPost[] = [];
  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    //get Id from router
    const id = +this.route.snapshot.paramMap.get('id');
    this.posts = this.userService.getPostsByUserId(id);
  }

  goBack(): void {
    this.location.back();
  }
}
