import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class CountingInterceptor implements HttpInterceptor {

  constructor(private pokemonService:PokemonService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pokemonService.countingRequest();
    return next.handle(request);
  }
}
