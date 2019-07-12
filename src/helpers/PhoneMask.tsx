import * as React from 'react';
import NumberFormat from 'react-number-format';

const PhoneMask = (props: any) => {
  const { inputRef, ...other } = props;

  return <NumberFormat format="(###) ###-####" mask="_" ref={inputRef} {...other} />;
};

export default PhoneMask;
