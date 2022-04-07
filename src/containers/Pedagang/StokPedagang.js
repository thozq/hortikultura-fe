import { Box, Stack, Typography } from '@mui/material';
import BaseTabs from 'components/Base/BaseTabs';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import { useNavigate } from 'react-router-dom';
import CardJualBeli from 'components/Page/Pedagang/CardJualBeli';

const dataKonfirmasi = [
  {
    id: 0,
    status: 'Menunggu',
    jenisCabai: 'Cabai Merah Keriting',
    date: '13 Maret 2022',
    jumlah: 85,
    hargaJual: 45000,
    penjual: { name: 'Kevin Saputra', type: 'Petani' }
  },
  {
    id: 1,
    status: 'Menunggu',
    jenisCabai: 'Cabai Merah Keriting',
    date: '13 Maret 2022',
    jumlah: 85,
    hargaJual: 45000,
    penjual: { name: 'Kevin Saputra', type: 'Petani' }
  }
];

const dataDaftar = [
  {
    id: 0,
    status: 'Terjual',
    jenisCabai: 'Cabai Merah Keriting',
    date: '13 Maret 2022',
    jumlah: 85,
    hargaJual: 45000,
    penjual: { name: 'Kevin Saputra', type: 'Petani' }
  },
  {
    id: 1,
    status: 'Ditolak',
    jenisCabai: 'Cabai Merah Keriting',
    date: '13 Maret 2022',
    jumlah: 85,
    hargaJual: 45000,
    penjual: { name: 'Kevin Saputra', type: 'Petani' }
  }
];

function StokPedagang() {
  const navigate = useNavigate();

  return (
    <>
      <TheProfileHeader name="Ahmad" role="pedagang" />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <BaseTabs
          variant="contained"
          labels={['Cabai Merah Besar', 'Cabai Merah Keriting', 'Cabai Rawit Merah']}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Stok terkini yang anda miliki didapatkan dari pembelian</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Jumlah Total:</Typography>
              <Typography variant="h6">36.8 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Stok Cabai Merah Besar (kg)</Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Stok terkini yang anda miliki didapatkan dari pembelian</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Jumlah Total:</Typography>
              <Typography variant="h6">36.8 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Stok Cabai Merah Keriting (kg)</Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Stok terkini yang anda miliki didapatkan dari pembelian</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Harga Jual Per kg:</Typography>
              <Typography variant="h6">Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">Jumlah Total:</Typography>
              <Typography variant="h6">36.8 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Stok Cabai Rawit Merah (kg)</Typography>
            </Box>
          </Box>
        </BaseTabs>
        <Stack gap={2}>
          <Stack gap={1}>
            <Typography variant="h5">Konfirmasi Pembelian</Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Menunggu pembeli menerima penjualan anda</Typography>
              <Typography variant="h6" onClick={() => navigate('/pedagang/riwayat')}>
                Lihat Semua
              </Typography>
            </Stack>
          </Stack>
          {dataKonfirmasi.map((item, index) => (
            <CardJualBeli key={index} item={item} confirm link={`detail-pembelian/${item.id}`} />
          ))}
        </Stack>
        <Stack gap={2}>
          <Stack gap={1}>
            <Typography variant="h5">Daftar Pembelian</Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Daftar penjualan yang anda sudah lakukan</Typography>
              <Typography variant="h6" onClick={() => navigate('/pedagang/riwayat')}>
                Lihat Semua
              </Typography>
            </Stack>
          </Stack>
          {dataDaftar.map((item, index) => (
            <CardJualBeli key={index} item={item} link={`detail-pembelian/${item.id}`} />
          ))}
        </Stack>
      </Box>
      <TheBottomNavigation role="pedagang" />
    </>
  );
}

export default StokPedagang;
