import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TheProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography variant="h4">Nama Petani</Typography>
        <Typography variant="h5">Petani</Typography>
      </Box>

      <Avatar onClick={() => navigate('/petani/data-diri')}>P</Avatar>
    </Box>
  );
};

export default TheProfileHeader;
