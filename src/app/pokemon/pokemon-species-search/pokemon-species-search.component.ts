import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-species-search',
  templateUrl: './pokemon-species-search.component.html',
  styleUrls: ['./pokemon-species-search.component.css']
})
export class PokemonSpeciesSearchComponent {
constructor(private service:PokemonService){}

idSpecie:string="";

  searchPokemonSpecie() {
    this.service.getPokemonsSpecie()
      .subscribe(d => console.log(d)); 
  }


}
