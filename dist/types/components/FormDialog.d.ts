import { Theme, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FormRenderProps } from 'react-final-form';
import { Mutator, FormApi, SubmissionErrors } from 'final-form';
declare const styles: (theme: Theme) => Record<"title" | "action" | "actionButton" | "closeButton", import("@material-ui/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles/withStyles").CreateCSSProperties<{}>)>;
interface FormDialogProps extends WithStyles<typeof styles> {
    title?: string;
    open: boolean;
    onClose: () => any;
    size?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    children?: any;
    dividers?: boolean;
    initial?: object;
    closeLabel?: any;
    submitLabel?: any;
    validate?: (values: any) => any;
    validateOnBlur?: boolean;
    onSubmit: (values: any, form: FormApi<any>, callback?: (errors?: SubmissionErrors) => void) => SubmissionErrors | Promise<SubmissionErrors | undefined> | undefined | void;
    hasDialogTitle?: boolean;
    hasDialogActions?: boolean;
    autoReset?: boolean;
    loadingMessage?: string;
    formMutators?: {
        [key: string]: Mutator;
    };
    render?: (props: FormRenderProps<any>) => React.ReactNode;
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<FormDialogProps>, "validate" | "title" | "children" | "initial" | "onSubmit" | "size" | "open" | "onClose" | "dividers" | "validateOnBlur" | "closeLabel" | "submitLabel" | "hasDialogTitle" | "hasDialogActions" | "autoReset" | "loadingMessage" | "formMutators" | "render"> & import("@material-ui/core").StyledComponentProps<"title" | "action" | "actionButton" | "closeButton">>;
export default _default;
