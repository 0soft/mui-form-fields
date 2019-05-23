import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from 'react-final-form';
import { FormPhoneField } from '../src';

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

storiesOf('FormPhoneField', module).add('default', () => {
  return (
    <FormTest
      render={() => {
        return (
          <React.Fragment>
            <FormPhoneField icon="phone" name="telephone" label="Telephone" />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
