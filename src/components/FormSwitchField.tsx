import * as React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { omit } from '../utils';
import FormField from './FormField';
import { FieldInputProps } from 'react-final-form';

interface FormTextFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  placement?: 'start' | 'end' | 'top' | 'bottom';
  className?: string;
}

const FormSwitchField: React.SFC<FormTextFieldProps> = ({
  icon,
  name,
  label,
  disabled,
  placement,
  onClick,
  className,
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
      type="checkbox"
      className={className}
      render={({ input }: { input: FieldInputProps<HTMLElement> }) => {
        return (
          <FormControlLabel
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
            disabled={disabled}
            label={label}
            labelPlacement={placement}
            control={
              <Switch
                color="primary"
                onClick={onClick}
                {...omit(input, ['type'])}
              />
            }
          />
        );
      }}
    />
  );
};

FormSwitchField.defaultProps = {
  disabled: false,
  placement: 'start',
};

export default FormSwitchField;
