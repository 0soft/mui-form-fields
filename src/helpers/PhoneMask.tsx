import * as React from 'react';
import MaskedInput from 'react-text-mask';

const PhoneMask = (props: any) => {
  const { inputRef, ...other } = props;

  const mask = [
    '(',
    /[1-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  return <MaskedInput {...other} ref={inputRef} guide={false} mask={mask} />;
};

export default PhoneMask;
