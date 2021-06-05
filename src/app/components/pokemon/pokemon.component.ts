import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddPokemon, AddScore, PlayerDied, PokemonState, RemovePokemon, SubtractScore } from 'src/app/state/pokemon.state';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Select(PokemonState.pokemon) pokemon$!: Observable<Array<string>>;
  @Select(PokemonState.score) score$!: Observable<number>;
  @Select(PokemonState.deaths) deaths$!: Observable<number>;

  pokemonControl = new FormControl('', Validators.required);
  scoreControl = new FormControl(0, Validators.required);

  constructor(
    private store: Store
  ) {}

  playerDied() {
    this.store.dispatch(new PlayerDied())
  }

  addScore() {
    this.store.dispatch(new AddScore(Number(this.scoreControl.value)))
  }

  subtractScore() {
    this.store.dispatch(new SubtractScore(Number(this.scoreControl.value)))
  }

  addPokemon() {
    this.store.dispatch(new AddPokemon(this.pokemonControl.value))
  }

  removePokemon(pokemon: string) {
    this.store.dispatch(new RemovePokemon(pokemon))
  }

}
