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
  onInit?: ((date: MaterialUiPickersDate) => void) | undefined;
  fullWidth?: boolean;
  autoOk?: boolean;
  iconStyle?: Object;
  legendStyle?: Object;
  containerStyle?: Object;
  error?: boolean;
  views?: ('year' | 'date' | 'month')[];
}

export interface DateRangePickerProps
  extends Omit<
    DatePickerProps,
    'labelFunc' | 'value' | 'onInit' | 'onChange'
  > {
  value?: RangePicker | undefined;
  labelFunc?: ((date: RangePicker, invalidLabel: string) => string) | undefined;
  onChange?: ((date: RangePicker) => void) | undefined;
  onInit?: ((date: RangePicker) => void) | undefined;
  classes: {
    highlight: string;
    firstHighlight: string;
    endHighlight: string;
    day: string;
    nonCurrentMonthDay: string;
    highlightNonCurrentMonthDay: string;
  };
}

export interface WeekPickerProps extends Omit<DateRangePickerProps, 'views'>{}

export interface DateTimePickerProps extends DatePickerProps {
  ampm?: boolean;
}
