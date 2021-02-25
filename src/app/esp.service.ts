import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './model/device';

@Injectable()
export class EspService {
    EspUrl = ['http://192.168.1.30'];

    constructor(private http: HttpClient) { }

    getModes(): Observable<string[]> {
        return this.http.get<string[]>(this.EspUrl + "/modes");
    }

    getDevices(index: number): Observable<Device[]> {
        return this.http.get<Device[]>(this.EspUrl[index] + '/devices');
    }

    setDevices(devices: Device[]) {
        return this.http.post(this.EspUrl + '/devices', devices);
    }
}
