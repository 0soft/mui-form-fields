import * as React from 'react';
import { FieldFormatter } from '../utils';
import FormTextField from './FormTextField';

interface FormShowFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  format?: FieldFormatter | string;
  label: string;
  value?: Array<string | number | boolean> | string | number | boolean;
  multiline?: boolean;
  rows?: string | number;
  margin?: 'dense' | 'none' | 'normal';
}

const FormShowField: React.SFC<FormShowFieldProps> = ({
  icon,
  hasIcon,
  name,
  format,
  label,
  value,
  multiline,
  rows,
  margin,
}) => {
  return (
    <FormTextField
      icon={icon}
      hasIcon={hasIcon}
      name={name}
      format={format}
      label={label}
      value={value}
      multiline={multiline}
      rows={rows}
      margin={margin}
      disabled
      InputProps={{ endAdornment: null }}
    />
  );
};

FormShowField.defaultProps = {
  hasIcon: true,
  multiline: false,
};

export default FormShowField;
