import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { counterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
