import { FeaturesModule } from './features/features.module';
import { ObservationsListComponent } from './features/observations-list/observations-list.component';
import { CreateObservationComponent } from './features/create-observation/create-observation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'observations', pathMatch: 'full' },
  { path: 'observations',
    loadChildren: () => import('./features/features.module').then(
      module => module.FeaturesModule
    )
  },
  // { path: 'create', component: CreateObservationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
