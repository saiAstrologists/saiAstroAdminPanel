(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-astrologer-astrologer-module"],{

/***/ "./src/app/pages/astrologer/astro-features/astro-features.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/astrologer/astro-features/astro-features.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AstroFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstroFeaturesComponent", function() { return AstroFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _astrologer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../astrologer.service */ "./src/app/pages/astrologer/astrologer.service.ts");
/* harmony import */ var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/common/common.service */ "./src/app/shared/services/common/common.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");












class AstroFeaturesComponent {
    constructor(astrologerService, commonService) {
        this.astrologerService = astrologerService;
        this.commonService = commonService;
        this.isDisabled = true;
        this.featuresForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            callRates: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                callIndia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                callIndiaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                callUsa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                callUsaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                callTaiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                callTaiwanStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            }),
            chatRates: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                chatIndia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                chatIndiaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                chatUsa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                chatUsaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                chatTaiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                chatTaiwanStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            }),
            reportRates: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                reportIndia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                reportIndiaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                reportUsa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                reportUsaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                reportTaiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                reportTaiwanStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            }),
            qaRates: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                qaIndia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                qaIndiaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                qaUsa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                qaUsaStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                qaTaiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                qaTaiwanStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            }),
        });
    }
    ngOnInit() {
        this.astrologerDetails = this.commonService.astrologerData;
        console.log(this.featuresForm, 'form', this.astrologerDetails);
        if (this.astrologerDetails && this.astrologerDetails.india && this.astrologerDetails.us && this.astrologerDetails.taiwan) {
            this.featuresForm.patchValue({
                callRates: {
                    callIndia: this.astrologerDetails.india.call,
                    callIndiaStatus: this.astrologerDetails.india.call ? true : false,
                    callUsa: this.astrologerDetails.us.call,
                    callUsaStatus: this.astrologerDetails.us.call ? true : false,
                    callTaiwan: this.astrologerDetails.taiwan.call,
                    callTaiwanStatus: this.astrologerDetails.taiwan.call ? true : false
                },
                chatRates: {
                    chatIndia: this.astrologerDetails.india.chat,
                    chatIndiaStatus: this.astrologerDetails.india.chat ? true : false,
                    chatUsa: this.astrologerDetails.us.chat,
                    chatUsaStatus: this.astrologerDetails.us.chat ? true : false,
                    chatTaiwan: this.astrologerDetails.taiwan.chat,
                    chatTaiwanStatus: this.astrologerDetails.taiwan.chat ? true : false
                },
                reportRates: {
                    reportIndia: this.astrologerDetails.india.report,
                    reportIndiaStatus: this.astrologerDetails.india.report ? true : false,
                    reportUsa: this.astrologerDetails.us.report,
                    reportUsaStatus: this.astrologerDetails.us.report ? true : false,
                    reportTaiwan: this.astrologerDetails.taiwan.report,
                    reportTaiwanStatus: this.astrologerDetails.taiwan.report ? true : false,
                },
                qaRates: {
                    qaIndia: this.astrologerDetails.india.qa,
                    qaIndiaStatus: this.astrologerDetails.india.qa ? true : false,
                    qaUsa: this.astrologerDetails.us.qa,
                    qaUsaStatus: this.astrologerDetails.us.qa ? true : false,
                    qaTaiwan: this.astrologerDetails.taiwan.qa,
                    qaTaiwanStatus: this.astrologerDetails.taiwan.qa ? true : false,
                },
            });
        }
    }
    savePrices(formData) {
        if (formData && formData.valid) {
            let userData = JSON.parse(sessionStorage.getItem('user_role'));
            let reqObj = {
                adminId: userData ? userData._id : '',
                astrologerId: this.astrologerDetails ? this.astrologerDetails._id : '',
                rates: [
                    {
                        "india": {
                            "call": formData.value.callRates.callIndia,
                            "chat": formData.value.chatRates.chatIndia,
                            "report": formData.value.reportRates.reportIndia,
                            "qa": formData.value.qaRates.qaIndia,
                            "enableCall": formData.value.callRates.callIndiaStatus,
                            "enableChat": formData.value.chatRates.chatIndiaStatus,
                            "enableQa": formData.value.qaRates.qaIndiaStatus,
                            "enableReport": formData.value.reportRates.reportIndiaStatus
                        }
                    },
                    {
                        "us": {
                            "call": formData.value.callRates.callUsa,
                            "chat": formData.value.chatRates.chatUsa,
                            "report": formData.value.reportRates.reportUsa,
                            "qa": formData.value.qaRates.qaUsa,
                            "enableCall": formData.value.callRates.callUsaStatus,
                            "enableChat": formData.value.chatRates.chatUsaStatus,
                            "enableQa": formData.value.qaRates.qaUsaStatus,
                            "enableReport": formData.value.reportRates.reportUsaStatus
                        }
                    },
                    {
                        "taiwan": {
                            "call": formData.value.callRates.callTaiwan,
                            "chat": formData.value.chatRates.chatTaiwan,
                            "report": formData.value.reportRates.reportTaiwan,
                            "qa": formData.value.qaRates.qaTaiwan,
                            "enableCall": formData.value.callRates.callTaiwanStatus,
                            "enableChat": formData.value.chatRates.chatTaiwanStatus,
                            "enableQa": formData.value.qaRates.qaTaiwanStatus,
                            "enableReport": formData.value.reportRates.reportTaiwanStatus,
                        }
                    }
                ]
            };
            this.astrologerService.saveAstrologerPrices(reqObj).subscribe(response => {
                console.log(response, 'response');
            });
        }
    }
}
AstroFeaturesComponent.ɵfac = function AstroFeaturesComponent_Factory(t) { return new (t || AstroFeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_astrologer_service__WEBPACK_IMPORTED_MODULE_2__["AstrologerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
AstroFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AstroFeaturesComponent, selectors: [["app-astro-features"]], decls: 154, vars: 3, consts: [[1, "astro-feature-wrapper"], [1, "container"], [1, "page-title"], [1, "font-muli"], ["routerLink", "/dashboard"], ["routerLink", "/astrologer"], [1, "features-wrapper"], [1, "features-section"], [3, "formGroup"], [1, "rating-section"], ["formGroupName", "callRates", 1, "row"], [1, "col-4"], [1, "feature-holder"], [1, "checkbox-holder"], ["formControlName", "callIndiaStatus", 1, ""], ["appearance", "legacy"], ["matInput", "", "type", "text", "formControlName", "callIndia", 3, "disabled"], ["formControlName", "callUsaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "callUsa"], ["formControlName", "callTaiwanStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "callTaiwan"], [1, "icon-holder"], ["formGroupName", "chatRates", 1, "row"], ["formControlName", "chatIndiaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "chatIndia"], ["formControlName", "chatUsaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "chatUsa"], ["formControlName", "chatTaiwanStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "chatTaiwan"], ["formGroupName", "reportRates", 1, "row"], ["formControlName", "reportIndiaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "reportIndia"], ["formControlName", "reportUsaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "reportUsa"], ["formControlName", "reportTaiwanStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "reportTaiwan"], ["formGroupName", "qaRates", 1, "row"], ["formControlName", "qaIndiaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "qaIndia"], ["formControlName", "qaUsaStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "qaUsa"], ["formControlName", "qaTaiwanStatus", 1, ""], ["matInput", "", "type", "text", "formControlName", "qaTaiwan"], [1, "clearfix", "p-4"], [1, "float-right"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled", "click"]], template: function AstroFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Astrologer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "India Call Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Usa Call Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Taiwan Call Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "chat_bubble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "India Chat Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Usa Chat Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-checkbox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Taiwan Chat Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-checkbox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "India Report Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Usa Report Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-checkbox", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Taiwan Report Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Question & Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-checkbox", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "India QA Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Usa QA Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-checkbox", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Taiwan QA Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstroFeaturesComponent_Template_button_click_152_listener() { return ctx.savePrices(ctx.featuresForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.featuresForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.featuresForm.invalid);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".astro-feature-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding-top: 70px;\n  background-color: #f2edf3;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 2rem 0 0;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-right: 15px;\n  border-radius: 100%;\n  background-color: #f9a825;\n  line-height: 35px;\n  vertical-align: middle;\n  text-align: center;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 700;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #f9a825;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  cursor: auto;\n}\n.astro-feature-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child:hover {\n  color: #000;\n}\n.features-wrapper[_ngcontent-%COMP%] {\n  margin: 2.5rem 0 0;\n  background-color: #fff;\n}\n.features-wrapper[_ngcontent-%COMP%]   .rating-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin: 0;\n  border-bottom: 1px solid #aeaeae;\n}\n.features-wrapper[_ngcontent-%COMP%]   .rating-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 3rem;\n}\n.features-wrapper[_ngcontent-%COMP%]   .rating-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-right: 15px;\n  border-radius: 100%;\n  background-color: #f9a825;\n  line-height: 35px;\n  vertical-align: middle;\n  text-align: center;\n  display: inline-block;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXN0cm9sb2dlci9hc3Ryby1mZWF0dXJlcy9hc3Ryby1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ1RGO0VEVUUsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFDUTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQ3JCVjtBRHdCVjtBQURnQjtFQUNJLFlBQUE7QUFHcEI7QUFGaUI7RUFDSSxXQzNCUDtBRCtCZDtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxzQkN0Q1U7QURxQ2Q7QUFFSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDaEROO0VEaURNLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FzdHJvbG9nZXIvYXN0cm8tZmVhdHVyZXMvYXN0cm8tZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGUuc2Nzcyc7XHJcblxyXG4uYXN0cm8tZmVhdHVyZS13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1ncmV5O1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDA7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQgeyBcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmVhdHVyZXMtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAucmF0aW5nLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWVhZWFlO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgM3JlbTtcclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyB2YXJpYWJsZXNcclxuXHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeTogI2Y5YTgyNTtcclxuJGJnLWdyZXk6ICNmMmVkZjM7XHJcbiRjb2xvci13YXJuOiAjZjQ0MzM2O1xyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstroFeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-astro-features',
                templateUrl: './astro-features.component.html',
                styleUrls: ['./astro-features.component.scss']
            }]
    }], function () { return [{ type: _astrologer_service__WEBPACK_IMPORTED_MODULE_2__["AstrologerService"] }, { type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/astrologer-profile/astrologer-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/astrologer/astrologer-profile/astrologer-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AstrologerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstrologerProfileComponent", function() { return AstrologerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document-slider/document-slider.component */ "./src/app/pages/astrologer/document-slider/document-slider.component.ts");
/* harmony import */ var _astrologer_report_view_astrologer_report_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../astrologer-report-view/astrologer-report-view.component */ "./src/app/pages/astrologer/astrologer-report-view/astrologer-report-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _astrologer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../astrologer.service */ "./src/app/pages/astrologer/astrologer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm2015/tabs.js");










function AstrologerProfileComponent_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerProfileComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.astrologerData == null ? null : ctx_r1.astrologerData.email);
} }
function AstrologerProfileComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.astrologerData == null ? null : ctx_r2.astrologerData.contactNo);
} }
function AstrologerProfileComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.astrologerData == null ? null : ctx_r3.astrologerData.personalDetails == null ? null : ctx_r3.astrologerData.personalDetails.dob);
} }
function AstrologerProfileComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.astrologerData == null ? null : ctx_r4.astrologerData.personalDetails == null ? null : ctx_r4.astrologerData.personalDetails.city, ", ", ctx_r4.astrologerData == null ? null : ctx_r4.astrologerData.personalDetails == null ? null : ctx_r4.astrologerData.personalDetails.country, "");
} }
function AstrologerProfileComponent_div_28_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r13, " ");
} }
function AstrologerProfileComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AstrologerProfileComponent_div_28_span_6_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.astrologerData == null ? null : ctx_r5.astrologerData.personalDetails == null ? null : ctx_r5.astrologerData.personalDetails.language);
} }
function AstrologerProfileComponent_div_29_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r15, " ");
} }
function AstrologerProfileComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "layers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AstrologerProfileComponent_div_29_span_6_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.astrologerData == null ? null : ctx_r6.astrologerData.personalDetails == null ? null : ctx_r6.astrologerData.personalDetails.skills);
} }
function AstrologerProfileComponent_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerProfileComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerProfileComponent_div_42_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.viewDocuments(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", doc_r16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AstrologerProfileComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.astrologerData == null ? null : ctx_r9.astrologerData.personalDetails == null ? null : ctx_r9.astrologerData.personalDetails.address == null ? null : ctx_r9.astrologerData.personalDetails.address.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.astrologerData == null ? null : ctx_r9.astrologerData.personalDetails == null ? null : ctx_r9.astrologerData.personalDetails.address == null ? null : ctx_r9.astrologerData.personalDetails.address.pinCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.astrologerData == null ? null : ctx_r9.astrologerData.personalDetails == null ? null : ctx_r9.astrologerData.personalDetails.address == null ? null : ctx_r9.astrologerData.personalDetails.address.state);
} }
function AstrologerProfileComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bank Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "IFSC Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Account Holder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Pan Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Aadhar Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.astrologerData == null ? null : ctx_r10.astrologerData.personalDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails.bankAccNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.astrologerData == null ? null : ctx_r10.astrologerData.personalDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.astrologerData == null ? null : ctx_r10.astrologerData.personalDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails.ifsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.astrologerData == null ? null : ctx_r10.astrologerData.personalDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails == null ? null : ctx_r10.astrologerData.personalDetails.bankAccDetails.accHolderName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.astrologerData == null ? null : ctx_r10.astrologerData.personalDetails == null ? null : ctx_r10.astrologerData.personalDetails.panNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.astrologerData == null ? null : ctx_r10.astrologerData.personalDetails == null ? null : ctx_r10.astrologerData.personalDetails.adharCardNumber);
} }
function AstrologerProfileComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerProfileComponent_div_53_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const list_r20 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.reportInfoView(list_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r21 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r20 == null ? null : list_r20.reportSubType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r20 == null ? null : list_r20.response);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return {}; };
class AstrologerProfileComponent {
    constructor(activeRoute, astrologerService, dialog) {
        this.activeRoute = activeRoute;
        this.astrologerService = astrologerService;
        this.dialog = dialog;
        this.reportList = [];
        this.reportTabActive = false;
    }
    ngOnInit() {
        console.log(this.activeRoute, 'activate');
        this.activeRoute.params.subscribe(paramList => {
            console.log(paramList, 'parameter');
            if (paramList && paramList.id) {
                this.getAstrologerProfileDetail(paramList.id);
                this.getReportData(paramList.id);
            }
        });
        this.reportList = [
            {
                reportQts: 'lorem ipsum testing text qts',
                reportAns: 'just check details testing again',
                qtsDate: '11/10/2020',
            },
            {
                reportQts: 'lorem ipsum testing text qts',
                reportAns: 'just check details testing again',
                qtsDate: '11/10/2020',
            }
        ];
    }
    getAstrologerProfileDetail(id) {
        this.astrologerService.getAstrologerProfile(id).subscribe(response => {
            console.log(response, 'response');
            if (response && response.status == 200 && response.data) {
                this.astrologerData = response.data;
                if (this.astrologerData.personalDetails && this.astrologerData.personalDetails.dob) {
                    let setDobValue = new Date(this.astrologerData.personalDetails.dob);
                    this.astrologerData.personalDetails.dob = setDobValue.getDate() + '/' + (setDobValue.getMonth() + 1) + '/' + setDobValue.getFullYear();
                    // // create document list
                    this.astrologerData.personalDetails['documents'] = [];
                    this.astrologerData.personalDetails['documents'].push(this.astrologerData.personalDetails.idProof);
                    // this.astrologerData.personalDetails['documents'].push('https://astrofiledata.s3.ap-south-1.amazonaws.com/Screenshot%20%281%29.png');
                    // console.log(this.astrologerData.personalDetails, 'docm');
                }
            }
        });
    }
    viewDocuments(index) {
        const dialogRef = this.dialog.open(_document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_1__["DocumentSliderComponent"], {
            width: '900px',
            panelClass: 'document-slider',
            data: {
                index: index,
                documentsList: this.astrologerData.personalDetails.documents
            }
        });
        dialogRef.afterClosed().subscribe(modalRes => {
            console.log(modalRes, 'modal res');
        });
    }
    reportInfoView(reportData) {
        const dialog = this.dialog.open(_astrologer_report_view_astrologer_report_view_component__WEBPACK_IMPORTED_MODULE_2__["AstrologerReportViewComponent"], {
            width: '45vw',
            panelClass: 'report-main-view',
            data: reportData
        });
        dialog.afterClosed().subscribe(modelResponse => {
            console.log(modelResponse, 'response');
        });
    }
    getReportData(astrolId) {
        let reqObj = {
            astrologerId: astrolId
        };
        this.astrologerService.getReportList(reqObj).subscribe(response => {
            console.log(response, 'report list');
            if (response) {
                this.reportList = response.data;
            }
        });
    }
}
AstrologerProfileComponent.ɵfac = function AstrologerProfileComponent_Factory(t) { return new (t || AstrologerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_astrologer_service__WEBPACK_IMPORTED_MODULE_4__["AstrologerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
AstrologerProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AstrologerProfileComponent, selectors: [["app-astrologer-profile"]], decls: 54, vars: 28, consts: [[1, "astro-profile-wrapper"], [1, "container"], [1, "page-title"], [1, "font-muli"], ["routerLink", "/dashboard"], ["routerLink", "/astrologer"], [1, "profile-container"], [1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-12", "mb-4"], [1, "profile-wrapper"], [1, "profile-heading"], [1, "profile-img-holder", 3, "ngStyle"], [1, "heading-name"], ["class", "ml-2", 4, "ngIf"], [1, "profile-details"], ["class", "detail-list row", 4, "ngIf"], [1, "col-xl-7", "col-lg-7", "col-md-12", "mb-4"], [1, "profile-all-details"], ["mat-align-tabs", "start"], ["label", "About Me"], [1, "about-me"], ["class", "text-center", 4, "ngIf"], ["label", "Documents"], [1, "documents-wrapper"], ["class", "document-list", 4, "ngFor", "ngForOf"], ["label", "Other Details"], [1, "otherdetails-wrapper"], ["class", "sub-detail", 4, "ngIf"], ["label", "Reports"], [1, "reports-wrapper"], ["class", "report-listing", 4, "ngFor", "ngForOf"], [1, "ml-2"], [1, "detail-list", "row"], [1, "col-2"], [1, "col-10", "p-0"], [1, "lang-list"], [4, "ngFor", "ngForOf"], [1, "skill-list"], [1, "text-center"], [1, "document-list"], ["alt", "", 1, "img-fluid", 3, "src", "click"], [1, "sub-detail"], [1, "other-title"], [1, "bank-details"], [1, "bank-head-type"], [1, "detail"], [1, "spacer"], [1, "report-listing"], [1, "clearfix"], [1, "float-left"], [1, "qts-no"], [1, "qts"], [1, "float-right"], [1, "answer-section"], [1, "view-more"], [3, "click"]], template: function AstrologerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Astrologer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AstrologerProfileComponent_mat_icon_22_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AstrologerProfileComponent_div_24_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AstrologerProfileComponent_div_25_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AstrologerProfileComponent_div_26_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AstrologerProfileComponent_div_27_Template, 7, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AstrologerProfileComponent_div_28_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AstrologerProfileComponent_div_29_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AstrologerProfileComponent_p_39_Template, 2, 0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AstrologerProfileComponent_div_42_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AstrologerProfileComponent_div_45_Template, 10, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AstrologerProfileComponent_div_48_Template, 59, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AstrologerProfileComponent_div_53_Template, 14, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, "url(" + ((ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.profilePic) ? ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.profilePic : "../admin/assets/imgs/default-user.jpg") + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.astrologerData == null ? null : ctx.astrologerData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.isApplicationAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.contactNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.language.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.skills.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.longBio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.shortBio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.longBio) == "" && (ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.shortBio) == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.documents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 16, ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.address) != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 20, ctx.astrologerData == null ? null : ctx.astrologerData.personalDetails == null ? null : ctx.astrologerData.personalDetails.bankAccDetails) != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportList);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: [".astro-profile-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding-top: 70px;\n  background-color: #f2edf3;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 2rem 0 0;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-right: 15px;\n  border-radius: 100%;\n  background-color: #f9a825;\n  line-height: 35px;\n  vertical-align: middle;\n  text-align: center;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 700;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #f9a825;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  cursor: auto;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child:hover {\n  color: #000;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n  margin: 2rem 0 0;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 3px #d7d7d7;\n  background-color: #fff;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-heading[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #c6c6c6;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-heading[_ngcontent-%COMP%]   .profile-img-holder[_ngcontent-%COMP%] {\n  background-color: #f2edf3;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  width: 180px;\n  height: 180px;\n  border-radius: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-heading[_ngcontent-%COMP%]   .heading-name[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-align: center;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-heading[_ngcontent-%COMP%]   .heading-name[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #3499e9;\n  vertical-align: text-bottom;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail-list[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .detail-list[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .lang-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0.3rem 0;\n  display: inline-block;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0.3rem 0;\n  display: inline-block;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 2px #d7d7d7;\n  min-height: 540px;\n  background-color: #fff;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-body {\n  padding: 1rem 2rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-body:last-child {\n  max-height: 525px;\n  padding: 1rem 1rem 1rem 2rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-body:last-child .mat-tab-body-content::-webkit-scrollbar {\n  width: 6px;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-body:last-child .mat-tab-body-content::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-body:last-child .mat-tab-body-content::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-label {\n  opacity: 1;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-label-active {\n  background-color: #f9a825;\n  color: #000;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]     .mat-tab-group.mat-primary .mat-ink-bar, .astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]   .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .profile-all-details[_ngcontent-%COMP%]   .reports-wrapper[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .other-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .sub-detail[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .bank-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .bank-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .bank-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .bank-head-type[_ngcontent-%COMP%] {\n  width: 165px;\n  display: inline-block;\n  vertical-align: top;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .bank-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.astro-profile-wrapper[_ngcontent-%COMP%]   .otherdetails-wrapper[_ngcontent-%COMP%]   .bank-details[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  display: inline-block;\n}\n.documents-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.documents-wrapper[_ngcontent-%COMP%]   .document-list[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-right: 20px;\n}\n.report-listing[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #c8c8c8;\n  margin-bottom: 25px;\n}\n.report-listing[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.report-listing[_ngcontent-%COMP%]   .qts-no[_ngcontent-%COMP%], .report-listing[_ngcontent-%COMP%]   .qts[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: inline-block;\n}\n.report-listing[_ngcontent-%COMP%]   .answer-section[_ngcontent-%COMP%] {\n  margin: 15px 10px 10px 20px;\n}\n.report-listing[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.report-listing[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  cursor: pointer;\n}\n.report-listing[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #f9a825;\n}\n@media only screen and (max-width: 767px) {\n  .astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .astro-profile-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXN0cm9sb2dlci9hc3Ryb2xvZ2VyLXByb2ZpbGUvYXN0cm9sb2dlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDVkY7RURXRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVRO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0FBQVo7QUFDWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNoQjtBQUFnQjtFQUNJLGNDdEJWO0FEd0JWO0FBQWdCO0VBQ0ksWUFBQTtBQUVwQjtBQURpQjtFQUNJLFdDNUJQO0FEK0JkO0FBSUk7RUFDSSxnQkFBQTtBQUZSO0FBS0k7RUFDSSwrQkFBQTtFQUNBLHNCQzFDTTtBRHVDZDtBQU1JO0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtBQUpSO0FBS1E7RUFDSSx5QkM5Q0Y7RURnREUsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpaO0FBTVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKWjtBQUtZO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0FBSGhCO0FBT0k7RUFDSSxvQkFBQTtBQUxSO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBS1k7RUFBZSxTQUFBO0FBRjNCO0FBS1k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBSGhCO0FBT1k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBTGhCO0FBVUk7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JDL0ZNO0FEdUZkO0FBWVE7RUFDSSxrQkFBQTtBQVZaO0FBV1k7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0FBVGhCO0FBVWdCO0VBQ0ksVUFBQTtBQVJwQjtBQVdnQjtFQUNJLDRDQUFBO0FBVHBCO0FBWWdCO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtBQVZwQjtBQWNRO0VBQ0ksVUFBQTtBQVpaO0FBZVE7RUFDSSx5QkN6SEY7RUQwSEUsV0MzSEU7QUQ4R2Q7QUFnQlE7RUFDSSxzQkMvSEU7QURpSGQ7QUFpQlE7RUFDSSxtQkFBQTtBQWZaO0FBcUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFuQlo7QUFxQlE7RUFDSSxxQkFBQTtBQW5CWjtBQXFCUTtFQUNJLFNBQUE7QUFuQlo7QUFvQlk7RUFBTyxjQUFBO0FBakJuQjtBQW9CWTtFQUNJLFVBQUE7QUFsQmhCO0FBbUJnQjtFQUNJLHFCQUFBO0FBakJwQjtBQW1CZ0I7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWpCcEI7QUFtQmdCO0VBQ0kscUJBQUE7QUFqQnBCO0FBb0JZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQWxCaEI7QUF3QkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQXJCSjtBQXNCSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQXBCUjtBQXdCQTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQXJCSjtBQXNCSTtFQUNJLG1CQUFBO0FBcEJSO0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQXBCUjtBQXNCSTtFQUNJLDJCQUFBO0FBcEJSO0FBc0JJO0VBQ0ksaUJBQUE7QUFwQlI7QUFxQlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFuQlo7QUFvQlk7RUFDSSxjQ3hNTjtBRHNMVjtBQXlCQTtFQUdZO0lBQ0ksZUFBQTtFQXhCZDtBQUNGO0FBNkJBO0VBR1k7SUFDSSxlQUFBO0VBN0JkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3Ryb2xvZ2VyL2FzdHJvbG9nZXItcHJvZmlsZS9hc3Ryb2xvZ2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGUuc2Nzcyc7XHJcblxyXG4uYXN0cm8tcHJvZmlsZS13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1ncmV5O1xyXG5cclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMCAwO1xyXG4gICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtd3JhcHBlciB7ICAgICAgICBcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjZDdkN2Q3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgICAgICAucHJvZmlsZS1pbWctaG9sZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWdyZXk7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2RlZmF1bHQtdXNlci5qcGcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRpbmctbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDk5ZTk7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1kZXRhaWxzIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICAgICAgICAuZGV0YWlsLWxpc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQgeyBtYXJnaW46IDA7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmctbGlzdCB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtIC4zcmVtIDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraWxsLWxpc3Qge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbSAuM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLWFsbC1kZXRhaWxzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjZDdkN2Q3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDU0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAvLyA6Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC10YWItYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgIC5tYXQtdGFiLWJvZHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1hdC10YWItYm9keS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tYXQtdGFiLWJvZHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlcG9ydHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5vdGhlcmRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAgICAgLm90aGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWRldGFpbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgc3BhbiB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYW5rLWRldGFpbHMge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iYW5rLWhlYWQtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZG9jdW1lbnRzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5kb2N1bWVudC1saXN0IHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7IFxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlcG9ydC1saXN0aW5nIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnF0cy1ubywgLnF0cyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5hbnN3ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDEwcHggMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnZpZXctbW9yZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgIC5hc3Ryby1wcm9maWxlLXdyYXBwZXIge1xyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIC5hc3Ryby1wcm9maWxlLXdyYXBwZXIge1xyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gdmFyaWFibGVzXHJcblxyXG4kY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1ibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICNmOWE4MjU7XHJcbiRiZy1ncmV5OiAjZjJlZGYzO1xyXG4kY29sb3Itd2FybjogI2Y0NDMzNjtcclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-astrologer-profile',
                templateUrl: './astrologer-profile.component.html',
                styleUrls: ['./astrologer-profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _astrologer_service__WEBPACK_IMPORTED_MODULE_4__["AstrologerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/astrologer-report-view/astrologer-report-view.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/astrologer/astrologer-report-view/astrologer-report-view.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AstrologerReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstrologerReportViewComponent", function() { return AstrologerReportViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");




class AstrologerReportViewComponent {
    constructor(reportModalData, dialogRef) {
        this.reportModalData = reportModalData;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log(this.reportModalData, 'report modal data');
    }
}
AstrologerReportViewComponent.ɵfac = function AstrologerReportViewComponent_Factory(t) { return new (t || AstrologerReportViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AstrologerReportViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AstrologerReportViewComponent, selectors: [["app-astrologer-report-view"]], decls: 10, vars: 3, consts: [[1, "astrologer-report-wrapper"], [1, "clearfix"], [1, "float-left"], [1, "qts"], [1, "float-right"], [1, "qts-date"], [1, "answer-section"]], template: function AstrologerReportViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reportModalData == null ? null : ctx.reportModalData.reportSubType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reportModalData == null ? null : ctx.reportModalData.qtsDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reportModalData == null ? null : ctx.reportModalData.response, " ");
    } }, styles: [".astrologer-report-wrapper[_ngcontent-%COMP%]   .qts[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.astrologer-report-wrapper[_ngcontent-%COMP%]   .answer-section[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXN0cm9sb2dlci9hc3Ryb2xvZ2VyLXJlcG9ydC12aWV3L2FzdHJvbG9nZXItcmVwb3J0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FzdHJvbG9nZXIvYXN0cm9sb2dlci1yZXBvcnQtdmlldy9hc3Ryb2xvZ2VyLXJlcG9ydC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzdHJvbG9nZXItcmVwb3J0LXdyYXBwZXIge1xyXG4gICAgLnF0cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYW5zd2VyLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerReportViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-astrologer-report-view',
                templateUrl: './astrologer-report-view.component.html',
                styleUrls: ['./astrologer-report-view.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/astrologer-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/astrologer/astrologer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AstrologerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstrologerRoutingModule", function() { return AstrologerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _astrologer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./astrologer.component */ "./src/app/pages/astrologer/astrologer.component.ts");
/* harmony import */ var _astrologer_profile_astrologer_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./astrologer-profile/astrologer-profile.component */ "./src/app/pages/astrologer/astrologer-profile/astrologer-profile.component.ts");
/* harmony import */ var _astro_features_astro_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./astro-features/astro-features.component */ "./src/app/pages/astrologer/astro-features/astro-features.component.ts");







const routes = [
    {
        path: '',
        component: _astrologer_component__WEBPACK_IMPORTED_MODULE_2__["AstrologerComponent"]
    },
    {
        path: 'astro-profile/:id',
        component: _astrologer_profile_astrologer_profile_component__WEBPACK_IMPORTED_MODULE_3__["AstrologerProfileComponent"]
    },
    {
        path: 'astro-features',
        component: _astro_features_astro_features_component__WEBPACK_IMPORTED_MODULE_4__["AstroFeaturesComponent"]
    }
];
class AstrologerRoutingModule {
}
AstrologerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AstrologerRoutingModule });
AstrologerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AstrologerRoutingModule_Factory(t) { return new (t || AstrologerRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AstrologerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/astrologer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/astrologer/astrologer.component.ts ***!
  \**********************************************************/
/*! exports provided: AstrologerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstrologerComponent", function() { return AstrologerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-modal/confirmation-modal.component */ "./src/app/pages/astrologer/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _astrologer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./astrologer.service */ "./src/app/pages/astrologer/astrologer.service.ts");
/* harmony import */ var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/common/common.service */ "./src/app/shared/services/common/common.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");


















function AstrologerComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r16 + 1, " ");
} }
function AstrologerComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.name, " ");
} }
function AstrologerComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.email, " ");
} }
function AstrologerComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.contactNo, " ");
} }
function AstrologerComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_td_36_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statusType_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statusType_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", statusType_r24.name, " ");
} }
function AstrologerComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AstrologerComponent_td_36_Template_mat_select_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r22 = ctx.index; const row_r21 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.statusChange($event, i_r22, row_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AstrologerComponent_td_36_mat_option_6_Template, 2, 2, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", element_r20.isApplicationAccepted == null ? null : element_r20.isApplicationAccepted ? "Approve" : "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.statusTypeList);
} }
function AstrologerComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerComponent_td_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const row_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.viewProfile(row_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AstrologerComponent_td_39_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const row_r28 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.viewFeatures(row_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AstrologerComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
} }
function AstrologerComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
const _c0 = function () { return [5, 10, 20]; };
class AstrologerComponent {
    constructor(router, dialog, astrologerService, commonService) {
        this.router = router;
        this.dialog = dialog;
        this.astrologerService = astrologerService;
        this.commonService = commonService;
        this.displayedColumns = ['position', 'name', 'email', 'mobile', 'status', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.getAstrologersList();
        this.statusTypeList = [
            {
                id: 1,
                name: 'Approve'
            },
            {
                id: 2,
                name: 'Reject'
            }
        ];
        //   let data: any = [
        //     {
        //         "astrologistDetails": {
        //             "skills": [],
        //             "language": []
        //         },
        //         "email": "bijendrasingh9146@gmail.com",
        //         "_id": "5f1d8528411bc60dbd09ddb3",
        //         "name": "Bijendra Swami",
        //         "status": 'Rejected'
        //     },
        //     {
        //         "astrologistDetails": {
        //             "skills": [],
        //             "language": []
        //         },
        //         "email": "bijendrasingh9146@gmail.com",
        //         "_id": "5f255bb36507cd5af86a4102",
        //         "name": "Bijendra123",
        //         "status": 'Pending'
        //     },
        //     {
        //         "astrologistDetails": {
        //             "skills": [],
        //             "language": []
        //         },
        //         "email": "amitverma@gmail.com",
        //         "_id": "5f255bb36507cd5af86a4103",
        //         "name": "Amit Verma",
        //         "status": 'Approved'
        //     }
        // ];
        // console.log(this.paginator, 'paginator')
    }
    // filter data table start
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    //filter data table end
    viewProfile(astrologerData) {
        console.log(astrologerData, 'astrologer data');
        this.router.navigate(['astrologer/astro-profile', astrologerData._id]);
    }
    viewFeatures(astrologerDetails) {
        this.commonService.astrologerData = astrologerDetails;
        this.router.navigate(['astrologer/astro-features']);
    }
    statusChange(statusEvent, index, customerData) {
        console.log(statusEvent, 'event');
        if (statusEvent && statusEvent.value) {
            this.confirmationModal(statusEvent, index, customerData);
        }
    }
    confirmationModal(selectValue, index, customerData) {
        console.log(selectValue, 'select value');
        const dialogRef = this.dialog.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationModalComponent"], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(modalResponse => {
            console.log(modalResponse, 'modal response');
            if (modalResponse == 'no') {
                let value = this.dataSource.data[index].isApplicationAccepted;
                console.log(value, 'value');
                if (value == null) {
                    selectValue.source.writeValue(null);
                }
                else {
                    selectValue.source.writeValue(value);
                }
                // selectValue.source.writeValue(null);
            }
            else if (modalResponse == 'yes') {
                if (sessionStorage.getItem('user_role')) {
                    let adminUserValue = JSON.parse(sessionStorage.getItem('user_role'));
                    if (adminUserValue._id) {
                        let reqData = {
                            userId: customerData._id,
                            approve: selectValue && selectValue.value == 'Approve' ? true : false,
                            adminId: adminUserValue._id
                        };
                        this.astrologerService.acceptRejectApp(reqData).subscribe(response => {
                            if (response && response.status == 200 && response.data) {
                                console.log(response, 'response');
                            }
                        });
                    }
                }
                this.dataSource.data.filter((list, i) => {
                    if (index == i) {
                        list.status = selectValue.value;
                    }
                });
                this.dataSource.filter = "";
                // call service
            }
        });
    }
    getAstrologersList() {
        this.astrologerService.getAstrologers().subscribe(response => {
            if (response && response.status == 200 && response.data) {
                // set is dropdown value
                // response.data.forEach(list => {
                //   if(list.isApplicationAccepted == null){
                //       list.isDropdown = true;
                //   }else {
                //     list.isDropdown = false;
                //   }
                // })
                console.log(response.data, 'data');
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response.data);
                // this.dataSource =  new MatTableDataSource(ELEMENT_DATA);
                this.dataSource.paginator = this.paginator;
            }
        });
    }
}
AstrologerComponent.ɵfac = function AstrologerComponent_Factory(t) { return new (t || AstrologerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_astrologer_service__WEBPACK_IMPORTED_MODULE_6__["AstrologerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"])); };
AstrologerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AstrologerComponent, selectors: [["app-astrologer"]], viewQuery: function AstrologerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 43, vars: 5, consts: [[1, "astrologer-wrapper"], [1, "container"], [1, "page-title"], [1, "font-muli"], ["routerLink", "/dashboard"], [1, "clearfix"], [1, "float-right", "filter-field"], ["matInput", "", "placeholder", "Search by: Name, Email, Status...", 3, "keyup"], ["input", ""], ["matSuffix", ""], [1, "mat-elevation-z8", "mt-3"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "data-label", "No.", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "data-label", "Name", 4, "matCellDef"], ["matColumnDef", "email"], ["mat-cell", "", "data-label", "Email", 4, "matCellDef"], ["matColumnDef", "mobile"], ["mat-cell", "", "data-label", "Mobile No", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", "data-label", "Status", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-cell", "", "data-label", "Action", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", "", "data-label", "No."], ["mat-cell", "", "data-label", "Name"], ["mat-cell", "", "data-label", "Email"], ["mat-cell", "", "data-label", "Mobile No"], ["mat-cell", "", "data-label", "Status"], [1, "select-status"], ["appearance", "fill"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-cell", "", "data-label", "Action"], ["mat-raised-button", "", "color", "accent", 1, "mr-4", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AstrologerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Astrologer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AstrologerComponent_Template_input_keyup_16_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AstrologerComponent_th_23_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AstrologerComponent_td_24_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AstrologerComponent_th_26_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AstrologerComponent_td_27_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AstrologerComponent_th_29_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AstrologerComponent_td_30_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AstrologerComponent_th_32_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AstrologerComponent_td_33_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AstrologerComponent_th_35_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AstrologerComponent_td_36_Template, 7, 2, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AstrologerComponent_th_38_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AstrologerComponent_td_39_Template, 5, 0, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AstrologerComponent_tr_40_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AstrologerComponent_tr_41_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-paginator", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".astrologer-wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding-top: 70px;\n  background-color: #f2edf3;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 2rem 0 0;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-right: 15px;\n  border-radius: 100%;\n  background-color: #f9a825;\n  line-height: 35px;\n  vertical-align: middle;\n  text-align: center;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 700;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #f9a825;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  cursor: auto;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child:hover {\n  color: #000;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  transition: all 200ms ease-in-out;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(235, 235, 235, 0.85);\n  transition: all 200ms ease-in-out;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #000;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .select-status[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .select-status[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0.75em 0.75em 0 0;\n  background-color: transparent;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.astrologer-wrapper[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 240px;\n}\n@media only screen and (max-width: 991px) {\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n    height: 100%;\n    margin: 0 0 10px;\n    display: block;\n    background-color: #fff;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n    padding: 10px;\n    display: block;\n    text-align: right;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 700;\n    font-size: 16px;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .mat-elevation-z8[_ngcontent-%COMP%]   td.mat-cell[data-label=Status][_ngcontent-%COMP%] {\n    padding: 10px 10px 0;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%] {\n    margin: 15px 0 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .astro-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .astro-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .astrologer-wrapper[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .astrologer-wrapper[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXN0cm9sb2dlci9hc3Ryb2xvZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDVkY7RURXRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVRO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0FBQVo7QUFDWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNoQjtBQUFnQjtFQUNJLGNDdEJWO0FEd0JWO0FBQWdCO0VBQ0ksWUFBQTtBQUVwQjtBQURpQjtFQUNJLFdDNUJQO0FEK0JkO0FBSUk7RUFDSSwwQ0FBQTtBQUZSO0FBR1E7RUFDSSxpQ0FBQTtBQURaO0FBRVk7RUFFSSwyQ0FBQTtFQUNBLGlDQUFBO0FBRGhCO0FBS1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdDbERFO0FEK0NkO0FBT1k7RUFDSSxZQUFBO0FBTGhCO0FBT1k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBTGhCO0FBVUk7RUFDSSxXQUFBO0FBUlI7QUFZUTtFQUNJLFlBQUE7QUFWWjtBQWtCQTtFQUdZO0lBQ0ksNkJBQUE7RUFqQmQ7RUFtQlU7SUFDSSxhQUFBO0VBakJkO0VBbUJVO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQzVGRjtFRDJFWjtFQWtCYztJQUNJLHNCQzlGTjtFRDhFWjtFQW1CVTtJQUNJLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUFqQmQ7RUFrQmM7SUFDSSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFoQmxCO0VBa0JjO0lBQ0ksb0JBQUE7RUFoQmxCO0VBb0JNO0lBQ0ksZ0JBQUE7RUFsQlY7QUFDRjtBQXVCQTtFQUdZO0lBQ0ksZUFBQTtFQXZCZDtBQUNGO0FBNEJBO0VBR1k7SUFDSSxlQUFBO0VBNUJkOztFQWlDRTtJQUNJLG9CQUFBO0VBOUJOO0VBK0JNO0lBQ0ksV0FBQTtFQTdCVjtFQThCVTtJQUNJLFdBQUE7RUE1QmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FzdHJvbG9nZXIvYXN0cm9sb2dlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzJztcclxuXHJcbi5hc3Ryb2xvZ2VyLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWdyZXk7XHJcblxyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDA7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQgeyBcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLm1hdC1yb3cge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRwcmltYXJ5LCAkYWxwaGE6IC44NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ViZWJlYiwgJGFscGhhOiAuODUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc3RhdHVzIHtcclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNzVlbSAuNzVlbSAwIDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LXRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWZpZWxkIHtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gbWVkaWEgcXVlcnlcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5hc3Ryb2xvZ2VyLXdyYXBwZXIge1xyXG4gICAgICAgIC5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgICAgICAgICAgLm1hdC10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0LXJvdyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGQubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2RhdGEtbGFiZWw9XCJTdGF0dXNcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWx0ZXItZmllbGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAuYXN0cm8td3JhcHBlciB7XHJcbiAgICAgICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgLmFzdHJvLXdyYXBwZXIge1xyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hc3Ryb2xvZ2VyLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5maWx0ZXItZmllbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLyB2YXJpYWJsZXNcclxuXHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeTogI2Y5YTgyNTtcclxuJGJnLWdyZXk6ICNmMmVkZjM7XHJcbiRjb2xvci13YXJuOiAjZjQ0MzM2O1xyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-astrologer',
                templateUrl: './astrologer.component.html',
                styleUrls: ['./astrologer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _astrologer_service__WEBPACK_IMPORTED_MODULE_6__["AstrologerService"] }, { type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/astrologer/astrologer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/astrologer/astrologer.module.ts ***!
  \*******************************************************/
/*! exports provided: AstrologerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstrologerModule", function() { return AstrologerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _astrologer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./astrologer-routing.module */ "./src/app/pages/astrologer/astrologer-routing.module.ts");
/* harmony import */ var _astrologer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./astrologer.component */ "./src/app/pages/astrologer/astrologer.component.ts");
/* harmony import */ var _shared_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module.module */ "./src/app/shared-module.module.ts");
/* harmony import */ var _astrologer_profile_astrologer_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./astrologer-profile/astrologer-profile.component */ "./src/app/pages/astrologer/astrologer-profile/astrologer-profile.component.ts");
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation-modal/confirmation-modal.component */ "./src/app/pages/astrologer/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document-slider/document-slider.component */ "./src/app/pages/astrologer/document-slider/document-slider.component.ts");
/* harmony import */ var _astro_features_astro_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./astro-features/astro-features.component */ "./src/app/pages/astrologer/astro-features/astro-features.component.ts");
/* harmony import */ var _astrologer_report_view_astrologer_report_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./astrologer-report-view/astrologer-report-view.component */ "./src/app/pages/astrologer/astrologer-report-view/astrologer-report-view.component.ts");











