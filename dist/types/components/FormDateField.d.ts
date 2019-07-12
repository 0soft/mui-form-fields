import { MaterialUiPickersDate } from '@material-ui/pickers';
import * as React from 'react';
import { FieldValidator } from '../utils';
interface FormDateFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  validate?: FieldValidator | string;
  label: string;
  disabled?: boolean;
  clearable?: boolean;
  max?: MaterialUiPickersDate;
  min?: MaterialUiPickersDate;
  labelFunc?: ((date: MaterialUiPickersDate, invalidLabel: string) => string) | undefined;
  onChange?: ((date: MaterialUiPickersDate) => void) | undefined;
  views?: Array<'year' | 'date' | 'month'>;
}
declare const FormDateField: React.SFC<FormDateFieldProps>;
export default FormDateField;
