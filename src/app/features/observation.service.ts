import { Observation } from './observation/observations.model';
import {
  getAllObservationsAttempt,
  getAllObservationsSuccess,
  getAllObservationsFailure,
  createObservationAttempt,
  createObservationSuccess,
  createObservationFailure,
  updateObservationAttempt,
  updateObservationSuccess,
  updateObservationFailure,
  deleteObservationAttempt,
  deleteObservationSuccess,
  deleteObservationFailure
} from './store/observations.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { tap, catchError, first } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  private observationsUrl = 'http://localhost:3000/observations';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store
  ) { }

  public getObservations(): void {
    this.store.dispatch(getAllObservationsAttempt());
    this.httpClient.get<Observation[]>(this.observationsUrl).pipe(
      first(),
      tap(observationsList => {
        console.log(observationsList);
        if (observationsList) {
          this.store.dispatch(getAllObservationsSuccess({ observationsList }));
          return observationsList;
        } else {
          throw new Error('Error');
        }
      }),
      catchError(error => {
        this.store.dispatch(getAllObservationsFailure());
        return of(null);
      }),
    ).subscribe();
  }

  public createObservation(observation: Observation): Observable<Observation> {
    this.store.dispatch(createObservationAttempt());
    return this.httpClient.post<Observation>(this.observationsUrl, observation).pipe(
      tap((observation: Observation) => {
        if (observation) {
          this.store.dispatch(createObservationSuccess({ observation }));
          this.router.navigate(['']);
          this.getObservations();
        }
      }),
      catchError((err) => {
        this.store.dispatch(createObservationFailure());
        return of(null);
      }),
    );
  }

  public updateObservation(observationId: number, updatedObservation: Observation): Observable<Observation> {
    this.store.dispatch(updateObservationAttempt());
    const url = `${this.observationsUrl}/${observationId}`;
    return this.httpClient.put<Observation>(url, updatedObservation).pipe(
      tap(observation => {
        if (observation) {
          this.store.dispatch(updateObservationSuccess({ observation }));
          this.getObservations();
        } else {
          throw new Error('Error');
        }
      }),
      catchError((err) => {
        this.store.dispatch(updateObservationFailure());
        return of(null);
      })
    );
  }

  public deleteObservation(observationId: number) {
    this.store.dispatch(deleteObservationAttempt());
    const url = `${this.observationsUrl}/${observationId}`;
    return this.httpClient.delete<Observation>(url).pipe(
      tap(observation => {
        this.store.dispatch(deleteObservationSuccess({ observationId: observation.id }));
        this.getObservations();
      }),
      catchError((err) => {
        this.store.dispatch(deleteObservationFailure());
        return of(null);
      })
    );
  }
}
