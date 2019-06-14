import { Divider } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  FormDateField,
  FormDialog,
  FormFileUploadField,
  FormPhoneField,
  FormSwitchField,
  FormTextField,
} from '../src';

storiesOf('FormDialogField', module).add('default', () => {
  return (
    <FormDialog
      size="sm"
      title="Create User"
      onClose={() => console.log('xxx')}
      onSubmit={(...args) => console.log(args)}
      open
    >
      <FormTextField icon="person" name="name" label="Full Name" />
      <Divider />
      <FormTextField icon="mail" name="email" label="Email" />
      <Divider />
      <FormPhoneField name="phone" label="Phone" />
      <Divider />
      <FormDateField icon="today" name="birthday" label="Birthday" />
      <Divider />
      <FormSwitchField icon="security" name="protected" label="Protected" />
      <Divider />
      <FormSwitchField icon="verified_user" name="admin" label="Admin" />
      <Divider />
      <FormFileUploadField
        icon="attachment"
        name="identification"
        label="Social Security"
      />
      <Divider />
    </FormDialog>
  );
});
