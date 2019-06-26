import { Theme, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
declare const styles: (theme: Theme) => Record<"title" | "action" | "actionButton" | "closeButton", import("@material-ui/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles/withStyles").CreateCSSProperties<{}>)>;
interface FormDialogProps extends WithStyles<typeof styles> {
    title: string;
    open: boolean;
    onClose: () => any;
    size: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    children: any;
    dividers: boolean;
    initial?: object;
    closeLabel?: any;
    submitLabel?: any;
    onSubmit: () => any;
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<FormDialogProps>, "title" | "children" | "initial" | "onSubmit" | "size" | "open" | "onClose" | "dividers" | "closeLabel" | "submitLabel"> & import("@material-ui/core").StyledComponentProps<"title" | "action" | "actionButton" | "closeButton">>;
export default _default;
