// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  handleSearchTermChange?: Function,
  searchTerm?: string,
};

const Header = (props: Props) => {
  let controls;
  if (props.handleSearchTermChange) {
    controls = (
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
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
  handleSearchTermChange: function noop() {},
  searchTerm: '',
};

export default Header;
