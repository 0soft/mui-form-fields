import * as React from 'react';
import { PhoneMask } from '../helpers';
import { FieldValidator } from '../utils';
import FormTextField from './FormTextField';

interface FormPhoneFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  validate?: FieldValidator | string;
  helperText?: string | React.ReactNode;
}

const FormPhoneField: React.SFC<FormPhoneFieldProps> = ({
  icon,
  name,
  label,
  disabled,
  validate,
  helperText,
}) => {
  return (
    <FormTextField
      icon={icon}
      name={name}
      label={label}
      validate={validate}
      disabled={disabled}
      helperText={helperText}
      InputProps={{
        inputComponent: PhoneMask,
      }}
    />
  );
};

FormPhoneField.defaultProps = {
  icon: 'phone',
  disabled: false,
};

export default FormPhoneField;
