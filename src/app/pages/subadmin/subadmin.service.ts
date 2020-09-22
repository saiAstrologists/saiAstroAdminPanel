import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/services/restService/rest.service';
import { ResturlService } from '../../shared/constants/resturl/resturl.service';

@Injectable({
  providedIn: 'root'
})
export class SubadminService {

  constructor(
    private restService: RestService
  ) { }


  createAdmin(data): Observable<any>{
    return this.restService.create(ResturlService.createAdmin, data);
  }

  getAdmin(): Observable<any> {
    return this.restService.create(ResturlService.adminList, null);
  }

  updateAdminData(data): Observable<any>{
    return this.restService.create(ResturlService.updateAdmin, data);
  }

  deleteAdmin(data): Observable<any> {
    return this.restService.create(ResturlService.deleteAdminData, data);
  }
}
