import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit{
  
  ngOnInit(): void {
    this.initializeForm();
  }
  
  profileForm:FormGroup = new FormGroup({});
  
  initializeForm(){
    this.profileForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.maxLength(25), Validators.minLength(4), Validators.pattern('^[A-Za-z0-9]+$')] ),
      email: new FormControl('',Validators.required),
      bio: new FormControl('',Validators.required),
      interests: new FormControl(),
      profilepicture: new FormControl()
    });
  }
  
  updateProfile(){
    console.log(this.profileForm?.value);
  }
  
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { notMatching: true };
    };
  }
  
  cancel(){
    throw new Error('Method not implemented.');
  }

  deleteInterest() {
  throw new Error('Method not implemented.');
  }
  addInterest() {
  throw new Error('Method not implemented.');
  }
  
}
