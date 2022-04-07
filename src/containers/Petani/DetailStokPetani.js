import { Box, Divider, Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React from 'react';

const data = {
  id: 0,
  tipe: 'Cabai Merah Besar',
  totalPanen: 120,
  panenSukses: 100,
  panenGagal: 100,
  hargaJual: 45000,
  date: '12 September 2022'
};

function DetailStokPetani() {
  return (
    <>
      <BaseHeader label="Blanko - 28 Februari 2022" to={-1} />
      <Stack gap={3} px={2}>
        <Box>
          <Typography variant="h5">Total Hasil Panen</Typography>
          <Typography variant="body2">{data.totalPanen}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Hasil Panen Sukses</Typography>
          <Typography variant="body2">{data.panenSukses}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Hasil Panen Gagal</Typography>
          <Typography variant="body2">{data.panenGagal}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Harga jual per Kg (Rp/Kg)</Typography>
          <Typography variant="body2">{data.hargaJual}</Typography>
          <Divider />
        </Box>
      </Stack>
    </>
  );
}

export default DetailStokPetani;
