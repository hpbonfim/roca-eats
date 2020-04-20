import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/auth/user.services';
import { User } from '../models/user.model';

@Component({
  selector: 'app-precisodoacao',
  templateUrl: './precisodoacao.page.html',
  styleUrls: ['./precisodoacao.page.scss'],
})
export class PrecisodoacaoPage implements OnInit {

  user = new User();

  constructor(private authService: AuthService, private userService : UserService,) { }

  ngOnInit() {
    this.checkUser();
  }

  checkUser(){
    var user = localStorage.getItem("user");
      
    if(!user){
      return window.location.replace('http://34.231.173.124/login');
    }

    console.log(user);

    this.userService.getUser(user).subscribe(data =>{
      console.log(data);
      this.user = data;
    });

  }
}
