import * as React from 'react';
interface FormSwitchFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  placement?: 'start' | 'end' | 'top' | 'bottom';
  className?: string;
}
declare const FormSwitchField: React.SFC<FormSwitchFieldProps>;
export default FormSwitchField;
