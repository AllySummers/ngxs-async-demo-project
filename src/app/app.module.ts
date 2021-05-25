import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsAsyncStoragePluginModule, AsyncEngineOption } from '../../../../../Documents/web/ngxs-store/@ngxs/async-storage-plugin';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonState } from './state/pokemon.state';
import { ZooState } from './state/zoo.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
          storage: AsyncEngineOption.LocalStorage
        }
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
