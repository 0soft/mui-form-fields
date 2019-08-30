import * as React from 'react';
import { FieldFormatter, FieldParser, FieldValidator, FormatterOptions, ParserOptions } from '../utils';
interface FormTextFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    format?: FieldFormatter | FormatterOptions;
    parse?: FieldParser | ParserOptions;
    validate?: FieldValidator | string;
    label: string | React.ReactNode;
    placeholder?: string;
    value?: Array<string | number | boolean> | string | number | boolean;
    disabled?: boolean;
    multiline?: boolean;
    rows?: string | number;
    margin?: 'dense' | 'none' | 'normal';
    InputProps?: Object;
}
declare const FormTextField: React.SFC<FormTextFieldProps>;
export default FormTextField;
