import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/authentication/auth.service';
import { CommonService } from './shared/services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saiAstroAdminPanel';


  constructor(
    private authService: AuthService,
    private router: Router,
    private commonService: CommonService
  ){

  }


  ngOnInit(){

    if(this.authService.isUserAuthenticate()){
      this.router.navigate(['/dashboard']);
      this.commonService.setUserLoginStatus(true);
    }else {
      this.router.navigate(['/login']);
      this.commonService.setUserLoginStatus(false);
    }

  }
}
