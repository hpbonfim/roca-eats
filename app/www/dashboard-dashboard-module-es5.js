function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" style=\"align-items: center; text-align: center; align-self: center; \">\n  <!-- Preloader -->\n  <div class=\"spinner-wrapper\">\n    <div class=\"spinner\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </div>\n  <!-- fim do preloader -->\n\n  <!-- Header -->\n  <header id=\"inicio\" class=\"header\">\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-expand-lg navbar-dark navbar-custom\">\n      <div class=\"container\">\n          <!-- Image Logo -->\n          <a class=\"navbar-brand\" href=\"/\"><img src=\"assets/icons/icon-72x72.png\" alt=\"icon\"></a>\n          <!-- Mobile Menu Toggle Button -->\n      </div> <!-- fim do container -->\n      <div class=\"collapse navbar-collapse\">\n        <div style=\"color: aliceblue;\">\n        Bem vindo, {{user.fantasyName}}!\n      </div>\n      </div>\n    </nav> <!-- fim do navbar -->\n  </header>\n  <svg class=\"header-frame\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n    viewBox=\"0 0 1920 310\">\n    <defs>\n      <style>\n        .cls-1 {\n          fill: #3d2d10;\n        }\n      </style>\n    </defs>\n    <title>header-frame</title>\n    <path class=\"cls-1\"\n      d=\"M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z\" />\n  </svg>\n\n  <div class=\"center\">\n    <div style=\"height: 80px;\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-4\">\n        <ion-button size=\"large\" type=\"button\" expand=\"block\" (click)=\"redirectQueroDoar()\">\n          <ion-icon name=\"leaf-outline\">\n\n        </ion-icon>Quero Doar\n        </ion-button>\n      </div>\n      <div class=\"col-md-4\">        \n        <ion-button size=\"large\" type=\"button danger\" expand=\"block\" (click)=\"redirectPrecisoDoacao()\"><ion-icon name=\"heart-outline\"></ion-icon>\n          Preciso de uma doação\n        </ion-button>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <div style=\"height: 80px;\"></div>\n  </div>\n\n  <!-- Footer -->\n  <svg class=\"footer-frame\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n  viewBox=\"0 0 1920 79\">\n  <defs>\n      <style>\n          .cls-2 {\n              fill: #526E2A;\n          }\n      </style>\n  </defs>\n  <title>footer-frame</title>\n  <path class=\"cls-2\"\n      d=\"M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z\"\n      transform=\"translate(0 -0.188)\" />\n</svg>\n<div class=\"footer\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"footer-col first\">\n                  <h4>{{tituloFooter}}</h4>\n                  <p class=\"p-small\">{{textoFooter}}</p>\n              </div>\n          </div> <!-- fim do col -->\n          <div class=\"col-md-4\">\n              <div class=\"footer-col middle\">\n                  <h4>Colaboradores</h4>\n                  <ul class=\"list-unstyled li-space-lg p-small\">\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\" href=\"https://hackatrouble.com.br\"\n                                  target=\"_blank\">https://hackatrouble.com.br</a></div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\"\n                                  href=\"https://www.bancodealimentos.org.br/parceiro\"\n                                  target=\"_blank\">https://www.bancodealimentos.org.br/parceiro</a></div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-square\"></i>\n                          <div class=\"media-body\"><a class=\"white\" href=\"https://aws.amazon.com/\"\n                                  target=\"_blank\">https://aws.amazon.com/</a></div>\n                      </li>\n                  </ul>\n              </div>\n          </div> <!-- fim do col -->\n          <div class=\"col-md-4\">\n              <div class=\"footer-col last\">\n                  <h4>Contact</h4>\n                  <ul class=\"list-unstyled li-space-lg p-small\">\n                      <li class=\"media\">\n                          <i class=\"fas fa-map-marker-alt\"></i>\n                          <div class=\"media-body\">Rua dos benfeitores, Brasil, 00000-000, BR</div>\n                      </li>\n                      <li class=\"media\">\n                          <i class=\"fas fa-envelope\"></i>\n                          <div class=\"media-body\"><a class=\"white\"\n                                  href=\"mailto:contact@rocaeats.com\">contato@rocaeats.com</a></div>\n                      </li>\n                  </ul>\n              </div>\n          </div> <!-- fim do col -->\n      </div> <!-- fim do row -->\n  </div> <!-- fim do container -->\n</div> <!-- fim do footer -->\n<!-- fim do footer -->\n\n<!-- Copyright -->\n<div class=\"copyright\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <p class=\"p-small\">Copyright © 2020 - Roça Eats</p>\n          </div> <!-- fim do col -->\n      </div> <!-- enf do row -->\n  </div> <!-- fim do container -->\n</div> <!-- fim do copyright -->\n<!-- fim do copyright -->\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-tabs>\n          <ion-tab-bar slot=\"bottom\">\n            <ion-tab-button>\n              <ion-icon name=\"analytics-outline\"></ion-icon>\n            </ion-tab-button>\n            <ion-tab-button (click)=\"redirectMapa()\">\n              <ion-icon name=\"map-outline\"></ion-icon>\n            </ion-tab-button>\n            <ion-tab-button (click)=\"redirectExit()\">\n              <ion-icon name=\"exit-outline\"></ion-icon>\n            </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth/user.services */
    "./src/app/services/auth/user.services.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"]],
      providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth/user.services */
    "./src/app/services/auth/user.services.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(authService, userService) {
        _classCallCheck(this, DashboardPage);

        this.authService = authService;
        this.userService = userService; // textos inicio

        this.tituloHeader = "COLHENDO O MELHOR DE NÓS!"; // textos footer

        this.tituloFooter = "SOBRE O ROÇA EATS";
        this.textoFooter = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkUser();
        }
      }, {
        key: "checkUser",
        value: function checkUser() {
          var _this = this;

          var user = localStorage.getItem("user");

          if (!user) {
            return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/login');
          }

          console.log(user);
          this.userService.getUser(user).subscribe(function (data) {
            console.log(data);
            _this.user = data;
          });
        }
      }, {
        key: "redirectMapa",
        value: function redirectMapa() {
          return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/mapa');
        }
      }, {
        key: "redirecExit",
        value: function redirecExit() {
          return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/');
        }
      }, {
        key: "redirectQueroDoar",
        value: function redirectQueroDoar() {
          return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/querodoar');
        }
      }, {
        key: "redirectPrecisoDoacao",
        value: function redirectPrecisoDoacao() {
          return window.location.replace('http://ec2-52-67-30-15.sa-east-1.compute.amazonaws.com/precisodoacao');
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_auth_user_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map