import * as React from 'react';
import { FieldValidator } from '../utils';
interface Options {
    label: any;
    value: string;
}
interface FormSelectFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    options: Options[];
    validate?: FieldValidator | string;
    defaultValue?: string;
    multi?: boolean;
}
declare const FormSelectField: React.FunctionComponent<FormSelectFieldProps>;
export default FormSelectField;
