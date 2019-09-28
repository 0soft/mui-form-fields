import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormPhoneFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    className?: string;
    validate?: FieldValidator | string;
    helperText?: string | React.ReactNode;
}
declare const FormPhoneField: React.SFC<FormPhoneFieldProps>;
export default FormPhoneField;
