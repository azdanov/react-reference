// @flow

import PropTypes from 'prop-types';
import React from 'react';
import type { Location } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  background-color: rgba(220, 220, 220, 0.7);
  border-radius: 5px;
  box-shadow: 0 5px 5px -3px #555;
  padding: 15px 30px;
`;

const StyledLink = styled(Link)`
  background-color: #333;
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px #666;
  color: #fafafa;
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 15px;
  padding: 10px 40px;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #666;
    box-shadow: 0 5px 5px -3px #888;
  }

  &:active {
    background-color: #fafafa;
    border-color: #333;
    box-shadow: 0 5px 5px -3px #ccc;
    color: #333;
  }
`;

type Props = { location: Location };

const NoMatch = ({ location }: Props) => (
  <Wrapper className="error">
    <Header />
    <h1>404 - Page Not Found</h1>
    <p>
      No match for <code>{location.pathname}</code>
    </p>
    <StyledLink to="/">go Home</StyledLink>
  </Wrapper>
);

export default NoMatch;

NoMatch.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};
