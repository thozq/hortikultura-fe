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

// import iconNotFound from 'public/images/icons/icon_riwayat_notfound.svg';

// const riwayatPenjualan = [
//   {
//     id: 0,
//     date: '28 Februari 2022',
//     jenisCabai: 'Cabai Merah Besar',
//     jumlahDijual: 540,
//     hargaPerKg: 40150,
//     dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
//   },
//   {
//     id: 1,
//     date: '28 Februari 2022',
//     jenisCabai: 'Cabai Merah Besar',
//     jumlahDijual: 540,
//     hargaPerKg: 40150,
//     dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
//   },
//   {
//     id: 2,
//     date: '28 Februari 2022',
//     jenisCabai: 'Cabai Merah Besar',
//     jumlahDijual: 540,
//     hargaPerKg: 40150,
//     dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
//   },
//   {
//     id: 3,
//     date: '28 Februari 2022',
//     jenisCabai: 'Cabai Merah Besar',
//     jumlahDijual: 540,
//     hargaPerKg: 40150,
//     dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
//   }
// ];

const riwayatUsang = [
  {
    id: 0,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalUsang: 540,
    hargaPerKg: 40150
  },
  {
    id: 1,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalUsang: 540,
    hargaPerKg: 40150
  },
  {
    id: 2,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalUsang: 540,
    hargaPerKg: 40150
  },
  {
    id: 3,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalUsang: 540,
    hargaPerKg: 40150
  }
];

function RiwayatPedagang() {
  const dispatch = useDispatch();

  const { transaksi } = useSelector((state) => state.transaksi);

  useEffect(() => {
    dispatch(getAllTransaksi());
  }, [dispatch]);

  return (
    <>
      <TheProfileHeader name="Ahmad" role="pedagang" />
      <Box p={2} mb="56px">
        <BaseTabs labels={['Riwayat Transaksi', 'Riwayat Usang']}>
          <Box display="flex" flexDirection="column" gap={1.5}>
            {transaksi ? (
              transaksi.map((item, index) => <CardRiwayatTransaksi key={index} item={item} />)
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
