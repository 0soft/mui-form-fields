import * as React from 'react';
import { Button } from '@material-ui/core';
import FormField from './FormField';

interface FormButtonFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  text: string;
  disabled?: boolean;
  onClick?: (() => any) | undefined;
}

const FormButtonField: React.SFC<FormButtonFieldProps> = ({
  icon,
  name,
  label,
  text,
  disabled,
  onClick,
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
      render={() => {
        return (
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <span
              style={{
                marginBottom: '0.3125rem',
                fontSize: '0.75rem',
                color: 'rgba(0, 0, 0, 0.54)',
              }}
              onClick={onClick}
            >
              {label}
            </span>
            <Button
              className="text-uppercase"
              variant="contained"
              color="primary"
              disabled={disabled}
              onClick={onClick}
              style={{ maxWidth: '300px', textTransform: 'uppercase' }}
            >
              {text}
            </Button>
          </div>
        );
      }}
    />
  );
};

FormButtonField.defaultProps = {
  disabled: false,
};

export default FormButtonField;
