import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerloaderComponent } from './shared/spinnerloader/spinnerloader.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';
import { CountingInterceptor } from './services/counting.interceptor';

@NgModule({
  declarations: [
    AppComponent,    
    SpinnerloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule
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
