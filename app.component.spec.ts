import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABip6isp2R1LJ1rXInK7vjh8Jdvh1fIQQ'
    })],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
