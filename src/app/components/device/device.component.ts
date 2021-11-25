import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';
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
  @Output() setAllDevices = new EventEmitter<Device>();

  maxSpeed: number = 6000;
  maxBrightness: number = 255;

  constructor() {
  }

  ngOnInit(): void {
  }

  invertSpeed(speed: number)
  {
    return this.maxSpeed - speed;
  }

  setMode(index: number): void {
    this.device.mode = index;
    this.settingsChanged();
  }

  setColor($event: ColorEvent): void {
    this.device.color = parseInt($event.color.hex.substring(1), 16);
    this.settingsChanged();
  }

  setBrightness(brightness: number): void {
    this.device.brightness = brightness;
    this.settingsChanged();
  }

  setSpeed(speed: number): void {
    this.device.speed = this.invertSpeed(speed);
    this.settingsChanged();
  }

  toggle(): void {
    this.device.isRunning = !this.device.isRunning;
    this.settingsChanged();
  }

  settingsChanged() {
    this.changeInDevices.emit();
  }

  setAll(settings: Device) {
    this.setAllDevices.emit(settings);
  }
}
