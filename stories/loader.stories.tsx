import Loader from '../src/Loader';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Loader', module).add('default', () => <Loader />);
storiesOf('Loader', module).add('custom', () => <Loader message="Custom" />);
