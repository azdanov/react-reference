// @flow

import React from 'react';
import { shallow } from 'enzyme';

import ShowCard from '../Components/ShowCard';
import preload from '../../data.json';

describe('ShowCard', () => {
  test('it should render correctly', () => {
    const show = preload.shows[0];
    const component = shallow(<ShowCard show={show} />);

    expect(component).toMatchSnapshot();
  });
});
