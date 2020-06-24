import { SharedModule } from './../shared/shared.module';
import { ObservationsRoutingModule } from './observations-routing.module';
import { RouterModule } from '@angular/router';
import { ObservationComponent } from './observation/observation.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateObservationComponent } from './create-observation/create-observation.component';
import { StoreModule } from '@ngrx/store';
import * as fromObservations from './store/observations.reducer';
import { HttpClientModule } from '@angular/common/http';
import { ObservationsListComponent } from './observations-list/observations-list.component';
import { UpdateObservationComponent } from './update-observation/update-observation.component';


@NgModule({
  declarations: [ObservationComponent, CreateObservationComponent, ObservationsListComponent, UpdateObservationComponent],
  imports: [
    SharedModule,
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ObservationsRoutingModule,
    StoreModule.forFeature(fromObservations.featureKey, fromObservations.reducer),
    // StoreModule.forRoot({ observations: fromObservations.reducer }),
    // StoreDevtoolsModule.instrument({
    //   name: 'Weather'
    // }),
  ],
  exports: [ObservationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule { }
