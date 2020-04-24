import { UserService } from 'src/app/services/auth/user.services';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // textos inicio
  tituloHeader: string = "COLHENDO O MELHOR DE NÓS!";

  // textos footer
  tituloFooter: string = "SOBRE O ROÇA EATS";
  textoFooter: string = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";

  user = new User();

  constructor(private authService: AuthService, private userService : UserService,) { }

  ngOnInit() {
    this.checkUser();
  }

  checkUser(){
    var user = localStorage.getItem("user");
      
    if(!user){
      return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/login');
    }

    console.log(user);

    this.userService.getUser(user).subscribe(data =>{
      console.log(data);
      this.user = data;
    });

  }

  redirectMapa(){
    return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/mapa');
  }

  redirecExit(){
    return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/');
  }

  redirectQueroDoar(){
    return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/querodoar');
  }

  redirectPrecisoDoacao(){
    return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/precisodoacao');
  }

}
