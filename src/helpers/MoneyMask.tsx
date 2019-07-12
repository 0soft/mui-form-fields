import * as React from 'react';
import NumberFormat from 'react-number-format';

const MoneyMask = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <NumberFormat
      decimalScale={2}
      thousandSeparator={true}
      prefix={'$ '}
      ref={inputRef}
      {...other}
    />
  );
};

export default MoneyMask;
