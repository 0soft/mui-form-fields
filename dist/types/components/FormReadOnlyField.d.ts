import * as React from 'react';
import { FieldFormatter, FormatterOptions } from '../utils';
interface FormReadOnlyFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  format?: FieldFormatter | FormatterOptions;
  label: string;
  value?: Array<string | number | boolean> | string | number | boolean;
  multiline?: boolean;
  rows?: string | number;
  margin?: 'dense' | 'none' | 'normal';
}
declare const FormReadOnlyField: React.SFC<FormReadOnlyFieldProps>;
export default FormReadOnlyField;
