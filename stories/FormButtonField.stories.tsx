import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { Form } from 'react-final-form';
import { FormButtonField } from '../src';

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

storiesOf('FormButtonField', module).add('default', () => {
  return (
    <FormTest
      render={({ values }: { values: any }) => {
        return (
          <React.Fragment>
            <FormButtonField
              name="enabled"
              label="Enabled"
              text="Download"
              icon=""
              onClick={() => alert('Clicked')}
            />
            <Divider variant="inset" />
            <FormButtonField name="disabled" label="Disabled" text="Stop" icon="" disabled />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
