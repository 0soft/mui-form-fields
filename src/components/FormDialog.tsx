import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  Typography,
} from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Mutator, FormApi, SubmissionErrors } from 'final-form';
import Loader from './Loader';

const styles = (theme: Theme) =>
  createStyles({
    action: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0,
      padding: theme.spacing(2),
    },
    actionButton: {
      minWidth: '130px',
    },
    closeButton: {
      color: theme.palette.grey[500],
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    title: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0,
      padding: theme.spacing(2),
    },
  });

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
  onSubmit: (
    values: any,
    form: FormApi<any>,
    callback?: (errors?: SubmissionErrors) => void
  ) => SubmissionErrors | Promise<SubmissionErrors | undefined> | undefined | void;
  hasDialogTitle?: boolean;
  autoReset?: boolean;
  loadingMessage?: string;
  formMutators?: { [key: string]: Mutator };
  render?: (props: FormRenderProps<any>) => React.ReactNode;
}

const FormDialog: React.FunctionComponent<FormDialogProps> = ({
  title,
  open,
  onClose,
  size,
  children,
  classes,
  dividers = false,
  initial = {},
  closeLabel = 'Close',
  submitLabel = 'Save',
  onSubmit,
  hasDialogTitle = true,
  autoReset = true,
  loadingMessage = `Loading...`,
  formMutators,
  render,
}) => {
  const childrenCount = React.Children.count(children);
  return (
    <Form
      onSubmit={async (values, form, callback) => {
        await onSubmit(values, form, callback);

        if (autoReset) {
          form.reset();
        }
      }}
      initialValues={initial}
      mutators={formMutators}
      render={({ handleSubmit, form, submitting, ...rest }) => {
        const onCloseReset = () => {
          if (onClose) {
            onClose();
          }

          if (autoReset) {
            form.reset();
          }
        };

        return (
          <Dialog scroll="body" open={open} onClose={onCloseReset} fullWidth maxWidth={size}>
            <Loader loading={submitting} text={loadingMessage} />
            <form onSubmit={handleSubmit}>
              {hasDialogTitle && (
                <DialogTitle className={classes.title} disableTypography>
                  {title && <Typography variant="h6">{title}</Typography>}
                  <IconButton onClick={onCloseReset} className={classes.closeButton}>
                    <Icon>close</Icon>
                  </IconButton>
                </DialogTitle>
              )}
              {dividers && <Divider />}
              {render != null
                ? render({ handleSubmit, form, submitting, ...rest })
                : React.Children.map(children, (c: any, index: number): any => {
                    return (
                      <>
                        {c}
                        {dividers && index !== childrenCount - 1 && <Divider />}
                      </>
                    );
                  })}
              {dividers && <Divider />}
              <DialogActions className={classes.action}>
                <Button className={classes.actionButton} onClick={onCloseReset}>
                  {closeLabel}
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.actionButton}
                >
                  {submitLabel}
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        );
      }}
    />
  );
};

export default withStyles(styles)(FormDialog);
