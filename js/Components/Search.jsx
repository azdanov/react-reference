// @flow

import React from 'react';

import type { Show } from '../Types/Show';
import Header from './Header';

import ShowCard from './ShowCard';

type Props = {
  shows: Array<Show>,
};

type State = {
  searchTerm: string,
};

class Search extends React.Component<Props, State> {
  state = {
    searchTerm: '',
  };

  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  filterBySearchTerm = (show: Show) =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .includes(this.state.searchTerm.toUpperCase());

  createShowCard = (show: Show, index: number) => (
    <ShowCard id={index} key={show.imdbID} show={show} />
  );

  render() {
    return (
      <div className="search">
        <Header
          handleSearchTermChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.shows
            .filter(this.filterBySearchTerm)
            .map(this.createShowCard)}
        </div>
      </div>
    );
  }
}

export default Search;
