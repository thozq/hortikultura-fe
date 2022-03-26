import { Box, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTabs from 'components/Base/BaseTabs';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import { AddCircleRounded } from '@mui/icons-material';
import CardBlanko from 'components/Page/Petani/CardBlanko';

function Stok() {
  return (
    <>
      <TheProfileHeader />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <BaseButton href="/stok/isi-blanko" size="large" variant="outlined" fullWidth>
          <Typography variant="h5">Isi Blanko</Typography>
          <AddCircleRounded />
        </BaseButton>
        <BaseTabs labels={['Cabai Merah Besar', 'Cabai Merah Keriting', 'Cabai Rawit Merah']}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Stok terkini yang anda miliki didapatkan dari mengisi blanko</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography>Harga Jual Per kg:</Typography>
              <Typography>Rp 40.150</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography>Jumlah Total:</Typography>
              <Typography>36.8 kg</Typography>
            </Box>
            <Box p={2} mt={1} borderRadius={1} bgcolor="white">
              <Typography>Stok Cabai</Typography>
            </Box>
          </Box>
          <Box>ini dua</Box>
          <Box>ini tiga</Box>
        </BaseTabs>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography>Riwayat Blanko</Typography>
            <Typography>Lihat Semua</Typography>
          </Box>
          <CardBlanko />
          <CardBlanko />
          <CardBlanko />
          <CardBlanko />
        </Box>
      </Box>
    </>
  );
}

export default Stok;
