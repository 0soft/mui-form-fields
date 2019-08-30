import { FormControlLabel, Switch } from '@material-ui/core';
import * as React from 'react';
import { FieldInputProps } from 'react-final-form';
import { omit } from '../utils';
import FormField from './FormField';

interface FormSwitchFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string | React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  placement?: 'start' | 'end' | 'top' | 'bottom';
  className?: string;
}

const FormSwitchField: React.SFC<FormSwitchFieldProps> = ({
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
              marginLeft: '2px',
            }}
            disabled={disabled}
            label={label}
            labelPlacement={placement}
            control={<Switch color="primary" onClick={onClick} {...omit(input, ['type'])} />}
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
