import { Box, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import CardPenanaman from 'components/Page/Petani/CardPenanaman';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllLahan } from 'redux/slices/lahan';

function PenanamanPetani() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { riwayat } = useSelector((state) => state.lahan);

  useEffect(() => {
    dispatch(getAllLahan());
  }, [dispatch]);

  return (
    <>
      <TheProfileHeader />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <Box>
          <Typography variant="body2">
            Catat setiap penanaman cabai yang anda lakukan disini!
          </Typography>
        </Box>
        <BaseButton
          shape="withicon"
          link="catat-penanaman"
          size="large"
          variant="outlined"
          fullWidth>
          <Typography variant="h5">Penanaman Baru</Typography>
        </BaseButton>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5">Daftar Lahan</Typography>
            <Typography variant="h6" onClick={() => navigate('/petani/riwayat')}>
              Lihat Semua
            </Typography>
          </Box>
          {riwayat.map((item, index) => (
            <CardPenanaman key={index} item={item} />
          ))}
        </Box>
        <TheBottomNavigation role="petani" />
      </Box>
    </>
  );
}

export default PenanamanPetani;
