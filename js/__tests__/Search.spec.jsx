// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Search from '../Components/Search';
import ShowCard from '../Components/ShowCard';
import preload from '../../data.json';

const { shows } = preload;

describe('Search', () => {
  test('it should render correctly', () => {
    const component = shallow(<Search shows={shows} />);

    expect(component).toMatchSnapshot();
  });

  test('it should render correct amount of shows', () => {
    const component = shallow(<Search shows={shows} />);

    expect(component.find(ShowCard)).toHaveLength(shows.length);
  });

  test('it should render correct amount of shows based on search', () => {
    const searchWord = 'house';
    const component = shallow(<Search shows={shows} />);

    component
      .find('input')
      .simulate('change', { currentTarget: { value: searchWord } });

    const filteredShowCount = shows.filter(show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .includes(searchWord.toUpperCase()),
    ).length;

    expect(component.find(ShowCard)).toHaveLength(filteredShowCount);
  });
});

// Old experimental way
// import renderer from 'react-test-renderer';
// test('Search renders correctly', () => {
//   const component = renderer.create(<Search />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
