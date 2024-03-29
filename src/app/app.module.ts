import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerloaderComponent } from './shared/spinnerloader/spinnerloader.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';
import { CountingInterceptor } from './services/counting.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    SpinnerloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, BrowserAnimationsModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi:true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass:CountingInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
