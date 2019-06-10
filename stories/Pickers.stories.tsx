import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { DatePicker } from '../src/components/Pickers';

const defaulStyleDivider = { marginTop: '15px', marginBottom: '10px' };

storiesOf('Pickers', module).add('DatePicker', () => {
  return (
    <React.Fragment>
      <DatePicker icon="today" label="Label" />
      <Divider style={defaulStyleDivider} />
      <DatePicker icon="today" legend="Legend" />
      <Divider style={defaulStyleDivider} />
      <DatePicker label="No icon" />
      <Divider style={defaulStyleDivider} />
      <DatePicker icon="today" label="Disabled" disabled />
      <Divider style={defaulStyleDivider} />
      <DatePicker icon="today" label="Set Value" value="2019-02-26" />
      <Divider style={defaulStyleDivider} />
      <DatePicker icon="today" label="Invalid Value" value="ADDDs" />
      <Divider style={defaulStyleDivider} />
      <DatePicker icon="today" label="Clearable" clearable />
      <Divider style={defaulStyleDivider} />
      <DatePicker icon="today" label="Nobox" nobox />
    </React.Fragment>
  );
});
