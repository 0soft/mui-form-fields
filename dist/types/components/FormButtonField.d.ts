import * as React from 'react';
interface FormButtonFieldProps {
    icon?: string | React.ReactElement;
    name: string;
    label: string | React.ReactNode;
    text: string | React.ReactNode;
    disabled?: boolean;
    onClick?: (() => any) | undefined;
}
declare const FormButtonField: React.SFC<FormButtonFieldProps>;
export default FormButtonField;
