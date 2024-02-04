import{AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const interestNotMustBeEqual:ValidatorFn = (group:AbstractControl) : ValidationErrors | null => {
	const interest = group.get('name') as FormControl<string>;
	//const array = .... as FormArray; 
	
	//return condition ? null : {interestNotMustBeEqual: true}
    return null;
}