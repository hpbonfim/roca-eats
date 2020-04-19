import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginData } from 'src/app/models/loginData.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // textos inicio
  tituloHeader: string = "COLHENDO O MELHOR DE NÓS!";

  // textos projeto
  tituloProjeto: string = "LOGIN";
  subtituloProjeto: string = "Queremos diminuir o impacto que o novo coronavirus COVID-19 está fazendo em nossas vidas.";

  // textos footer
  tituloFooter: string = "SOBRE O ROÇA EATS";
  textoFooter: string = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";

  loginData = new LoginData();

  constructor(public alertController: AlertController, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    debugger;
    console.log(this.loginData);

    this.authService.login(this.loginData.email, this.loginData.password).subscribe(res => {
      if(res["success"] == false){
        this.presentAlert('Login', res["message"]);
      }
      else if (res["success"] == true) {
        localStorage.setItem("user", this.loginData.email);

        this.router.navigate(['/dashboard']);
      } else {
        this.presentAlert('Login', "Seus dados de login estão incorretos, verifique!");
      }
    });    
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      //subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
