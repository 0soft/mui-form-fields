import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from '../utils';

const IntegerMask = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      guide={false}
      mask={createNumberMask({
        prefix: '',
        suffix: '',
        allowDecimal: false,
        includeThousandsSeparator: false,
        integerLimit: 16,
      })}
    />
  );
};

export default IntegerMask;
