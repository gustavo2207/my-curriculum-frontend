import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Experiance } from './experiance';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ExperianceService {
  constructor(protected httpClient: HttpClient) {}

  getExperiance(): Observable<Experiance[]> {
    return this.httpClient.get<Experiance[]>(`${API}/experiance`);
  }
}
