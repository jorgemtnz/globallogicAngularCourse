import { Component, OnDestroy } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-pokemon-species-search',
  templateUrl: './pokemon-species-search.component.html',
  styleUrls: ['./pokemon-species-search.component.css']
})
export class PokemonSpeciesSearchComponent implements OnDestroy{
constructor(private service:PokemonService, private loadingService:LoadingService){}

idSpecie:string="";
subscription:any;

searchPokemonSpecie() {
  console.log("encender spinner");
  this.loadingService.loadingOn();
  setTimeout(()=>{
    console.log("time delay")
    this.subscription = this.service.getPokemonsSpecie()
    .subscribe(d => console.log(d)); 
    }, 2500);
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
