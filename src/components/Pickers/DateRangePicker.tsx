import * as React from 'react';
import {
  Icon,
  IconButton,
  withStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import classnames from 'classnames';
import {
  MuiPickersUtilsProvider,
  DatePicker as DatePickerBase,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { DateRangePickerProps, RangePicker } from './types';

const styles = ({ palette, typography }: Theme) =>
  createStyles({
    dayWrapper: {
      position: 'relative',
    },
    day: {
      width: 36,
      height: 36,
      fontSize: typography.caption.fontSize,
      margin: '0 2px',
      color: 'inherit',
    },
    customDayHighlight: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '2px',
      right: '2px',
      border: `1px solid ${palette.secondary.main}`,
      borderRadius: '50%',
    },
    nonCurrentMonthDay: {
      color: palette.text.disabled,
    },
    highlightNonCurrentMonthDay: {
      color: '#676767',
    },
    highlight: {
      background: palette.primary.main,
      color: palette.common.white,
    },
    firstHighlight: {
      extend: 'highlight',
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    },
    endHighlight: {
      extend: 'highlight',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    },
  });

const DateRangePicker: React.SFC<DateRangePickerProps> = ({
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
  const [hover, setHover] = React.useState<MaterialUiPickersDate>(null);

  const onChangeInternal = (date: MaterialUiPickersDate) => {
    if (!date) {
      setSelected({ begin: null, end: null });
      setHover(null);
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
          if (
            !selectedDate.begin ||
            Boolean(day && moment(day).isBefore(selectedDate.begin, 'day'))
          ) {
            selectedDate = { begin: day ? moment(day) : null, end: null };
          } else if (!selected.end) {
            selectedDate = { ...selected, end: day ? moment(day) : null };
          } else {
            selectedDate = { begin: day ? moment(day) : null, end: null };
          }

          if (!autoOk || !selectedDate.end) {
            e.stopPropagation();
          }
          setSelected(selectedDate);
        },
        onMouseEnter: (e: React.MouseEvent) =>
          setHover(day ? moment(day) : null),
      },
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {day && moment(day).format('D')} </span>
        </IconButton>
      </div>
    );
  };

  const formatDate = (date: MaterialUiPickersDate) => date && date.format('LL');

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
                const { begin, end } = selected;
                return [begin, end].map(formatDate).join(' - ');
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
    let beginValue =
      (value && value.begin) || (clearable ? null : moment().startOf('month'));
    let endValue =
      (value && value.end) || (clearable ? null : moment().endOf('month'));

    if (typeof beginValue === 'string') {
      beginValue = moment(beginValue);
    }

    if (beginValue && !beginValue.isValid()) {
      beginValue = moment().startOf('month');
    }

    if (typeof endValue === 'string') {
      endValue = moment(endValue);
    }

    if (endValue && !endValue.isValid()) {
      endValue = moment().endOf('month');
    }

    internalValue = { begin: beginValue, end: endValue };
    onInit && onInit(internalValue);
    setSelected(internalValue);
  }, []);

  React.useEffect(() => {
    setRange({ begin: selected.begin, end: selected.end || hover });
  }, [selected, hover]);

  React.useEffect(() => {
    const { begin, end } = selected;
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

DateRangePicker.defaultProps = {
  disabled: false,
  InputProps: {},
  nobox: false,
  fullWidth: true,
  autoOk: false,
  clearLabel: 'Clear',
  clearable: false,
};

export default withStyles(styles)(DateRangePicker);
