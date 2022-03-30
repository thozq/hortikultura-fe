import { Box, Link, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTextField from 'components/Base/BaseTextField';
import React from 'react';

function Masuk() {
  return (
    <>
      <Box p={2} variant="h4">
        Sistem Cabai
      </Box>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Typography variant="h4">Masuk</Typography>
        <Typography>
          Masuk kedalam akunmu untuk akses stok cabai cabai kamu dan jualkan ke orang sekitarmu !
        </Typography>
        <BaseTextField fullWidth id="email" name="email" label="Email" />
        <BaseTextField fullWidth id="password" name="password" label="Password" />
        <BaseButton>Masuk</BaseButton>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1} p={2}>
        <Typography display="inline-block" variant="body2">
          Belum punya akun?
          <Link> Daftar!</Link>
        </Typography>
        <Link color="black">
          <Typography variant="body2">Lupa password?</Typography>
        </Link>
        <Link underline="none">
          <Typography variant="body2">Masuk sebagai Guest</Typography>
        </Link>
      </Box>
    </>
  );
}

export default Masuk;
