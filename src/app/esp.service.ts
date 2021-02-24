import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './model/device';
import { map } from 'rxjs/operators';

@Injectable()
export class EspService {
    EspUrl = 'http://192.168.1.30';

    constructor(private http: HttpClient) { }

    getModes(): Observable<string[]> {
        return this.http.get<string[]>(this.EspUrl + "/modes");
    }

    getDevices(): Observable<Device[]> {
        return this.http.get<Device[]>(this.EspUrl + '/devices');
    }

    setDevices(devices: Device[]) {
        return this.http.post(this.EspUrl + '/devices', devices);
    }
}