class AstrologerModule {
}
AstrologerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AstrologerModule });
AstrologerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AstrologerModule_Factory(t) { return new (t || AstrologerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_module_module__WEBPACK_IMPORTED_MODULE_4__["SharedModuleModule"],
            _astrologer_routing_module__WEBPACK_IMPORTED_MODULE_2__["AstrologerRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AstrologerModule, { declarations: [_astrologer_component__WEBPACK_IMPORTED_MODULE_3__["AstrologerComponent"], _astrologer_profile_astrologer_profile_component__WEBPACK_IMPORTED_MODULE_5__["AstrologerProfileComponent"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationModalComponent"], _document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSliderComponent"], _astro_features_astro_features_component__WEBPACK_IMPORTED_MODULE_8__["AstroFeaturesComponent"], _astrologer_report_view_astrologer_report_view_component__WEBPACK_IMPORTED_MODULE_9__["AstrologerReportViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_module_module__WEBPACK_IMPORTED_MODULE_4__["SharedModuleModule"],
        _astrologer_routing_module__WEBPACK_IMPORTED_MODULE_2__["AstrologerRoutingModule"]], exports: [_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationModalComponent"],
        _document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSliderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_astrologer_component__WEBPACK_IMPORTED_MODULE_3__["AstrologerComponent"], _astrologer_profile_astrologer_profile_component__WEBPACK_IMPORTED_MODULE_5__["AstrologerProfileComponent"], _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationModalComponent"], _document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSliderComponent"], _astro_features_astro_features_component__WEBPACK_IMPORTED_MODULE_8__["AstroFeaturesComponent"], _astrologer_report_view_astrologer_report_view_component__WEBPACK_IMPORTED_MODULE_9__["AstrologerReportViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_module_module__WEBPACK_IMPORTED_MODULE_4__["SharedModuleModule"],
                    _astrologer_routing_module__WEBPACK_IMPORTED_MODULE_2__["AstrologerRoutingModule"],
                ],
                exports: [
                    _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationModalComponent"],
                    _document_slider_document_slider_component__WEBPACK_IMPORTED_MODULE_7__["DocumentSliderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/astrologer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/astrologer/astrologer.service.ts ***!
  \********************************************************/
/*! exports provided: AstrologerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstrologerService", function() { return AstrologerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_resturl_resturl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/resturl/resturl.service */ "./src/app/shared/constants/resturl/resturl.service.ts");
/* harmony import */ var _shared_services_restService_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/restService/rest.service */ "./src/app/shared/services/restService/rest.service.ts");




class AstrologerService {
    constructor(restService) {
        this.restService = restService;
    }
    getAstrologers() {
        return this.restService.create(_shared_constants_resturl_resturl_service__WEBPACK_IMPORTED_MODULE_1__["ResturlService"].astrologerList, null);
    }
    getAstrologerProfile(data) {
        return this.restService.create(_shared_constants_resturl_resturl_service__WEBPACK_IMPORTED_MODULE_1__["ResturlService"].astrologerDetail + '/' + data, null);
    }
    acceptRejectApp(data) {
        return this.restService.create(_shared_constants_resturl_resturl_service__WEBPACK_IMPORTED_MODULE_1__["ResturlService"].appectRejectAppltn, data);
    }
    saveAstrologerPrices(data) {
        return this.restService.create(_shared_constants_resturl_resturl_service__WEBPACK_IMPORTED_MODULE_1__["ResturlService"].updatePrices, data);
    }
    getReportList(data) {
        return this.restService.create(_shared_constants_resturl_resturl_service__WEBPACK_IMPORTED_MODULE_1__["ResturlService"].reportsList, data);
    }
}
AstrologerService.ɵfac = function AstrologerService_Factory(t) { return new (t || AstrologerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_restService_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
AstrologerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AstrologerService, factory: AstrologerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AstrologerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_restService_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/confirmation-modal/confirmation-modal.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/astrologer/confirmation-modal/confirmation-modal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function() { return ConfirmationModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");




class ConfirmationModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    closeModal(type) {
        this.dialogRef.close(type);
    }
}
ConfirmationModalComponent.ɵfac = function ConfirmationModalComponent_Factory(t) { return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ConfirmationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationModalComponent, selectors: [["app-confirmation-modal"]], decls: 9, vars: 0, consts: [[1, "modal-confirmation"], [1, "text-center"], [1, "clearfix"], [1, "float-right", "mt-5"], ["mat-raised-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ConfirmationModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to change the status ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_5_listener() { return ctx.closeModal("no"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_7_listener() { return ctx.closeModal("yes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FzdHJvbG9nZXIvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-modal',
                templateUrl: './confirmation-modal.component.html',
                styleUrls: ['./confirmation-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/astrologer/document-slider/document-slider.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/astrologer/document-slider/document-slider.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DocumentSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSliderComponent", function() { return DocumentSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function DocumentSliderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r2 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DocumentSliderComponent {
    constructor(documentModalData, dialogRef) {
        this.documentModalData = documentModalData;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        if (this.documentModalData) {
            console.log(this.documentModalData);
        }
    }
    closeModal(type) {
        this.dialogRef.close(type);
    }
}
DocumentSliderComponent.ɵfac = function DocumentSliderComponent_Factory(t) { return new (t || DocumentSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DocumentSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentSliderComponent, selectors: [["app-document-slider"]], decls: 12, vars: 1, consts: [[1, "document-slider"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item", 3, "ngClass"], ["alt", "First slide", 1, "d-block", "w-100", 3, "src"]], template: function DocumentSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentSliderComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.documentModalData == null ? null : ctx.documentModalData.documentsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".document-slider[_ngcontent-%COMP%]     .mat-dialog-container {\n  background-color: transparent !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXN0cm9sb2dlci9kb2N1bWVudC1zbGlkZXIvZG9jdW1lbnQtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtBQVBSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXN0cm9sb2dlci9kb2N1bWVudC1zbGlkZXIvZG9jdW1lbnQtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmRvY3VtZW50LXNsaWRlciB7XHJcbi8vICAgICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5kb2N1bWVudC1zbGlkZXIge1xyXG4gICAgOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-document-slider',
                templateUrl: './document-slider.component.html',
                styleUrls: ['./document-slider.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-astrologer-astrologer-module.js.map