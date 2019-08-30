import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormMoneyFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    className?: string;
    validate?: FieldValidator | string;
}
declare const FormMoneyField: React.SFC<FormMoneyFieldProps>;
export default FormMoneyField;
