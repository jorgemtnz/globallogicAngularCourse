import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  private list: string[] = [];
  public messages: Subject<string[]> = new Subject<string[]>//= //EMPTY;//of({});

  addElement(elemt:string){    
    this.list.push(elemt);
    this.messages.next(this.list);
  }
  deleteLastElement(elemt:string){    
    this.list.pop();
    this.messages.next(this.list);
  }
  getMessages():Observable<string[]>{
    console.log("get elements");
    return this.messages.asObservable();  
  }

}
