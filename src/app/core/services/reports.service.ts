import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Report } from 'src/app/model/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData() {
      return this.http.get<Report[]>(this.apiUrl);
  }
}
