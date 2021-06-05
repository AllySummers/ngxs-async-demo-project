import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

export class AddAnimal {
  static readonly type = '[Zoo] Add Animal';
  constructor(public payload: string) {}
}

export class RemoveAnimal {
  static readonly type = '[Zoo] Remove Animal';
  constructor(public payload: string) { }
}

export interface ZooStateModel {
  animals: Array<string>
}

@State<ZooStateModel>({
  name: 'zoo',
  defaults: {
    animals: []
  }
})
@Injectable()
export class ZooState {

  @Action(AddAnimal)
  addAnimal({ patchState, getState }: StateContext<ZooStateModel>, action: AddAnimal) {
    const animals = getState().animals;
    patchState({
      animals: animals.concat(action.payload)
    })
  }

  @Action(RemoveAnimal)
  removeAnimal({ patchState, getState }: StateContext<ZooStateModel>, action: RemoveAnimal) {
    const animals = getState().animals;
    patchState({
      animals: animals.filter(animal => animal !== action.payload)
    })
  }

  @Selector()
  static animals(state: ZooStateModel) {
    return state.animals
  }

  @Selector()
  static state(state: ZooStateModel) {
    return state
  }
}