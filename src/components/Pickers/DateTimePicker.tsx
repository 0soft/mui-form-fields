import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  DateTimePicker as DateTimePickerBase,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { DateTimePickerProps } from './types';

const DateTimePicker: React.SFC<DateTimePickerProps> = ({
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
  ampm,
}) => {
  const [selected, setSelected] = React.useState<MaterialUiPickersDate>(null);

  const onChangeInternal = (d: MaterialUiPickersDate) => {
    setSelected(d);
    onChange && onChange(d);
  };

  const getPicker = () => {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePickerBase
          className={className}
          ampm={ampm}
          label={label}
          value={selected}
          labelFunc={
            labelFunc ||
            function(date) {
              return date ? date.format('LLL') : 'No Date';
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

DateTimePicker.defaultProps = {
  disabled: false,
  InputProps: {},
  nobox: false,
  fullWidth: true,
  autoOk: true,
  clearLabel: 'Remove',
  clearable: false,
  ampm: false,
};

export default DateTimePicker;
