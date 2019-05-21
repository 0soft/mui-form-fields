import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Loader from '../src/Loader';

it('Loader is rendered', () => {
  const wrapper = shallow(<Loader />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
