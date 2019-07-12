import * as React from 'react';
interface FormChipFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  label: string;
  variant?: 'outlined' | 'default' | undefined;
  value?: Array<string | number | boolean> | string | number | boolean;
  margin?: 'dense' | 'none' | 'normal';
}
declare const FormChipField: React.SFC<FormChipFieldProps>;
export default FormChipField;
