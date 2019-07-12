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
      dividers
    >
      <FormTextField icon="person" name="name" label="Full Name" />
      <FormTextField icon="mail" name="email" label="Email" />
      <FormPhoneField name="phone" label="Phone" />
      <FormDateField icon="today" name="birthday" label="Birthday" />
      <FormSwitchField icon="security" name="protected" label="Protected" />
      <FormSwitchField icon="verified_user" name="admin" label="Admin" />
      <FormFileUploadField icon="attachment" name="identification" label="Social Security" />
    </FormDialog>
  );
});
