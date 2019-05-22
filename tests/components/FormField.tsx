import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import FormField from '../../src/components/FormField';

it('FormField is rendered', () => {
  const wrapper = shallow(<FormField name="test" render={() => {}} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
