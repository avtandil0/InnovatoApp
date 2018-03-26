import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPost } from '../models/post';
import { IUser } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  users = "https://jsonplaceholder.typicode.com/users";
  posts = "https://jsonplaceholder.typicode.com/posts";
  
  //get all users
  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.users);
  }

  //get user by Id
  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.users+'/'+id);
  }

  //get all posts
  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.posts);
  }

  //get posts by user Id
  getPostsByUserId(userId){
    // temperory array to add posts defined by user id
    let usersPost = [];
    this.getPosts().subscribe(data => 
      { 
        data.forEach(element => {
          if(element.userId == userId)
          {
            usersPost.push(element);
          }
        });
      });
    return usersPost;
  }
}
