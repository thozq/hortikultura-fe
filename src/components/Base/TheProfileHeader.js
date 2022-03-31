import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TheProfileHeader = (props) => {
  const { name, role } = props;
  const navigate = useNavigate();

  let link = '';
  switch (role) {
    case 'Petani':
      link = 'petani';
      break;
    case 'Pedagang':
      link = 'pedagang';
      break;
    default:
      link = '';
      break;
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{role}</Typography>
      </Box>

      <Avatar onClick={() => navigate(`/${link}/data-diri`)}>P</Avatar>
    </Box>
  );
};

export default TheProfileHeader;
