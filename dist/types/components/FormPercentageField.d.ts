import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormPercentageFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    className?: string;
    validate?: FieldValidator | string;
    helperText?: string | React.ReactNode;
}
declare const FormPercentageField: React.SFC<FormPercentageFieldProps>;
export default FormPercentageField;
