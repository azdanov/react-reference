// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import type { RouterHistory } from 'react-router-dom';

import { setSearchTerm, resetSearchTerm } from '../State/creators';

type Props = {
  searchTerm: string,
  handleChange: Function,
  handleClick: Function,
  history: RouterHistory,
};
type State = {};

class Landing extends React.Component<Props, State> {
  redirectToSearch = (event: SyntheticKeyboardEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>s-video</h1>
        <form onSubmit={this.redirectToSearch}>
          <input
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.props.handleChange}
          />
        </form>
        <Link to="/search" onClick={this.props.handleClick}>
          or Browse All
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleChange(event) {
    dispatch(setSearchTerm(event.currentTarget.value));
  },
  handleClick() {
    dispatch(resetSearchTerm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
