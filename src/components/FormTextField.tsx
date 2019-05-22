import * as React from 'react';
import { InputAdornment, TextField, Icon } from '@material-ui/core';
import {
  FieldValidator,
  FieldParser,
  FieldFormatter,
  setFocus,
} from '../utils';
import FormField from './FormField';
import { FieldInputProps, FieldPlainState } from 'react-final-form';

interface FormTextFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  format?: FieldFormatter | string;
  parse?: FieldParser | string;
  validate?: FieldValidator | string;
  label: string;
  placeholder?: string;
  value?: Array<string | number | boolean> | string | number | boolean;
  disabled?: boolean;
  multiline?: boolean;
  rows?: string | number;
  margin?: 'dense' | 'none' | 'normal';
  InputProps?: Object;
}

const FormTextField: React.SFC<FormTextFieldProps> = ({
  icon,
  name,
  label,
  placeholder,
  format,
  parse,
  value,
  disabled,
  multiline,
  rows,
  margin,
  InputProps = {},
  hasIcon = true,
  validate,
}) => {
  const lowerlabel =
    typeof label === 'string' ? label.toLowerCase() : 'information';
  placeholder = placeholder || `Please insert the ${lowerlabel} here...`;
  return (
    <FormField
      icon={icon}
      name={name}
      format={format}
      parse={parse}
      hasIcon={hasIcon}
      validate={validate}
      render={({
        input,
        meta,
      }: {
        input: FieldInputProps<HTMLElement>;
        meta: FieldPlainState;
      }) => {
        value = value || input.value;
        return (
          <TextField
            className="form-field-input"
            placeholder={placeholder}
            label={label}
            InputLabelProps={{ shrink: true }}
            fullWidth
            multiline={multiline}
            rows={rows}
            margin={margin}
            {...input}
            value={value}
            disabled={disabled}
            error={Boolean(meta.touched && meta.error)}
            helperText={meta.touched ? meta.error : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={setFocus}
                  style={{
                    alignSelf: 'start',
                    cursor: disabled ? 'default' : 'pointer',
                  }}
                >
                  <Icon fontSize="small" style={{ color: '#757575' }}>
                    create
                  </Icon>
                </InputAdornment>
              ),
              ...InputProps,
            }}
          />
        );
      }}
    />
  );
};

FormTextField.defaultProps = {
  hasIcon: true,
  disabled: false,
  multiline: false,
  InputProps: {},
};

export default FormTextField;
