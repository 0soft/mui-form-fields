import * as React from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { TextFieldProps } from '@material-ui/core/TextField';

export type RangePicker = {
  begin: MaterialUiPickersDate;
  end: MaterialUiPickersDate;
};

export interface DatePickerProps {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  value?: MaterialUiPickersDate | string;
  disabled?: boolean;
  labelFunc?:
    | ((date: MaterialUiPickersDate, invalidLabel: string) => string)
    | undefined;
  onChange?: ((date: MaterialUiPickersDate) => void) | undefined;
  TextFieldComponent?: React.ComponentType<TextFieldProps>;
  helperText?: React.ReactNode;
  maxDate?: MaterialUiPickersDate;
  minDate?: MaterialUiPickersDate;
  clearable?: boolean;
  InputProps?: TextFieldProps['InputProps'];
  legend?: React.ReactNode;
  nobox?: boolean;
  clearLabel?: React.ReactNode;
  className?: string;
  onInit?: ((date: MaterialUiPickersDate) => any) | undefined;
  fullWidth?: boolean;
  autoOk?: boolean;
  iconStyle?: Object;
  legendStyle?: Object;
  containerStyle?: Object;
}
