import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "../../../../../../Documents/web/ngxs-store/node_modules/@angular/core/core";

export class AddPokemon {
  static readonly type = '[Pokemon] Add Animal';
  constructor(public payload: string) { }
}

export class RemovePokemon {
  static readonly type = '[Pokemon] Add Animal';
  constructor(public payload: string) { }
}

export class PlayerDied {
  static readonly type = '[Pokemon] Player Died';
}

export class AddScore {
  static readonly type = '[Pokemon] Add Score';
  constructor(public payload: number) {}
}

export class SubtractScore {
  static readonly type = '[Pokemon] Subtract Score';
  constructor(public payload: number) {}
}

export interface PokemonStateModel {
  pokemon: Array<string>,
  score: number,
  deaths: number
}

@State<PokemonStateModel>({
  name: 'zoo',
  defaults: {
    pokemon: [],
    score: 0,
    deaths: 0
  }
})
@Injectable()
export class PokemonState {

  @Action(AddPokemon)
  addPokemon({ patchState, getState }: StateContext<PokemonStateModel>, action: AddPokemon) {
    const pokemon = getState().pokemon;
    patchState({
      pokemon: pokemon.concat(action.payload)
    })
  }

  @Action(RemovePokemon)
  removePokemon({ patchState, getState }: StateContext<PokemonStateModel>, action: RemovePokemon) {
    const pokemon = getState().pokemon;
    patchState({
      pokemon: pokemon.filter(poke => poke !== action.payload)
    })
  }

  @Action(PlayerDied)
  playerDied({ patchState, getState }: StateContext<PokemonStateModel>) {
    const deaths = getState().deaths;
    patchState({
      deaths: deaths + 1
    })
  }

  @Action(AddScore)
  addScore({ patchState, getState }: StateContext<PokemonStateModel>, action: AddScore) {
    const score = getState().score;
    patchState({
      score: score + action.payload
    })
  }

  @Action(SubtractScore)
  subtractScore({ patchState, getState }: StateContext<PokemonStateModel>, action: SubtractScore) {
    const score = getState().score;
    patchState({
      score: score - action.payload
    })
  }
}