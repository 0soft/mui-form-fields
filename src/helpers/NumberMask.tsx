import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from '../utils';

const NumberMask = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      guide={false}
      mask={createNumberMask({
        prefix: '',
        suffix: '',
        allowDecimal: true,
      })}
    />
  );
};

export default NumberMask;
