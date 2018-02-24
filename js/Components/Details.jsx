// @flow

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getApiDetails } from '../State/creators';

import type { Show } from '../Types/Show';
import Header from './Header';
import Spinner from './Spinner';

type Props = {
  show: Show,
  rating: string,
  getApiData: Function,
};

type State = {};

class Details extends React.Component<Props, State> {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getApiData();
    }
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let rating;
    if (this.props.rating) {
      rating = <h3>{this.props.rating}</h3>;
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

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID]
    ? state.apiData[ownProps.show.imdbID]
    : { rating: '' };
  return {
    rating: apiData.rating,
  };
};
const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
