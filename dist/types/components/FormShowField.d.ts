import * as React from 'react';
import { FieldFormatter, FormatterOptions } from '../utils';
interface FormShowFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    format?: FieldFormatter | FormatterOptions;
    label: string | React.ReactNode;
    value?: Array<string | number | boolean> | string | number | boolean;
    multiline?: boolean;
    rows?: string | number;
    margin?: 'dense' | 'none' | 'normal';
    helperText?: string | React.ReactNode;
}
declare const FormShowField: React.SFC<FormShowFieldProps>;
export default FormShowField;
