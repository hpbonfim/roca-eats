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


  termosDeUso() {
    if (confirm(this.termoDefinicao)) {
      return true;
    } else {
      return false;
    }
  }

  termoDefinicao: string = "TERMOS E CONDIÇÕES DE USO ROÇAEAST \n Art. 1º O doador (produtor rural, distribuidor, atacadistas e varejistas), declara estar ciente da responsabilidade e assume o compromisso de cumprir com as normas de rastreabilidade da INC 02/2018. \n Art. 2º Os doadores citados no artigo anterior, ao aceitarem os termos e condições de uso, declaram sob as penas da lei, manter registros dos insumos agrícolas aplicados na produção ou pós-colheita por 18 meses e realizar a rastreabilidade, com registros, controle e identificação (conforme INC 02/2018). \n Art. 3º ao aceitarem os termos de uso, os doadores assumem a responsabilidade de entregar a doação aos beneficiários, seguindo os termos de qualidade e higienização. \n Art. 4º os doadores assumem o compromisso de não onerar por qualquer forma ou valor, o beneficiário da doação. \n Art. 5º os doadores, assumem o compromisso de entregar os produtos previamente definidos, a instituição beneficiária, nos dias e horários pré-definidos. §1º as condições de entregas definidas no caput do artigo anterior, poderão ser revistas e realocadas, modificadas ou alteradas, em casos oriundos a estado de necessidade ou força maior. §2º ocorrendo qualquer hipótese do paragrafo anterior, o doador assume não realizar entrega de qualquer produto fora dos padrões de qualidade e consumo, reavaliando uma nova remessa de produtos. \n Art. 6º os beneficiários assumem o compromisso, de receber os produtos oriundos das doações, nos dias é horários programados, passando a confirmar e avaliar a qualidade dos produtos entregues. \n Art. 7º os beneficiários dos produtos doados firmam o compromisso de fazer a destinação dos produtos, aos necessitados em situação de precariedade ou qualquer dificuldade social, sem custo ou ônus. \n Art. 8º os cadastrados na plataforma RoçaEast, autorizam a utilização dos dados cadastrais inseridos no sistema no momento da confirmação e aceitação destes termos e condições de uso. §1º os membros e usuários da plataforma RoçaEast, autorizam o uso de imagens audiovisuais, fotografias, textos, logo e marcas, nome fantasia e razões sociais, em campanhas com fim social, exposição na plataforma digital, pôster, reportagens associadas a plataforma em ambientes midiáticos, jornalísticos ou qualquer plataforma de redes sociais ligadas a RoçaEast. \n Art. 9º a RoçaEats fica isenta de qualquer responsabilidade sobre as doações entregues, seu tipo, quantidade e qualidade, ou quaisquer danos que por motivo de estado de necessidade ou força maior vierem a acontecer com o transporte desta. Ciente dos termos e condições acima, aceito o uso da plataforma RoçaEats, a fim de cumprir com as condições pré-estabelecidas e qualquer outras que vierem a ser introduzidas ou alteradas durante o período de cadastramento na plataforma. Declaro ainda, serem verdadeiras as informações e estou ciente da aplicação das penalidades prescritas no Art. 299 do Código Penal Brasileiro, caso não haja veracidade."
 
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
    return window.location.href = 'http://34.231.173.124/';
  }
  redirectLogin(){
    return window.location.replace('http://34.231.173.124/login');
  }
  redirectRegister(){
    this.router.navigate(['/register'])
    return window.location.href = 'http://34.231.173.124/register';
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

    this.userService.register(this.user).subscribe(data => {
      console.log(JSON.stringify(this.user));

      this.router.navigate(['/dashboard']);
    });    
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
