webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../home-component/home.module": [
		"../../../../../src/app/home-component/home.module.ts",
		"home.module"
	],
	"../library/library.module": [
		"../../../../../src/app/library/library.module.ts",
		"library.module"
	],
	"./home-component/home.module": [
		"../../../../../src/app/home-component/home.module.ts",
		"home.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PanelbarRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelbarRoutes = [
    { path: '', loadChildren: './home-component/home.module#HomeModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(PanelbarRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-app',
            styles: [__webpack_require__("../../../../../src/app/styles.css")],
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_layout__ = __webpack_require__("../../../../@progress/kendo-angular-layout/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__library_authors_component_authorsService__ = __webpack_require__("../../../../../src/app/library/authors-component/authorsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_popup__ = __webpack_require__("../../../../@progress/kendo-angular-popup/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_library_articles_component_articlesService__ = __webpack_require__("../../../../../src/app/library/articles-component/articlesService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__library_books_component_booksService__ = __webpack_require__("../../../../../src/app/library/books-component/booksService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__library_journals_component_journalsService__ = __webpack_require__("../../../../../src/app/library/journals-component/journalsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__library_publishers_component_publishersService__ = __webpack_require__("../../../../../src/app/library/publishers-component/publishersService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_layout__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_11__progress_kendo_angular_popup__["a" /* PopupModule */],
                __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                /*  { provide: APP_BASE_HREF, useValue: window.location.pathname }, */
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_10__library_authors_component_authorsService__["a" /* AuthorsService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_10__library_authors_component_authorsService__["a" /* AuthorsService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_12__app_library_articles_component_articlesService__["a" /* ArticlesService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_12__app_library_articles_component_articlesService__["a" /* ArticlesService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_14__library_books_component_booksService__["a" /* BooksService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_14__library_books_component_booksService__["a" /* BooksService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_15__library_journals_component_journalsService__["a" /* JournalsService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_15__library_journals_component_journalsService__["a" /* JournalsService */](jsonp); }; }
                },
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_16__library_publishers_component_publishersService__["a" /* PublishersService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_16__library_publishers_component_publishersService__["a" /* PublishersService */](jsonp); }; }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/library/articles-component/articlesService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'GetAll';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Articles/';
var ArticlesService = (function (_super) {
    __extends(ArticlesService, _super);
    function ArticlesService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    ArticlesService.prototype.readAuthors = function () {
        return this.http.get(baseUrl + 'api/Authors/' + READ_ACTION);
    };
    ArticlesService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    ArticlesService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    ArticlesService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    ArticlesService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    ArticlesService.prototype.reset = function () {
        this.data = [];
    };
    ArticlesService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == READ_ACTION) {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == CREATE_ACTION) {
            var url = baseUrl + 'api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == UPDATE_ACTION) {
            var url = baseUrl + 'api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == DELETE_ACTION) {
            var url = baseUrl + 'api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticlesService);
    return ArticlesService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/library/authors-component/authorsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'GetAll';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Authors/';
var AuthorsService = (function (_super) {
    __extends(AuthorsService, _super);
    function AuthorsService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        _this.dataAuthors = [];
        return _this;
    }
    AuthorsService.prototype.readAuthors = function () {
        var _this = this;
        this.fetch(READ_ACTION)
            .do(function (dataAuthors) {
            _this.dataAuthors = dataAuthors;
        })
            .subscribe(function (dataAuthors) {
            _super.prototype.next.call(_this, dataAuthors);
        });
        return this.dataAuthors;
    };
    AuthorsService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    AuthorsService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorsService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorsService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    AuthorsService.prototype.reset = function () {
        this.data = [];
    };
    AuthorsService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == READ_ACTION) {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == CREATE_ACTION) {
            var url = baseUrl + 'api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == UPDATE_ACTION) {
            var url = baseUrl + 'api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == DELETE_ACTION) {
            var url = baseUrl + 'api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    AuthorsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthorsService);
    return AuthorsService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/library/books-component/booksService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'GetAll';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Books/';
var BooksService = (function (_super) {
    __extends(BooksService, _super);
    function BooksService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    BooksService.prototype.readAuthors = function () {
        return this.http.get(baseUrl + 'api/Authors/' + READ_ACTION);
    };
    BooksService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BooksService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BooksService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BooksService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BooksService.prototype.reset = function () {
        this.data = [];
    };
    BooksService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == READ_ACTION) {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == CREATE_ACTION) {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == UPDATE_ACTION) {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == DELETE_ACTION) {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    BooksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BooksService);
    return BooksService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/library/journals-component/journalsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'GetAll';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Journals/';
var JournalsService = (function (_super) {
    __extends(JournalsService, _super);
    function JournalsService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    JournalsService.prototype.readArticles = function () {
        return this.http.get(baseUrl + 'api/Articles/' + READ_ACTION);
    };
    JournalsService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    JournalsService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    JournalsService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    JournalsService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    JournalsService.prototype.reset = function () {
        this.data = [];
    };
    JournalsService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == READ_ACTION) {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == CREATE_ACTION) {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == UPDATE_ACTION) {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == DELETE_ACTION) {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    JournalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JournalsService);
    return JournalsService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/library/publishers-component/publishersService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var READ_ACTION = 'GetAll';
var CREATE_ACTION = 'Create';
var UPDATE_ACTION = 'Update';
var DELETE_ACTION = 'Delete';
var baseUrl = 'http://' + location.host + '/';
var controller = 'Publishers/';
var PublishersService = (function (_super) {
    __extends(PublishersService, _super);
    function PublishersService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    PublishersService.prototype.readBooks = function () {
        return this.http.get(baseUrl + 'api/Books/' + READ_ACTION);
    };
    PublishersService.prototype.readJournals = function () {
        return this.http.get(baseUrl + 'api/Journals/' + READ_ACTION);
    };
    PublishersService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(READ_ACTION)
            .do(function (data) {
            _this.data = data;
        })
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    PublishersService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublishersService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublishersService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.Id === dataItem.Id; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    PublishersService.prototype.reset = function () {
        this.data = [];
    };
    PublishersService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == READ_ACTION) {
            var url = baseUrl + 'api/' + controller + READ_ACTION;
            return this.http
                .get(url)
                .map(function (res) { return res; });
        }
        if (action == CREATE_ACTION) {
            var url = baseUrl + '/api/' + controller + CREATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == UPDATE_ACTION) {
            var url = baseUrl + '/api/' + controller + UPDATE_ACTION;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
        if (action == DELETE_ACTION) {
            var url = baseUrl + '/api/' + controller + DELETE_ACTION;
            var id = data.Id;
            return this.http
                .post(url, data)
                .map(function (res) { return res; });
        }
    };
    PublishersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublishersService);
    return PublishersService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "../../../../../src/app/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    border-radius: 10px 10px 10px 10px;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover {\r\n    background-color: rgb(255, 104, 88);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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