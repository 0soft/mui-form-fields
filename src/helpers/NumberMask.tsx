import * as React from 'react';
import NumberFormat from 'react-number-format';

const NumberMask = (props: any) => {
  const { inputRef, ...other } = props;

  return <NumberFormat decimalScale={2} thousandSeparator={true} ref={inputRef} {...other} />;
};

export default NumberMask;
