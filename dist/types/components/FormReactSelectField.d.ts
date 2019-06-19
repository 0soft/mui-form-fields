import * as React from 'react';
import { FieldValidator } from '../utils';
interface Options {
    label: any;
    value: string;
}
interface FormReactSelectFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    options: Options[];
    validate?: FieldValidator | string;
    defaultValue?: string;
    multi?: boolean;
}
declare const FormReactSelectField: React.FunctionComponent<FormReactSelectFieldProps>;
export default FormReactSelectField;
