import { FeaturesModule } from './features/features.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromObservations from '../app/features/store/observations.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({ observations: fromObservations.reducer }),
    StoreDevtoolsModule.instrument({
      name: 'Weather'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
