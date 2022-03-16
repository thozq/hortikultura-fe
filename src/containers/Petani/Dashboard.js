import { Box, Paper, Typography } from '@mui/material';
import BaseProfileHeader from 'components/Base/BaseProfileHeader';
import React from 'react';

function Dashboard() {
  return (
    <div style={{ fontSize: '100px' }}>
      <BaseProfileHeader />
      <Box px={2}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, felis netus neque, sapien
          lobortis quisque. Mi id amet sed elit, ultrices. Dapibus vestibulum viverra est habitasse
          ultrices pretium nisi, dis. Magna.
        </Typography>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={3} p={2} bgcolor={'gray'}>
        <Paper sx={{ px: 2, py: '12px' }}>
          <Typography>Harga Cabai Terkini</Typography>
        </Paper>
        <Paper sx={{ px: 2, py: '12px' }}>
          <Typography>Harga Cabai Terkini</Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default Dashboard;
