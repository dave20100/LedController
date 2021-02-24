import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device;
  @Input() modes: string[];
  @Output() changeInDevices = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  setMode(index: number): void {
    this.device.mode = index;
    this.settingsChanged();
  }

  setBrightness(brightness: number): void {
    if(brightness < 0) {
      brightness = 0
    }
    if(brightness > 255) {
      brightness = 255
    }
    this.device.brightness = brightness;
    this.settingsChanged();
  }

  setSpeed(speed: number): void {
    if(speed < 10) {
      speed = 10
    }
    if(speed > 65535) {
      speed = 65535
    }
    this.device.speed = speed;
    this.settingsChanged();
  }

  turnOn(): void {
    this.device.isRunning = true;
    this.settingsChanged();
  }

  turnOff(): void {
    this.device.isRunning = false;
    this.settingsChanged();
  }

  settingsChanged() {
    this.changeInDevices.emit();
  }
}
