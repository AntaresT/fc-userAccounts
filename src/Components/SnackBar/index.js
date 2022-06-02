import React from 'react';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarSucces(props) {
  const { onClose, open, message } = props
  const vertical = 'bottom'
  const horizontal = 'center'

  return (
    <Stack spacing={2} sx={{ width: '100%' }} vertical='bottom' horizontal='center'>
      <Snackbar 
        open={open} 
        autoHideDuration={2000} 
        onClose={onClose} 
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default SnackbarSucces;
