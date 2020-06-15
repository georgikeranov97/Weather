import { Observation } from './../observation/observations.model';
import { createAction, props } from '@ngrx/store';


export const getAllObservationsAttempt = createAction('[Observations] GetList Attempt');
export const getAllObservationsSuccess = createAction(
  '[Observations] GetList Success',
  props<{ observationsList: Observation[] }>()
);
export const getAllObservationsFailure = createAction('[Observations] GetList Failure');

export const createObservationAttempt = createAction('[Observations] CreateObservation Attempt');
export const createObservationSuccess = createAction(
  '[Observation] CreateObservation Success',
  props<{ observation: Observation }>()
);
export const createObservationFailure = createAction('[Observations] CreateObservation Failure');

export const updateObservationAttempt = createAction('[Observations] UpdateObservation Attempt');
export const updateObservationSuccess = createAction(
  '[Observation] UpdateObservation Success',
  props<{ observation: Observation }>()
);
export const updateObservationFailure = createAction('[Observation] UpdateObservation Failure');

export const deleteObservationAttempt = createAction('[Observation] DeleteObservation Attempt');
export const deleteObservationSuccess = createAction(
  '[Observation] DeleteObservation Success',
  props<{ observationId: number }>()
);
export const deleteObservationFailure = createAction('[Observation] DeleteObservation Failure');
