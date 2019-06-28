import * as React from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers';
import { FieldValidator } from '../utils';
import { RangePicker } from './Pickers/types';
interface FormDateRangeFieldProps {
    icon?: string | React.ReactElement;
    hasIcon?: boolean;
    name: string;
    validate?: FieldValidator | string;
    label: string;
    disabled?: boolean;
    clearable?: boolean;
    max?: MaterialUiPickersDate;
    min?: MaterialUiPickersDate;
    labelFunc?: ((date: RangePicker, invalidLabel: string) => string) | undefined;
    onChange?: ((date: RangePicker) => void) | undefined;
}
declare const FormDateRangeField: React.SFC<FormDateRangeFieldProps>;
export default FormDateRangeField;
