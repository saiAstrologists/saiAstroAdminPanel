import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/authentication/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMasterAdmin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    if(this.authService.getAdminRole() == 'master'){
      this.isMasterAdmin = true;
    }else {
      this.isMasterAdmin = false;
    }

  }


  openLink(routeTo){
    this.router.navigate([routeTo]);
  }
}
