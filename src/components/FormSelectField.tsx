import * as React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FieldInputProps, FieldMetaState } from 'react-final-form';
import { FieldValidator } from '../utils';
import FormField from './FormField';

interface Options {
  label: any;
  value: string;
}

interface FormSelectFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  label: string;
  disabled?: boolean;
  options: Options[];
  validate?: FieldValidator | string;
  defaultValue?: string;
  multi?: boolean;
}

const FormSelectField: React.FunctionComponent<FormSelectFieldProps> = ({
  icon = '',
  hasIcon = true,
  name,
  label,
  disabled = false,
  options,
  validate,
  defaultValue,
  multi,
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
      hasIcon={hasIcon}
      validate={validate}
      render={({ input, meta }: { input: FieldInputProps<HTMLElement>; meta: FieldMetaState }) => {
        return (
          <FormControl style={{ width: '100%' }}>
            <InputLabel shrink>{label}</InputLabel>
            <Select
              value={input.value || defaultValue || (multi ? [] : '')}
              onChange={input.onChange}
              input={<Input name={name} />}
              multiple={multi}
            >
              {options.map((o: Options) => {
                return (
                  <MenuItem key={o.value} value={o.value}>
                    {o.label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>{meta.touched ? meta.error : ''}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

FormSelectField.defaultProps = {
  multi: false,
  options: [],
};

export default FormSelectField;
