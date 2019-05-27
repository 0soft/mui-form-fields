import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '@material-ui/core';
import { Form } from 'react-final-form';
import { FormShowField } from '../src';

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

storiesOf('FormShowField', module).add('default', () => {
  return (
    <FormTest
      render={({ values }: { values: any }) => {
        return (
          <React.Fragment>
            <FormShowField
              icon="person"
              name="name"
              label="Name"
              value="Jhon Deere"
            />
            <Divider variant="inset" />
            <FormShowField
              icon="notes"
              name="multiline"
              label="Multiline"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque eget ultricies rutrum. Etiam porttitor leo eget leo hendrerit, sit amet viverra enim tristique. Curabitur eu leo at erat ultrices tempor eget sed sem."
              multiline
            />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
