import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  getData(query: number): Observable<any> {
    const urlApi = `https://reqres.in/api/colors?page=${query}`;
    return this.Http.get<any>(urlApi);
  }
}
