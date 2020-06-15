import { Observation } from './../observation/observations.model';
import { createReducer, on, Action } from '@ngrx/store';
import { getAllObservationsAttempt, getAllObservationsSuccess, getAllObservationsFailure, createObservationAttempt, createObservationSuccess, createObservationFailure, updateObservationAttempt, updateObservationSuccess, updateObservationFailure, deleteObservationAttempt, deleteObservationSuccess, deleteObservationFailure } from './observations.actions';


export const featureKey = 'observations';

export interface State {
  observationsList: Observation[];
  isLoading: boolean;
}

export const initialState: State = loadState();

function loadState(): State {
  const persistedState = JSON.parse(localStorage.getItem(featureKey));
  const defaultState: State = {
    observationsList: [],
    isLoading: false,
  };

  return persistedState || defaultState;
}


const observationsReducer = createReducer(
  initialState,
  on(getAllObservationsAttempt, state => ({ ...state, isLoading: true })),
  on(getAllObservationsSuccess, (state, { observationsList }) => ({
    ...state,
    isLoading: false,
    observationsList
  })),
  on(getAllObservationsFailure, state => ({ ...state, isLoading: false })),
  on(createObservationAttempt, state => ({ ...state, isLoading: true })),
  on(createObservationSuccess, (state, { observation }) => ({
    ...state,
    isLoading: false,
    observationsList: [...state.observationsList, observation]
  })),
  on(createObservationFailure, state => ({ ...state, isLoading: false })),
  on(updateObservationAttempt, state => ({ ...state, isLoading: true })),
  on(updateObservationSuccess, (state, { observation }) => ({
    ...state,
    isLoading: false,
    observationsList: [...state.observationsList.filter(obs => obs.id !== observation.id)]
  })),
  on(updateObservationFailure, state => ({ ...state, isLoading: false })),
  on(deleteObservationAttempt, state => ({ ...state, isLoading: true })),
  on(deleteObservationSuccess, (state, { observationId }) => ({
    ...state,
    isLoading: false,
    observationsList: [...state.observationsList.filter(obs => obs.id !== observationId)]
  })),
  on(deleteObservationFailure, state => ({ ...state, isLoading: false })),
);


export function reducer(state: State | undefined, action: Action) {
  return observationsReducer(state, action);
}
