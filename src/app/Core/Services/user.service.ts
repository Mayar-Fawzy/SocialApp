import { environment } from './../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private readonly _HttpClient = inject(HttpClient);

   uploadProfilePhoto(data:object):Observable<any>{
        return this._HttpClient.put(`${environment.baseUrl}users/upload-photo`,data);
   }
}
