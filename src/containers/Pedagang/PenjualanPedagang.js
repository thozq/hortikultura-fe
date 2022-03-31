import { AddCircleRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTabs from 'components/Base/BaseTabs';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import CardKonfirmasi from 'components/Page/Pedagang/CardKonfirmasi';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const dataPenjualan = [
  {
    id: 0,
    date: '13 Maret 2022',
    jumlah: 450,
    jenisCabai: 'Cabai Merah Besar',
    hargaJual: 40150,
    penjual: { name: 'Rian Sunandar', type: 'Pengumpul' }
  },
  {
    id: 1,
    date: '13 Maret 2022',
    jumlah: 450,
    jenisCabai: 'Cabai Merah Besar',
    hargaJual: 40150,
    penjual: { name: 'Rian Sunandar', type: 'Pengumpul' }
  },
  {
    id: 2,
    date: '13 Maret 2022',
    jumlah: 450,
    jenisCabai: 'Cabai Merah Besar',
    hargaJual: 40150,
    penjual: { name: 'Rian Sunandar', type: 'Pengumpul' }
  }
];

function PenjualanPedagang() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/riwayat');
  };

  return (
    <>
      <TheProfileHeader name="Ahmad" role="pedagang" />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <BaseButton
          withIcon
          href="penjualan/catat-penjualan"
          size="large"
          variant="outlined"
          fullWidth>
          <Typography variant="h5">Catat Penjualan</Typography>
          <AddCircleRounded />
        </BaseButton>
        <BaseTabs
          variant="contained"
          labels={['Cabai Merah Besar', 'Cabai Merah Keriting', 'Cabai Rawit Merah']}>
          {/* CMB */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Total penjualan Cabai Merah Besar</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Total Terjual:</Typography>
              <Typography variant="h6">1200 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Hasil Penjualan Cabai Merah Besar (kg)</Typography>
            </Box>
          </Box>
          {/* CMK */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Total penjualan Cabai Merah Besar</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Total Terjual:</Typography>
              <Typography variant="h6">1200 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Hasil Penjualan Cabai Merah Keriting (kg)</Typography>
            </Box>
          </Box>
          {/* CRM */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Total penjualan Cabai Merah Besar</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Total Terjual:</Typography>
              <Typography variant="h6">1200 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Hasil Penjualan Cabai Rawit Merah (kg)</Typography>
            </Box>
          </Box>
        </BaseTabs>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="h5">Konfirmasi Penjualan</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography>Menunggu pembeli konfirmasi penjualan anda</Typography>
              <Typography variant="h6" onClick={handleClick}>
                Lihat Semua
              </Typography>
            </Box>
          </Box>
          {dataPenjualan.map((item, index) => (
            <CardKonfirmasi key={index} item={item} type="selling" />
          ))}
        </Box>
      </Box>
      <TheBottomNavigation role="pedagang" />
    </>
  );
}

export default PenjualanPedagang;
