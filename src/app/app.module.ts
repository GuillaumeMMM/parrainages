import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveJsonComponent } from './components/save-json/save-json.component';
import { FranceMapComponent } from './components/france-map/france-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveJsonComponent,
    FranceMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
