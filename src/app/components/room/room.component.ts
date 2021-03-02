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
  devices: Device[] = [];

  constructor(private espService: EspService) { 
    this.espService.getModes().subscribe(response => this.modes = response);
    for (let index = 0; index < this.espService.EspUrl.length; index++) {
      this.espService.getDevices(index).subscribe(response => {
        response.forEach(device => {
          this.devices.push(device);
        });
      });
    }
  }

  setDevices(): void {
    for (let index = 0; index < this.espService.EspUrl.length; index++) {
      this.espService.setDevices(index, this.devices).subscribe();
    }
  }

  setAllDevices(settings: Device): void {
    this.devices.forEach(deviceSettings => {
      deviceSettings.color = settings.color;
      deviceSettings.mode = settings.mode;
      deviceSettings.speed = settings.speed;
      deviceSettings.isRunning = settings.isRunning;
      deviceSettings.brightness = settings.brightness;
    });
    for (let index = 0; index < this.espService.EspUrl.length; index++) {
      this.espService.setDevices(index, this.devices).subscribe();
    }
  }
}
