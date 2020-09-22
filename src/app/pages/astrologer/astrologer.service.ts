import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/services/restService/rest.service';
import { ResturlService } from '../../shared/constants/resturl/resturl.service';

@Injectable({
  providedIn: 'root'
})
export class AstrologerService {

  constructor(
    private restService: RestService
  ) { }


  getAstrologers(): Observable<any>{
    return this.restService.create(ResturlService.astrologerList, null);
  }

  getAstrologerProfile(data): Observable<any> {
    return this.restService.create(ResturlService.astrologerDetail+'/'+data, null)
  }

  acceptRejectApp(data): Observable<any> {
    return this.restService.create(ResturlService.appectRejectAppltn, data);
  }
}
