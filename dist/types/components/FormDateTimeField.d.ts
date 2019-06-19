import * as React from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { FieldValidator } from '../utils';
interface FormDateTimeFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    validate?: FieldValidator | string;
    label: string;
    disabled?: boolean;
    clearable?: boolean;
    max?: MaterialUiPickersDate;
    min?: MaterialUiPickersDate;
    ampm?: boolean;
    labelFunc?: ((date: MaterialUiPickersDate, invalidLabel: string) => string) | undefined;
    onChange?: ((date: MaterialUiPickersDate) => void) | undefined;
}
declare const FormDateTimeField: React.SFC<FormDateTimeFieldProps>;
export default FormDateTimeField;
