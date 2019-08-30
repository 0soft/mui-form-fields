import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormIntegerFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    className?: string;
    validate?: FieldValidator | string;
}
declare const FormIntegerField: React.SFC<FormIntegerFieldProps>;
export default FormIntegerField;
