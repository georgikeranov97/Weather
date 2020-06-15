import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromObservations from './observations.reducer';

export const selectFeature = createFeatureSelector<
  State,
  fromObservations.State
>(fromObservations.featureKey);

export const selectAllObservations = createSelector(
  selectFeature,
  state => state.observationsList
);

export interface State {
  [fromObservations.featureKey]: fromObservations.State;
}
