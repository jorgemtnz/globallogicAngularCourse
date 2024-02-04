import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { EmailService } from "../services/email.service";

export function checkEmailAvailability(email:EmailService): AsyncValidatorFn {
  return (control:AbstractControl):Observable<ValidationErrors | null> => { 
    return email.isEmailTaken(control.value).pipe(
      map((result:boolean) => (result ? { checkEmailAvailability: true } : null))
    );
  }
}


