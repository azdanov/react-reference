// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSearchTerm } from '../State/creators';

type Props = {
  showSearch?: boolean,
  handleChange: Function,
  searchTerm: string,
};

const Header = (props: Props) => {
  let controls;
  if (props.showSearch) {
    controls = (
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
    );
  } else {
    controls = (
      <h2 className="header-back">
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">s-video</Link>
      </h1>
      {controls}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleChange(event) {
    dispatch(setSearchTerm(event.currentTarget.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
