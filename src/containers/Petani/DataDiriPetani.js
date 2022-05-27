import { Avatar, Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/slices/auth';

function DataDiriPetani() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <BaseHeader label="Jual Tipe Cabai" to={-1} />
      <Box p={2}>
        <Stack spacing={2}>
          <Avatar>P</Avatar>
          <Box>
            <Typography variant="h5">Nama</Typography>
            <Typography>{user.name}</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Peran</Typography>
            <Typography>Petani</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Alamat</Typography>
            <Typography>Jl Menuju cintamu duhay cintaku Blok A6</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Kecamatan</Typography>
            <Typography>Tumenggu</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Provinsi</Typography>
            <Typography>Jawa Timur</Typography>
          </Box>
          <BaseButton shape="exit" onClick={handleLogout}>
            Keluar
          </BaseButton>
        </Stack>
      </Box>
    </>
  );
}

export default DataDiriPetani;
