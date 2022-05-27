import { Box, CircularProgress } from '@mui/material';

function FacebookCircularProgress() {
  return (
    <Box position="relative">
      <CircularProgress variant="indeterminate" disableShrink size={40} thickness={4} />
    </Box>
  );
}

function BaseLoadingRedux() {
  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      {/* <CircularProgress /> */}
      <FacebookCircularProgress />
    </Box>
  );
}

export default BaseLoadingRedux;
