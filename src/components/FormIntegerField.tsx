import * as React from 'react';
import FormTextField from './FormTextField';
import { FieldValidator } from '../utils';
import { IntegerMask } from '../helpers';

interface FormIntegerFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  validate?: FieldValidator | string;
}

const FormIntegerField: React.SFC<FormIntegerFieldProps> = ({
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
      parse="integer"
      format="integer"
      disabled={disabled}
      InputProps={{
        inputComponent: IntegerMask,
      }}
    />
  );
};

FormIntegerField.defaultProps = {
  disabled: false,
};

export default FormIntegerField;
