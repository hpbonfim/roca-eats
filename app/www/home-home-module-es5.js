function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <!-- Preloader -->\n    <div class=\"spinner-wrapper\">\n        <div class=\"spinner\">\n            <div class=\"bounce1\"></div>\n            <div class=\"bounce2\"></div>\n            <div class=\"bounce3\"></div>\n        </div>\n    </div>\n    <!-- fim do preloader -->\n\n    <!-- Header -->\n    <header id=\"inicio\" class=\"header\">\n        <!-- Navigation -->\n        <nav class=\"navbar navbar-expand-lg navbar-dark navbar-custom\">\n            <div class=\"container\">\n                <!-- Image Logo \n            <a class=\"navbar-brand\" href=\"/\"><img src=\"assets/icons/icon-72x72.png\" alt=\"icon\"></a> -->\n\n                <!-- Mobile Menu Toggle Button -->\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n                    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-awesome fas fa-bars\"></span>\n                    <span class=\"navbar-toggler-awesome fas fa-times\"></span>\n                </button>\n                <!-- fim do mobile menu toggle button -->\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#inicio\">INÍCIO</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#projeto\">PROJETO</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#detalhes\">SOBRE NÓS</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#midia\">MÍDIA</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#social\">REDES SOCIAIS</a>\n                        </li>\n                    </ul>\n                    <span class=\"nav-item\">\n                        <a class=\"btn-outline-sm\" (click)=\"redirectLogin()\">ENTRAR</a>\n                    </span>\n                    <span class=\"nav-item\">\n                        <a class=\"btn-outline-sm\" (click)=\"redirectRegister()\">REGISTRAR</a>\n                    </span>\n                </div>\n            </div> <!-- fim do container -->\n        </nav> <!-- fim do navbar -->\n\n        <!-- fim do navigation -->\n        <div class=\"header-content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-xl-5\">\n                        <div class=\"text-container\">\n                            <h1\n                                style=\"font: Open Sans, sans-serif; font-size: 50px; color:#eab64f; text-shadow: 2px 2px #27221c;\">\n                                {{tituloHeader}}</h1>\n                        </div> <!-- fim do text-container -->\n                    </div> <!-- fim do col -->\n                    <div class=\"col-lg-6 col-xl-7\">\n                        <div class=\"image-container\">\n                            <div class=\"img-wrapper\">\n                                <img class=\"img-fluid\" src=\"assets/icons/icon-512x512.png\" alt=\"alternative\">\n                            </div> <!-- fim do img-wrapper -->\n                        </div> <!-- fim do image-container -->\n                    </div> <!-- fim do col -->\n                </div> <!-- fim do row -->\n            </div> <!-- fim do container -->\n        </div> <!-- fim do header-content -->\n    </header> <!-- fim do header -->\n    <svg class=\"header-frame\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n        viewBox=\"0 0 1920 310\">\n        <defs>\n            <style>\n                .cls-1 {\n                    fill: #3d2d10;\n                }\n            </style>\n        </defs>\n        <title>header-frame</title>\n        <path class=\"cls-1\"\n            d=\"M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z\" />\n    </svg>\n    <!-- fim do header -->\n\n    <!-- Projeto -->\n    <div id=\"projeto\" class=\"tabs\" class=\"cards-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h1\n                        style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f;\">\n                        {{tituloProjeto}}</h1>\n                    <div class=\"above-heading\"></div>\n                    <h2 class=\"h2-heading\">{{subtituloProjeto}}</h2>\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n\n                    <!-- Card 1-->\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img class=\"img-fluid\" src=\"assets/images/imagem1-400x400.jpg\" alt=\"alternative\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">{{tituloPrimeiroCard}}</h4>\n                            <p>{{textoPrimeiroCard}}</p>\n                        </div>\n                    </div>\n                    <!-- fim do card -->\n\n                    <!-- Card 2-->\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img class=\"img-fluid\" src=\"assets/images/imagem2-400x400.jpg\" alt=\"alternative\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">{{tituloSegundoCard}}</h4>\n                            <p>{{textoSegundoCard}}</p>\n                        </div>\n                    </div>\n                    <!-- fim do card -->\n\n                    <!-- Card 3-->\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img class=\"img-fluid\" src=\"assets/images/imagem3-400x400.jpg\" alt=\"alternative\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">{{tituloTerceiroCard}}</h4>\n                            <p>{{textoTerceiroCard}}</p>\n                        </div>\n                    </div>\n                    <!-- fim do card -->\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do cards-1 -->\n    <!-- fim do projeto -->\n    <hr>\n    <!-- Missão -->\n    <div id=\"detalhes\" class=\"basic-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-container\">\n                        <h1\n                            style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f; text-align: center; \">\n                            {{tituloDetalhesMissao}}</h1>\n                        <h2 style=\"text-align: center;\">{{subtituloDetalhesMissao}}</h2>\n                        <p style=\"text-align: center;\">{{textoDescricaoDetalhesMissao}}</p>\n                    </div> <!-- fim do text-container -->\n                </div> <!-- fim do col -->\n                <div class=\"col-lg-6\">\n                    <div class=\"image-container\">\n                        <img class=\"img-fluid\" src=\"assets/images/imagem1-1000x695.jpg\" alt=\"alternative\">\n                    </div> <!-- fim do image-container -->\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do basic-1 -->\n    <!-- fim do details -->\n    <hr>\n    <!-- Visão -->\n    <div id=\"detalhes\" class=\"basic-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"image-container\">\n                        <img class=\"img-fluid\" src=\"assets/images/imagem2-1000x695.jpg\" alt=\"alternative\">\n                    </div> <!-- fim do image-container -->\n                </div> <!-- fim do col -->\n                <div class=\"col-lg-6\">\n                    <div class=\"text-container\">\n                        <h1\n                            style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f; text-align: center; \">\n                            {{tituloDetalhesVisao}}</h1>\n                        <h2 style=\"text-align: center;\">{{subtituloDetalhesVisao}}</h2>\n                        <p style=\"text-align: center;\">{{textoDescricaoDetalhesVisao}}</p>\n                    </div> <!-- fim do text-container -->\n                </div> <!-- fim do col -->\n\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do basic-1 -->\n    <!-- fim do details -->\n\n    <hr>\n    <!-- Valores -->\n    <div id=\"detalhes\" class=\"basic-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"text-container\">\n                        <h1\n                            style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f; text-align: center; \">\n                            {{tituloDetalhesValores}}</h1>\n                        <h2 style=\"text-align: center;\">{{primeiroTopicoDetalhesValores}}</h2>\n                        <h2 style=\"text-align: center;\">{{segundoTopicoDetalhesValores}}</h2>\n                        <h2 style=\"text-align: center;\">{{terceiroTopicoDetalhesValores}}</h2>\n                        <h2 style=\"text-align: center;\">{{quartoTopicoDetalhesValores}}</h2>\n                        <h2 style=\"text-align: center;\">{{subtituloDetalhesValores}}</h2>\n                        <h2 style=\"text-align: center;\">{{textoDescricaoDetalhesValores}}</h2>\n                    </div> <!-- fim do text-container -->\n                </div> <!-- fim do col -->\n                <div class=\"col-lg-6\">\n                    <div class=\"image-container\">\n                        <img class=\"img-fluid\" src=\"assets/images/imagem3-1000x695.jpg\" alt=\"alternative\">\n                    </div> <!-- fim do image-container -->\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do basic-1 -->\n    <!-- fim do details -->\n\n    <!-- Mídia -->\n    <div id=\"midia\" class=\"tabs\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h1\n                        style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f; text-align: center;\">\n                        {{tituloMidia}}</h1>\n                    <h2 class=\"h2-heading\">{{subtituloMidia}}</h2>\n                    <p class=\"p-heading\">{{textoDescricaoMidia}}</p>\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n\n                    <!-- Tabs Links -->\n                    <ul class=\"nav nav-tabs\" id=\"argoTabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" id=\"nav-tab-1\" data-toggle=\"tab\" href=\"#tab-1\" role=\"tab\"\n                                aria-controls=\"tab-1\" aria-selected=\"true\"><i\n                                    class=\"fas fa-newspaper\"></i>{{tituloAbaPrimeiraMidia}}</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"nav-tab-2\" data-toggle=\"tab\" href=\"#tab-2\" role=\"tab\"\n                                aria-controls=\"tab-2\" aria-selected=\"false\"><i\n                                    class=\"fas fa-tv\"></i>{{tituloAbaSegundaMidia}}</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"nav-tab-3\" data-toggle=\"tab\" href=\"#tab-3\" role=\"tab\"\n                                aria-controls=\"tab-3\" aria-selected=\"false\"><i\n                                    class=\"fas fa-video\"></i>{{tituloAbaTerceiraMidia}}</a>\n                        </li>\n                    </ul>\n                    <!-- fim do tabs links -->\n\n                    <!-- Tabs Content -->\n                    <div class=\"tab-content\" id=\"argoTabsContent\">\n\n                        <!-- Tab 1 -->\n                        <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab-1\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"image-container\">\n                                        <img class=\"img-fluid\" src=\"assets/images/reportagem1-1000x640.png\"\n                                            alt=\"alternative\">\n                                    </div> <!-- fim do image-container -->\n                                </div> <!-- fim do col -->\n                                <div class=\"col-lg-6\">\n                                    <div class=\"text-container\">\n                                        <h3>{{tituloPrimeiraMidia}}</h3>\n                                        <p>{{textoDescricaoPrimeiraMidia}}</p>\n                                        <ul class=\"list-unstyled li-space-lg\">\n                                            <li class=\"media\">\n                                                <i class=\"fas fa-square\"></i>\n                                                <div class=\"media-body\">{{primeiroTopicoPrimeiraMidia}}</div>\n                                            </li>\n                                        </ul>\n                                        <a class=\"btn-solid-reg popup-with-move-anim\"\n                                            href=\"https://globoplay.globo.com/v/8457289/\" target=\"_blank\">ACESSE</a>\n                                    </div> <!-- fim do text-container -->\n                                </div> <!-- fim do col -->\n                            </div> <!-- fim do row -->\n                        </div> <!-- fim do tab-pane -->\n                        <!-- fim do tab -->\n\n                        <!-- Tab 2-->\n                        <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"tab-2\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"image-container\">\n                                        <img class=\"img-fluid\" src=\"assets/images/reportagem2-1000x640.png\"\n                                            alt=\"alternative\">\n                                    </div> <!-- fim do image-container -->\n                                </div> <!-- fim do col -->\n                                <div class=\"col-lg-6\">\n                                    <div class=\"text-container\">\n                                        <h3>{{tituloSegundaMidia}}</h3>\n                                        <p>{{textoDescricaoSegundaMidia}}</p>\n                                        <ul class=\"list-unstyled li-space-lg\">\n                                            <li class=\"media\">\n                                                <i class=\"fas fa-square\"></i>\n                                                <div class=\"media-body\">{{primeiroTopicoSegundaMidia}}</div>\n                                            </li>\n                                        </ul>\n                                        <a class=\"btn-solid-reg popup-with-move-anim\"\n                                            href=\"http://www.odiariodemogi.net.br/agricultores-de-quatinga-doam-parte-da-safra-apos-fechamento-de-feiras/\"\n                                            target=\"_blank\">ACESSE</a>\n                                    </div> <!-- fim do text-container -->\n                                </div> <!-- fim do col -->\n                            </div> <!-- fim do row -->\n                        </div> <!-- fim do tab-pane -->\n                        <!-- fim do tab -->\n\n                        <!-- Tab 3-->\n                        <div class=\"tab-pane fade\" id=\"tab-3\" role=\"tabpanel\" aria-labelledby=\"tab-3\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"image-container\">\n                                        <img class=\"img-fluid\" src=\"assets/images/reportagem3-1000x640.png\"\n                                            alt=\"alternative\">\n                                    </div> <!-- fim do image-container -->\n                                </div> <!-- fim do col -->\n                                <div class=\"col-lg-6\">\n                                    <div class=\"text-container\">\n                                        <h3>{{tituloTerceiraMidia}}</h3>\n                                        <p>{{textoDescricaoTerceiraMidia}}</p>\n                                        <ul class=\"list-unstyled li-space-lg\">\n                                            <li class=\"media\">\n                                                <i class=\"fas fa-square\"></i>\n                                                <div class=\"media-body\">{{primeiroTopicoTerceiraMidia}}</div>\n                                            </li>\n                                            <li class=\"media\">\n                                                <i class=\"fas fa-square\"></i>\n                                                <div class=\"media-body\">{{segundoTopicoTerceiraMidia}}</div>\n                                            </li>\n                                        </ul>\n                                        <a class=\"btn-solid-reg popup-with-move-anim\"\n                                            href=\"https://www.youtube.com/watch?v=mAcdkpm-6m4&feature=youtu.be\"\n                                            target=\"_blank\">ACESSE</a>\n                                    </div> <!-- fim do text-container -->\n                                </div> <!-- fim do col -->\n                            </div> <!-- fim do row -->\n                        </div> <!-- fim do tab-pane -->\n                        <!-- fim do tab -->\n                    </div> <!-- fim do tab content -->\n                    <!-- fim do tabs content -->\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do tabs -->\n    <!-- fim do midia -->\n\n    <!-- Doacao e Redes Sociais -->\n    <div id=\"social\" class=\"form\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"text-container\" style=\"align-self: center; text-align: center; position: relative;\">\n                        <img src=\"assets/images/vakinha.png\"/>\n                        <h2>{{textoVaquinha}}</h2>\n                        <a href=\"https://www.vakinha.com.br/vaquinha/agricultores-de-quatinga-pode-plantar-compramos-e-doamos\" target=\"_blank\">\n                            <button class=\"form-control-submit-button\">VAKINHA</button>\n                        </a>\n                        </div> <!-- end of text-container -->\n                </div> <!-- end of col -->\n            </div> <!-- end of row -->\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h1\n                        style=\"font: Open Sans, sans-serif; font-size: 50px; color:#27221c; text-shadow: 2px 2px 2px #eab64f; text-align: center; \">\n                        {{tituloRedesSociais}}</h1>\n                    <div class=\"icon-container\">\n                        <span class=\"fa-stack\">\n                            <a href=\"https://facebook.com.br\" target=\"_blank\">\n                                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                                <i class=\"fab fa-facebook-f fa-stack-1x\"></i>\n                            </a>\n                        </span>\n                        <span class=\"fa-stack\">\n                            <a href=\"https://\" target=\"_blank\">\n                                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                                <i class=\"fab fa-twitter fa-stack-1x\"></i>\n                            </a>\n                        </span>\n                        <span class=\"fa-stack\">\n                            <a href=\"https://\" target=\"_blank\">\n                                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                                <i class=\"fab fa-instagram fa-stack-1x\"></i>\n                            </a>\n                        </span>\n                        <span class=\"fa-stack\">\n                            <a href=\"https://\" target=\"_blank\">\n                                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                                <i class=\"fab fa-linkedin-in fa-stack-1x\"></i>\n                            </a>\n                        </span>\n                    </div> <!-- fim do col -->\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do form -->\n    <!-- fim do Campo de Doação -->\n\n    <!-- Footer -->\n    <svg class=\"footer-frame\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n        viewBox=\"0 0 1920 79\">\n        <defs>\n            <style>\n                .cls-2 {\n                    fill: #526E2A;\n                }\n            </style>\n        </defs>\n        <title>footer-frame</title>\n        <path class=\"cls-2\"\n            d=\"M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z\"\n            transform=\"translate(0 -0.188)\" />\n    </svg>\n    <div class=\"footer\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"footer-col first\">\n                        <h4>{{tituloFooter}}</h4>\n                        <p class=\"p-small\">{{textoFooter}}</p>\n                    </div>\n                </div> <!-- fim do col -->\n                <div class=\"col-md-4\">\n                    <div class=\"footer-col middle\">\n                        <h4>Colaboradores</h4>\n                        <ul class=\"list-unstyled li-space-lg p-small\">\n                            <li class=\"media\">\n                                <i class=\"fas fa-square\"></i>\n                                <div class=\"media-body\"><a class=\"white\" href=\"https://hackatrouble.com.br\"\n                                        target=\"_blank\">https://hackatrouble.com.br</a></div>\n                            </li>\n                            <li class=\"media\">\n                                <i class=\"fas fa-square\"></i>\n                                <div class=\"media-body\"><a class=\"white\"\n                                        href=\"https://www.bancodealimentos.org.br/parceiro\"\n                                        target=\"_blank\">https://www.bancodealimentos.org.br/parceiro</a></div>\n                            </li>\n                            <li class=\"media\">\n                                <i class=\"fas fa-square\"></i>\n                                <div class=\"media-body\"><a class=\"white\" href=\"https://aws.amazon.com/\"\n                                        target=\"_blank\">https://aws.amazon.com/</a></div>\n                            </li>\n                        </ul>\n                    </div>\n                </div> <!-- fim do col -->\n                <div class=\"col-md-4\">\n                    <div class=\"footer-col last\">\n                        <h4>Contact</h4>\n                        <ul class=\"list-unstyled li-space-lg p-small\">\n                            <li class=\"media\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                                <div class=\"media-body\">Rua dos benfeitores, Brasil, 00000-000, BR</div>\n                            </li>\n                            <li class=\"media\">\n                                <i class=\"fas fa-envelope\"></i>\n                                <div class=\"media-body\"><a class=\"white\"\n                                        href=\"mailto:contact@rocaeats.com\">contato@rocaeats.com</a></div>\n                            </li>\n                        </ul>\n                    </div>\n                </div> <!-- fim do col -->\n            </div> <!-- fim do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do footer -->\n    <!-- fim do footer -->\n\n    <!-- Copyright -->\n    <div class=\"copyright\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <p class=\"p-small\">Copyright © 2020 - Roça Eats</p>\n                </div> <!-- fim do col -->\n            </div> <!-- enf do row -->\n        </div> <!-- fim do container -->\n    </div> <!-- fim do copyright -->\n    <!-- fim do copyright -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hwL1RlbXBsYXRlcy9yb2NhLWVhdHMvYXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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

    var HomePage = /*#__PURE__*/function () {
      function HomePage(router) {
        _classCallCheck(this, HomePage);

        this.router = router; // textos inicio

        this.tituloHeader = "COLHENDO O MELHOR DE NÓS!"; //

        this.tituloSobreNos = "COLHENDO O MELHOR DE NÓS!";
        this.sobreNos = "A RoçaEats é uma rede que une instituições sem fins lucrativos e produtores rurais, desenvolvida com o fim de, adequar a necessidade do recebimento de doações por entidades beneficentes, à dificuldade enfrentada na escoação da produção rural, zelando pela expansão social, valorização da saúde pública frente ao combate a pandemia e a preservação do meio ambiente."; // textos projeto

        this.tituloProjeto = "PROJETO";
        this.subtituloProjeto = "Queremos diminuir o impacto que o novo coronavirus COVID-19 está fazendo em nossas vidas.";
        this.tituloPrimeiroCard = "";
        this.textoPrimeiroCard = "Unindo produtores rurais e instituições sem fins lucrativos por meio de uma plataforma digital, desenvolvida com o fim de, adequar a necessidade do recebimento de doações por entidades beneficentes, à dificuldade enfrentada  na escoação da produção rural, vista a baixa demanda consumerista por parte de estabelecimentos comerciais alimentícios, zelando pela  expansão social, e valorização da saúde pública frente ao combate a pandemia.";
        this.tituloSegundoCard = "";
        this.textoSegundoCard = "Auxiliar os pequenos produtores da região da Metropolitana, no escoamento da produção rural, tendo em vista que as colheitas realizadas por estes, não estão sendo comercializadas em sua totalidade, acarretando diminuição nos lucros e consequentemente levando a demissões no setor.";
        this.tituloTerceiroCard = "";
        this.textoTerceiroCard = "Evitar os desperdícios dos alimentos produzidos pelo agronegócio, tão bem com restringir empregos de técnicas agrícolas em vão, reduzido a degradação do solo e seus componentes, e mantendo postos de trabalhos das pequenas regiões, evitando maiores demandas para o grandes centro como o de São Paulo."; // textos detalhes

        this.tituloDetalhesMissao = "MISSÃO";
        this.subtituloDetalhesMissao = "Buscar por parcerias no agronegócio a fim de estimular políticas sociais ao combate a fome e a miséria de pessoas em situações de vulnerabilidade,  com ênfase na doação de alimentos derivados do campo, auxiliando no escoamento excedente da produção agrícola  frente às dificuldades enfrentadas perante a pandemia.";
        this.textoDescricaoDetalhesMissao = "- Estamos fazendo o nosso melhor para ajudar!";
        this.tituloDetalhesVisao = "VISÃO";
        this.subtituloDetalhesVisao = "Alcançar pessoas em situação de vulnerabilidade alimentar e social durante e após qualquer crise pública, seja em escala estadual, municipal ou nacional, agregando pequenos, médios e grandes agricultores a corrente solidária, realizando um encurtamento social entre o alimento doado e a mesa dos necessitados.";
        this.textoDescricaoDetalhesVisao = "- Juntos somos mais fortes!";
        this.tituloDetalhesValores = "VALORES";
        this.subtituloDetalhesValores = "";
        this.textoDescricaoDetalhesValores = "";
        this.primeiroTopicoDetalhesValores = "Dignidade Alimentícia";
        this.segundoTopicoDetalhesValores = "Inovação tecnológica e Compromisso Social";
        this.terceiroTopicoDetalhesValores = "Valorização Humanitária";
        this.quartoTopicoDetalhesValores = "Ética e Igualdade";
        this.quintoTopicoDetalhesValores = ""; // textos midia

        this.tituloMidia = "MÍDIA";
        this.subtituloMidia = "";
        this.textoDescricaoMidia = "Veja o que estão falando do projeto";
        this.tituloAbaPrimeiraMidia = "GLOBO PLAY";
        this.tituloPrimeiraMidia = "Diário TV 1ª Edição";
        this.textoDescricaoPrimeiraMidia = "Produtores rurais adotam medidas para evitar desperdício de produtos";
        this.primeiroTopicoPrimeiraMidia = "Exibição em 4 Abr 2020";
        this.tituloAbaSegundaMidia = "O DIÁRIO";
        this.tituloSegundaMidia = "O Diário de Mogi";
        this.textoDescricaoSegundaMidia = "Agricultores de Quatinga doam parte da safra após fechamento de feiras";
        this.primeiroTopicoSegundaMidia = "Exibição em 1 de abril de 2020";
        this.tituloAbaTerceiraMidia = "YOUTUBE";
        this.tituloTerceiraMidia = "Agro Meeting 1";
        this.textoDescricaoTerceiraMidia = "As ações que estão sendo feitas em prol dos pequenos agricultores";
        this.primeiroTopicoTerceiraMidia = "Palestrante: Simone Silotti – Pesquisadora Chefe – Inteligência no Agro";
        this.segundoTopicoTerceiraMidia = "Exibição em 14/04 às 15H"; // textos doacao

        this.textoVaquinha = "Ajude-nos a ajudar ainda mais, precisamos doar para levar mais igualdade a quem necessita de ajuda neste momento.";
        this.tituloRedesSociais = "REDES SOCIAIS"; // textos footer

        this.tituloFooter = "SOBRE O ROÇA EATS";
        this.textoFooter = "A RoçaEats é uma rede que une instituições sem fins lucrativos e produtores rurais, desenvolvida com o fim de, adequar a necessidade do recebimento de doações por entidades beneficentes, à dificuldade enfrentada na escoação da produção rural, zelando pela expansão social, valorização da saúde pública frente ao combate a pandemia e a preservação do meio ambiente.";
      }

      _createClass(HomePage, [{
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
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map