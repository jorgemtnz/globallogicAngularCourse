import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ITaskModel } from './model/itask-model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit{

  task:string = '';

  tasks$: Observable<ITaskModel[]> = EMPTY;

  constructor(private service:TasksService) { 
  }
  
  ngOnInit(): void {
    this.tasks$ = this.service.getTasks();
  }

  addTask(){
    if(this.task == '') 
      this.task = 'task';
    this.service.addElement({title: this.task, status: 'pending', date: new Date()});   
    this.task = '';
  }

  deleteTask(i:number){
    this.service.deleteElement(i);
  }

  completeTask(i:number){
    this.service.completeTask(i);
  }

  unCompleteTask(i: number) {
    this.service.unCompleteTask(i);   
    }
}