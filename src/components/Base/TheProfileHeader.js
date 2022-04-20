import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TheProfileHeader = (props) => {
  const { name, role } = props;
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}`
    };
  }

  let roleName = user.role.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="h5">{roleName}</Typography>
      </Box>

      <Avatar {...stringAvatar(name)} onClick={() => navigate(`/${role}/data-diri`)} />
    </Box>
  );
};

export default TheProfileHeader;
