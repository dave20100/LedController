import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './model/device';

@Injectable()
export class EspService {
    EspUrl = ['http://192.168.1.30', 'http://192.168.1.31'];

    constructor(private http: HttpClient) { }

    getModes(): Observable<string[]> {
        return this.http.get<string[]>(this.EspUrl[0] + "/modes");
    }

    getDevices(index: number): Observable<Device[]> {
        return this.http.get<Device[]>(this.EspUrl[index] + '/devices');
    }

    setDevices(index: number, devices: Device[]) {
        return this.http.post(this.EspUrl[index] + '/devices', devices)
    }
}
