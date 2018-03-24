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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditions_conditions_component__ = __webpack_require__("../../../../../src/app/conditions/conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fastpass_fastpass_component__ = __webpack_require__("../../../../../src/app/fastpass/fastpass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__get_app_get_app_component__ = __webpack_require__("../../../../../src/app/get-app/get-app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_3__help_help_component__["a" /* HelpComponent */] },
    { path: 'conditions', component: __WEBPACK_IMPORTED_MODULE_4__conditions_conditions_component__["a" /* ConditionsComponent */] },
    { path: 'fastpass', component: __WEBPACK_IMPORTED_MODULE_7__fastpass_fastpass_component__["a" /* FastpassComponent */] },
    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__["a" /* PrivacyComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_6__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_8__get_app_get_app_component__["a" /* GetAppComponent */] },
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
exports.push([module.i, ".navbar-default {\n  background-color: #00FFD4;\n  color: black;\n  border-color: rgba(34, 34, 34, 0.05);\n  transition: all 0.35s;\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px;\n}\n.navbar-default .navbar-header .navbar-brand {\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px;\n  color: #000642;\n}\n.navbar-default .navbar-header .navbar-brand:hover,\n.navbar-default .navbar-header .navbar-brand:focus {\n  color: #000642;\n}\n.navbar-default .navbar-toggle:hover {\n  background-color: #00FFD4;\n}\n.navbar-default .navbar-toggle {\n  border: 0;\n}\n.navbar-default .navbar-collapse {\n  border: 0;\n}\n.navbar-default .navbar-header .navbar-toggle {\n  font-size: 12px;\n  color: #222222;\n  padding: 8px 10px;\n}\n.navbar-default .nav > li > a {\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 11px;\n}\n.navbar-default .nav > li > a,\n.navbar-default .nav > li > a:focus {\n  color: #222222;\n}\n.navbar-default .nav > li > a:hover,\n.navbar-default .nav > li > a:focus:hover {\n  color: #000642;\n}\n.navbar-default .nav > li.active > a,\n.navbar-default .nav > li.active > a:focus {\n  color: #000642;\n  background-color: transparent;\n}\n.navbar-default .nav > li.active > a:hover,\n.navbar-default .nav > li.active > a:focus:hover {\n  background-color: transparent;\n}\n@media (min-width: 768px) {\n  .navbar-default {\n    border-color: transparent;\n  }\n  .navbar-default .navbar-header .navbar-brand {\n    color: rgba(0, 6, 66, 0.7);\n  }\n  .navbar-default .navbar-header .navbar-brand:hover,\n  .navbar-default .navbar-header .navbar-brand:focus {\n    color: white;\n  }\n  .navbar-default .nav > li > a,\n  .navbar-default .nav > li > a:focus {\n    color: rgba(0, 6, 66, 0.7);\n  }\n  .navbar-default .nav > li > a:hover,\n  .navbar-default .nav > li > a:focus:hover {\n    color: white;\n  }\n  .navbar-default.affix {\n    background-color: white;\n    border-color: rgba(34, 34, 34, 0.1);\n  }\n  .navbar-default.affix .navbar-header .navbar-brand {\n    color: #222222;\n  }\n  .navbar-default.affix .navbar-header .navbar-brand:hover,\n  .navbar-default.affix .navbar-header .navbar-brand:focus {\n    color: #000642;\n  }\n  .navbar-default.affix .nav > li > a,\n  .navbar-default.affix .nav > li > a:focus {\n    color: #222222;\n  }\n  .navbar-default.affix .nav > li > a:hover,\n  .navbar-default.affix .nav > li > a:focus:hover {\n    color: #000642;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top affix-top\">\n\t<div class=\"container\">\n\t\t\t<!--   Brand and toggle get grouped for better mobile display   -->\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand page-scroll\" href=\"dashboard#page-top\">\n\t\t\t\t\t<span id=\"_name1\" itemprop=\"name\">salva</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<!--   Collect the nav links, forms, and other content for toggling   -->\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"dashboard#download\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Descarga</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"dashboard#features\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Funciones</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"https://medium.com/salva-app\" target=\"_blank\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Blog</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"fastpass\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Fast Pass</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"dashboard#contact\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Contacto</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"page-scroll\" href=\"help\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">Soporte</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<!--   /.navbar-collapse   -->\n\t</div>\n\t<!--   /.container-fluid   -->\n</nav>\n<router-outlet></router-outlet>\n<section id=\"contact\" class=\"contact bg-primary\">\n\t\t<div class=\"container\">\n\t\t\t\t<h2>#salva</h2>\n\t\t\t\t<ul class=\"list-inline list-social\">\n\t\t\t\t\t\t<li class=\"social-twitter\">\n\t\t\t\t\t\t\t\t<a href=\"http://www.twitter.com/salva_app\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"social-facebook\">\n\t\t\t\t\t\t\t\t<a href=\"http://www.facebook.com/salvaapp\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"social-instagram\">\n\t\t\t\t\t\t\t\t<a href=\"http://www.instagram.com/salva_app\"><i class=\"fa fa-instagram\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"social-mail\">\n\t\t\t\t\t\t\t<a href=\"mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#097;&#108;&#118;&#097;&#097;&#112;&#112;&#046;&#099;&#111;&#109;\"><i class=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"social-twitter\">\n\t\t\t\t\t\t<a href=\"https://t.me/salvaapp\" target=\"_blank\"><i class=\"fa fa-telegram\"></i></a>\n\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t</div>\n\t</section>\n<footer>\n\t<div class=\"container\">\n\t\t\t<p>© 2018 \n\t\t\t\t\t<span id=\"_author2\" itemscope=\"\" itemtype=\"http://schema.org/Person\">\n\t\t\t\t\t\t\t<span itemprop=\"givenName\">\n\t\t\t\t\t\t\t\tFede García y Paco Navarro\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t. Todos los derechos reservados. Salva participa en el Programa de Afiliados de Amazon, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es\n\t\t\t</p>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"privacy\">Privacy</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"conditions\">Terms</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"help\">FAQ</a>\n\t\t\t\t\t</li>\n\t\t\t</ul>\n\t</div>\n</footer>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conditions_conditions_component__ = __webpack_require__("../../../../../src/app/conditions/conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fastpass_fastpass_component__ = __webpack_require__("../../../../../src/app/fastpass/fastpass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__get_app_get_app_component__ = __webpack_require__("../../../../../src/app/get-app/get-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















if (__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].production) {
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
                __WEBPACK_IMPORTED_MODULE_6__conditions_conditions_component__["a" /* ConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__fastpass_fastpass_component__["a" /* FastpassComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__get_app_get_app_component__["a" /* GetAppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_12__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/conditions/conditions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conditions/conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"header-content\">\n                    <div class=\"header-content-inner\">\n                        <h1>Terms and conditions</h1>\n                        <a href=\"conditions#terms\" class=\"btn btn-outline btn-xl page-scroll\">See terms and conditions</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device main\">\n                            <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/demo-screen-rayo.png\" class=\"img-responsive\" alt=\"\"/>\n                            </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </header>\n  <section id=\"terms\" class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <p><em>Last updated: March 01, 2018</em></p><p>These Terms and Conditions (\"Terms\", \"Terms and Conditions\") govern your relationship with Ulysses mobile application (the \"Service\") operated by Salva App (\"us\", \"we\", or \"our\").</p><p>Please read these Terms and Conditions carefully before using our Ulysses mobile application (the \"Service\").</p><p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p><p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p><h3>Subscriptions</h3><p>Some parts of the Service are billed on a subscription basis (\"Subscription(s)\"). You will be billed in advance on a recurring and periodic basis (\"Billing Cycle\"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p><p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Salva App cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Salva App customer support team.</p><p>A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide Salva App with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Salva App to charge all Subscription fees incurred through your account to any such payment instruments.</p><p>Should automatic billing fail to occur for any reason, Salva App will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.</p>\n                <h3>Fee Changes</h3><p>Salva App, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p><p>Salva App will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p><p>Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p><h3>Refunds</h3><p>Except when required by law, paid Subscription fees are non-refundable.</p><h3>Accounts</h3><p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p><p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p><p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p><h3>Intellectual Property</h3><p>The Service and its original content, features and functionality are and will remain the exclusive property of Salva App and its licensors. The Service is protected by copyright, trademark, and other laws of both the Germany and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Salva App.</p><h3>Links To Other Web Sites</h3><p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Salva App.</p><p>Salva App has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Salva App shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p><p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p><h3>Termination</h3><p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p><p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p><h3>Limitation Of Liability</h3><p>In no event shall Salva App, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p><h3>Disclaimer</h3><p>Your use of the Service is at your sole risk. The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p><p>Salva App its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p><h3>Governing Law</h3><p>These Terms shall be governed and construed in accordance with the laws of Saxony, Germany, without regard to its conflict of law provisions.</p><p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p><h3>Changes</h3><p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p><p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p><h3>Contact Us</h3><p>If you have any questions about these Terms, please contact us.</p>\n            </div>\n        </div>\n  </section>\n  <section class=\"cta\">\n    <div class=\"cta-content\">\n        <div class=\"container\">\n            <h2>No esperes más.<br/>Ahorra.</h2>\n            <a href=\"help#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n        </div>\n    </div>\n    <div class=\"overlay\"></div>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/conditions/conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionsComponent; });
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

var ConditionsComponent = (function () {
    function ConditionsComponent() {
    }
    ConditionsComponent.prototype.ngOnInit = function () { };
    ConditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conditions',
            template: __webpack_require__("../../../../../src/app/conditions/conditions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conditions/conditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConditionsComponent);
    return ConditionsComponent;
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

module.exports = "<header>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-7\">\n              <div class=\"header-content\">\n                  <div class=\"header-content-inner\">\n                      <h1>Recibe notificaciones cuando tus productos bajen de precio.</h1>\n                      <a href=\"dashboard#download\" class=\"btn btn-outline btn-xl page-scroll\">Empieza a ahorrar</a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-sm-5\">\n              <div class=\"device-container\">\n                  <div class=\"device-mockup iphone6_plus portrait white\">\n                      <div class=\"device main\">\n                          <div class=\"screen\">\n                              <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                              <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/demo-screen-rayo.png\" class=\"img-responsive\" alt=\"\"/>\n                          </div>\n                          <div class=\"button\">\n                              <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</header>\n\n<section id=\"download\" class=\"download bg-primary text-center\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n              <h2 class=\"section-heading\">No tenemos sueños baratos.</h2>\n              <p>Hasta que bajan de precio.</p>\n              <div class=\"badges\">\n                  <a itemprop=\"downloadUrl\" itemprop=\"downloadUrl\" class=\"badge-link\" href=\"http://itunes.apple.com/es/app/salva-lista-tus-deseos.-sigue/id1156149609?l=es&mt=8&ct=landing\" target=\"_blank\"><img src=\"../assets/img/app-store-badge.svg\" alt=\"\"/></a>\n                  <a itemprop=\"downloadUrl\" class=\"badge-link\" href=\"https://play.google.com/store/apps/details?id=es.salva.notifier\" target=\"_blank\"><img src=\"../assets/img/google-play-badge.svg\" alt=\"\"/></a>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<section id=\"features\" class=\"features\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12 text-center\">\n              <div class=\"section-heading\">\n                  <h2>Nada nos importa más que tus deseos.</h2>\n                  <p class=\"text-muted\">Añade tu lista de deseos con un sólo click. Disponible en \n                      <span itemprop=\"operatingSystem\" itemtype=\"http://schema.org/OperatingSystem\">iOS</span> y <span itemprop=\"operatingSystem\" itemtype=\"http://schema.org/OperatingSystem\">Android</span>Android.\n                  </p>\n                  <hr/>\n              </div>\n          </div>\n      </div>\n      <div style=\"display:none;\">\n          <span id=\"_name12\" itemprop=\"aggregateRating\" itemtype=\"http://schema.org/AggregateRating\"></span>\n          <span id=\"_name13\" itemprop=\"applicationCategory\" itemtype=\"http://schema.org/ApplicationCategory\"></span>\n          <span id=\"_name14\" itemprop=\"offers\" itemtype=\"http://schema.org/Offers\"></span>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"device-container\">\n                  <div class=\"device-mockup iphone6_plus portrait white\">\n                      <div class=\"device\">\n                          <div class=\"screen\">\n                              <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                              <img itemprop=\"screenshot\" src=\"../assets/img/demo-screen.png\" class=\"img-responsive\" alt=\"\"/> </div>\n                          <div class=\"button\">\n                              <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-8\">\n              <div class=\"container-fluid\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-pencil text-primary\"></i>\n                              <h3>Listar</h3>\n                              <p class=\"text-muted\">Guarda tu lista de deseos y descubre cuando bajan o suben de precio. Descubre ofertas que otros usuarios han encontrado y aprovéchalas por tiempo limitado.</p>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-tag text-primary\"></i>\n                              <h3>Seguir</h3>\n                              <p class=\"text-muted\">En ocasiones, las ofertas duran muy poco tiempo o se producen descuentos increíbles en unidades limitadas.</p>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-cloud-upload text-primary\"></i>\n                              <h3>Importar</h3>\n                              <p class=\"text-muted\">Importa tu lista de deseos con un solo click y averigua al instante si baja de precio para comprar en el mejor momento.</p>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                              <i class=\"icon-wallet text-primary\"></i>\n                              <h3>Comprar</h3>\n                              <p class=\"text-muted\">Recibe notificaciones push cuando baje o suba de precio y no te pierdas ninguna. Notificaciones que llegan realmente rápido.</p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<section id=\"video\" class=\"text-center download\" style=\"padding-top:20px;\">\n\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://player.vimeo.com/video/253760747' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\" style=\"padding-top: 40px;\">\n\t\t\t\t\t<h3 class=\"section-heading\">Consigue Salva.</h3>\n\t\t\t\t\t<p>Empieza ahorrar de otra manera.</p>\n\t\t\t\t\t<div class=\"badges\">\n\t\t\t\t\t\t\t<a itemprop=\"downloadUrl\" itemprop=\"downloadUrl\" class=\"badge-link\" href=\"http://itunes.apple.com/es/app/salva-lista-tus-deseos.-sigue/id1156149609?l=es&mt=8&ct=landing\" target=\"_blank\"><img src=\"../assets/img/app-store-badge.svg\" alt=\"\"/></a>\n\t\t\t\t\t\t\t<a itemprop=\"downloadUrl\" class=\"badge-link\" href=\"https://play.google.com/store/apps/details?id=es.salva.notifier\" target=\"_blank\"><img src=\"../assets/img/google-play-badge.svg\" alt=\"\"/></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>\n</section>\n<section class=\"cta\">\n  <div class=\"cta-content\">\n      <div class=\"container\">\n          <h2>No esperes más.<br/>Ahorra.</h2>\n          <a href=\"dashboard#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n      </div>\n  </div>\n  <div class=\"overlay\"></div>\n</section>\n"

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

/***/ "../../../../../src/app/fastpass/fastpass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2.section-heading {\n  color: #1DA1F2;\n}\nheader {\n  background: #000642;\n}\nheader .header-content .header-content-inner h1 {\n  color: #1DA1F2;\n}\n\na {\n  color: #1DA1F2;\n}\n\n.bg-primary {\n  background: #00FFD4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fastpass/fastpass.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"header-content\">\n                    <div class=\"header-content-inner\">\n                        <h1>Fast Pass</h1>\n                        <a href=\"fastpass#features\" class=\"btn btn-outline btn-xl page-scroll\">\n                            Notificaciones más rápidas\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device main\">\n                            <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/fastpass_logo.png\" class=\"img-responsive\" alt=\"\"/>\n                            </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </header>\n      <section id=\"features\" class=\"features\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-12 text-center\">\n                      <div class=\"section-heading\">\n                          <h2>Suscríbete a notificaciones aún más rápidas.</h2>\n                          <p class=\"text-muted\">Acelera tu ahorro y consigue tu Fast Pass. Disponible de momento sólo en\n                              <span itemprop=\"operatingSystem\">iOS</span>\n                          </p>\n                          <hr/>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-4\">\n                      <div class=\"device-container\">\n                          <div class=\"device-mockup iphone6_plus portrait white\">\n                              <div class=\"device\">\n                                  <div class=\"screen\">\n                                    <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                    <img itemprop=\"screenshot\" src=\"../assets/img/fastpass-screen.png\" class=\"img-responsive\" alt=\"\"/> </div>\n                                  <div class=\"button\">\n                                    <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div class=\"container-fluid\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                            <h3>¿Qué ofrece Salva Fast Pass?</h3>\n                            <p class=\"text-muted\">\n                              Para los que no pueden esperar. A veces, no llegamos a tiempo a las ofertas. Suscríbete desde la aplicación y consigue notificaciones aún más rápidas.\n                            </p>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                            <h3>¿Cómo funciona Fast Pass?</h3>\n                            <p class=\"text-muted\">\n                              Los productos de la lista de seguimiento de los suscriptores de Fast Pass están en un sistema dedicado con más recursos por lo que podemos detectar antes las ofertas.\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                            <h3>¿Qué otras ventajas ofrece?</h3>\n                            <p class=\"text-muted\">\n                              Los suscriptores pueden añadir productos de manera casi ilimitada a sus listas, al contrario que el resto de usuarios cuyas listas son de menor capacidad.\n                            </p>\n                          </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"feature-item\">\n                            <h3>¿Qué modalidades existen?</h3>\n                            <p class=\"text-muted\">\n                              Sólo hay una modalidad de Fast Pass aunque te puedes suscribir de forma mensual o anual. La opción anual tiene un descuento del 20%. <a href=\"https://itunes.apple.com/es/app/salva/id1156149609?mt=8\" target=\"_blank\">Suscríbete ahora</a>\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </section>\n      <section id=\"salvaeuristas\" class=\"salvaeuristas\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 text-center\">\n                    <img src=\"../assets/img/salvaeuristas_badge.png\" alt=\"\"/>\n                </div>\n                <div class=\"col-md-8 text-center\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <!-- Begin MailChimp Signup Form -->\n                            <div id=\"mc_embed_signup\">\n                            <form action=\"//fedegarlo.us14.list-manage.com/subscribe/post?u=b9021cafb46d6c2efc44bc0c9&amp;id=7b5b399867\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\">\n                                <div id=\"mc_embed_signup_scroll\">\n                                <h2>Únete a Salvaeuristas y recibe nuestro boletín</h2>\n                            <div class=\"mc-field-group\">\n                                <label style=\"display:none\" for=\"mce-EMAIL\">Email Address </label>\n                                <input placeholder=\"Correo electrónico\" type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\" size=\"40\" required>\n                            </div>\n                                <div id=\"mce-responses\" class=\"clear\">\n                                    <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                                    <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n                                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                                <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_b9021cafb46d6c2efc44bc0c9_7b5b399867\" tabindex=\"-1\" value=\"\"></div>\n                                <div class=\"enviar\"><input type=\"submit\" value=\"Suscríbete\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"btn-style\"></div>\n                                </div>\n                            </form>\n                            </div>\n      \n      <!--End mc_embed_signup-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </section>\n      <section class=\"cta\">\n        <div class=\"cta-content\">\n            <div class=\"container\">\n                <h2>No esperes más.<br/>Ahorra.</h2>\n                <a href=\"help#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n            </div>\n        </div>\n        <div class=\"overlay\"></div>\n      </section>\n  "

/***/ }),

/***/ "../../../../../src/app/fastpass/fastpass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastpassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FastpassComponent = (function () {
    function FastpassComponent(document) {
        this.document = document;
    }
    FastpassComponent.prototype.ngOnInit = function () {
        this.document.body.classList.add('fastpass');
    };
    FastpassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fastpass',
            template: __webpack_require__("../../../../../src/app/fastpass/fastpass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fastpass/fastpass.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object])
    ], FastpassComponent);
    return FastpassComponent;
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
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* Title */]])
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

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"header-content\">\n                    <div class=\"header-content-inner\">\n                        <h1>Privacy</h1>\n                        <a href=\"privacy#terms\" class=\"btn btn-outline btn-xl page-scroll\">See privacy policy</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"device-container\">\n                    <div class=\"device-mockup iphone6_plus portrait white\">\n                        <div class=\"device main\">\n                            <div class=\"screen\">\n                                <!--   Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else!   -->\n                                <img itemprop=\"screenshot\" itemprop=\"screenshot\" src=\"../assets/img/demo-screen-rayo.png\" class=\"img-responsive\" alt=\"\"/>\n                            </div>\n                            <div class=\"button\">\n                                <!--   You can hook the \"home button\" to some JavaScript events or just remove it   -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </header>\n  <section id=\"terms\" class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"innerText\"><p><strong>At Salva, we respect your privacy. We collect only a minimum of personal data. The data we collect is necessary for maintaining and improving Salva. This Privacy Policy gives you an overview of the data we collect and what we do with it.</strong></p><em>Last updated: August 25, 2017</em></div><div class=\"innerText\"><br data-mce-bogus=\"1\"></div><div class=\"innerText\">Salva (“us”, “we”, or “our”) operates the getsalva.com website and the Salva mobile application (the “Service”).&nbsp;</div><div class=\"innerText\"><br data-mce-bogus=\"1\"></div><div class=\"innerText\">This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.<br></div><div class=\"innerText\"><br>We will not use or share your information with anyone except as described in this Privacy Policy.<br><br>We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</div><h3 class=\"innerText\">Information Collection And Use<br></h3><p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name (“Personal Information”).</p><h3>Log Data </h3><p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device (“Log Data”).</p><p>This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p><p>When you access the Service by or through a mobile device, this Log Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use and other statistics.</p><p>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Service’s functionality. These third party service providers have their own privacy policies addressing how they use such information.</p><h3>Cookies</h3><p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.</p><p>We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p><h3>Service Providers</h3><p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p><p>These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p><h3>Communications </h3><p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p><h3>Compliance With Laws </h3><p>We will disclose your Personal Information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement or to protect the security or integrity of our Service.</p><h3>Business Transaction </h3><p>If Salva is involved in a merger, acquisition or asset sale, your Personal Information may be transferred. We will provide notice before your Personal Information is transferred and becomes subject to a different Privacy Policy.</p><h3>Security </h3><p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p><h3>International Transfer </h3><p>Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.<br><br>If you are located outside Germany and choose to provide information to us, please note that we transfer the information, including Personal Information, to Germany and process it there.<br><br>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p><h3>Links To Other Sites </h3><p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.<br><br>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p><h3>Children’s Privacy </h3><p>Our Service does not address anyone under the age of 13 (“Children”).</p><p>We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a children under age 13 without verification of parental consent, we take steps to remove that information from our servers.</p><h3>Changes To This Privacy Policy </h3><p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p><p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p><h3>Contact Us </h3><p>If you have any questions about this Privacy Policy, please contact us.<br></p>\n            </div>\n        </div>\n  </section>\n  <section class=\"cta\">\n    <div class=\"cta-content\">\n        <div class=\"container\">\n            <h2>No esperes más.<br/>Ahorra.</h2>\n            <a href=\"help#download\" class=\"btn btn-outline btn-xl page-scroll\">Consigue Salva</a>\n        </div>\n    </div>\n    <div class=\"overlay\"></div>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
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

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () { };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy',
            template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
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