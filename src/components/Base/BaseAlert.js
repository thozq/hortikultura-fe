import { Alert, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from 'redux/slices/message';

const BaseAlert = () => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const { message, status } = useSelector((state) => state.message);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clearMessage());
    setOpen(false);
  };

  if (!message) return <Fragment />;
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={status === 404 || status === 401 || status === 403 ? 'error' : 'success'}
          elevation={2}
          sx={{
            width: '100%',
            margin: 'auto'
          }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BaseAlert;
