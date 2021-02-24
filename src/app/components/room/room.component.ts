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
  devices: Device[];

  constructor(private espService: EspService) { 
    this.espService.getModes().subscribe(response => this.modes = response);
    this.espService.getDevices().subscribe(response => this.devices = response);
  }

  setDevices(): void {
    this.espService.setDevices(this.devices).subscribe();
  }
}
