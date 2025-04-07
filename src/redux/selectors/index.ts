
import { AppState, RideState } from '../reducers';

export const selectStatus = (state: AppState): string => state.app.status;
export const selectDetails = (state: AppState): RideState => state.app;
export const selectDescription = (state: AppState): string => state.app.description;
