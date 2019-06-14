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
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import * as React from 'react';
import { Form } from 'react-final-form';

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
  title: string;
  open: boolean;
  onClose: () => any;
  size: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  children: any;
  initial?: object;
  closeLabel?: any;
  submitLabel?: any;
  onSubmit: () => any;
}

const FormDialog: React.FunctionComponent<FormDialogProps> = ({
  title,
  open,
  onClose,
  size,
  children,
  classes,
  initial = {},
  closeLabel = 'Close',
  submitLabel = 'Save',
  onSubmit,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <Dialog
            scroll="body"
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={size}
          >
            <form onSubmit={handleSubmit}>
              <DialogTitle className={classes.title} disableTypography>
                <Typography variant="h6">{title}</Typography>
                {onClose ? (
                  <IconButton onClick={onClose} className={classes.closeButton}>
                    <Icon>close</Icon>
                  </IconButton>
                ) : null}
              </DialogTitle>
              <Divider />
              {children}
              <Divider />
              <DialogActions className={classes.action}>
                <Button className={classes.actionButton}>{closeLabel}</Button>
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
