import * as React from 'react';
import { InputAdornment, Icon } from '@material-ui/core';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { FieldValidator, setFocus } from '../utils';
import FormField from './FormField';
import { DateRangePicker } from './Pickers';
import { FieldInputProps, FieldMetaState } from 'react-final-form';
import { RangePicker } from './Pickers/types';

interface FormDateRangeFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  validate?: FieldValidator | string;
  label: string;
  disabled?: boolean;
  clearable?: boolean;
  max?: MaterialUiPickersDate;
  min?: MaterialUiPickersDate;
  labelFunc?: ((date: RangePicker, invalidLabel: string) => string) | undefined;
  onChange?: ((date: RangePicker) => void) | undefined;
}

const FormDateRangeField: React.SFC<FormDateRangeFieldProps> = ({
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
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
      format="date"
      parse="date"
      hasIcon={hasIcon}
      validate={validate}
      render={({
        input,
        meta,
      }: {
        input: FieldInputProps<HTMLElement>;
        meta: FieldMetaState;
      }) => {
        const handleChange = (date: RangePicker) => {
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
            <DateRangePicker
              nobox
              fullWidth
              {...input}
              error={Boolean(meta.touched && meta.error)}
              helperText={meta.touched ? meta.error : ''}
              clearable={clearable}
              maxDate={max}
              minDate={min}
              disabled={disabled}
              labelFunc={labelFunc}
              onChange={handleChange}
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

FormDateRangeField.defaultProps = {
  hasIcon: true,
  disabled: false,
  clearable: false,
};

export default FormDateRangeField;
