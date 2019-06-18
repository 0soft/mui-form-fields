import { Divider } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormReactSelectField } from '../src';
import FormTest from './FormTest';

storiesOf('FormReactSelectField', module).add('default', () => {
  return (
    <FormTest
      render={({ values }: { values: any }) => {
        return (
          <React.Fragment>
            <FormReactSelectField
              icon="person"
              name="type"
              label="Type of User"
              defaultValue="common"
              options={[
                { label: 'Common', value: 'common' },
                { label: 'Company', value: 'company' },
                { label: 'Education', value: 'education' },
              ]}
            />
            <Divider />
            <FormReactSelectField
              icon="security"
              name="permssions"
              label="Access Level"
              defaultValue="admin"
              options={[
                { label: 'Owner', value: 'owner' },
                { label: 'Admin', value: 'admin' },
                { label: 'Manager', value: 'manager' },
                { label: 'Stakeholder', value: 'stakeholder' },
              ]}
            />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
