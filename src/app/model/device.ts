export class Device {
    name: string;
    color: number;
    speed: number;
    brightness: number;
    isRunning: boolean;
    mode: number;


    cloneSettings(device: Device) {
        device.color = this.color;
        device.mode = this.mode;
        device.speed = this.speed;
        device.isRunning = this.isRunning;
        device.brightness = this.brightness;  
    }
}