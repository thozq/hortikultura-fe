import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTabs from 'components/Base/BaseTabs';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import CardTransaksi from 'components/Page/Pedagang/CardTransaksi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllTransaksi } from 'redux/slices/transaksi';

const dataKonfirmasi = [
  {
    _id: '625abc3e165be87c4ef3ede8',
    penjual: '6255ad3ea947447c84087fe9',
    tipeCabai: 'cabaiMerahBesar',
    jumlahDijual: '9',
    hargaJual: 8,
    pembeli: {
      _id: '624d144be8b53d19928dccb3',
      name: 'boongan',
      role: 'pengecer'
    },
    statusPenjualan: 'diajukan',
    createdAt: '2022-04-16T12:53:18.171Z',
    updatedAt: '2022-04-16T12:53:18.171Z',
    __v: 0
  },
  {
    _id: '625a5f47186c511744ba8d15',
    penjual: '6255ad3ea947447c84087fe9',
    jumlahDijual: '7',
    hargaJual: 8,
    pembeli: {
      _id: '624d144be8b53d19928dccb3',
      name: 'boongan',
      role: 'pengecer'
    },
    statusPenjualan: 'ditolak',
    createdAt: '2022-04-16T06:16:39.081Z',
    updatedAt: '2022-04-16T06:42:48.681Z',
    __v: 0,
    alasanDitolak: 'halo'
  }
];

function TransaksiPedagang() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { transaksi, diajukan } = useSelector((state) => state.transaksi);

  useEffect(() => {
    dispatch(getAllTransaksi());
  }, [dispatch]);

  return (
    <>
      <TheProfileHeader name="Ahmad" role="pedagang" />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <BaseButton
          shape="withicon"
          link="catat-transaksi"
          size="large"
          variant="outlined"
          fullWidth>
          <Typography variant="h5">Catat Transaksi</Typography>
        </BaseButton>
        <BaseTabs
          variant="contained"
          labels={['Cabai Merah Besar', 'Cabai Merah Keriting', 'Cabai Rawit Merah']}>
          {/* CMB */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Total transaksi Cabai Merah Besar</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Total Terjual:</Typography>
              <Typography variant="h6">1200 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Hasil Transaksi Cabai Merah Besar (kg)</Typography>
            </Box>
          </Box>
          {/* CMK */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Total transaksi Cabai Merah Besar</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Total Terjual:</Typography>
              <Typography variant="h6">1200 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Hasil Transaksi Cabai Merah Keriting (kg)</Typography>
            </Box>
          </Box>
          {/* CRM */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Total transaksi Cabai Merah Besar</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Total Terjual:</Typography>
              <Typography variant="h6">1200 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Hasil Transaksi Cabai Rawit Merah (kg)</Typography>
            </Box>
          </Box>
        </BaseTabs>
        <BaseTabs labels={['Transaksi Ditunggu', 'Konfirmasi Transaksi']}>
          <Stack gap={2}>
            <Stack gap={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Menunggu pembeli menerima transaksi anda</Typography>
                <Typography variant="h6" onClick={() => navigate('/pedagang/riwayat')}>
                  Lihat Semua
                </Typography>
              </Stack>
            </Stack>
            {diajukan.map((item, index) => (
              <CardTransaksi key={index} item={item} wait />
            ))}
          </Stack>
          <Stack gap={2}>
            <Stack gap={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Konfirmasi transaksi dari pembelian anda</Typography>
                <Typography variant="h6" onClick={() => navigate('/pedagang/riwayat')}>
                  Lihat Semua
                </Typography>
              </Stack>
            </Stack>
            {dataKonfirmasi.map((item, index) => (
              <CardTransaksi key={index} item={item} confirm />
            ))}
          </Stack>
        </BaseTabs>
        <Stack gap={2}>
          <Stack gap={1}>
            <Typography variant="h5">Daftar Transaksi</Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Daftar transaksi yang anda sudah lakukan</Typography>
              <Typography variant="h6" onClick={() => navigate('/pedagang/riwayat')}>
                Lihat Semua
              </Typography>
            </Stack>
          </Stack>
          {transaksi.map((item, index) => (
            <CardTransaksi key={index} item={item} />
          ))}
        </Stack>
      </Box>
      <TheBottomNavigation role="pedagang" />
    </>
  );
}

export default TransaksiPedagang;
