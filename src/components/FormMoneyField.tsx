import * as React from 'react';
import FormTextField from './FormTextField';
import { FieldValidator } from '../utils';
import { MoneyMask } from '../helpers';

interface FormMoneyFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  validate?: FieldValidator | string;
  helperText?: string | React.ReactNode;
}

const FormMoneyField: React.SFC<FormMoneyFieldProps> = ({
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
      parse="float"
      format="money"
      helperText={helperText}
      InputProps={{
        inputComponent: MoneyMask,
      }}
    />
  );
};

FormMoneyField.defaultProps = {
  disabled: false,
};

export default FormMoneyField;
