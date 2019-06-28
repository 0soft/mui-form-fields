import * as React from 'react';
import { FieldFormatter, FieldParser, FieldValidator, FormatterOptions, ParserOptions } from '../utils';
interface FormFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    render: Function;
    type?: string;
    iconPadding?: string;
    format?: FieldFormatter | FormatterOptions;
    parse?: FieldParser | ParserOptions;
    validate?: FieldValidator | string;
    className?: string | undefined;
    alignItems?: 'center' | 'start' | 'end';
}
declare const FormField: React.SFC<FormFieldProps>;
export default FormField;
