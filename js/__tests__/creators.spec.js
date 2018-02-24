// @flow

import moxios from 'moxios';

import {
  setSearchTerm,
  resetSearchTerm,
  addApiData,
  getApiDetails,
} from '../State/creators';

const show = {
  rating: '0.8',
  title: 'Orange Is the New Black',
  year: '2013–',
  description:
    'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.',
  poster: 'oitnb.jpg',
  imdbID: 'tt2372162',
  trailer: 'th8WT_pxGqg',
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('resetSearchTerm', () => {
  setSearchTerm('New York');
  expect(resetSearchTerm()).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addApiData(show)).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiDetails(show.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: show,
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${show.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addApiData(show));
          done();
        });
    });
  });
});
