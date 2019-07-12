import { Icon, ListItem, ListItemIcon } from '@material-ui/core';
import * as React from 'react';
import { Field } from 'react-final-form';
import {
  FieldFormatter,
  FieldParser,
  FieldValidator,
  FormatterOptions,
  handleFormatter,
  handleParser,
  handleValidator,
  ParserOptions,
} from '../utils';

interface FormFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  render: Function;
  type?: string;
  iconPadding?: string;
  format?: FieldFormatter | FormatterOptions;
  parse?: FieldParser | ParserOptions;
  validate?: FieldValidator | string;
  className?: string | undefined;
  alignItems?: 'center' | 'start' | 'end';
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
  alignItems,
}) => {
  return (
    <ListItem className={className} style={{ alignItems, paddingRight: '24px' }}>
      {hasIcon && (
        <ListItemIcon style={{ paddingTop: iconPadding }}>
          {icon !== undefined ? typeof icon === 'string' ? <Icon>{icon}</Icon> : icon : <span />}
        </ListItemIcon>
      )}
      <Field
        name={name}
        format={typeof format === 'string' ? handleFormatter(format) : format}
        parse={typeof parse === 'string' ? handleParser(parse) : parse}
        validate={typeof validate === 'string' ? handleValidator(validate) : validate}
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
  iconPadding: '0',
  alignItems: 'center',
  hasIcon: true,
};

export default FormField;
