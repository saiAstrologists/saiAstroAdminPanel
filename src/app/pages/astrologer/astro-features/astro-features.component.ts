import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-astro-features',
  templateUrl: './astro-features.component.html',
  styleUrls: ['./astro-features.component.scss']
})
export class AstroFeaturesComponent implements OnInit {

  featuresForm: FormGroup;
  constructor() {
    this.featuresForm = new FormGroup({
      callRates: new FormGroup({
        callIndia: new FormControl(''),
        callIndiaStatus: new FormControl(''),
        callUsa: new FormControl(''),
        callUsaStatus: new FormControl(''),
        callTaiwan: new FormControl(''),
        callTaiwanStatus: new FormControl(''),
      }),
      chatRates: new FormGroup({
        chatIndia: new FormControl(''),
        chatIndiaStatus: new FormControl(''),
        chatUsa: new FormControl(''),
        chatUsaStatus: new FormControl(''),
        chatTaiwan: new FormControl(''),
        chatTaiwanStatus: new FormControl(''),
      }),
      reportRates: new FormGroup({
        reportIndia: new FormControl(''),
        reportIndiaStatus: new FormControl(''),
        reportUsa: new FormControl(''),
        reportUsaStatus: new FormControl(''),
        reportTaiwan: new FormControl(''),
        reportTaiwanStatus: new FormControl(''),
      }),
      qaRates: new FormGroup({
        qaIndia: new FormControl(''),
        qaIndiaStatus: new FormControl(''),
        qaUsa: new FormControl(''),
        qaUsaStatus: new FormControl(''),
        qaTaiwan: new FormControl(''),
        qaTaiwanStatus: new FormControl(''),
      }),

    })
  }

  ngOnInit(): void {
    console.log(this.featuresForm, 'form');
    
  }

}
