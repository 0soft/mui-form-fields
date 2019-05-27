import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from '../utils';

const PercentageMask = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      guide={false}
      mask={createNumberMask({
        prefix: '',
        suffix: ' %',
        allowDecimal: true,
        includeThousandsSeparator: false,
        integerLimit: 3,
      })}
    />
  );
};

export default PercentageMask;
