import * as React from 'react';
import { FieldFormatter } from '../utils';
import FormTextField from './FormTextField';

interface FormReadOnlyFieldProps {
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

const FormReadOnlyField: React.SFC<FormReadOnlyFieldProps> = ({
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
      InputProps={{ endAdornment: null, readOnly: true }}
    />
  );
};

FormReadOnlyField.defaultProps = {
  hasIcon: true,
  multiline: false,
};

export default FormReadOnlyField;
