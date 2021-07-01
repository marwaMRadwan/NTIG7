import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild(ChildComponent, {static:true}) child:ChildComponent
data :string = ""
x : number= 5
  constructor() { }

  ngOnInit(): void {
  }
// ngAfterViewChecked(){
//   this.data = this.child.data
// }
}
