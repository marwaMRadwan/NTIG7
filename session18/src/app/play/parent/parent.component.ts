import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // @ViewChild(ChildComponent) child:any
  a:any = 3
 x :number = 15
  constructor() { 
  }
// ngAfterViewInit(){
//   this.a = this.child.a
// }
  ngOnInit(): void {
  }
test(){
  this.x = this.x*2
}
}
