import * as React from 'react';
import FormTextField from './FormTextField';
import { FieldValidator } from '../utils';
import { PhoneMask } from '../helpers';

interface FormPhoneFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  disabled?: boolean;
  className?: string;
  validate?: FieldValidator | string;
}

const FormPhoneField: React.SFC<FormPhoneFieldProps> = ({
  icon,
  name,
  label,
  disabled,
  validate,
}) => {
  return (
    <FormTextField
      icon={icon}
      name={name}
      label={label}
      validate={validate}
      disabled={disabled}
      InputProps={{
        inputComponent: PhoneMask,
      }}
    />
  );
};

FormPhoneField.defaultProps = {
  disabled: false,
};

export default FormPhoneField;
