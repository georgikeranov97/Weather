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


export const selectByName = createSelector(
  selectAllObservations,
  (state, props) => state.filter(item => item.location === props.location)
);
export interface State {
  [fromObservations.featureKey]: fromObservations.State;
}
