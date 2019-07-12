import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { Form } from 'react-final-form';
import { FormDateRangeField } from '../src';

const FormTest = ({
  onSubmit,
  initial,
  render,
  mutators,
}: {
  onSubmit: any;
  initial?: Object;
  render: Function;
  mutators?: any;
}) => (
  <Form
    initialValues={initial}
    onSubmit={onSubmit}
    mutators={mutators}
    render={({ handleSubmit, invalid, submitting, ...props }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>{render({ ...props, invalid })}</div>
        </form>
      );
    }}
  />
);

storiesOf('FormDateRangeField', module).add('default', () => {
  const initialData = {
    date_initial: {
      begin: '2019-02-26',
      end: '2019-03-12',
    },
  };
  return (
    <FormTest
      initial={initialData}
      render={({ values }: { values: any }) => {
        return (
          <React.Fragment>
            <FormDateRangeField icon="calendar_today" name="daterange" label="Daterange" />
            <Divider variant="inset" />
            <FormDateRangeField icon="today" name="date_initial" label="Initial Date" />
            <Divider variant="inset" />
            <FormDateRangeField icon="today" name="clearable" label="Clearable" clearable />
            <Divider variant="inset" />
            <FormDateRangeField icon="today" name="disabled" label="Disabled" disabled />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
