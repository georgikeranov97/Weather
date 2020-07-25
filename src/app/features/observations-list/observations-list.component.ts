import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../observation.service';
import { Router } from '@angular/router';
import { Observation } from '../observation/observations.model';
import { Store, select } from '@ngrx/store';
import { State, selectAllObservations, selectByName } from '../store/observations.selector';
import { CONSTANTS } from '../constants';

const ASCENDING = CONSTANTS.LABELS.ASCENDING;
const DESCENDING = CONSTANTS.LABELS.DESCENDING;

@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.scss']
})
export class ObservationsListComponent implements OnInit {
  public observations: Observation[];
  public allObservations: Observation[];

  public ascLabel = ASCENDING;
  public descLabel = DESCENDING;

  constructor(
    private router: Router,
    private observationService: ObservationService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.observationService.getObservations();
    console.log(this.observationService.getObservations());
    this.showAllLocations();
    console.log(this.allObservations);
  }

  public showAllLocations(): void {
    this.store.pipe(select(selectAllObservations)).subscribe(
      observations => this.allObservations = observations && (this.observations = observations)
    );
  }

  public filterByLocation(location: string): void {
    this.store.pipe(select(selectByName, { location })).subscribe(
      observations => this.observations = observations
    );
    this.sortByDateInDescendingOrder();
    console.log(this.observations);
  }

  public sortTemperatureInAscendingOrder(): Observation[] {
    return this.observations = this.observations.slice().sort((obs1, obs2) => obs1.temperature - obs2.temperature);
  }

  public sortTemperatureInDescendingOrder(): Observation[] {
    return this.observations = this.observations.slice().sort((obs1, obs2) => obs2.temperature - obs1.temperature);
  }

  public sortHumidityInAscendingOrder(): Observation[] {
    return this.observations = this.observations.slice().sort((obs1, obs2) => obs1.humidity - obs2.humidity);
  }

  public sortHumidityInDescendingOrder(): Observation[] {
    return this.observations = this.observations.slice().sort((obs1, obs2) => obs2.humidity - obs1.humidity);
  }

  public sortByDate(sortType: string): Observation[] {
    return this.observations = this.observations.slice().sort((obs1, obs2) => {
      const firstDate = obs1.date.split('/').join();
      const secondDate = obs2.date.split('/').join();

      if (sortType === this.ascLabel) {
        return firstDate < secondDate ? -1 : (firstDate > secondDate ? 1 : 0);
      }
      if (sortType === this.descLabel) {
        return firstDate > secondDate ? -1 : (firstDate < secondDate ? 1 : 0);
      }
    });
  }

  public sortByDateInAscendingOrder(): Observation[] {
    return this.observations.sort((obs1, obs2) => {
      const firstDate = obs1.date.split('/').join();
      const secondDate = obs2.date.split('/').join();

      return firstDate < secondDate ? -1 : (firstDate > secondDate ? 1 : 0);
    });
  }

  public sortByDateInDescendingOrder(): Observation[] {
    return this.observations.sort((obs1, obs2) => {
      const firstDate = obs1.date.split('/').join();
      const secondDate = obs2.date.split('/').join();

      return firstDate > secondDate ? -1 : (firstDate < secondDate ? 1 : 0);
    });
  }

  public addObservation(observation): void {
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
