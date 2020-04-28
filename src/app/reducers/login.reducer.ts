import { Action, createReducer, on } from '@ngrx/store';
import { LogInActionTypes, LogInActions } from '../actions/log-in.actions';


export const loginFeatureKey = 'login';

export interface loginState {
logInValidated : boolean;
loggedInUser : String;
}

export const initialState: loginState = {
logInValidated : null,
loggedInUser : null
};


export function loginReducer(state = initialState, action: LogInActions): loginState {
  switch (action.type) {
    case LogInActionTypes.AddLogIns:
      {
        console.log('Username received from login Screen: '+ action.userName);
        return {...state, logInValidated : action.valid, loggedInUser: action.userName };
      }
    case LogInActionTypes.RemoveLogIns:
      {
        return {...state, logInValidated : null, loggedInUser: null };
      }
    default:
      return state;
  }
}