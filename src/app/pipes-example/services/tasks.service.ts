import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITaskModel } from '../model/itask-model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private list: ITaskModel[] = [ 
    {title: 'task 1', status: 'done', date: new Date('2020-01-01')},
    {title: 'task 2', status: 'pending', date: new Date('2020-01-02')}
  ];
 
  private tasksSubject = new BehaviorSubject<ITaskModel[]>(this.list); 

  //public tasks: Subject<ITaskModel[]> = new Subject<ITaskModel[]>;

  addElement(elemt:ITaskModel){    
    this.list.push(elemt);
    this.tasksSubject.next(this.list);
  }

  deleteElement(i:number){    
    this.list.splice(i,1);
    this.tasksSubject.next(this.list);
  }

  getTasks():Observable<ITaskModel[]>{
    return this.tasksSubject.asObservable();  
  }

  completeTask(i:number){
    this.list[i].status = 'done';
    this.tasksSubject.next(this.list);
  }

  unCompleteTask(i: number) {
    console.log('uncomplete');
    console.log(i);
    this.list[i].status = 'pending';
    console.log(this.list[i]);
    this.tasksSubject.next(this.list);
    console.log(this.tasksSubject);
    }

}
