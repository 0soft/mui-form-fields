import React from "react";
import { Form } from 'react-final-form';

const FormTest = ({
  onSubmit = () => {},
  initial = {},
  render,
  mutators,
}) => (
  <Form
    initialValues={initial}
    onSubmit={onSubmit}
    mutators={mutators}
    render={({ handleSubmit, ...props }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>{render({ ...props })}</div>
        </form>
      );
    }}
  />
);

export default FormTest;
