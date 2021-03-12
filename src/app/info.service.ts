import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from './model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  Url: string = "http://192.168.1.32";

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<Info>(this.Url + "/info");
  }
}
