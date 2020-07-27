import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saiAstroAdminPanel';


  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }


  ngOnInit(){

    if(this.authService.isUserAuthenticate()){
      this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/login']);
    }

  }
}
