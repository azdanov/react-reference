// @flow

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

import type { Show } from '../Types/Show';
import Header from './Header';
import Spinner from './Spinner';

type Props = {
  show: Show,
};

type State = {
  apiData: {},
};

class Details extends React.Component<Props, State> {
  state = {
    apiData: { imdbRating: '' },
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then((response: { data: { rating: string } }) => {
        this.setState({ apiData: response.data });
      });
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let rating;
    if (this.state.apiData && typeof this.state.apiData.rating === 'string') {
      rating = <h3>{this.state.apiData.rating}</h3>;
    } else {
      rating = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            title={`Video trailer for ${title}`}
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;
