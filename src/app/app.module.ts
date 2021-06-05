import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsAsyncStoragePluginModule, AsyncEngineOption } from 'as-ngxs-async-plugin';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonState } from './state/pokemon.state';
import { ZooState } from './state/zoo.state';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([PokemonState, ZooState], {
      developmentMode: true
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsAsyncStoragePluginModule.forRoot({
      storages: [
        {
          keys: [PokemonState],
          storage: AsyncEngineOption.IndexedDB
        },
        {
          keys: [ZooState],
          storage: AsyncEngineOption.SessionStorage
        }
      ]
    }),
    // NgxsStoragePluginModule.forRoot({ // Using the regular storage plugin loads from local storage, however mine does not
    //   key: [ZooState, PokemonState],
    //   storage: StorageOption.LocalStorage
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
