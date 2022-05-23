import { ExitToAppOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from 'redux/slices/auth';

const TheProfileHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, parentUser } = useSelector((state) => state.auth);

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}`
    };
  }

  let roleName = user.role.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="h5">{roleName}</Typography>
        </Box>

        <Avatar
          {...stringAvatar(user.name)}
          onClick={() => navigate(`/${user.access}/data-diri`)}
        />
      </Box>

      {parentUser && (
        <AppBar position="fixed" sx={{ background: 'none', boxShadow: 'none' }}>
          <Box display="flex" justifyContent="center">
            <Paper
              elevation={8}
              width={'100%'}
              sx={{
                p: 1,
                pt: 0.5,
                borderRadius: 2,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography>
                  <Typography variant="h6" component="span" display="inline-block">
                    {parentUser?.name}
                  </Typography>{' '}
                  sedang mensupervisi
                </Typography>
                <IconButton onClick={() => dispatch(changeUser())}>
                  <ExitToAppOutlined color="error" sx={{ height: '16px' }} />
                </IconButton>
              </Box>
            </Paper>
          </Box>
        </AppBar>
      )}
    </>
  );
};

export default TheProfileHeader;
