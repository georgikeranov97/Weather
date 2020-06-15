import { ObservationsListComponent } from './observations-list/observations-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateObservationComponent } from './create-observation/create-observation.component';

const routes: Routes = [
  { path: '', component: ObservationsListComponent },
  { path: ':id', component: CreateObservationComponent },
  { path: 'create', component: CreateObservationComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationsRoutingModule { }
