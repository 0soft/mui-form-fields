import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from 'react-final-form';
import { FormIntegerField } from '../src';

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

storiesOf('FormIntegerField', module).add('default', () => {
  return (
    <FormTest
      render={() => {
        return (
          <React.Fragment>
            <FormIntegerField icon="plus_one" name="integer" label="Integer" />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
