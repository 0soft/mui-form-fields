import * as React from 'react';
import NumberFormat from 'react-number-format';

const PercentageMask = (props: any) => {
  const { inputRef, ...other } = props;

  return <NumberFormat decimalScale={2} ref={inputRef} suffix=" %" {...other} />;
};

export default PercentageMask;
