import { Box, CircularProgress } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function FacebookCircularProgress() {
  return (
    <Box position="relative">
      <CircularProgress variant="indeterminate" disableShrink size={40} thickness={4} />
    </Box>
  );
}

function BaseLoadingRedux() {
  const { status } = useSelector((state) => state.auth);

  if (status === 'loading')
    return (
      <Box
        position="fixed"
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="white"
        zIndex={999}>
        {/* <CircularProgress /> */}
        <FacebookCircularProgress />
      </Box>
    );
  return <Fragment />;
}

export default BaseLoadingRedux;
