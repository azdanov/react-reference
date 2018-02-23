// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import type { Match } from 'react-router-dom';
import type { Show } from '../Types/Show';

import preload from '../../data.json';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import NoMatch from './NoMatch';

function selectShowById(props: { match: Match }) {
  return preload.shows.find(
    (show: Show) => props.match.params.id === show.imdbID,
  );
}

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={props => (
            <Details show={selectShowById(props)} {...props} />
          )}
        />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default hot(module)(App);
