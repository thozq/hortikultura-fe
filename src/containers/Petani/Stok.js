import { Box, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTabs from 'components/Base/BaseTabs';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import { AddCircleRounded } from '@mui/icons-material';
import CardBlanko from 'components/Page/Petani/CardBlanko';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import { useNavigate } from 'react-router-dom';

const dataBlanko = [
  {
    id: 0,
    blanko: {
      luasAkhir: 80,
      luasHabis: 120,
      luasBelumHabis: 70,
      luasRusak: 20,
      luasPenanaman: 150,
      luasAkhirBulan: 140,
      produksiHabis: 10,
      produksiBelumHabis: 5,
      hargaPerKilo: 48000
    },
    type: 'Cabai Merah Besar',
    date: '13 Maret 2022'
  },
  {
    id: 1,
    blanko: {
      luasAkhir: 80,
      luasHabis: 120,
      luasBelumHabis: 70,
      luasRusak: 20,
      luasPenanaman: 150,
      luasAkhirBulan: 140,
      produksiHabis: 10,
      produksiBelumHabis: 5,
      hargaPerKilo: 48000
    },
    type: 'Cabai Merah Besar',
    date: '13 Maret 2022'
  }
];

function Stok() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/riwayat');
  };

  return (
    <>
      <TheProfileHeader />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <BaseButton
          withIcon
          href="/petani/stok/isi-blanko"
          size="large"
          variant="outlined"
          fullWidth>
          <Typography variant="h5">Isi Blanko</Typography>
          <AddCircleRounded />
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
            <Typography variant="h5">Riwayat Blanko</Typography>
            <Typography variant="h6" onClick={handleClick}>
              Lihat Semua
            </Typography>
          </Box>
          {dataBlanko.map((item, index) => (
            <CardBlanko key={index} item={item} />
          ))}
        </Box>
      </Box>
      <TheBottomNavigation />
    </>
  );
}

export default Stok;
