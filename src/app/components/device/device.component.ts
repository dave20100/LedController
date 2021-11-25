import { Device } from './../../model/device';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {
  @Input() device: Device;
  @Input() modes: string[];

  @Output() changeInDevices = new EventEmitter();
  @Output() setAllDevices = new EventEmitter<Device>();

  maxSpeed: number = 6000;
  maxBrightness: number = 255;

  setMode(index: number): void {
    this.device.mode = index;
    this.settingsChanged(this.device);
  }

  setColor($event: ColorEvent): void {
    this.device.color = parseInt($event.color.hex.substring(1), 16);
    this.settingsChanged(this.device);
  }

  setBrightness(brightness: number): void {
    this.device.brightness = brightness;
    this.settingsChanged(this.device);
  }

  setSpeed(speed: number): void {
    this.device.speed = this.invertSpeed(speed);
    this.settingsChanged(this.device);
  }

  toggle(): void {
    this.device.isRunning = !this.device.isRunning;
    this.settingsChanged(this.device);
  }

  settingsChanged(device: Device) {
    this.changeInDevices.emit(device);
  }

  setAll(settings: Device) {
    this.setAllDevices.emit(settings);
  }

  invertSpeed(speed: number)
  {
    return this.maxSpeed - speed;
  }
}
