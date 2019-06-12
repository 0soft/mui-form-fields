import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, typography }: Theme) =>
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

  export default styles;
