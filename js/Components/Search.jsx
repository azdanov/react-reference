// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Show } from '../Types/Show';

import ShowCard from './ShowCard';
import Header from './Header';

function filterBySearchTerm(searchTerm) {
  return show =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .indexOf(searchTerm.toUpperCase()) >= 0;
}

function createShowCard(show, index) {
  return <ShowCard show={show} key={show.imdbID} id={index} />;
}

export const Search = (props: { searchTerm: string, shows: Array<Show> }) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows.filter(filterBySearchTerm(props.searchTerm)).map(createShowCard)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});
// $FlowFixMe
export default connect(mapStateToProps)(Search);
