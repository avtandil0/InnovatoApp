import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPostComponent } from './user-post/user-post.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'  },
  { path: 'users', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'user/:id/posts', component: UserPostComponent },
  { path: '**', redirectTo: '/users', pathMatch: 'full'  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
