import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAnimal, RemoveAnimal, ZooState } from 'src/app/state/zoo.state';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent {

  animalControl = new FormControl('', Validators.required);
  @Select(ZooState.animals) animals$!: Observable<Array<string>>;

  constructor(
    private store: Store
  ) {}

  addAnimal() {
    console.log('Adding animal: ', this.animalControl.value)
    this.store.dispatch(new AddAnimal(this.animalControl.value))
  }

  removeAnimal(animal: string) {
    this.store.dispatch(new RemoveAnimal(animal))
  }

}
