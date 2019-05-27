import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider, Button } from '@material-ui/core';
import { Form } from 'react-final-form';
import { FormFileUploadField } from '../src';

const FormTest = ({
  onSubmit,
  initial,
  render,
  mutators,
  showButton,
}: {
  onSubmit: any;
  initial?: Object;
  render: Function;
  mutators?: any;
  showButton?: boolean;
}) => (
  <Form
    initialValues={initial}
    onSubmit={onSubmit}
    mutators={mutators}
    render={({ handleSubmit, invalid, submitting, ...props }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>{render({ ...props, invalid })}</div>
          <br />
          {showButton && (
            <Button variant="contained" type="submit">
              Submit
            </Button>
          )}
        </form>
      );
    }}
  />
);

storiesOf('FormFileUploadField', module)
  .add('default', () => {
    return (
      <FormTest
        render={({ values }: { values: any }) => {
          return (
            <React.Fragment>
              <FormFileUploadField
                icon="attachment"
                name="upload"
                label="Single"
              />
              <Divider variant="inset" />
              <FormFileUploadField
                icon="attachment"
                name="multiple"
                label="Multiple"
                multiple
              />
              <Divider variant="inset" />
              <FormFileUploadField
                icon="attachment"
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
  .add('required', () => {
    return (
      <FormTest
        showButton
        render={({ values }: { values: any }) => {
          return (
            <React.Fragment>
              <FormFileUploadField
                icon="attachment"
                name="upload"
                label="Single"
                required
              />
              <Divider variant="inset" />
            </React.Fragment>
          );
        }}
        onSubmit={(values: any) => console.log(values)}
      />
    );
  });
