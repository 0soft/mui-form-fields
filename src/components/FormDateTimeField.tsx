import * as React from 'react';
import { InputAdornment, Icon } from '@material-ui/core';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { FieldValidator, setFocus } from '../utils';
import FormField from './FormField';
import { DateTimePicker } from './Pickers';
import { FieldInputProps, FieldMetaState } from 'react-final-form';

interface FormDateTimeFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  validate?: FieldValidator | string;
  label: string | React.ReactNode;
  disabled?: boolean;
  clearable?: boolean;
  max?: MaterialUiPickersDate;
  min?: MaterialUiPickersDate;
  ampm?: boolean;
  labelFunc?: ((date: MaterialUiPickersDate, invalidLabel: string) => string) | undefined;
  onChange?: ((date: MaterialUiPickersDate) => void) | undefined;
}

const FormDateTimeField: React.SFC<FormDateTimeFieldProps> = ({
  icon,
  name,
  label,
  disabled,
  hasIcon,
  validate,
  clearable,
  max,
  min,
  labelFunc,
  onChange,
  ampm,
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
      format="date"
      parse="date"
      hasIcon={hasIcon}
      validate={validate}
      render={({ input, meta }: { input: FieldInputProps<HTMLElement>; meta: FieldMetaState }) => {
        const handleChange = (date: MaterialUiPickersDate) => {
          onChange && onChange(date);
          input.onChange(date);
        };

        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                marginBottom: '0.3125rem',
                fontSize: '0.75rem',
                color: 'rgba(0, 0, 0, 0.54)',
              }}
              onClick={setFocus}
            >
              {label}
            </span>
            <DateTimePicker
              nobox
              fullWidth
              autoOk
              ampm={ampm}
              {...input}
              onInit={input.onChange}
              error={Boolean(meta.touched && meta.error)}
              helperText={meta.touched ? meta.error : ''}
              clearable={clearable}
              maxDate={max}
              minDate={min}
              disabled={disabled}
              labelFunc={labelFunc}
              onChange={(onChange && handleChange) || input.onChange}
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
              }}
            />
          </div>
        );
      }}
    />
  );
};

FormDateTimeField.defaultProps = {
  hasIcon: true,
  disabled: false,
  clearable: false,
  ampm: false,
};

export default FormDateTimeField;
