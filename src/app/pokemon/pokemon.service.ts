import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { delay, filter, tap, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://pokeapi.co/api/v2/'

  getPokemonsSpecie(){
    return this.httpClient.get<any>(this.baseUrl + 'pokemon-species/wormadam');  
    }

}
