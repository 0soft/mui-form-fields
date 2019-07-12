import * as React from 'react';
import NumberFormat from 'react-number-format';

const IntegerMask = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <NumberFormat
      decimalScale={0}
      isAllowed={({ value }) => {
        return value.length <= 16;
      }}
      ref={inputRef}
      {...other}
    />
  );
};

export default IntegerMask;
