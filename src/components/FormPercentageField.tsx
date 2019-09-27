import * as React from 'react';
import FormTextField from './FormTextField';
import { FieldValidator } from '../utils';
import { PercentageMask } from '../helpers';

interface FormPercentageFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  validate?: FieldValidator | string;
  helperText?: string | React.ReactNode;
}

const FormPercentageField: React.SFC<FormPercentageFieldProps> = ({
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
      parse="percentage"
      format="percentage"
      helperText={helperText}
      InputProps={{
        inputComponent: PercentageMask,
      }}
    />
  );
};

FormPercentageField.defaultProps = {
  disabled: false,
};

export default FormPercentageField;
