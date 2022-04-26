import { Box } from '@mui/material';
import BaseTabs from 'components/Base/BaseTabs';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import CardRiwayatUsang from 'components/Page/Pedagang/CardRiwayatUsang';
import CardRiwayatTransaksi from 'components/Page/Pedagang/CardRiwayatTransaksi';
import IconNotFound from 'public/images/icons/IconNotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransaksi } from 'redux/slices/transaksi';
import { getAllUsang } from 'redux/slices/usang';

// import iconNotFound from 'public/images/icons/icon_riwayat_notfound.svg';

function RiwayatPedagang() {
  const dispatch = useDispatch();

  const { riwayat: riwayatTransaksi } = useSelector((state) => state.transaksi);
  const { usang: riwayatUsang } = useSelector((state) => state.usang);

  useEffect(() => {
    dispatch(getAllTransaksi());
    dispatch(getAllUsang());
  }, [dispatch]);

  return (
    <>
      <TheProfileHeader name="Ahmad" role="pedagang" />
      <Box p={2} mb="56px">
        <BaseTabs labels={['Riwayat Transaksi', 'Riwayat Usang']}>
          <Box display="flex" flexDirection="column" gap={1.5}>
            {riwayatTransaksi ? (
              riwayatTransaksi?.map((item, index) => (
                <CardRiwayatTransaksi key={index} item={item} />
              ))
            ) : (
              <Box>
                <IconNotFound />
                {/* <img src="/images/icons/icon_riwayat_notfound.svg" alt="not found" /> */}
              </Box>
            )}
          </Box>
          <Box display="flex" flexDirection="column" gap={1.5}>
            {riwayatUsang ? (
              riwayatUsang.map((item, index) => <CardRiwayatUsang key={index} item={item} />)
            ) : (
              <Box>
                <IconNotFound />
                {/* <img src="/images/icons/icon_riwayat_notfound.svg" alt="not found" /> */}
              </Box>
            )}
          </Box>
        </BaseTabs>
      </Box>
      <TheBottomNavigation role="pedagang" />
    </>
  );
}

export default RiwayatPedagang;
