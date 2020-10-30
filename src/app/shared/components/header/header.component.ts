import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../services/authentication/auth.service';
import { CommonService } from '../../services/common/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'menuBar', [
        transition(':enter', 
          [
            style({ left: -250 }),
            animate('200ms ease-out', 
                    style({ left: 0 }))
          ]
        ),
        transition(':leave', 
          [
            style({ left: 0 }),
            animate('200ms ease-in', 
                    style({ left: -250 }))
          ]
        )
      ]
    )
  ],
})
export class HeaderComponent implements OnInit {
  viewMenuBar: boolean = false;
  isUserLogin: boolean = false;
  isMasterAdmin: boolean = false;
  userProfileData: any;
  constructor(
    private authService: AuthService,
    private commonService: CommonService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.isUserLogin = this.authService.isUserAuthenticate();

    // this.isUserLogin = true;


    this.commonService.checkUserLoginStatus.subscribe(data => {
      this.isUserLogin = data;

      if(this.authService.getAdminRole() == 'master'){
        this.isMasterAdmin = true;
      }else {
        this.isMasterAdmin = false;
      }

      if(sessionStorage.getItem('user_role')){
        this.userProfileData = JSON.parse(sessionStorage.getItem('user_role')) ;
      }

    })

  }

  toggleMenuSlide(){
    this.viewMenuBar = !this.viewMenuBar;
  }

  logout(){
    this.authService.logout();
    this.isUserLogin = false;
  }

  openPage(pageUrl){
    this.router.navigate([pageUrl]);
    this.toggleMenuSlide();
  }

}
