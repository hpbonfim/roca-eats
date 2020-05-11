(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" >\n  <!-- Preloader -->\n  <div class=\"spinner-wrapper\">\n    <div class=\"spinner\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </div>\n  <!-- fim do preloader -->\n\n  <!-- Header -->\n  <header id=\"inicio\" class=\"header\">\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-expand-lg navbar-dark navbar-custom\">\n      <div class=\"container\">\n        <!-- Image Logo \n        <a class=\"navbar-brand\" href=\"/\"><img src=\"assets/icons/icon-72x72.png\" alt=\"icon\"></a> -->\n        <!-- Mobile Menu Toggle Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n          aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-awesome fas fa-bars\"></span>\n          <span class=\"navbar-toggler-awesome fas fa-times\"></span>\n        </button>\n        <!-- fim do mobile menu toggle button -->\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"redirectInicio()\">INÍCIO</a>\n            </li>\n          </ul>\n          <span class=\"nav-item\">\n            <a class=\"btn-outline-sm\" (click)=\"redirectLogin()\">ENTRAR</a>\n        </span>\n        <span class=\"nav-item\">\n            <a class=\"btn-outline-sm\" (click)=\"redirectRegister()\">REGISTRAR</a>\n        </span>\n        </div>\n      </div> <!-- fim do container -->\n    </nav> <!-- fim do navbar -->\n  </header>\n  <svg class=\"header-frame\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n    viewBox=\"0 0 1920 310\">\n    <defs>\n      <style>\n        .cls-1 {\n          fill: #3d2d10;\n        }\n      </style>\n    </defs>\n    <title>header-frame</title>\n    <path class=\"cls-1\"\n      d=\"M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z\" />\n  </svg>\n\n  <div class=\"center\" style=\"align-items: center; text-align: center; align-self: center; \">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f;\">\n          {{tituloProjeto}}</h1>\n        <div class=\"above-heading\"></div>\n        <!-- <h2 class=\"h2-heading\">{{subtituloProjeto}}</h2> -->\n      </div> <!-- fim do col -->\n    </div> <!-- fim do row -->\n    <div class=\"center\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <form name=\"form\" #form=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"container\">\n              <div class=\"container\">\n                <div class=\"container\">\n                    <div padding>\n                      <ion-item>\n                        <ion-input id=\"email\" name=\"email\" type=\"email\" placeholder=\"seu@email.com\" [(ngModel)]=\"loginData.email\" required></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input name=\"password\" type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"loginData.password\" required></ion-input>\n                      </ion-item>\n                    </div>\n                    <div padding>\n                      <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Entrar</ion-button>\n                    </div>\n                    <ion-row>\n                      <div text-center>              \n                          Se você não possui uma conta, <a href=\"/register\" (click)=\"redirectRegister()\">\n                      registre-se</a> primeiro!\n                      </div>\n                  </ion-row>\n                </div>\n              </div>\n            </div>\n            </form>\n        </div> <!-- fim do col -->\n      </div> <!-- fim do row -->\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <svg class=\"footer-frame\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n  viewBox=\"0 0 1920 79\">\n  <defs>\n      <style>\n          .cls-2 {\n              fill: #526E2A;\n          }\n      </style>\n  </defs>\n  <title>footer-frame</title>\n  <path class=\"cls-2\"\n      d=\"M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z\"\n      transform=\"translate(0 -0.188)\" />\n</svg>\n<div class=\"footer\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"footer-col first\">\n                  <h4>{{tituloFooter}}</h4>\n                  <p class=\"p-small\">{{textoFooter}}</p>\n              </div>\n          </div> <!-- fim do col -->\n          <div class=\"col-md-4\">\n              <div class=\"footer-col middle\">\n                  <h4>Colaboradores</h4>\n                  <ul class=\"list-unstyled li-space-lg p-small\">\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\" href=\"https://hackatrouble.com.br\"\n                                  target=\"_blank\">https://hackatrouble.com.br</a></div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\"\n                                  href=\"https://www.bancodealimentos.org.br/parceiro\"\n                                  target=\"_blank\">https://www.bancodealimentos.org.br/parceiro</a></div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\" href=\"https://aws.amazon.com/\"\n                                  target=\"_blank\">https://aws.amazon.com/</a></div>\n                      </li>\n                  </ul>\n              </div>\n          </div> <!-- fim do col -->\n          <div class=\"col-md-4\">\n              <div class=\"footer-col last\">\n                  <h4>Contact</h4>\n                  <ul class=\"list-unstyled li-space-lg p-small\">\n                      <li class=\"media\">\n                          <i class=\"fas fa-map-marker-alt\"></i>\n                          <div class=\"media-body\">Rua dos benfeitores, Brasil, 00000-000, BR</div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-envelope\"></i>\n                          <div class=\"media-body\"><a class=\"white\"\n                                  href=\"mailto:contact@rocaeats.com\">contato@rocaeats.com</a></div>\n                      </li>\n                  </ul>\n              </div>\n          </div> <!-- fim do col -->\n      </div> <!-- fim do row -->\n  </div> <!-- fim do container -->\n</div> <!-- fim do footer -->\n<!-- fim do footer -->\n\n<!-- Copyright -->\n<div class=\"copyright\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <p class=\"p-small\">Copyright © 2020 - Roça Eats</p>\n          </div> <!-- fim do col -->\n      </div> <!-- enf do row -->\n  </div> <!-- fim do container -->\n</div> <!-- fim do copyright -->\n<!-- fim do copyright -->\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]],
        providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]],
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --background: #8c8c8c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hwL1RlbXBsYXRlcy9yb2NhLWVhdHMvYXBwL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICM4YzhjOGM7XG59IiwiaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzhjOGM4Yztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_loginData_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/loginData.model */ "./src/app/models/loginData.model.ts");






let LoginPage = class LoginPage {
    constructor(alertController, authService, router) {
        this.alertController = alertController;
        this.authService = authService;
        this.router = router;
        // textos inicio
        this.tituloHeader = "COLHENDO O MELHOR DE NÓS!";
        // textos projeto
        this.tituloProjeto = "LOGIN";
        this.subtituloProjeto = "Queremos diminuir o impacto que o novo coronavirus COVID-19 está fazendo em nossas vidas.";
        // textos footer
        this.tituloFooter = "SOBRE O ROÇA EATS";
        this.textoFooter = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";
        this.loginData = new src_app_models_loginData_model__WEBPACK_IMPORTED_MODULE_5__["LoginData"]();
    }
    ngOnInit() {
    }
    redirectInicio() {
        return window.location.href = 'http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/';
    }
    redirectLogin() {
        return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/login');
    }
    redirectRegister() {
        this.router.navigate(['/register']);
        return window.location.href = 'http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/register';
    }
    login() {
        debugger;
        console.log(this.loginData);
        this.authService.login(this.loginData.email, this.loginData.password).subscribe(res => {
            if (res["success"] == false) {
                this.presentAlert('Login', res["message"]);
            }
            else if (res["success"] == true) {
                localStorage.setItem("user", this.loginData.email);
                window.location.href = 'http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/dashboard';
            }
            else {
                this.presentAlert('Login', "Seus dados de login estão incorretos, verifique!");
            }
        });
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                //subHeader: subHeader,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginPage);



/***/ }),

/***/ "./src/app/models/loginData.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/loginData.model.ts ***!
  \*******************************************/
/*! exports provided: LoginData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginData", function() { return LoginData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginData {
}


/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map