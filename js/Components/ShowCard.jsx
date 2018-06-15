// @flow

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import type { Show } from '../Types/Show';

type Props = {
  show: Show,
};

type State = {};

class ShowCard extends React.Component<Props, State> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { title, description, year, poster, imdbID } = this.props.show;

    return (
      <Link to={`/details/${imdbID}`}>
        <div className="show-card">
          <img alt={`${title} Show Poster`} src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    );
  }
}
export default ShowCard;

ShowCard.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};
