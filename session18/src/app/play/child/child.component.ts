import { Component, Input, OnInit } from '@angular/core';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
x:number=10
a: string ="test"

@Input() c:number = 0
  constructor(public _play:PlayService) { console.log("con")}

  ngOnInit(): void {console.log("on init")}
ngOnChanges(){console.log("changes")}
ngDoCheck(){console.log("do check")}
ngAfterContentInit(){console.log("after con init")}
ngAfterContentChecked(){console.log("after con check")}
ngAfterViewInit(){console.log("after view init")}
ngAfterViewChecked(){console.log("after view checked")}
ngOnDestroy(){console.log("destroy")}
}
