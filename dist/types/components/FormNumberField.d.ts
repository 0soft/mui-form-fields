import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormNumberFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    className?: string;
    validate?: FieldValidator | string;
}
declare const FormNumberField: React.SFC<FormNumberFieldProps>;
export default FormNumberField;
