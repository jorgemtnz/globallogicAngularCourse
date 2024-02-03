import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    username: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.minLength(4), Validators.pattern("^[a-zA-Z0-9]$")] ),
    email: new FormControl('',Validators.required),
    bio: new FormControl('',Validators.required),
    interests: new FormControl(),
    profilepicture: new FormControl()
  });
}

updateProfile(){
console.log(this.profileForm?.value);
}

cancel(){}

}
