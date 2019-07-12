import * as React from 'react';
import { Icon, IconButton, withStyles } from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import classnames from 'classnames';
import { MuiPickersUtilsProvider, DatePicker as DatePickerBase } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { WeekPickerProps, RangePicker } from './types';
import styles from './styles';

const WeekPicker: React.SFC<WeekPickerProps> = ({
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
  classes,
}) => {
  const [selected, setSelected] = React.useState<RangePicker>({
    begin: null,
    end: null,
  });
  const [range, setRange] = React.useState<RangePicker>({
    begin: null,
    end: null,
  });

  const onChangeInternal = (date: MaterialUiPickersDate) => {
    if (!date) {
      setSelected({ begin: null, end: null });
    }
  };

  const renderDay = (
    day: MaterialUiPickersDate,
    _selectedDate: MaterialUiPickersDate,
    dayInCurrentMonth: boolean,
    dayComponent: JSX.Element
  ) => {
    let dayIsBetween = false;
    let isFirstDay = false;
    let isLastDay = false;

    if (range.begin && range.end) {
      dayIsBetween =
        Boolean(day && moment(day).isSameOrAfter(range.begin, 'day')) &&
        Boolean(day && moment(day).isSameOrBefore(range.end, 'day'));
    }

    if (selected.begin) {
      isFirstDay = Boolean(day && moment(day).isSame(selected.begin, 'day'));
    }

    if (selected.end) {
      isLastDay = Boolean(day && moment(day).isSame(selected.end, 'day'));
    }

    const wrapperClassName = classnames({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = classnames(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    return React.cloneElement(
      dayComponent,
      {
        onClick: (e: React.MouseEvent) => {
          let selectedDate = { ...selected };
          if (day) {
            selectedDate = {
              begin: moment(day).startOf('week'),
              end: moment(day).endOf('week'),
            };
          }

          if (!autoOk) {
            e.stopPropagation();
          }
          setSelected(selectedDate);
        },
      },
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {day && moment(day).format('D')} </span>
        </IconButton>
      </div>
    );
  };

  const getPicker = () => {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePickerBase
          className={className}
          label={label}
          value={selected.begin}
          renderDay={renderDay}
          labelFunc={(date: MaterialUiPickersDate, invalid: string) => {
            if (labelFunc) {
              return labelFunc(selected, invalid);
            } else {
              if (date) {
                return `Week of ${date.startOf('week').format('LL')}`;
              }

              return 'No Date';
            }
          }}
          onChange={onChangeInternal}
          disabled={disabled}
          TextFieldComponent={TextFieldComponent}
          helperText={helperText}
          fullWidth={fullWidth}
          maxDate={maxDate}
          minDate={minDate}
          clearable={clearable}
          clearLabel={clearLabel}
          InputProps={InputProps}
          error={error}
          autoOk={autoOk}
        />
      </MuiPickersUtilsProvider>
    );
  };

  React.useEffect(() => {
    let internalValue = { ...selected };
    let beginValue = (value && value.begin) || (clearable ? null : moment().startOf('week'));
    let endValue = null;

    if (typeof beginValue === 'string') {
      beginValue = moment(beginValue).startOf('week');
    }

    if (beginValue && !beginValue.isValid()) {
      beginValue = moment().startOf('week');
    }

    if (beginValue) {
      endValue = moment(beginValue).endOf('week');
    }

    internalValue = { begin: beginValue, end: endValue };
    onInit && onInit(internalValue);
    setSelected(internalValue);
  }, []);

  React.useEffect(() => {
    const { begin, end } = selected;

    setRange({ begin, end });

    if ((!begin && !end) || (begin && end)) {
      onChange && onChange(selected);
    }
  }, [selected]);

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
      {icon && <Icon style={{ marginRight: '10px', color: '#999999', ...iconStyle }}>{icon}</Icon>}
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

WeekPicker.defaultProps = {
  disabled: false,
  InputProps: {},
  nobox: false,
  fullWidth: true,
  autoOk: false,
  clearLabel: 'Clear',
  clearable: false,
};

export default withStyles(styles)(WeekPicker);
