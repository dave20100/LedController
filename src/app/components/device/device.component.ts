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
  @Output() setAllDevices = new EventEmitter<Device>();

  color: string;

  constructor() { 
  }
  
  ngOnInit(): void {
    this.color = '#' + this.device.color.toString(16);
  }

  setMode(index: number): void {
    this.device.mode = index;
    this.settingsChanged();
  }

  setColor(): void {
    this.device.color = parseInt(this.color.substring(1), 16);
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
