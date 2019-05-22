import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { Form } from 'react-final-form';
import { FormTextField } from '../src';

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

storiesOf('FormTextField', module)
  .add('default', () => {
    return (
      <FormTest
        render={({ values }: { values: any }) => {
          return (
            <React.Fragment>
              <FormTextField icon="person" name="name" label="Name" />
              <Divider variant="inset" />
              <FormTextField
                icon="stop"
                name="disabled"
                label="Disabled"
                disabled
              />
            </React.Fragment>
          );
        }}
        onSubmit={(values: any) => console.log(values)}
      />
    );
  })
  .add('Validate', () => {
    return (
      <FormTest
        render={({ values }: { values: any }) => {
          return (
            <React.Fragment>
              <FormTextField
                icon="person"
                name="name"
                label="Name"
                validate="required"
              />
              <Divider variant="inset" />
              <FormTextField
                icon="email"
                name="email"
                label="E-mail"
                validate="required | email"
              />
              <Divider variant="inset" />
              <FormTextField
                icon="stop"
                name="disabled"
                label="Disabled"
                disabled
              />
              <Divider variant="inset" />
              <FormTextField
                icon="minimize"
                name="min"
                label="Min 6 chars"
                validate="required | min:6"
              />
              <Divider variant="inset" />
              <FormTextField
                icon="maximize"
                name="numbers"
                label="Numbers only"
                validate="required | number"
              />
              <Divider variant="inset" />
              <FormTextField
                icon="fiber_manual_record"
                name="integer"
                label="Integer only"
                validate="required | integer"
              />
            </React.Fragment>
          );
        }}
        onSubmit={(values: any) => console.log(values)}
      />
    );
  });
