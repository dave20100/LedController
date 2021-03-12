import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceComponent } from './components/device/device.component';
import { RoomComponent } from './components/room/room.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ColorCircleModule } from 'ngx-color/circle';
import { InfoComponent } from './components/info/info.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    RoomComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ColorCircleModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
