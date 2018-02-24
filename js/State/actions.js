// @flow

import type { Show } from '../Types/Show';

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM';
export const ADD_API_DATA = 'ADD_API_DATA';

type SetSearchTermType = 'SET_SEARCH_TERM';
type ResetSearchTermType = 'RESET_SEARCH_TERM';
type AddApiDataType = 'ADD_API_DATA';
type Actions = SetSearchTermType | ResetSearchTermType | AddApiDataType;

type ActionType<A: Actions, P> = {
  +type: A,
  +payload: P,
};

export type Action =
  | ActionType<SetSearchTermType, string>
  | ActionType<AddApiDataType, Show>;
