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
import { Form } from 'react-final-form';
import { Mutator } from 'final-form';

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
  children: any;
  dividers?: boolean;
  initial?: object;
  closeLabel?: any;
  submitLabel?: any;
  onSubmit: () => any;
  hasDialogTitle?: boolean;
  formMutators?: { [key: string]: Mutator };
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
  formMutators,
}) => {
  const childrenCount = React.Children.count(children);
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initial}
      mutators={formMutators}
      render={({ handleSubmit, form }) => {
        const { mutators } = form;
        return (
          <Dialog scroll="body" open={open} onClose={onClose} fullWidth maxWidth={size}>
            <form onSubmit={handleSubmit}>
              {hasDialogTitle && (
                <DialogTitle className={classes.title} disableTypography>
                  {title && <Typography variant="h6">{title}</Typography>}
                  <IconButton onClick={onClose} className={classes.closeButton}>
                    <Icon>close</Icon>
                  </IconButton>
                </DialogTitle>
              )}
              {dividers && <Divider />}
              {React.Children.map(children, (c: any, index: number): any => {
                return (
                  <>
                    {React.cloneElement(c, { mutators })}
                    {dividers && index !== childrenCount - 1 && <Divider />}
                  </>
                );
              })}
              {dividers && <Divider />}
              <DialogActions className={classes.action}>
                <Button className={classes.actionButton} onClick={onClose}>
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
