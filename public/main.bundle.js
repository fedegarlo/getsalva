webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_app_get_app_component__ = __webpack_require__("../../../../../src/app/get-app/get-app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_3__help_help_component__["a" /* HelpComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_5__get_app_get_app_component__["a" /* GetAppComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top affix-top\">\n\t<div class=\"container\">\n\t\t\t<!--   Brand and toggle get grouped for better mobile display   -->\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand page-scroll\" href=\"dashboard#page-top\">\n\t\t\t\t\t<span id=\"_name1\" itemprop=\"name\">salva</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<!--   Collect the nav links, forms, and other content for toggling   -->\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"dashboard#download\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Descarga</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"dashboard#features\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Funciones</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"https://medium.com/salva-app\" target=\"_blank\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Blog</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"dashboard#contact\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Contacto</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"help\">Soporte</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<!--   /.navbar-collapse   -->\n\t</div>\n\t<!--   /.container-fluid   -->\n</nav>\n<router-outlet></router-outlet>\n<section id=\"contact\" class=\"contact bg-primary\">\n\t\t<div class=\"container\">\n\t\t\t\t<h2>#salva</h2>\n\t\t\t\t<ul class=\"list-inline list-social\">\n\t\t\t\t\t\t<li class=\"social-twitter\">\n\t\t\t\t\t\t\t\t<a href=\"http://www.twitter.com/salva_app\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"social-facebook\">\n\t\t\t\t\t\t\t\t<a href=\"http://www.facebook.com/salvaapp\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"social-instagram\">\n\t\t\t\t\t\t\t\t<a href=\"http://www.instagram.com/salva_app\"><i class=\"fa fa-instagram\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"social-mail\">\n\t\t\t\t\t\t\t<a href=\"mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#097;&#108;&#118;&#097;&#097;&#112;&#112;&#046;&#099;&#111;&#109;\"><i class=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"social-twitter\">\n\t\t\t\t\t\t<a href=\"https://t.me/salvaapp\" target=\"_blank\"><i class=\"fa fa-telegram\"></i></a>\n\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t</div>\n\t</section>\n<footer>\n\t<div class=\"container\">\n\t\t\t<p>© 2018 \n\t\t\t\t\t<span id=\"_author2\" itemscope=\"\" itemtype=\"http://schema.org/Person\">\n\t\t\t\t\t\t\t<span itemprop=\"givenName\">\n\t\t\t\t\t\t\t\tFede García y Paco Navarro\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t. Todos los derechos reservados. Salva participa en el Programa de Afiliados de Amazon, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es\n\t\t\t</p>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Privacy</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Terms</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">FAQ</a>\n\t\t\t\t\t</li>\n\t\t\t</ul>\n\t</div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__get_app_get_app_component__ = __webpack_require__("../../../../../src/app/get-app/get-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













if (__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* enableProdMode */])();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_6__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__get_app_get_app_component__["a" /* GetAppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_9__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-7\">\n              <div class=\"header-content\">\n                  <div class=\"header-content-inner\">\n                      <h1>Recibe notificaciones cuando tus productos bajen de precio.</h1>\n                      <a href=\"dashboard#download\" class=\"btn btn-outline btn-xl page-scroll\">Empieza a ahorrar</a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-sm-5\">\n              <div class=\"device-container\">\n                  <div class=\"device-mockup iphone6_plus portrait white\">\n                      <div class=\"device main\">\n                          <div class=\"screen\">\n                              <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                              <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/demo-screen-rayo.png\" class=\"img-responsive\" alt=\"\"/>\n                          </div>\n                          <div class=\"button\">\n                              <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</header>\n\n\n<span itemref=\"_name1\"></span><section id=\"download\" class=\"download bg-primary text-center\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n              <h2 class=\"section-heading\">No tenemos sueños baratos.</h2>\n              <p>Hasta que bajan de precio.</p>\n              <div class=\"badges\">\n                  <a itemprop=\"downloadUrl\" itemprop=\"downloadUrl\" class=\"badge-link\" href=\"http://itunes.apple.com/es/app/salva-lista-tus-deseos.-sigue/id1156149609?l=es&mt=8&ct=landing\" target=\"_blank\"><img src=\"../assets/img/app-store-badge.svg\" alt=\"\"/></a>\n                  <a itemprop=\"downloadUrl\" class=\"badge-link\" href=\"https://play.google.com/store/apps/details?id=es.salva.notifier\" target=\"_blank\"><img src=\"../assets/img/google-play-badge.svg\" alt=\"\"/></a>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<section id=\"features\" class=\"features\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n              <div class=\"section-heading\">\n                  <h2>Nada nos importa más que tus deseos.</h2>\n                  <p class=\"text-muted\">Añade tu lista de deseos con un sólo click. Disponible en \n                      <span itemprop=\"operatingSystem\" itemtype=\"http://schema.org/OperatingSystem\">iOS</span> y <span itemprop=\"operatingSystem\" itemtype=\"http://schema.org/OperatingSystem\">Android</span>Android.\n                  </p>\n                  <hr/>\n              </div>\n          </div>\n      </div>\n      <div style=\"display:none;\">\n          <span id=\"_name12\" itemprop=\"aggregateRating\" itemtype=\"http://schema.org/AggregateRating\"></span>\n          <span id=\"_name13\" itemprop=\"applicationCategory\" itemtype=\"http://schema.org/ApplicationCategory\"></span>\n          <span id=\"_name14\" itemprop=\"offers\" itemtype=\"http://schema.org/Offers\"></span>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"device-container\">\n                  <div class=\"device-mockup iphone6_plus portrait white\">\n                      <div class=\"device\">\n                          <div class=\"screen\">\n                              <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                              <img itemprop=\"screenshot\" src=\"../assets/img/demo-screen.png\" class=\"img-responsive\" alt=\"\"/> </div>\n                          <div class=\"button\">\n                              <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-8\">\n              <div class=\"container-fluid\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-pencil text-primary\"></i>\n                              <h3>Listar</h3>\n                              <p class=\"text-muted\">Guarda tu lista de deseos y descubre cuando bajan o suben de precio. Descubre ofertas que otros usuarios han encontrado y aprovéchalas por tiempo limitado.</p>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-tag text-primary\"></i>\n                              <h3>Seguir</h3>\n                              <p class=\"text-muted\">En ocasiones, las ofertas duran muy poco tiempo o se producen descuentos increíbles en unidades limitadas.</p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-cloud-upload text-primary\"></i>\n                              <h3>Importar</h3>\n                              <p class=\"text-muted\">Importa tu lista de deseos con un solo click y averigua al instante si baja de precio para comprar en el mejor momento.</p>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-wallet text-primary\"></i>\n                              <h3>Comprar</h3>\n                              <p class=\"text-muted\">Recibe notificaciones push cuando baje o suba de precio y no te pierdas ninguna. Notificaciones que llegan realmente rápido.</p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<section id=\"salvaeuristas\" class=\"salvaeuristas\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-4 text-center\">\n              <img src=\"../assets/img/salvaeuristas_badge.png\" alt=\"\"/>\n          </div>\n          <div class=\"col-md-8 text-center\">\n              <div class=\"container-fluid\">\n                  <div class=\"row\">\n                      <!-- Begin MailChimp Signup Form -->\n                      <div id=\"mc_embed_signup\">\n                      <form action=\"//fedegarlo.us14.list-manage.com/subscribe/post?u=b9021cafb46d6c2efc44bc0c9&amp;id=7b5b399867\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\">\n                          <div id=\"mc_embed_signup_scroll\">\n                          <h2>Únete a Salvaeuristas y recibe nuestro boletín</h2>\n                      <div class=\"mc-field-group\">\n                          <label style=\"display:none\" for=\"mce-EMAIL\">Email Address </label>\n                          <input placeholder=\"Correo electrónico\" type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\" size=\"40\" required>\n                      </div>\n                          <div id=\"mce-responses\" class=\"clear\">\n                              <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                              <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n                          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                          <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_b9021cafb46d6c2efc44bc0c9_7b5b399867\" tabindex=\"-1\" value=\"\"></div>\n                          <div class=\"enviar\"><input type=\"submit\" value=\"Suscríbete\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"btn-style\"></div>\n                          </div>\n                      </form>\n                      </div>\n\n<!--End mc_embed_signup-->\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<section class=\"cta\">\n  <div class=\"cta-content\">\n      <div class=\"container\">\n          <h2>No esperes más.<br/>Ahorra.</h2>\n          <a href=\"dashboard#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n      </div>\n  </div>\n  <div class=\"overlay\"></div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/get-app/get-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-app/get-app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"header-content\">\n                    <div class=\"header-content-inner\">\n                        <h1>Recibe notificaciones cuando tus productos bajen de precio.</h1>\n                        <a href=\"app#download\" class=\"btn btn-outline btn-xl page-scroll\">Empieza a ahorrar</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device main\">\n                            <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/demo-screen-rayo.png\" class=\"img-responsive\" alt=\"\"/>\n                            </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </header>\n  \n  \n  <span itemref=\"_name1\"></span><section id=\"download\" class=\"download bg-primary text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <h2 class=\"section-heading\">No tenemos sueños baratos.</h2>\n                <p>Hasta que bajan de precio.</p>\n                <div class=\"badges\">\n                    <a itemprop=\"downloadUrl\" itemprop=\"downloadUrl\" class=\"badge-link\" href=\"http://itunes.apple.com/es/app/salva-lista-tus-deseos.-sigue/id1156149609?l=es&mt=8&ct=landing\" target=\"_blank\"><img src=\"../assets/img/app-store-badge.svg\" alt=\"\"/></a>\n                    <a itemprop=\"downloadUrl\" class=\"badge-link\" href=\"https://play.google.com/store/apps/details?id=es.salva.notifier\" target=\"_blank\"><img src=\"../assets/img/google-play-badge.svg\" alt=\"\"/></a>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>\n  <section id=\"features\" class=\"features\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <div class=\"section-heading\">\n                    <h2>Nada nos importa más que tus deseos.</h2>\n                    <p class=\"text-muted\">Añade tu lista de deseos con un sólo click. Disponible en \n                        <span itemprop=\"operatingSystem\" itemtype=\"http://schema.org/OperatingSystem\">iOS</span> y <span itemprop=\"operatingSystem\" itemtype=\"http://schema.org/OperatingSystem\">Android</span>Android.\n                    </p>\n                    <hr/>\n                </div>\n            </div>\n        </div>\n        <div style=\"display:none;\">\n            <span id=\"_name12\" itemprop=\"aggregateRating\" itemtype=\"http://schema.org/AggregateRating\"></span>\n            <span id=\"_name13\" itemprop=\"applicationCategory\" itemtype=\"http://schema.org/ApplicationCategory\"></span>\n            <span id=\"_name14\" itemprop=\"offers\" itemtype=\"http://schema.org/Offers\"></span>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device\">\n                            <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" src=\"../assets/img/demo-screen.png\" class=\"img-responsive\" alt=\"\"/> </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"feature-item\">\n                                <i class=\"icon-pencil text-primary\"></i>\n                                <h3>Listar</h3>\n                                <p class=\"text-muted\">Guarda tu lista de deseos y descubre cuando bajan o suben de precio. Descubre ofertas que otros usuarios han encontrado y aprovéchalas por tiempo limitado.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"feature-item\">\n                                <i class=\"icon-tag text-primary\"></i>\n                                <h3>Seguir</h3>\n                                <p class=\"text-muted\">En ocasiones, las ofertas duran muy poco tiempo o se producen descuentos increíbles en unidades limitadas.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"feature-item\">\n                                <i class=\"icon-cloud-upload text-primary\"></i>\n                                <h3>Importar</h3>\n                                <p class=\"text-muted\">Importa tu lista de deseos con un solo click y averigua al instante si baja de precio para comprar en el mejor momento.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"feature-item\">\n                                <i class=\"icon-wallet text-primary\"></i>\n                                <h3>Comprar</h3>\n                                <p class=\"text-muted\">Recibe notificaciones push cuando baje o suba de precio y no te pierdas ninguna. Notificaciones que llegan realmente rápido.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>\n  <section id=\"salvaeuristas\" class=\"salvaeuristas\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n                <img src=\"../assets/img/salvaeuristas_badge.png\" alt=\"\"/>\n            </div>\n            <div class=\"col-md-8 text-center\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <!-- Begin MailChimp Signup Form -->\n                        <div id=\"mc_embed_signup\">\n                        <form action=\"//fedegarlo.us14.list-manage.com/subscribe/post?u=b9021cafb46d6c2efc44bc0c9&amp;id=7b5b399867\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\">\n                            <div id=\"mc_embed_signup_scroll\">\n                            <h2>Únete a Salvaeuristas y recibe nuestro boletín</h2>\n                        <div class=\"mc-field-group\">\n                            <label style=\"display:none\" for=\"mce-EMAIL\">Email Address </label>\n                            <input placeholder=\"Correo electrónico\" type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\" size=\"40\" required>\n                        </div>\n                            <div id=\"mce-responses\" class=\"clear\">\n                                <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                                <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                            <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_b9021cafb46d6c2efc44bc0c9_7b5b399867\" tabindex=\"-1\" value=\"\"></div>\n                            <div class=\"enviar\"><input type=\"submit\" value=\"Suscríbete\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"btn-style\"></div>\n                            </div>\n                        </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>\n  <section class=\"cta\">\n    <div class=\"cta-content\">\n        <div class=\"container\">\n            <h2>No esperes más.<br/>Ahorra.</h2>\n            <a href=\"app#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n        </div>\n    </div>\n    <div class=\"overlay\"></div>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/get-app/get-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetAppComponent = (function () {
    function GetAppComponent() {
        this.heroes = [];
    }
    GetAppComponent.prototype.ngOnInit = function () {
        this.getApp();
    };
    GetAppComponent.prototype.getApp = function () {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
            window.open('https://play.google.com/store/apps/details?id=es.salva.notifier&hl=es', '_blank');
        }
        else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
            window.open('https://itunes.apple.com/es/app/salva-alertas-de-descuentos-en-amazon/id1156149609?mt=8', '_blank');
        }
    };
    GetAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-app',
            template: __webpack_require__("../../../../../src/app/get-app/get-app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/get-app/get-app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GetAppComponent);
    return GetAppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"header-content\">\n                    <div class=\"header-content-inner\">\n                        <h1>Preguntas frecuentes</h1>\n                        <a href=\"help#download\" class=\"btn btn-outline btn-xl page-scroll\">Empieza a ahorrar</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device main\">\n                            <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/demo-screen-rayo.png\" class=\"img-responsive\" alt=\"\"/>\n                            </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </header>\n  \n  \n  <span itemref=\"_name1\"></span><section id=\"download\" class=\"download bg-primary text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <h2 class=\"section-heading\">No tenemos sueños baratos.</h2>\n                <p>Hasta que bajan de precio.</p>\n                <div class=\"badges\">\n                    <a itemprop=\"downloadUrl\" itemprop=\"downloadUrl\" class=\"badge-link\" href=\"http://itunes.apple.com/es/app/salva-lista-tus-deseos.-sigue/id1156149609?l=es&mt=8&ct=landing\" target=\"_blank\"><img src=\"../assets/img/app-store-badge.svg\" alt=\"\"/></a>\n                    <a itemprop=\"downloadUrl\" class=\"badge-link\" href=\"https://play.google.com/store/apps/details?id=es.salva.notifier\" target=\"_blank\"><img src=\"../assets/img/google-play-badge.svg\" alt=\"\"/></a>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>\n  <section id=\"features\" class=\"features\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-12 text-center\">\n                  <div class=\"section-heading\">\n                      <h2>Nada nos importa más que tus deseos.</h2>\n                      <p class=\"text-muted\">Añade tu lista de deseos con un sólo click. Disponible en \n                          <span itemprop=\"operatingSystem\">iOS</span> y Android.\n                      </p>\n                      <hr/>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4\">\n                  <div class=\"device-container\">\n                      <div class=\"device-mockup iphone6_plus portrait white\">\n                          <div class=\"device\">\n                              <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" src=\"../assets/img/demo-screen.png\" class=\"img-responsive\" alt=\"\"/> </div>\n                              <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"container-fluid\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"feature-item\">\n                        <h3>¿Cómo funciona el buscador?</h3>\n                        <p class=\"text-muted\">\n                          Tienes tres formas de añadir productos a tu lista a través del buscador: introduciendo el nombre del producto, con la url de la tienda o importando desde tu lista de deseos. Los productos añadidos aparecerán en la primera pestaña de Salva.\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"feature-item\">\n                        <h3>¿Cómo añadir por url?</h3>\n                        <p class=\"text-muted\">\n                          Busca en Safari en la web de Amazon el producto que quieres añadir. Lo mismo has conseguido el enlace en redes sociales. También vale. Introduce la url en el buscador de Salva y listo.\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"feature-item\">\n                        <h3>¿Cómo importar mi lista de deseos de Amazon?</h3>\n                        <p class=\"text-muted\">\n                          Puedes indicar tu email que usas en Amazon e importar tu lista de deseos pública. Al importar aparecerán tus productos y podrás añadirlos uno a uno a tu lista de productos de Salva.\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"feature-item\">\n                        <h3>¿Has olvidado tu contraseña de Salva?</h3>\n                        <p class=\"text-muted\">\n                          Siempre puedes recuperar tu contraseña de Salva haciendo click <a href=\"http://salva.herokuapp.com/#/salva/recover\" target=\"_blank\">aquí</a>. Te enviaremos un correo electrónico con las instrucciones para recuperarla.\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n      </div>\n  </section>\n  <section id=\"salvaeuristas\" class=\"salvaeuristas\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 text-center\">\n                <img src=\"../assets/img/salvaeuristas_badge.png\" alt=\"\"/>\n            </div>\n            <div class=\"col-md-8 text-center\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <!-- Begin MailChimp Signup Form -->\n                        <div id=\"mc_embed_signup\">\n                        <form action=\"//fedegarlo.us14.list-manage.com/subscribe/post?u=b9021cafb46d6c2efc44bc0c9&amp;id=7b5b399867\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\">\n                            <div id=\"mc_embed_signup_scroll\">\n                            <h2>Únete a Salvaeuristas y recibe nuestro boletín</h2>\n                        <div class=\"mc-field-group\">\n                            <label style=\"display:none\" for=\"mce-EMAIL\">Email Address </label>\n                            <input placeholder=\"Correo electrónico\" type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\" size=\"40\" required>\n                        </div>\n                            <div id=\"mce-responses\" class=\"clear\">\n                                <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                                <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                            <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_b9021cafb46d6c2efc44bc0c9_7b5b399867\" tabindex=\"-1\" value=\"\"></div>\n                            <div class=\"enviar\"><input type=\"submit\" value=\"Suscríbete\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"btn-style\"></div>\n                            </div>\n                        </form>\n                        </div>\n  \n  <!--End mc_embed_signup-->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>\n  <section class=\"cta\">\n    <div class=\"cta-content\">\n        <div class=\"container\">\n            <h2>No esperes más.<br/>Ahorra.</h2>\n            <a href=\"help#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n        </div>\n    </div>\n    <div class=\"overlay\"></div>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () { };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n\nheader .device-container {\n  max-height: 130px !important;\n}\n\n@media (min-width: 768px) {\n  header {\n      height: 70% !important;\n      min-height: auto;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"header-content\">\n                    <div class=\"header-content-inner\">\n                        <h1>Recibe notificaciones cuando tus productos bajen de precio.</h1>\n                        <a target=\"_blank\" href=\"http://www.getsalva.com/app\" class=\"btn btn-outline btn-xl page-scroll\">Descarga Salva</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device main\">\n                            <div class=\"screen\" *ngIf=\"hero\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"{{hero.images[2]}}\" class=\"img-responsive\" alt=\"\"/>\n                            </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </header>\n<div class=\"container\" *ngIf=\"hero\">\n  <div class=\"row\">\n    <div class=\"col-sm-7\">\n      <h1>{{hero.description}}</h1>\n      <a style=\"margin-bottom: 50px;\" href=\"{{hero.url}}\" target=\"_blank\" class=\"btn btn-outline btn-xl page-scroll\">Comprar ahora</a>\n    </div>\n    <div class=\"col-sm-5\">\n        \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero__ = __webpack_require__("../../../../../src/app/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, heroService, location, Meta, Title) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
        this.Meta = Meta;
        this.Title = Title;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) {
            _this.hero = hero;
            _this.Title.setTitle(hero.description);
            _this.Meta.removeTag("property='og:image'");
            _this.Meta.removeTag("property='og:url'");
            _this.Meta.removeTag("property='og:description'");
            _this.Meta.removeTag("property='og:title'");
            _this.Meta.removeTag("property='description'");
            _this.Meta.addTag({ property: 'og:image', content: hero.images[2] });
            _this.Meta.addTag({ property: 'og:url', content: 'http://www.getsalva.com/product/' + hero._id });
            _this.Meta.addTag({ property: 'og:description', content: 'Descúbrelo en Salva. App para seguir precios. iOS y Android' });
            _this.Meta.addTag({ property: 'og:title', content: hero.description });
            _this.Meta.addTag({ property: 'description', content: 'Recibe notificaciones cuando tus productos bajen de precio. Ya disponible para iOS y Android.' });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__hero__["a" /* Hero */])
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Title */]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HeroService = (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'http://salva-api.com/items'; // URL to web api
    }
    /** GET heroes from the server */
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (heroes) { return _this.log("fetched heroes"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getHeroes', [])));
    };
    /** GET hero by id. Return `undefined` when id not found */
    HeroService.prototype.getHeroNo404 = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    /** GET hero by id. Will 404 if id not found */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/heroes/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchHeroes', [])));
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (hero) { return _this.log("added hero w/ id=" + hero.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteHero')));
    };
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("updated hero id=" + hero.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateHero')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map