import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit{
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  
  profileForm:FormGroup = new FormGroup({});
  
/*
new FormGroup({ is the equivalent to this.fb.group
  new FormControl is equivalente to an array 
*/

  initializeForm(){
    this.profileForm = this.fb.group({
      username: ['',[Validators.required, Validators.maxLength(25), Validators.minLength(4), Validators.pattern('^[A-Za-z0-9]+$')] ],
      email: ['',Validators.required],
      bio: ['',Validators.required],
      profilepicture: [],
      interests: new FormArray([])
    });

  }
  
  get getInterests(){ 
    return this.profileForm.get('interests') as FormArray;
  } 
  
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { notMatching: true };
    };
  } 

  deleteInterest(index: number) {
  this.getInterests.removeAt(index);
  }
  addInterest() {
  this.getInterests.push(new FormControl(''));
  }

  submit(){
    console.log(this.profileForm.value);
  }
  
}
