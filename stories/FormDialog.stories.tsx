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
import { FormRenderProps } from 'react-final-form';

interface FormValues {
  person: string;
  email: string;
  phone: string;
  protected: boolean;
  admin: boolean;
  identification: string;
}

storiesOf('FormDialog', module)
  .add('default', () => {
    return (
      <FormDialog
        size="sm"
        title="Create User"
        onClose={() => console.log('xxx')}
        onSubmit={async (...args) => {
          return new Promise(resolve => {
            return setTimeout(resolve, 2000);
          });
        }}
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
  })
  .add('Hide title', () => {
    return (
      <FormDialog
        size="sm"
        hasDialogTitle={false}
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
  })
  .add('React.Node label', () => {
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
        <FormPhoneField name="phone" label={<span title="Phone or Cellphone">Hover to see</span>} />
        <FormDateField icon="today" name="birthday" label="Birthday" />
        <FormSwitchField icon="security" name="protected" label="Protected" />
        <FormSwitchField icon="verified_user" name="admin" label="Admin" />
        <FormFileUploadField icon="attachment" name="identification" label="Social Security" />
      </FormDialog>
    );
  })
  .add('Render Function with mutators', () => {
    return (
      <FormDialog
        size="sm"
        title="Create User"
        onClose={() => console.log('xxx')}
        onSubmit={(...args) => console.log(args)}
        open
        dividers
        formMutators={{
          setValue: ([name, value], state, { changeValue }) => {
            changeValue(state, name, () => value);
          },
        }}
        render={({ values, form }: FormRenderProps<FormValues>) => {
          const { mutators } = form;
          const handleClick: React.MouseEventHandler = e => {
            console.log('Also setting admin as true');
            mutators.setValue('admin', !values.protected);
          };
          return (
            <>
              <FormTextField icon="person" name="name" label="Full Name" />
              <FormTextField icon="mail" name="email" label="Email" />
              <FormPhoneField name="phone" label="Phone" />
              <FormDateField icon="today" name="birthday" label="Birthday" />
              <FormSwitchField
                icon="security"
                name="protected"
                label="Protected"
                onClick={handleClick}
              />
              <FormSwitchField icon="verified_user" name="admin" label="Admin" />
              <FormFileUploadField
                icon="attachment"
                name="identification"
                label="Social Security"
              />
            </>
          );
        }}
      />
    );
  });
