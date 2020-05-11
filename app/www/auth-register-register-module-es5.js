function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" >\n  <!-- Preloader -->\n  <div class=\"spinner-wrapper\">\n    <div class=\"spinner\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </div>\n  <!-- fim do preloader -->\n\n  <!-- Header -->\n  <header id=\"inicio\" class=\"header\">\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-expand-lg navbar-dark navbar-custom\">\n      <div class=\"container\">\n        <!-- Image Logo \n        <a class=\"navbar-brand\" href=\"/\"><img src=\"assets/icons/icon-72x72.png\" alt=\"icon\"></a> -->\n        <!-- Mobile Menu Toggle Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n          aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-awesome fas fa-bars\"></span>\n          <span class=\"navbar-toggler-awesome fas fa-times\"></span>\n        </button>\n        <!-- fim do mobile menu toggle button -->\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"redirectInicio()\">INÍCIO</a>\n            </li>\n          </ul>\n          <span class=\"nav-item\">\n            <a class=\"btn-outline-sm\" (click)=\"redirectLogin()\">ENTRAR</a>\n        </span>\n        <span class=\"nav-item\">\n            <a class=\"btn-outline-sm\" (click)=\"redirectRegister()\">REGISTRAR</a>\n        </span>\n        </div>\n      </div> <!-- fim do container -->\n    </nav> <!-- fim do navbar -->\n  </header>\n  <svg class=\"header-frame\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n  viewBox=\"0 0 1920 310\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: #3d2d10;\n      }\n    </style>\n  </defs>\n  <title>header-frame</title>\n  <path class=\"cls-1\"\n    d=\"M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z\" />\n</svg>\n\n  <div style=\"align-items: center; text-align: center; align-self: center; \">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f;\">\n          {{tituloProjeto}}</h1>\n        <div class=\"above-heading\"></div>\n        <!-- <h2 class=\"h2-heading\">{{subtituloProjeto}}</h2> -->\n      </div> <!-- fim do col -->\n    </div> <!-- fim do row -->\n    <div style=\"align-items: center; text-align: center; align-self: center;\">\n          <form #form=\"ngForm\" (ngSubmit)=\"register()\">\n            <div class=\"container\">\n              <div class=\"container\">\n                <div class=\"container\">\n\n                  <div padding>\n                    <ion-item>\n                      <ion-input name=\"fullName\" type=\"text\" placeholder=\"Nome\" [(ngModel)]=\"user.fullName\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"fantasyName\" type=\"text\" placeholder=\"Apelido ou Nome Social\"\n                        [(ngModel)]=\"user.fantasyName\" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"cpf_cnpj\" type=\"text\" placeholder=\"CNPJ ou CPF\" [(ngModel)]=\"user.cpf_cnpj\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"email\" type=\"email\" placeholder=\"seu@email.com\" [(ngModel)]=\"user.email\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"password\" type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"user.password\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"confirm\" type=\"password\" placeholder=\"Confirmação da Senha\"\n                        [(ngModel)]=\"user.confirmPassword\" required></ion-input>\n                    </ion-item>\n                  </div>\n                  <div text-center>\n                    <h2>Contato</h2>\n                  </div>\n                  <div padding>\n                    <ion-item>\n                      <ion-input name=\"phoneNumber\" type=\"text\" placeholder=\"Celular\" [(ngModel)]=\"user.phoneNumber\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"phoneNumber2\" type=\"text\" placeholder=\"Telefone Fixo\"\n                        [(ngModel)]=\"user.phoneNumber2\">\n                      </ion-input>\n                    </ion-item>\n                  </div>\n                  <div text-center>\n                    <h2>Endereço</h2>\n                  </div>\n                  <div padding>\n                    <ion-item>\n                      <ion-input name=\"postalCode\" type=\"text\" placeholder=\"CEP\" [(ngModel)]=\"address.postalCode\"\n                        required (ionBlur)=\"getAddress()\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"address\" type=\"text\" placeholder=\"Endereço\" [(ngModel)]=\"address.address\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"number\" type=\"text\" placeholder=\"Número\" [(ngModel)]=\"address.number\"\n                        required>\n                      </ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"complement\" type=\"text\" placeholder=\"Complemento\"\n                        [(ngModel)]=\"address.complement\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"neighborhood\" type=\"text\" placeholder=\"Bairro\"\n                        [(ngModel)]=\"address.neighborhood\" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input name=\"city\" type=\"text\" placeholder=\"Cidade\" [(ngModel)]=\"address.city\" required>\n                      </ion-input>\n                    </ion-item>\n                    <!-- <ion-item>\n                    <ion-select [(ngModel)]=\"gaming2\">\n                      <ng-container *ngFor=\"let state of states\">\n                        <ion-option  [value]=\"state.name\">{{item.name}}</ion-option> \n                      </ng-container>\n                   </ion-select>\n                  </ion-item> -->\n                    <ion-item>\n                      <ion-input name=\"state\" type=\"text\" placeholder=\"Estado\" [(ngModel)]=\"address.state\" required>\n                      </ion-input>\n                    </ion-item>\n                  </div>\n                  <div padding>\n                    <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Registrar\n                    </ion-button>\n                  </div>\n                  <div padding>\n                    <ion-button (click)=\"termosDeUso()\">Termos de uso\n                    </ion-button>\n                  </div>\n              </div>\n            </div>\n          </div>\n          </form>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <svg class=\"footer-frame\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n  viewBox=\"0 0 1920 79\">\n  <defs>\n      <style>\n          .cls-2 {\n              fill: #526E2A;\n          }\n      </style>\n  </defs>\n  <title>footer-frame</title>\n  <path class=\"cls-2\"\n      d=\"M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z\"\n      transform=\"translate(0 -0.188)\" />\n</svg>\n<div class=\"footer\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"footer-col first\">\n                  <h4>{{tituloFooter}}</h4>\n                  <p class=\"p-small\">{{textoFooter}}</p>\n              </div>\n          </div> <!-- fim do col -->\n          <div class=\"col-md-4\">\n              <div class=\"footer-col middle\">\n                  <h4>Colaboradores</h4>\n                  <ul class=\"list-unstyled li-space-lg p-small\">\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\" href=\"https://hackatrouble.com.br\"\n                                  target=\"_blank\">https://hackatrouble.com.br</a></div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\"\n                                  href=\"https://www.bancodealimentos.org.br/parceiro\"\n                                  target=\"_blank\">https://www.bancodealimentos.org.br/parceiro</a></div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\" href=\"https://aws.amazon.com/\"\n                                  target=\"_blank\">https://aws.amazon.com/</a></div>\n                      </li>\n                  </ul>\n              </div>\n          </div> <!-- fim do col -->\n          <div class=\"col-md-4\">\n              <div class=\"footer-col last\">\n                  <h4>Contact</h4>\n                  <ul class=\"list-unstyled li-space-lg p-small\">\n                      <li class=\"media\">\n                          <i class=\"fas fa-map-marker-alt\"></i>\n                          <div class=\"media-body\">Rua dos benfeitores, Brasil, 00000-000, BR</div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-envelope\"></i>\n                          <div class=\"media-body\"><a class=\"white\"\n                                  href=\"mailto:contact@rocaeats.com\">contato@rocaeats.com</a></div>\n                      </li>\n                  </ul>\n              </div>\n          </div> <!-- fim do col -->\n      </div> <!-- fim do row -->\n  </div> <!-- fim do container -->\n</div> <!-- fim do footer -->\n<!-- fim do footer -->\n\n<!-- Copyright -->\n<div class=\"copyright\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <p class=\"p-small\">Copyright © 2020 - Roça Eats</p>\n          </div> <!-- fim do col -->\n      </div> <!-- enf do row -->\n  </div> <!-- fim do container -->\n</div> <!-- fim do copyright -->\n<!-- fim do copyright -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/register/register-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth/register/register-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppAuthRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/auth/register/register.page.ts");
    /* harmony import */


    var src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/user.services */
    "./src/app/services/auth/user.services.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      providers: [src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/register/register.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/auth/register/register.module.ts ***!
    \**************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppAuthRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/auth/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/auth/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/auth/register/register.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/auth/register/register.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-message {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hwL1RlbXBsYXRlcy9yb2NhLWVhdHMvYXBwL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG59XG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/register/register.page.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/register/register.page.ts ***!
    \************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppAuthRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_address_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/address.model */
    "./src/app/models/address.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth/user.services */
    "./src/app/services/auth/user.services.ts");
    /* harmony import */


    var src_app_providers_viacep_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/providers/viacep.provider */
    "./src/app/providers/viacep.provider.ts");
    /* harmony import */


    var src_app_providers_openstreetmap_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/providers/openstreetmap.provider */
    "./src/app/providers/openstreetmap.provider.ts");
    /* harmony import */


    var src_app_providers_ibge_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/providers/ibge.provider */
    "./src/app/providers/ibge.provider.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(alertController, ibgeProvider, userService, viaCep, openStreetMap, router) {
        _classCallCheck(this, RegisterPage);

        this.alertController = alertController;
        this.ibgeProvider = ibgeProvider;
        this.userService = userService;
        this.viaCep = viaCep;
        this.openStreetMap = openStreetMap;
        this.router = router;
        this.termoDefinicao = "TERMOS E CONDIÇÕES DE USO ROÇAEAST \n Art. 1º O doador (produtor rural, distribuidor, atacadistas e varejistas), declara estar ciente da responsabilidade e assume o compromisso de cumprir com as normas de rastreabilidade da INC 02/2018. \n Art. 2º Os doadores citados no artigo anterior, ao aceitarem os termos e condições de uso, declaram sob as penas da lei, manter registros dos insumos agrícolas aplicados na produção ou pós-colheita por 18 meses e realizar a rastreabilidade, com registros, controle e identificação (conforme INC 02/2018). \n Art. 3º ao aceitarem os termos de uso, os doadores assumem a responsabilidade de entregar a doação aos beneficiários, seguindo os termos de qualidade e higienização. \n Art. 4º os doadores assumem o compromisso de não onerar por qualquer forma ou valor, o beneficiário da doação. \n Art. 5º os doadores, assumem o compromisso de entregar os produtos previamente definidos, a instituição beneficiária, nos dias e horários pré-definidos. §1º as condições de entregas definidas no caput do artigo anterior, poderão ser revistas e realocadas, modificadas ou alteradas, em casos oriundos a estado de necessidade ou força maior. §2º ocorrendo qualquer hipótese do paragrafo anterior, o doador assume não realizar entrega de qualquer produto fora dos padrões de qualidade e consumo, reavaliando uma nova remessa de produtos. \n Art. 6º os beneficiários assumem o compromisso, de receber os produtos oriundos das doações, nos dias é horários programados, passando a confirmar e avaliar a qualidade dos produtos entregues. \n Art. 7º os beneficiários dos produtos doados firmam o compromisso de fazer a destinação dos produtos, aos necessitados em situação de precariedade ou qualquer dificuldade social, sem custo ou ônus. \n Art. 8º os cadastrados na plataforma RoçaEast, autorizam a utilização dos dados cadastrais inseridos no sistema no momento da confirmação e aceitação destes termos e condições de uso. §1º os membros e usuários da plataforma RoçaEast, autorizam o uso de imagens audiovisuais, fotografias, textos, logo e marcas, nome fantasia e razões sociais, em campanhas com fim social, exposição na plataforma digital, pôster, reportagens associadas a plataforma em ambientes midiáticos, jornalísticos ou qualquer plataforma de redes sociais ligadas a RoçaEast. \n Art. 9º a RoçaEats fica isenta de qualquer responsabilidade sobre as doações entregues, seu tipo, quantidade e qualidade, ou quaisquer danos que por motivo de estado de necessidade ou força maior vierem a acontecer com o transporte desta. Ciente dos termos e condições acima, aceito o uso da plataforma RoçaEats, a fim de cumprir com as condições pré-estabelecidas e qualquer outras que vierem a ser introduzidas ou alteradas durante o período de cadastramento na plataforma. Declaro ainda, serem verdadeiras as informações e estou ciente da aplicação das penalidades prescritas no Art. 299 do Código Penal Brasileiro, caso não haja veracidade."; // textos inicio

        this.tituloHeader = "COLHENDO O MELHOR DE NÓS!"; // textos projeto

        this.tituloProjeto = "Cadastro"; // textos footer

        this.tituloFooter = "SOBRE O ROÇA EATS";
        this.textoFooter = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.address = new _models_address_model__WEBPACK_IMPORTED_MODULE_1__["Address"]();
        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
      }

      _createClass(RegisterPage, [{
        key: "termosDeUso",
        value: function termosDeUso() {
          if (confirm(this.termoDefinicao)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ibgeProvider.getStates().subscribe(function (data) {
            _this.states = data;
          });
        }
      }, {
        key: "redirectInicio",
        value: function redirectInicio() {
          return window.location.href = 'http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/';
        }
      }, {
        key: "redirectLogin",
        value: function redirectLogin() {
          return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/login');
        }
      }, {
        key: "redirectRegister",
        value: function redirectRegister() {
          this.router.navigate(['/register']);
          return window.location.href = 'http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/register';
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this2 = this;

          if (this.address.postalCode != null) {
            this.viaCep.callService(this.address.postalCode).subscribe(function (data) {
              _this2.address.postalCode = data.cep;
              _this2.address.address = data.logradouro;
              _this2.address.city = data.localidade;
              _this2.address.neighborhood = data.bairro;

              var state = _this2.states.find(function (x) {
                return x.sigla == data.uf;
              });

              _this2.address.state = state.nome;

              _this2.openStreetMap.callService("".concat(_this2.address.address, ", ").concat(_this2.address.neighborhood, ", ").concat(_this2.address.city, ", ").concat(_this2.address.state, ", brasil")).subscribe(function (data) {
                if (data) {
                  _this2.address.lat = data[0].lat;
                  _this2.address.lon = data[0].lon;
                }
              });
            });
          }
        }
      }, {
        key: "register",
        value: function register() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.user.address = this.address;
                    this.userService.register(this.user).subscribe(function (data) {
                      console.log(JSON.stringify(_this3.user));

                      _this3.router.navigate(['/dashboard']);
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "matchPassword",
        value: function matchPassword() {
          if (this.user.password === this.user.confirmPassword) {
            return null;
          }

          return {
            isValid: false
          };
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(subHeader, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: subHeader,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_providers_ibge_provider__WEBPACK_IMPORTED_MODULE_9__["IBGEProvider"]
      }, {
        type: src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_providers_viacep_provider__WEBPACK_IMPORTED_MODULE_7__["ViaCepProvider"]
      }, {
        type: src_app_providers_openstreetmap_provider__WEBPACK_IMPORTED_MODULE_8__["OpenStreetMapProvider"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/auth/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_providers_ibge_provider__WEBPACK_IMPORTED_MODULE_9__["IBGEProvider"], src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_providers_viacep_provider__WEBPACK_IMPORTED_MODULE_7__["ViaCepProvider"], src_app_providers_openstreetmap_provider__WEBPACK_IMPORTED_MODULE_8__["OpenStreetMapProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/app/models/address.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/address.model.ts ***!
    \*****************************************/

  /*! exports provided: Address */

  /***/
  function srcAppModelsAddressModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Address", function () {
      return Address;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Address = function Address() {
      _classCallCheck(this, Address);
    };
    /***/

  }
}]);
//# sourceMappingURL=auth-register-register-module-es5.js.map