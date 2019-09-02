import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

interface FormDialogProps {
  loading?: boolean;
  text?: string;
}

const Loader: React.FunctionComponent<FormDialogProps> = ({
  loading = true,
  text = 'Loading...',
}) => {
  if (!loading) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(250, 250, 250, 0.5)',
        flexDirection: 'column',
        zIndex: 99,
      }}
    >
      <CircularProgress color="primary" size={48} style={{ zIndex: 100 }} />
      <Typography variant="h6" style={{ marginTop: '2rem' }}>
        {text}
      </Typography>
    </div>
  );
};
export default Loader;
