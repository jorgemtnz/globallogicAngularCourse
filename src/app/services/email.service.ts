import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  isEmailTaken(email: string): Observable<boolean> {
    let result =  email === 'jmartinez@linq.com' ? true : false;
    return of(result).pipe(delay(1000));
}

}
