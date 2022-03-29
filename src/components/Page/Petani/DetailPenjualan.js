import { Box, Divider, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React from 'react';

const data = {
  pembeli: {
    nama: 'Alsyad Dewanda',
    peran: 'Distributor'
  },
  jumlahTerjual: 80,
  hargaPerKilo: 48000,
  totalPendapatan: 4480000
};

function DetailPenjualan() {
  return (
    <>
      <BaseHeader label="Blanko - 28 Februari 2022" backTo="/penjualan" />
      <Box display="flex" flexDirection="column" gap={3} px={2}>
        <Box>
          <Typography variant="h5">Nama Pembeli</Typography>
          <Typography variant="body2">{data.pembeli.nama}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Peran</Typography>
          <Typography variant="body2">{data.pembeli.peran}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Jumlah yang terjual (kg)</Typography>
          <Typography variant="body2">{data.jumlahTerjual}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Harga jual per Kg (Rp/Kg)</Typography>
          <Typography variant="body2">{data.hargaPerKilo}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Total Pendapatan (Rp)</Typography>
          <Typography variant="body2">{data.totalPendapatan}</Typography>
          <Divider />
        </Box>
      </Box>
    </>
  );
}

export default DetailPenjualan;
