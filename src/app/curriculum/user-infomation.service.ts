import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class UserInfomationService {
  constructor(protected httpClient: HttpClient) {}

  getUserInformation(): Observable<User[]> {
    console.log(`${API}/user`);
    return this.httpClient.get<User[]>(`${API}/user`);
  }
}
