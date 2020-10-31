(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/constants/resturl/resturl.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/constants/resturl/resturl.service.ts ***!
  \*************************************************************/
/*! exports provided: ResturlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturlService", function() { return ResturlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class ResturlService {
    constructor() { }
    static get login() { return '/login'; }
    static get forgotPswd() { return '/forgotPassword'; }
    static get verifyotp() { return '/verifyotp'; }
    static get resetPassword() { return '/resetPassword'; }
    // astrologer
    static get astrologerList() { return '/listOfAstrologers'; }
    static get astrologerDetail() { return '/getastrologerdetails'; }
    static get appectRejectAppltn() { return '/acceptApplication'; }
    static get updatePrices() { return '/updatePrices'; }
    static get reportsList() { return '/getreports'; }
    // admin
    static get createAdmin() { return '/create'; }
    static get adminList() { return '/listofadmin'; }
    static get updateAdmin() { return '/updateadmin'; }
    static get deleteAdminData() { return '/deleteAdmin'; }
}
ResturlService.ɵfac = function ResturlService_Factory(t) { return new (t || ResturlService)(); };
ResturlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResturlService, factory: ResturlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResturlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/restService/rest.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/restService/rest.service.ts ***!
  \*************************************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




class RestService {
    constructor(http) {
        this.http = http;
    }
    create(reqUrl, reqData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + reqUrl, reqData);
    }
    get(reqUrl) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + reqUrl);
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map