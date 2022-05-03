import { Box, Stack, Typography } from '@mui/material';
import BaseTabs from 'components/Base/BaseTabs';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import CardRiwayatBlanko from 'components/Page/Petani/CardRiwayatBlanko';
import CardRiwayatTransaksi from 'components/Page/Petani/CardRiwayatTransaksi';
import CardRiwayatStok from 'components/Page/Petani/CardRiwayatStok';
import IconNotFound from 'public/images/icons/IconNotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStok } from 'redux/slices/stok';
import { getAllTransaksi } from 'redux/slices/transaksi';
import { getAllBlanko } from 'redux/slices/blanko';

// import iconNotFound from 'public/images/icons/icon_riwayat_notfound.svg';

function RiwayatPetani() {
  const dispatch = useDispatch();

  const { stoks: riwayatStok } = useSelector((state) => state.stok);
  const { riwayat: riwayatTransaksi } = useSelector((state) => state.transaksi);
  const { riwayat: riwayatBlanko } = useSelector((state) => state.blanko);

  useEffect(() => {
    dispatch(getAllStok());
    dispatch(getAllTransaksi());
    dispatch(getAllBlanko());
  }, [dispatch]);

  return (
    <>
      <TheProfileHeader name="Ahmad" role="petani" />
      <Box p={2} mb="56px">
        <Box mb={2}>
          <Typography variant="h4">Riwayat</Typography>
        </Box>
        <BaseTabs labels={['Blanko', 'Stok', 'Transaksi']}>
          <Stack gap={1.5}>
            {riwayatBlanko ? (
              riwayatBlanko.map((item, index) => <CardRiwayatBlanko key={index} item={item} />)
            ) : (
              <Box>
                <IconNotFound />
                {/* <img src="/images/icons/icon_riwayat_notfound.svg" alt="not found" /> */}
              </Box>
            )}
          </Stack>

          <Stack gap={1.5}>
            {riwayatStok ? (
              riwayatStok.map((item, index) => <CardRiwayatStok key={index} item={item} />)
            ) : (
              <Box>
                <IconNotFound />
                {/* <img src="/images/icons/icon_riwayat_notfound.svg" alt="not found" /> */}
              </Box>
            )}
          </Stack>

          <Stack gap={1.5}>
            {riwayatTransaksi ? (
              riwayatTransaksi.map((item, index) => (
                <CardRiwayatTransaksi key={index} item={item} />
              ))
            ) : (
              <Box>
                <IconNotFound />
                {/* <img src="/images/icons/icon_riwayat_notfound.svg" alt="not found" /> */}
              </Box>
            )}
          </Stack>
        </BaseTabs>
      </Box>
      <TheBottomNavigation role="petani" />
    </>
  );
}

export default RiwayatPetani;
