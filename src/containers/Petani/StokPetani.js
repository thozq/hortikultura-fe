import { Box, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTabs from 'components/Base/BaseTabs';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import { useNavigate } from 'react-router-dom';
import CardStok from 'components/Page/Petani/CardStok';

const dataStok = [
  {
    id: 0,
    tipe: 'Cabai Merah Besar',
    totalPanen: 120,
    panenSukses: 100,
    panenGagal: 100,
    hargaJual: 45000,
    date: '12 September 2022'
  },
  {
    id: 1,
    tipe: 'Cabai Merah Besar',
    totalPanen: 120,
    panenSukses: 100,
    panenGagal: 100,
    hargaJual: 45000,
    date: '12 September 2022'
  }
];

function StokPetani() {
  const navigate = useNavigate();

  return (
    <>
      <TheProfileHeader name="Ahmad" role="petani" />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <BaseButton
          shape="withicon"
          href="/petani/stok/catat-stok"
          size="large"
          variant="outlined"
          fullWidth>
          <Typography variant="h5">Catat Stok</Typography>
        </BaseButton>
        <BaseTabs
          variant="contained"
          labels={['Cabai Merah Besar', 'Cabai Merah Keriting', 'Cabai Rawit Merah']}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Stok terkini yang anda miliki didapatkan dari mengisi blanko</Typography>
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
            <Typography>Stok terkini yang anda miliki didapatkan dari mengisi blanko</Typography>
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
            <Typography>Stok terkini yang anda miliki didapatkan dari mengisi blanko</Typography>
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
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5">Riwayat Stok</Typography>
            <Typography variant="h6" onClick={() => navigate('/petani/riwayat')}>
              Lihat Semua
            </Typography>
          </Box>
          {dataStok.map((item, index) => (
            <CardStok key={index} item={item} />
          ))}
        </Box>
      </Box>
      <TheBottomNavigation role="petani" />
    </>
  );
}

export default StokPetani;
