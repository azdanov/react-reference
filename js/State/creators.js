// @flow

import axios from 'axios';

import type { Show } from '../Types/Show';
import { ADD_API_DATA, RESET_SEARCH_TERM, SET_SEARCH_TERM } from './actions';

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function resetSearchTerm() {
  return { type: RESET_SEARCH_TERM, payload: '' };
}

export function addApiData(apiData: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getApiDetails(imdbId: string) {
  return (dispatch: Function) => {
    axios.get(`http://localhost:3000/${imdbId}`).then(response => {
      dispatch(addApiData(response.data));
    });
  };
}
