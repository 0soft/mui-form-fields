import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  DatePicker as DatePickerBase,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { DatePickerProps } from './types';

const DatePicker: React.SFC<DatePickerProps> = ({
  icon,
  label,
  value,
  disabled,
  labelFunc,
  onChange,
  TextFieldComponent,
  helperText,
  maxDate,
  minDate,
  clearable,
  InputProps,
  legend,
  nobox,
  clearLabel,
  className,
  onInit,
  fullWidth,
  autoOk,
  iconStyle,
  legendStyle,
  containerStyle,
  error,
  views,
}) => {
  const [selected, setSelected] = React.useState<MaterialUiPickersDate>(null);

  const onChangeInternal = (d: MaterialUiPickersDate) => {
    setSelected(d);
    onChange && onChange(d);
  };

  const getPicker = () => {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePickerBase
          className={className}
          label={label}
          value={selected}
          views={views}
          labelFunc={
            labelFunc ||
            function(date) {
              if (date) {
                if (views === undefined || views.indexOf('date') >= 0) {
                  return date.format('LL');
                }

                if (views.indexOf('month') >= 0) {
                  return date.format('MMMM YYYY');
                }

                if (views.indexOf('year') >= 0) {
                  return date.format('YYYY');
                }
              }

              return 'No Date';
            }
          }
          onChange={onChangeInternal}
          disabled={disabled}
          TextFieldComponent={TextFieldComponent}
          helperText={helperText}
          fullWidth={fullWidth}
          autoOk={autoOk}
          maxDate={maxDate}
          minDate={minDate}
          clearable={clearable}
          clearLabel={clearLabel}
          InputProps={InputProps}
          error={error}
        />
      </MuiPickersUtilsProvider>
    );
  };

  React.useEffect(() => {
    let internalValue = value || (clearable ? null : moment());

    if (typeof internalValue === 'string') {
      internalValue = moment(internalValue);
    }

    if (internalValue && !internalValue.isValid()) {
      internalValue = moment();
    }

    onInit && onInit(internalValue);
    setSelected(internalValue);
  }, []);

  if (nobox) {
    return getPicker();
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {icon && (
        <Icon style={{ marginRight: '10px', color: '#999999', ...iconStyle }}>
          {icon}
        </Icon>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flex: 6,
        }}
      >
        {getPicker()}
        {icon && (
          <span
            style={{
              color: '#999999',
              fontSize: 13,
              ...legendStyle,
            }}
          >
            {legend}
          </span>
        )}
      </div>
    </div>
  );
};

DatePicker.defaultProps = {
  disabled: false,
  InputProps: {},
  nobox: false,
  fullWidth: true,
  autoOk: false,
  clearLabel: 'Clear',
  clearable: false,
};

export default DatePicker;
