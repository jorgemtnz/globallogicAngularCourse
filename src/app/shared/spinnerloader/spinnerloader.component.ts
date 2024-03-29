import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-spinnerloader',
  template: `           
      <div class="spinner-container" *ngIf= isLoading >
        <div class="loader"></div>
      </div>  
  `, 
  styles:[ `
  .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.spinner-container {
position:fixed;
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
top:0;
left:0;
background: rgba(0,0,0,0.32);
z-index:2000;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  `
  ]
})
export class SpinnerloaderComponent implements OnInit, OnDestroy{

  constructor(public loadingService:LoadingService){  

  }
  
  isLoading = false;
  subscription: any;
  
  ngOnInit(){
    this.subscription = this.loadingService.loading$.subscribe( (r: boolean) => this.setValue(r));
    console.log("spinner subscrito");
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

setValue(value: boolean){
  console.log(value);
  this.isLoading = value;
}

}
