import { ModesService } from './../../modes.service';
import { Component } from '@angular/core';
import { EspService } from 'src/app/esp.service';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [EspService]
})
export class RoomComponent {
  modes: string[];
  devices = new Map<Device, string>();

  constructor(private espService: EspService, private modesService: ModesService) {
    this.modes = this.modesService.getModes();

    this.espService.EspUrl.forEach(url => {
      this.espService.getDevices(url).subscribe(response =>{
        response.forEach(device => {
          this.devices.set(device, url);
        })
      })
    });
  }

  setDevices(device: Device): void {
      this.espService.setDevice(this.devices.get(device), device).subscribe();
  }

  setAllDevices(settings: Device): void {
    this.devices.forEach((url, device) => {
      device.brightness = settings.brightness;
      device.color = settings.color;
      device.isRunning = settings.isRunning;
      device.mode = settings.mode;
      device.speed = settings.speed;
      this.espService.setDevice(url, device).subscribe();
    })
  }
}
