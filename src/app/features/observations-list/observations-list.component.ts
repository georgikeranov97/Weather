import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../observation.service';
import { Router } from '@angular/router';
import { Observation } from '../observation/observations.model';
import { Store, select } from '@ngrx/store';
import { State, selectAllObservations, selectByName } from '../store/observations.selector';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.css']
})
export class ObservationsListComponent implements OnInit {
  public observations: Observation[];
  public allObservations: Observation[];

  constructor(
    private router: Router,
    private observationService: ObservationService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.observationService.getObservations();
    console.log(this.observationService.getObservations());
    this.showAllLocations();
  }

  public showAllLocations() {
    this.store.pipe(select(selectAllObservations)).subscribe(
      observations => this.allObservations = observations && (this.observations = observations)
    );
  }

  public filterByLocation(location: string) {
    this.store.pipe(select(selectByName, { location })).subscribe(
      observations => this.observations = observations
    );
  }

  public addObservation(observation) {
    console.log(observation);
    this.router.navigateByUrl('/create');
  }

  public updateObservation(id: number) {
    console.log('You pressed ', { id });
  }

  public deleteObservation(id: number) {
    console.log('You would like to delete observation: ', { id });
  }

}
