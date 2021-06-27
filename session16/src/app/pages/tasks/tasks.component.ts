import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks :any = JSON.parse(localStorage.getItem('tasks') || '[]')
  task : any = { title: '', content:'' }
  constructor() { }

  ngOnInit(): void {
  }

  handelAdd(){
//    console.log(this.task)
    this.tasks.push(this.task)
    this.task = { title:'', content:'' }
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
