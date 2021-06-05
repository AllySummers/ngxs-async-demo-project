import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ZooComponent } from './components/zoo/zoo.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'zoo',
    component: ZooComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
