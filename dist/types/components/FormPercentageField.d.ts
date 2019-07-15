import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormPercentageFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string;
    disabled?: boolean;
    className?: string;
    validate?: FieldValidator | string;
}
declare const FormPercentageField: React.SFC<FormPercentageFieldProps>;
export default FormPercentageField;
