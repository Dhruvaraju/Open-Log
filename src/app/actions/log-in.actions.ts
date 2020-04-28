import { Action } from '@ngrx/store';

export enum LogInActionTypes {
  AddLogIns = '[LogIn] Add LogIns',
  RemoveLogIns = '[LogIn] Remove LogIns',
}

export class AddLogIns implements Action {
  readonly type = LogInActionTypes.AddLogIns;
  constructor(public valid: boolean, public userName: String){}
}

export class RemoveLogIns implements Action {
  readonly type = LogInActionTypes.RemoveLogIns;
  constructor(){}
}

export type LogInActions = AddLogIns | RemoveLogIns;