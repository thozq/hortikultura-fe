import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import React, { useState } from 'react';

function DetailRiwayatAkunPdh() {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <BaseHeader label="Data Diri Petani" to={-1} />
      <Stack spacing={2} p={2}>
        <Avatar>P</Avatar>
        <Box>
          <Typography>Nama</Typography>
          <Typography variant="h5">Aditya Marwan</Typography>
        </Box>
        <Box>
          <Typography>Peran</Typography>
          <Typography variant="h5">Petani</Typography>
        </Box>
        <Box>
          <Typography>Password</Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="h5" noWrap sx={{ width: '100px' }}>
              {visibility ? '' : '● ● ● ● ● ● ● ●'}
            </Typography>
            <IconButton size="small" onClick={() => setVisibility(!visibility)}>
              {visibility ? (
                <VisibilityOutlined sx={{ height: '16px' }} />
              ) : (
                <VisibilityOffOutlined sx={{ height: '16px' }} />
              )}
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Typography>Alamat</Typography>
          <Typography variant="h5">Jl Menuju cintamu duhay cintaku Blok A6</Typography>
        </Box>
        <Box>
          <Typography>Kecamatan</Typography>
          <Typography variant="h5">Bantul</Typography>
        </Box>
        <Box>
          <Typography>Kabupaten</Typography>
          <Typography variant="h5">Milengguk</Typography>
        </Box>
        <Box>
          <Typography>Provinsi</Typography>
          <Typography variant="h5">Jawa Timur</Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <BaseButton shape="supervise">
            <Typography variant="h5">Akuisisi Kembali</Typography>
          </BaseButton>
          <BaseButton shape="delete">
            <Typography variant="h5">Hapus Akun</Typography>
          </BaseButton>
        </Stack>
      </Stack>
    </>
  );
}
export default DetailRiwayatAkunPdh;
