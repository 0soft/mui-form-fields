import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from '../utils';

const MoneyMask = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      guide={false}
      mask={createNumberMask({ allowDecimal: true })}
    />
  );
};

export default MoneyMask;
