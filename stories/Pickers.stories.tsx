import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { DatePicker, DateTimePicker, DateRangePicker, WeekPicker } from '../src/components/Pickers';

const defaulStyleDivider = { marginTop: '15px', marginBottom: '10px' };

storiesOf('Pickers', module)
  .add('DatePicker', () => {
    return (
      <React.Fragment>
        <DatePicker icon="today" label="Label" />
        <Divider style={defaulStyleDivider} />
        <DatePicker icon="today" legend="Legend" />
        <Divider style={defaulStyleDivider} />
        <DatePicker icon="today" label="Month" views={['month']} />
        <Divider style={defaulStyleDivider} />
        <DatePicker icon="today" label="Year" views={['year']} />
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
  })
  .add('DateTimePicker', () => {
    return (
      <React.Fragment>
        <DateTimePicker icon="today" label="Label" />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" legend="Legend" />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker label="No icon" />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" label="Disabled" disabled />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" label="Set Value" value="2019-02-26 09:00:00" />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" label="Invalid Value" value="ADDDs" />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" label="Clearable" clearable />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" label="Nobox" nobox />
        <Divider style={defaulStyleDivider} />
        <DateTimePicker icon="today" label="AM / PM" ampm />
      </React.Fragment>
    );
  })
  .add('DateRangePicker', () => {
    return (
      <React.Fragment>
        <DateRangePicker icon="today" label="Label" />
        <Divider style={defaulStyleDivider} />
        <DateRangePicker icon="today" label="Month" views={['month']} />
        <Divider style={defaulStyleDivider} />
        <DateRangePicker icon="today" label="AutoOK" autoOk />
        <Divider style={defaulStyleDivider} />
        <DateRangePicker icon="today" label="Clearable" clearable />
      </React.Fragment>
    );
  })
  .add('WeekPicker', () => {
    return (
      <React.Fragment>
        <WeekPicker icon="today" label="Label" />
        <Divider style={defaulStyleDivider} />
        <WeekPicker icon="today" label="AutoOK" autoOk />
        <Divider style={defaulStyleDivider} />
        <WeekPicker icon="today" label="Clearable" clearable />
      </React.Fragment>
    );
  });
