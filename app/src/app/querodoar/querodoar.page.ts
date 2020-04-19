import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/auth/user.services';

@Component({
  selector: 'app-querodoar',
  templateUrl: './querodoar.page.html',
  styleUrls: ['./querodoar.page.scss'],
})
export class QuerodoarPage implements OnInit {

  user = new User();

  constructor(private authService: AuthService, private userService : UserService,) { }

  ngOnInit() {
    this.checkUser();
  }

  checkUser(){
    var user = localStorage.getItem("user");
      
    if(!user){
      return window.location.replace('http://localhost:8100/login');
    }

    console.log(user);

    this.userService.getUser(user).subscribe(data =>{
      console.log(data);
      this.user = data;
    });

  }

}
