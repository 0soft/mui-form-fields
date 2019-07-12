import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import FormField from './FormField';

interface FormChipFieldProps {
  icon?: string | React.ReactElement;
  hasIcon?: boolean;
  name: string;
  label: string;
  variant?: 'outlined' | 'default' | undefined;
  value?: Array<string | number | boolean> | string | number | boolean;
  margin?: 'dense' | 'none' | 'normal';
}

const FormChipField: React.SFC<FormChipFieldProps> = ({
  icon,
  name,
  label,
  value,
  variant,
  hasIcon = true,
}) => {
  return (
    <FormField
      icon={icon}
      name={name}
      hasIcon={hasIcon}
      iconPadding="23px"
      render={() => {
        const arr = Array.isArray(value) ? value : [value];
        const chips = arr.map((it, idx) => (
          <Chip label={it} key={idx} variant={variant} style={{ marginRight: '10px' }} />
        ));
        return (
          <div>
            <div
              style={{
                marginBottom: '0.3125rem',
                fontSize: '0.75rem',
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            >
              {label}
            </div>
            <div>{chips}</div>
          </div>
        );
      }}
    />
  );
};

FormChipField.defaultProps = {
  hasIcon: true,
};

export default FormChipField;
