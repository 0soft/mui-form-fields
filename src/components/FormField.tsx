import * as React from 'react';
import { Icon, ListItem, ListItemIcon } from '@material-ui/core';
import { Field } from 'react-final-form';
import {
  handleFormatter,
  handleParser,
  handleValidator,
  FieldValidator,
} from '../utils';

interface FormFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: Boolean;
  name: string;
  render: Function;
  type?: string;
  iconPadding?: string;
  format?: ((value: any, name: string) => any) | null | undefined | string;
  parse?: ((value: any, name: string) => any) | null | undefined | string;
  validate?: FieldValidator | string;
  className?: string | undefined;
}

const FormField: React.SFC<FormFieldProps> = ({
  icon,
  hasIcon,
  name,
  render,
  iconPadding,
  format,
  parse,
  type,
  validate,
  className,
}) => {
  return (
    <ListItem
      className={className}
      style={{ alignItems: 'start', paddingRight: '24px' }}
    >
      {hasIcon && (
        <ListItemIcon style={{ paddingTop: iconPadding }}>
          {icon ? (
            typeof icon === 'string' ? (
              <Icon>{icon}</Icon>
            ) : (
              icon
            )
          ) : (
            <span />
          )}
        </ListItemIcon>
      )}
      <Field
        name={name}
        format={typeof format === 'string' ? handleFormatter(format) : format}
        parse={typeof parse === 'string' ? handleParser(parse) : parse}
        validate={
          typeof validate === 'string' ? handleValidator(validate) : validate
        }
        type={type}
        render={({ input, meta }) => {
          return render({ input, meta });
        }}
      />
    </ListItem>
  );
};

FormField.defaultProps = {
  type: 'text',
  iconPadding: '16px',
  hasIcon: true,
};

export default FormField;
