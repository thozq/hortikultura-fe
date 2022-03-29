import { Box } from '@mui/material';
import BaseTabs from 'components/Base/BaseTabs';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import CardRiwayatBlanko from 'components/Page/Petani/CardRiwayatBlanko';
import CardRiwayatPenjualan from 'components/Page/Petani/CardRiwayatPenjualan';

const riwayatPenjualan = [
  {
    id: 0,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    jumlahDijual: 540,
    hargaPerKg: 40150,
    dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
  },
  {
    id: 1,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    jumlahDijual: 540,
    hargaPerKg: 40150,
    dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
  },
  {
    id: 2,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    jumlahDijual: 540,
    hargaPerKg: 40150,
    dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
  },
  {
    id: 3,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    jumlahDijual: 540,
    hargaPerKg: 40150,
    dijualKepada: { name: 'Rian Sunandar', jenis: 'Pengumpul' }
  }
];

const riwayatBlanko = [
  {
    id: 0,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalPanen: 540,
    hargaPerKg: 40150
  },
  {
    id: 1,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalPanen: 540,
    hargaPerKg: 40150
  },
  {
    id: 2,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalPanen: 540,
    hargaPerKg: 40150
  },
  {
    id: 3,
    date: '28 Februari 2022',
    jenisCabai: 'Cabai Merah Besar',
    totalPanen: 540,
    hargaPerKg: 40150
  }
];

function Riwayat() {
  return (
    <>
      <TheProfileHeader />
      <Box p={2}>
        <BaseTabs labels={['Riwayat Penjualan', 'Riwayat Blanko']}>
          <Box display="flex" flexDirection="column" gap={1.5}>
            {riwayatPenjualan.map((item, index) => (
              <CardRiwayatPenjualan key={index} item={item} />
            ))}
          </Box>
          <Box display="flex" flexDirection="column" gap={1.5}>
            {riwayatBlanko.map((item, index) => (
              <CardRiwayatBlanko key={index} item={item} />
            ))}
          </Box>
        </BaseTabs>
      </Box>
    </>
  );
}

export default Riwayat;
