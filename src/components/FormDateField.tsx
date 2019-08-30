import { Icon, InputAdornment } from '@material-ui/core';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import * as React from 'react';
import { FieldInputProps, FieldMetaState } from 'react-final-form';
import { FieldValidator, setFocus } from '../utils';
import FormField from './FormField';
import { DatePicker } from './Pickers';

interface FormDateFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  validate?: FieldValidator | string;
  label: string | React.ReactNode;
  disabled?: boolean;
  clearable?: boolean;
  max?: MaterialUiPickersDate;
  min?: MaterialUiPickersDate;
  labelFunc?: ((date: MaterialUiPickersDate, invalidLabel: string) => string) | undefined;
  onChange?: ((date: MaterialUiPickersDate) => void) | undefined;
  views?: Array<'year' | 'date' | 'month'>;
}

const FormDateField: React.SFC<FormDateFieldProps> = ({
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
  views,
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
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
            <DatePicker
              nobox
              autoOk
              fullWidth
              views={views}
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
                      alignSelf: 'center',
                      cursor: disabled ? 'default' : 'pointer',
                    }}
                  >
                    <Icon fontSize="small" style={{ color: '#757575', alignSelf: 'center' }}>
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

FormDateField.defaultProps = {
  hasIcon: true,
  disabled: false,
  clearable: false,
};

export default FormDateField;
