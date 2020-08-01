import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../services/authentication/auth.service';
import { CommonService } from '../../services/common/common.service';

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
  constructor(
    private authService: AuthService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {

    this.isUserLogin = this.authService.isUserAuthenticate();

    this.isUserLogin = true;


    this.commonService.checkUserLoginStatus.subscribe(data => {
      this.isUserLogin = data;
    })

  }

  toggleMenuSlide(){
    this.viewMenuBar = !this.viewMenuBar;
  }

  logout(){
    this.authService.logout();
    this.isUserLogin = false;
  }

}
