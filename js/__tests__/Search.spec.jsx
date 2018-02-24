// @flow

import { render, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import preload from '../../data.json';
import { Search } from '../Components/Search';
import ShowCard from '../Components/ShowCard';
import store from '../State/store';

const { shows } = preload;

describe('Search', () => {
  test('it should render correctly', () => {
    const component = shallow(<Search shows={shows} searchTerm="" />);

    expect(component).toMatchSnapshot();
  });

  test('it should render correct amount of shows', () => {
    const component = shallow(<Search shows={shows} searchTerm="" />);

    expect(component.find(ShowCard)).toHaveLength(shows.length);
  });

  test('it should render correct amount of shows based on search', () => {
    const searchWord = 'house';
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} searchTerm={searchWord} />
        </MemoryRouter>
      </Provider>,
    );

    const filteredShowCount = shows.filter(show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .includes(searchWord.toUpperCase()),
    ).length;

    expect(component.find('.show-card')).toHaveLength(filteredShowCount);
  });
});
