import * as React from 'react';
import FormTextField from './FormTextField';
import { FieldValidator } from '../utils';
import { NumberMask } from '../helpers';

interface FormNumberFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  disabled?: boolean;
  className?: string;
  validate?: FieldValidator | string;
}

const FormNumberField: React.SFC<FormNumberFieldProps> = ({
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
      parse="float"
      format="money"
      InputProps={{
        inputComponent: NumberMask,
      }}
    />
  );
};

FormNumberField.defaultProps = {
  disabled: false,
};

export default FormNumberField;
