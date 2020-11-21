import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AstrologerService } from '../astrologer.service';
import { CommonService } from '../../../shared/services/common/common.service';

@Component({
  selector: 'app-astro-features',
  templateUrl: './astro-features.component.html',
  styleUrls: ['./astro-features.component.scss']
})
export class AstroFeaturesComponent implements OnInit {
  
  astrologerDetails: any;
  isDisabled: boolean = true;
  featuresForm: FormGroup;
  constructor(public astrologerService: AstrologerService, public commonService: CommonService) {
    this.featuresForm = new FormGroup({
      callRates: new FormGroup({
        callIndia: new FormControl(''),
        callIndiaStatus: new FormControl(true),
        callUsa: new FormControl(''),
        callUsaStatus: new FormControl(true),
        callTaiwan: new FormControl(''),
        callTaiwanStatus: new FormControl(true),
      }),
      chatRates: new FormGroup({
        chatIndia: new FormControl(''),
        chatIndiaStatus: new FormControl(true),
        chatUsa: new FormControl(''),
        chatUsaStatus: new FormControl(true),
        chatTaiwan: new FormControl(''),
        chatTaiwanStatus: new FormControl(true),
      }),
      reportRates: new FormGroup({
        reportIndia: new FormControl(''),
        reportIndiaStatus: new FormControl(true),
        reportUsa: new FormControl(''),
        reportUsaStatus: new FormControl(true),
        reportTaiwan: new FormControl(''),
        reportTaiwanStatus: new FormControl(true),
      }),
      qaRates: new FormGroup({
        qaIndia: new FormControl(''),
        qaIndiaStatus: new FormControl(true),
        qaUsa: new FormControl(''),
        qaUsaStatus: new FormControl(true),
        qaTaiwan: new FormControl(''),
        qaTaiwanStatus: new FormControl(true),
      }),

    })
  }

  ngOnInit(): void {
    this.astrologerDetails = this.commonService.astrologerData;
    console.log(this.featuresForm, 'form', this.astrologerDetails);

    if(this.astrologerDetails){
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
          reportIndia:this.astrologerDetails.india.report,
          reportIndiaStatus:this.astrologerDetails.india.report ? true : false,
          reportUsa:this.astrologerDetails.us.report,
          reportUsaStatus:this.astrologerDetails.us.report ? true : false,
          reportTaiwan:this.astrologerDetails.taiwan.report,
          reportTaiwanStatus:this.astrologerDetails.taiwan.report ? true : false,
        },
        qaRates: {
          qaIndia:this.astrologerDetails.india.qa,
          qaIndiaStatus:this.astrologerDetails.india.qa ? true : false,
          qaUsa:this.astrologerDetails.us.qa,
          qaUsaStatus:this.astrologerDetails.us.qa ? true : false,
          qaTaiwan:this.astrologerDetails.taiwan.qa,
          qaTaiwanStatus:this.astrologerDetails.taiwan.qa ? true : false,
        },
      })      
    }
    
  }

  savePrices(formData){
    if(formData && formData.valid){
      let userData = JSON.parse(sessionStorage.getItem('user_role'));
      let reqObj = {
        adminId: userData ? userData._id : '',
        astrologerId: this.astrologerDetails ? this.astrologerDetails._id : '',
        rates: [
          {
            "india":{
            "call": formData.value.callRates.callIndia,
            "chat": formData.value.chatRates.chatIndia,
            "report": formData.value.reportRates.reportIndia,
            "qa": formData.value.qaRates.qaIndia,
            "enableCall":formData.value.callRates.callIndiaStatus,
            "enableChat":formData.value.chatRates.chatIndiaStatus,
            "enableQa":formData.value.qaRates.qaIndiaStatus,
            "enableReport":formData.value.reportRates.reportIndiaStatus
          }
         },
         {
         "us":{
          "call": formData.value.callRates.callUsa,
            "chat": formData.value.chatRates.chatUsa,
            "report": formData.value.reportRates.reportUsa,
            "qa": formData.value.qaRates.qaUsa,
            "enableCall":formData.value.callRates.callUsaStatus,
            "enableChat":formData.value.chatRates.chatUsaStatus,
            "enableQa":formData.value.qaRates.qaUsaStatus,
            "enableReport":formData.value.reportRates.reportUsaStatus
          }
         },
         {
         "taiwan":{
          "call": formData.value.callRates.callTaiwan,
          "chat": formData.value.chatRates.chatTaiwan,
          "report": formData.value.reportRates.reportTaiwan,
          "qa": formData.value.qaRates.qaTaiwan,
          "enableCall":formData.value.callRates.callTaiwanStatus,
          "enableChat":formData.value.chatRates.chatTaiwanStatus,
          "enableQa":formData.value.qaRates.qaTaiwanStatus,
          "enableReport":formData.value.reportRates.reportTaiwanStatus,
         }
         }
        ]
  
      }
      this.astrologerService.saveAstrologerPrices(reqObj).subscribe(response => {
        console.log(response, 'response');
        
      })
    }

  }

}
