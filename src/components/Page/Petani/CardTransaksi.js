import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCard from 'components/Base/BaseCard';
import { CabaiEnum, RoleEnum, StatusEnum } from 'utils/constants';
import { formatNumber, formatRupiah } from 'utils/Formats';
import { momentFormat } from 'utils/MomentFormat';

const CardTransaksi = (props) => {
  const { item } = props;

  return (
    <>
      <BaseCard
        title={`Status: ${StatusEnum[item.statusPenjualan]} - ${momentFormat(item.createdAt)}`}
        link={`detail-transaksi/${item._id}`}
        status={item.statusPenjualan}>
        <Stack gap={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>Dijual Kepada</Typography>
            <Typography variant="h6">
              {item.pembeli.name} ({RoleEnum[item.pembeli.role]})
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Tipe Cabai</Typography>
            <Typography variant="h6">{CabaiEnum[item.tipeCabai]}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Jumlah Dijual</Typography>
            <Typography variant="h6">{formatNumber(item.jumlahDijual)}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>Harga jual Per kg</Typography>
            <Typography variant="h6">{formatRupiah(item.hargaJual)}</Typography>
          </Stack>
          {item.statusPenjualan === 'diajukan' && (
            <Box mt={2}>
              <BaseButton shape="error" fullWidth>
                Batal
              </BaseButton>
            </Box>
          )}
        </Stack>
      </BaseCard>
    </>
  );
};

export default CardTransaksi;
