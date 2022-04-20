import { Box, Typography } from '@mui/material';
import BaseTabs from 'components/Base/BaseTabs';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
// import { useNavigate } from 'react-router-dom';

function StokPedagang() {
  // const navigate = useNavigate();

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
      </Box>
      <TheBottomNavigation role="pedagang" />
    </>
  );
}

export default StokPedagang;
