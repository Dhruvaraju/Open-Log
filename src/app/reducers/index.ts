import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loginState, loginReducer } from './login.reducer';

export interface State {
logins : loginState
}

export const reducers: ActionReducerMap<State> = {
logins : loginReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
