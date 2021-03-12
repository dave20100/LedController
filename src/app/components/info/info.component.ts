import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { InfoService } from 'src/app/info.service';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info: Info;
  sub: Subscription;

  constructor(private infoService: InfoService) { 
    this.checkInfo();
    this.sub = interval(10000).subscribe(() => this.checkInfo())
  }

  ngOnInit(): void {
  }

  checkInfo(): void {
    this.infoService.getInfo().subscribe(info => this.info = info)
  }
}
