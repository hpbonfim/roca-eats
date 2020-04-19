import { Address } from './../../models/address.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/auth/user.services';
import { ViaCepProvider } from 'src/app/providers/viacep.provider';
import { OpenStreetMapProvider } from 'src/app/providers/openstreetmap.provider';
import { IBGEProvider } from 'src/app/providers/ibge.provider';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // textos inicio
  tituloHeader: string = "COLHENDO O MELHOR DE NÓS!";

  // textos projeto
  tituloProjeto: string = "Cadastro";

  // textos footer
  tituloFooter: string = "SOBRE O ROÇA EATS";
  textoFooter: string = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";
  
  user = new User();
  address = new Address();

  states: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public alertController: AlertController, public ibgeProvider: IBGEProvider, public userService: UserService, public viaCep: ViaCepProvider, public openStreetMap: OpenStreetMapProvider, private router: Router) { }

  ngOnInit() {
    this.ibgeProvider.getStates().subscribe(data => {
      this.states = data;
    });
  }
  redirectInicio(){
    return window.location.href = 'http://localhost:8100/';
  }
  redirectLogin(){
    return window.location.replace('http://localhost:8100/login');
  }
  redirectRegister(){
    this.router.navigate(['/register'])
    return window.location.href = 'http://localhost:8100/register';
  }

  getAddress() {
    if (this.address.postalCode != null) {
      this.viaCep.callService(this.address.postalCode)
        .subscribe(
          data => {
            this.address.postalCode = data.cep;
            this.address.address = data.logradouro;
            this.address.city = data.localidade;
            this.address.neighborhood = data.bairro;
            
            var state = this.states.find(x => x.sigla == data.uf);

            this.address.state = state.nome;

            this.openStreetMap.callService(`${this.address.address}, ${this.address.neighborhood}, ${this.address.city}, ${this.address.state}, brasil`).subscribe(
              data => {
                if (data) {
                  this.address.lat = data[0].lat;
                  this.address.lon = data[0].lon;
                }
              }
            )
          }
        );
    }
  }

  async register() {

    this.user.address = this.address;

    this.userService.register(this.user);

    console.log(JSON.stringify(this.user));

    this.router.navigate(['/dashboard']);
  }

  matchPassword(): any {
    if (this.user.password === this.user.confirmPassword) {
      return null;
    }

    return {
      isValid: false
    };
  }

  async presentAlert(subHeader, message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
