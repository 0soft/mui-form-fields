import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from 'react-final-form';
import { FormMoneyField } from '../src';

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

storiesOf('FormMoneyField', module).add('default', () => {
  return (
    <FormTest
      render={() => {
        return (
          <React.Fragment>
            <FormMoneyField icon="attach_money" name="money" label="Money" />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
