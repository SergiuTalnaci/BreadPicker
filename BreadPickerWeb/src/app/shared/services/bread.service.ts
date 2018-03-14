import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class BreadService {

  constructor(private http:HttpClient) { }

  getFavoriteBreads(): Observable<string[]> {
    return this.http.get<string[]>(environment.url + "/api/Bread/GetFavoriteBreads", { withCredentials: true });
  }
}
