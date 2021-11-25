import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './model/device';

@Injectable()
export class EspService {
    EspUrl = ['http://192.168.1.30', 'http://192.168.1.31'];

    constructor(private http: HttpClient) { }

    getDevices(url: string): Observable<Device[]> {
        return this.http.get<Device[]>(url + '/devices');
    }

    setDevice(url: string, devices: Device) {
        return this.http.post(url + '/devices', devices)
    }
}
