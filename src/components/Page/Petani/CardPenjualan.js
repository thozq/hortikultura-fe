import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCard from 'components/Base/BaseCard';

const CardPenjualan = (props) => {
  const { item } = props;

  return (
    <>
      <BaseCard
        title={`Status: ${item.status} - ${item.tanggal}`}
        date={item.tanggal}
        link={`detail-penjualan/${item.id}`}>
        <Stack gap={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>Dijual Kepada</Typography>
            <Typography variant="h6">
              {item.dijualKepada.name} ({item.dijualKepada.type})
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Tipe Cabai</Typography>
            <Typography variant="h6">{item.tipe}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Jumlah Dijual</Typography>
            <Typography variant="h6">{item.jumlahDijual}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>Harga jual / kg</Typography>
            <Typography variant="h6">{item.hargaJual}</Typography>
          </Stack>
          <Box mt={2}>
            <BaseButton shape="error" fullWidth>
              Batal
            </BaseButton>
          </Box>
        </Stack>
      </BaseCard>
    </>
  );
};

export default CardPenjualan;
