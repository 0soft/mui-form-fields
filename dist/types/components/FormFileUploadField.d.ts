import * as React from 'react';
interface FormFileUploadFieldProps {
  icon?: string | React.ReactElement;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  hasIcon?: boolean;
  multiple?: boolean;
  height?: string;
  maxSize?: number;
}
declare const FormFileUploadField: React.SFC<FormFileUploadFieldProps>;
export default FormFileUploadField;
