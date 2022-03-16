import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const BaseProfileHeader = () => {
  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Box>
          <Typography>Nama Petani</Typography>
          <Typography>Petani</Typography>
        </Box>
        <Avatar>P</Avatar>
      </Box>
    </div>
  );
};

export default BaseProfileHeader;
