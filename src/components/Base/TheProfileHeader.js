import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TheProfileHeader = (props) => {
  const { name, role } = props;
  const navigate = useNavigate();

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}`
    };
  }

  let roleName = role.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{roleName}</Typography>
      </Box>

      <Avatar {...stringAvatar(name)} onClick={() => navigate(`/${role}/data-diri`)} />
    </Box>
  );
};

export default TheProfileHeader;
