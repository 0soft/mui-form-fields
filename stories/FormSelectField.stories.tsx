import { Divider } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormSelectField } from '../src';
import FormTest from './FormTest';

storiesOf('FormSelectField', module).add('default', () => {
  return (
    <FormTest
      render={({ values }: { values: any }) => {
        return (
          <React.Fragment>
            <FormSelectField
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
            <FormSelectField
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
            <FormSelectField
              icon="extension"
              name="plugins"
              label="Plugins"
              multi
              options={[
                { label: 'WIP', value: 'wip' },
                { label: 'Mirrors', value: 'mirrors' },
                { label: 'Matches', value: 'matches' },
                { label: 'Expedite', value: 'expedite' },
              ]}
            />
          </React.Fragment>
        );
      }}
      onSubmit={(values: any) => console.log(values)}
    />
  );
});
